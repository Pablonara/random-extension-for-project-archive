
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "1" }, function (response) {
        console.log(response);
    });
});
document.getElementById("opensurvey").addEventListener("click", openWin)
function openWin() {
    myWindow = window.open('survey.html', '_self', 'width=100, height=100');
}

function resizeWin() {
    myWindow.resizeTo(300, 300);
}
document.getElementById("journal").addEventListener("click", openjournal)
function openjournal() {
    window.open('journal.html', '_self');
}
document.getElementById("timer").addEventListener("click", opentimer)
function opentimer() {
    window.open('timer.html', '_self');
}
document.getElementById("resources").addEventListener("click", openresources)
function openresources() {
    window.open('resources.html', '_self');
}
document.getElementById("Reminders").addEventListener("click", openreminders)
function openreminders() {
    window.open('reminders.html', '_self');
}