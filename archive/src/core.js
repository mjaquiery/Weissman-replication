/**
 * If all consent checkboxes are checked, proceed to experiment setup.
 */
function checkConsent() {
    let anyMissing = false;
    document.querySelectorAll('#Consent input[type="checkbox"]').forEach((x)=>{if(!x.checked) anyMissing = true;});
    if(anyMissing)
        return false;

    X.consented = now();
    showDiv('Demographics');

    if(X.debug) {
        // Switch on the auto-presser
        debugAutoPress();
    }

    setFullScreen();
}

function recordDemographics() {
    if(typeof event !== "undefined" && event instanceof Event) // defined by browser
        event.preventDefault();
    let nodes =
        document.querySelectorAll('#Demographics form select, #Demographics form input, #Demographics form textarea');
    nodes.forEach((x)=>{
        if(typeof x.name !== 'undefined')
            X.demographics[x.name] = x.value;
    });
    X.demographics.consentTime = X.consented;

    // Payment info
    let paymentNodes =
        document.querySelectorAll('#Payment select, #Payment input, #Payment textarea');
    paymentNodes.forEach((x)=>{
        if(typeof x.name !== 'undefined')
            X.payment[x.name] = x.value;
    });

    if(!X.payment.userId.length) {
        document.querySelector("#DebriefUID").classList.add("bad");
        return false;
    }

    setupExperiment();
}

/**
 * Show the task instructions and set the experiment variables in the background.
 */
function setupExperiment() {
    // Only run setup once
    if(X.trials.length)
        return;

    X.responseMap = CFG[X.type].getResponseMap();
    createHints(document.querySelector('#Hint'));

    // Load instructions
    document.querySelectorAll('#Instructions > div').forEach((x)=>x.classList.add('hidden'));
    document.querySelector('#Instructions' + X.type.toUpperCase()).classList.remove('hidden');

    X.cfg = CFG[X.type];

    if(X.debug) {
        CFG[X.type].interTrialInterval = 10;
        CFG[X.type].trainingInterTrialInterval = 10;
        CFG[X.type].maxRT = 10;
    }

    // Configure the specified experiment
    X.trials = X.cfg.getTrials();

    showDiv('Instructions');

    // Bind key press functions
    document.addEventListener('keydown', (e)=>saveResponse(e));
}

function practiceInstructions() {
    // Show the practice dialogue
    showDiv('Practice');
    document.querySelectorAll('.practice-response-map').forEach(elm => elm.innerHTML = responseMapToHTML(X.responseMap));
}

function runExperiment() {
    // Unmask Experiment div
    showDiv('Experiment');
    // document.querySelector('#Hint').classList.remove('hidden');
    if(X.debug)
        countDown(1, document.querySelector('#Stimulus'), runTrial);
    else
        countDown(5, document.querySelector('#Stimulus'), runTrial,
            responseMapToHTML(X.responseMap, false));
}

function runTrial() {
    // Reset stimulus
    showDiv('Experiment');
    let stim = document.querySelector('#Stimulus');
    stim.innerHTML = "";
    stim.className = "";

    // Call the experiment-specific stimulus drawing function.
    // The stimulus function is responsible for turning on the X.responseOpen variable
    X.cfg.showStimulus(stim);
}

/**
 * Handler for the keydown event. Saves response information and moves to the next trial/block.
 * @param {KeyboardEvent} e
 * @return {boolean}
 */
function saveResponse(e) {
    let timeOut = !(e instanceof KeyboardEvent);
    if(!timeOut) {
        // Skip if inputting data into an input element or if responses are closed
        if(!X.responseOpen || e.target instanceof HTMLInputElement)
            return false;

        // Don't listen to non-valid keys
        let keyOkay = false;
        for(let k of Object.keys(X.responseMap)) {
            if(K(X.responseMap[k]).toLowerCase() === e.key.toLowerCase()) {
                keyOkay = true;
                break;
            }
        }
        if(!keyOkay)
            return false;
    }

    // Disable responding
    X.responseOpen = false;
    // Remove timer
    clearTimeout(X.responseTimeout);

    X.trials[X.trialNum].responseTime = now();
    X.trials[X.trialNum].responseContent = timeOut? "TIMEOUT" : e.key;

    // Call task's response handler function to get the inter-trial interval
    let ITI = X.cfg.onResponse(e, document.querySelector('#Stimulus'));

    // Increment trial counter
    X.trialNum++;

    // Work out what to do next
    let f = null;
    if(X.trialNum === X.trials.length)
        f = debrief;
    else if(X.trials[X.trialNum - 1].block !== X.trials[X.trialNum].block)
        f = endBlock;
    else
        f = runTrial;

    setTimeout(f, ITI);
}

