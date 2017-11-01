$(document).ready(onReady);
let socket;
// Start when ready
function onReady() {
    console.log('abcd');
    socket = io('http://localhost:3000');
    $('#AssetActual').bind('DOMSubtreeModified', onStatusChange);
}

// Start when 
function onStatusChange() {
    const info = getInfo();
    socket.emit('NEW_FOX_SIGNAL', info);
    console.log(info);
}

function getInfo() {
    const asset = $('#AssetActual').text();
    const entryPrice = $('#EntryPrice').text();
    const expiracy = $('#Expiracy').text();
    const direction = $('#Direction').text();
    const beginAt = Date.now();
    const endAt = getExpiredTime(beginAt, expiracy);
    return { asset, entryPrice, expiracy, direction, beginAt, endAt };
}

function getExpiredTime(beginAt, expiracy) {
    if(expiracy === '10 MIN') return beginAt + 60000;
    return beginAt + 30000;
}

// function getSecondFromMillisecond(milis) {
//     const date = new Date(milis);
//     return date.getDate() + date.getFullYear();
// }
