
function getInnerInt(id) {
    const element = document.getElementById(id).innerText;
    const int = parseFloat(element)
    return int;
}

function setElementValuebyId(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}
