document.getElementById("gotomain1").addEventListener("click", tomainpage1)
function tomainpage1() {
    window.open("popup.html", "_self");
}
document.getElementById("2min").addEventListener("click", () => {
    chrome.runtime.sendMessage({ message: "messageSent" }, function (response) {
        console.log(response);
    });
});

// chrome.alarms.onAlarm.addListener(
//     () => {
//         chrome.notifications.create(
//             "Timer1",
//             {
//                 type: "basic",
//                 iconUrl: "alarm.jpg",
//                 title: "Time is up!",
//                 message: "Take a break?",
//                 silent: false,
//                 buttons: [
//                     { title: "Ok!"}
//                   ],
//             },
//             () => { }
//         )
//     },
// )
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(request);
//         if (request.time)
//             createAlarm();

//         sendResponse(() => {
//             return false
//         });
//     }
// );

// function createAlarm() {
//     chrome.alarms.create(
//         "timer1",
//         {
//             delayInMinutes: x,
//             periodInMinutes: x,
//         }
//     ); 

// }


