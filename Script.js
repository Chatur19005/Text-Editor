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
function alignLeft() {
    document.execCommand('justifyLeft', false, null);
}

function alignRight() {
    document.execCommand('justifyRight', false, null);
}

function alignJustify() {
    document.execCommand('justifyFull', false, null);
}

function alignCenter() {
    document.execCommand('justifyCenter', false, null);
}
