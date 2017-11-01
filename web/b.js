$(document).ready(() => {
    $('.container, .spaciado-tele').on('DOMNodeInserted', onInsertDOM);
});

function getBody(str, pre, post) {
    const start = str.indexOf(pre) + pre.length;
    const end = str.indexOf(post);
    return str.slice(start, end).trim();
}

function getDOMString() {
    return $('.container, .spaciado-tele').html();
}

function getDataFromHtml() {
    const str = getDOMString();
    const probability = getBody('id="signaltype">', '</p>');
    const asset = getBody('id="AssetActual">', '</p>');
    const entryPrice = getBody('id="EntryPrice">', '</p>');
    const expriracy = getBody('id="Expiracy">', '</p>');
    const direction = getBody('id="Direction">', '</p>');
    const seconds = getBody('<strong>', '<br><span class="texto"');
    return {
        probability, asset, entryPrice, expriracy, direction, seconds
    };
}

function validateData() {

}

function onInsertDOM() {
    const data = getDataFromHtml();
    console.log(data);
}
