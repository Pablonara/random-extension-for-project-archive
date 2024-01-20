chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            "drink_water",
            {
                type: "basic",
                iconUrl: "alarm.jpg",
                title: "take a break",
                message: "How are you feeling?",
                silent: false,
                buttons: [
                    { title: "i'm feeling fine" }
                ],
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}
