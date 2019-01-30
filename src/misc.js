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

/**
 * Return a string explaining the response map
 * @param {object} m
 * @return {string}
 */
function responseMapToHTML(m) {
    let out = "<p class='response-map'>";
    for(let i = 0; i < Object.keys(m).length; i++) {
        if(i !== 0)
            out += "; ";
        out += "<kbd>" + KI(m[Object.keys(m)[i]]) +
            "</kbd> = <span class='response-stim'>" + Object.keys(m)[i] + "</span>";
    }

    return out + "</p>";
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
function countDown(s, div, callback) {
    div.innerText = s.toString();
    s--;
    if(!s)
        setTimeout(callback, 1000);
    else
        setTimeout(countDown, 1000, s, div, callback);
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