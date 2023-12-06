function bold() {
    document.execCommand('bold', false, null);
}

function underline() {
    document.execCommand('underline', false, null);
}
function italic() {
    document.execCommand('italic', false, null);
}
function changeFontColor() {
    var color = document.getElementById('fontColor').value;
    document.execCommand('foreColor', false, color);
}
