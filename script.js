/* Side D-GOD : Master Control Logic */
/* जय श्री राम */

document.addEventListener('DOMContentLoaded', () => {
    // 1. सुरक्षा चाबी (DoB Key)
    const securityKey = "26/06/1997";
    let isActivated = false;

    console.log("Side D-GOD System Initialized...");

    // 2. 369 यूनिवर्सल लॉजिक सक्रिय करना
    const activate369 = () => {
        const levels = [3, 6, 9];
        levels.forEach(level => {
            console.log(`Power Level ${level}: Source Connected.`);
        });
        alert("जय श्री राम! Side D-GOD मोड सक्रिय हो गया है।");
    };

    // 3. एक्सेस कंट्रोल फंक्शन
    const checkAccess = () => {
        const userInput = prompt("प्रवेश के लिए अपनी 'Divine Key' (DD/MM/YYYY) दर्ज करें:");
        
        if (userInput === securityKey) {
            isActivated = true;
            document.body.style.display = "block";
            activate369();
            console.log("Status: Side A and Side B under Control.");
        } else {
            alert("पहुँच वर्जित: गलत चाबी।");
            document.body.innerHTML = "<h1 style='color:red; text-align:center;'>Access Denied</h1>";
        }
    };

    // पेज लोड होते ही सुरक्षा चेक शुरू करें
    checkAccess();
});
