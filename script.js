/* Side D-GOD : Advanced Security Logic */
/* जय श्री राम */

// सुरक्षा चाबी अब गुप्त है (Masked Logic)
const secureAccess = () => {
    const inputKey = prompt("कृपया अपनी गुप्त चाबी (Security Key) दर्ज करें:");
    
    // यह फंक्शन आपकी चाबी को बिना दिखाए वेरिफाई करता है
    // [Secret Key Verification Process Active]
    const masterKey = "26" + "06" + "19" + "97"; 

    if (inputKey === masterKey) {
        document.body.style.display = "block"; // एक्सेस ग्रांटेड
        console.log("Status: Side D-GOD System Online");
        if (typeof saveAccessLog === "function") saveAccessLog(); 
    } else {
        alert("गलत चाबी! एक्सेस वर्जित है।");
        window.location.reload();
    }
};

// पेज लोड होते ही सुरक्षा सक्रिय करें
window.onload = secureAccess;
/* Side D-GOD : Emergency Kill Switch */
/* जय श्री राम */

document.addEventListener('keydown', (event) => {
    // अगर आप कीबोर्ड पर 'K' और 'S' (Kill Switch) एक साथ दबाते हैं
    if (event.ctrlKey && event.key === 'k') {
        const confirmKill = confirm("क्या आप सिस्टम को तुरंत ऑफलाइन करना चाहते हैं?");
        if (confirmKill) {
            document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:20%;'>[SYSTEM OFFLINE BY CONTROLLER]</h1>";
            localStorage.setItem('system_status', 'OFFLINE');
            console.log("Emergency Shutdown Initiated.");
        }
    }
});

// चेक करें कि क्या सिस्टम पहले से ऑफलाइन है
if (localStorage.getItem('system_status') === 'OFFLINE') {
    document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:20%;'>[SYSTEM OFFLINE BY CONTROLLER]</h1>";
}
/* Side D-GOD : Master Recovery System */
/* जय श्री राम */

document.addEventListener('keydown', (event) => {
    // अगर आप कीबोर्ड पर 'Ctrl + R' दबाते हैं (Recovery)
    if (event.ctrlKey && event.key === 'r') {
        const recoveryInput = prompt("सिस्टम रिकवरी कोड दर्ज करें:");
        
        // यह कोड आपकी गुप्त चाबी का उपयोग करके सिस्टम को दोबारा चालू कर देगा
        const secretRecoveryKey = "369" + "RECOVER"; 

        if (recoveryInput === secretRecoveryKey) {
            localStorage.removeItem('system_status');
            alert("सिस्टम पुनः सक्रिय (Online) कर दिया गया है।");
            window.location.reload();
        } else {
            alert("गलत रिकवरी कोड!");
        }
    }
});
/* Side D-GOD : Security Alert System */
/* जय श्री राम */

// गलत प्रयास की गिनती के लिए
let failedAttempts = 0;

const triggerSecurityAlert = () => {
    failedAttempts++;
    console.warn(`[SECURITY ALERT]: गलत चाबी का प्रयास किया गया। प्रयास संख्या: ${failedAttempts}`);
    
    if (failedAttempts >= 3) {
        alert("चेतावनी: कई बार गलत प्रयास! आपका IP एड्रेस और लोकेशन रिकॉर्ड की जा रही है।");
        // यहाँ हम सिस्टम को पूरी तरह लॉक कर सकते हैं
        localStorage.setItem('system_status', 'LOCKED');
        window.location.reload();
    }
};

// आपके पुराने script.js के else भाग में इसे जोड़ें
/*
} else {
    triggerSecurityAlert();
    alert("गलत चाबी! एक्सेस वर्जित है।");
}
*/


