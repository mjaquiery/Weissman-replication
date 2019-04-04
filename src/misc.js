/**
 * Strip non-number entries from an input field
 */
function numbersOnly() {
    if(!event instanceof Event)
        return;

    let newVal = "";
    for(let i = 0; i < event.target.value.length; i++) {
        if(/[0-9]/.test(event.target.value[i]))
            newVal += event.target.value[i];
    }

    event.target.value = newVal;
}

/**
 * Enter or exit fullscreen mode
 * @param {boolean} [enter=true] whether to force-enter fullscreen (false to exit)
 */
function setFullScreen(enter = true) {
    if (enter && !document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if(document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function getKeyFinger(k) {
    switch(k) {
        case 'x':
        case 'f':
        case 'ArrowLeft':
            return S('g_f_left_middle');
        case 'c':
        case 'g':
        case 'ArrowRight':
            return S('g_f_left_index');
        case 'n':
        case 'ArrowDown':
            return S('g_f_right_index');
        case 'j':
        case 'm':
        case 'ArrowUp':
            return S('g_f_right_middle');
    }

    return "unknown";
}

/**
 * Return a string explaining the response map
 * @param {object} m
 * @param [fingerMap=true] {boolean} whether to show finger-key mapping
 * @return {string}
 */
function responseMapToHTML(m, fingerMap = true) {
    let out = "";

    // Keys in the order they should be displayed
    const keys = [
        'z', 'x', 'c', 'f', 'g', 'n', 'm', 'j', 'k',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
    ];

    let map = [];

    for(let i = 0; i < keys.length; i++) {
        let x = null;
        for(let k of Object.keys(m)) {
            if(m[k] === keys[i]) {
                x = k;
                break;
            }
        }

        if(x !== null) {
            map.push([
                "<span>" + getKeyFinger(keys[i]) + "</span>",
                "<kbd>" + KI(K(keys[i])) + "</kbd>",
                "<span class='response-stim'>" + S(x) + "</span>"
            ]);
        }
    }

    if(fingerMap) {
        let rows = [];
        map.forEach((r) => rows.push(
            "<div><div>" + r[0] +
            "</div><div>" + r[1] +
            "</div><div>" + r[2] +
            "</div></div>"
        ));
        out = "<div class='response-table'>" +
            "<div class='labels'>" +
            "<div>" + S('g_g_finger') + "</div>" +
            "<div>" + S('g_g_response') + "</div>" +
            "<div>" + S('g_g_stimulus') + "</div>" +
            "</div>" + rows.join("") + "</div>";
    } else {
        let rows = [];
        map.forEach((x) => rows.push(x[1] + " = " + x[2]));
        out = "<p class='response-map'>" + rows.join("; ") + "</p>";
    }

    return out;
}

/**
 * Split a search string into key-value pairs
 * @param {string} str search string to split into key-value pairs
 * @return {{}} Key-value pairs in the search string
 */
function splitSearch(str) {
    let out = {};
    let s = str.split('&');
    s[0] = s[0].substring(1); // strip initial ? character

    // sort into key-value pairs
    for(let i = 0; i < s.length; i++) {
        let split = s[i].split('=');
        out[split[0]] = split[1];
    }

    return out;
}

/**
 * Hide all but the specified content section
 * @param {string} id of the section to display
 */
function showDiv(id) {
    document.querySelectorAll('#Content > div').forEach((el)=>el.classList.add('hidden'));
    document.querySelector('#' + id).classList.remove('hidden');
}

/**
 * Show a visible countdown in div decreasing every second from s. At 0, run callback.
 * @param {int} s seconds
 * @param {Element} div
 * @param {function} callback
 */
function countDown(s, div, callback, suffix = "") {
    div.innerHTML = s.toString() + suffix;
    s--;
    if(!s)
        setTimeout(callback, 1000);
    else
        setTimeout(countDown, 1000, s, div, callback, suffix);
}

/**
 * Get the timestamp of the present moment
 * @return {number}
 */
function now() {
    return new Date().getTime();
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {int} min inclusive
 * @param {int} max exclusive
 * @return {int} random integer between min and max
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    let j;
    let x;
    for (let i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}