function endBlock() {
    // End of a practice block?
    if(X.trials[X.trialNum - 1].isPractice) {
        endPractice();
        return;
    }

    // Normal experimental block
    showDiv('BlockBreak');
}

function endPractice() {
    showDiv('EndPractice');
    document.querySelector('#Hint').classList.add('hidden');
}

function debrief() {
    showDiv('Debrief');
}

function recordDebriefResponse() {
    let debriefQs = document.querySelectorAll("#Debrief textarea, #Debrief input, #Debrief select");
    debriefQs.forEach((elm)=> X.debrief[elm.id] = elm.value);

    showFeedback();
}

function showFeedback() {
    // Let the user know we're saving the data
    showDiv('Feedback');
    document.querySelector('#Score').innerText = (Math.round(pCorrect() * 1000)/10).toString();

    exportData();
    setFullScreen(false);
}

function exportData() {
    // Print out the data
    if(X.debug) {
        let div = document.querySelector('#Data');
        let tableDiv = div.appendChild(document.createElement('div'));
        tableDiv.innerHTML = "<h2>Demographics</h2>";
        let table = tableDiv.appendChild(document.createElement('table'));
        let tr = table.appendChild(document.createElement('tr'));
        Object.keys(X.demographics).forEach((k)=>{
            let td = tr.appendChild(document.createElement('td'));
            td.innerText = k;
        });
        tr = table.appendChild(document.createElement('tr'));
        Object.keys(X.demographics).forEach((k)=>{
            let td = tr.appendChild(document.createElement('td'));
            td.innerText = X.demographics[k];
        });

        tableDiv = div.appendChild(document.createElement('div'));
        tableDiv.innerHTML = "<h2>Trial data</h2>";
        table = tableDiv.appendChild(document.createElement('table'));
        tr = table.appendChild(document.createElement('tr'));
        Object.keys(X.trials[0]).forEach((k)=>{
            let td = tr.appendChild(document.createElement('td'));
            td.innerText = k;
        });
        X.trials.forEach((t)=>{
            let tr = table.appendChild(document.createElement('tr'));
            Object.keys(t).forEach((k)=>{
                let td = tr.appendChild(document.createElement('td'));
                td.innerHTML = t[k] === null? "null" : t[k].toString();
            });
        });
    }

    // Attempt to save data via save.php
    let meta = {
        loc: X.loc,
        task: X.type,
        consentTime: X.consented,
        eventLog: X.eventLog.join("| "),
        debriefGeneralComments: X.debrief.CommentsGeneral
    };
    Object.keys(X.payment).forEach((k)=>{
        if(typeof meta[k] !== "undefined")
            meta['payment' + k] = X.payment[k];
        else
            meta[k] = X.payment[k];
    });

    let data = {
        meta,
        demographics: X.demographics,
        trials: X.trials
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200 && JSON.parse(this.responseText).code === 200) {
                // On success, notify the user
                document.querySelector('#SaveStatus').innerHTML =
                    "<p>" + S('g_g_data_save_ok') + "</p>";
            } else {
                // On failure, notify the user
                let err = JSON.parse(this.responseText).error;
                document.querySelector('#SaveStatus').innerHTML =
                    "<p>" + S('g_g_data_save_error') + "</p>" + "<p>" + err + "</p>";
            }
        }
    };
    ajax.open("POST", "src/save.php", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(data));
}

function createHints(div) {
    div.innerHTML = "";
    let table = div.appendChild(document.createElement('table'));
    let tr = table.appendChild(document.createElement('tr'));
    let td = tr.appendChild(document.createElement('td'));
    td.innerText = S('g_h_key');
    td = tr.appendChild(document.createElement('td'));
    td.innerText = S('g_h_'+X.type);
    Object.keys(X.responseMap).forEach((r)=> {
       let tr = table.appendChild(document.createElement('tr'));
       let key = tr.appendChild(document.createElement('td'));
       key = key.appendChild(document.createElement('kbd'));
       if(/arrow/i.test(X.responseMap[r]))
           key.innerHTML = KI(X.responseMap[r]);
       else
           key.innerHTML = K(X.responseMap[r]);
       let stim = tr.appendChild(document.createElement('td'));
       stim.innerHTML = r.toUpperCase();
    });
}

function pCorrect() {
    let trials = 0;
    let correct = 0;
    X.trials.forEach((t)=>{
        if(t.isPractice === 1)
            return;
        trials++;
        correct += t.responseContent === t.responseTarget? 1 : 0;
    });
    return correct / trials;
}

/**
 * Automated button spam-clicker to save time debugging
 * @param {int} t time between clicks (ms)
 */
function debugAutoPress(t = 300) {
    let button = document.querySelector('#Content > div:not(.hidden) button');
    if(button instanceof HTMLButtonElement)
        button.click();
    setTimeout(debugAutoPress, t)
}