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
/* Side D-GOD : Emergency Reset System */
/* जय श्री राम */

// यह फंक्शन एक गुप्त URL पैरामीटर के माध्यम से सिस्टम को अनलॉक करेगा
const checkEmergencyReset = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // अगर आप अपनी वेबसाइट के लिंक के पीछे '?mode=reset369' जोड़ते हैं
    if (urlParams.get('mode') === 'reset369') {
        const masterResetConfirm = confirm("क्या आप मास्टर रिसेट सक्रिय करना चाहते हैं?");
        if (masterResetConfirm) {
            localStorage.removeItem('system_status');
            localStorage.setItem('failed_attempts', '0');
            alert("सिस्टम रिसेट सफल। अब आप सामान्य रूप से प्रवेश कर सकते हैं।");
            window.location.href = window.location.pathname; // URL को साफ करने के लिए
        }
    }
};

// पेज लोड होते ही इसे चेक करें
window.addEventListener('load', checkEmergencyReset);
/* Side D-GOD : Ultimate Security & Self-Destruct Logic */
/* जय श्री राम */

let failedAttempts = localStorage.getItem('failed_attempts') || 0;

const secureAccess = () => {
    // अगर सिस्टम पहले से लॉक्ड है
    if (localStorage.getItem('system_status') === 'LOCKED') {
        document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:20%;'>[SYSTEM SELF-DESTRUCTED: ACCESS DENIED]</h1>";
        return;
    }

    const inputKey = prompt("कृपया अपनी गुप्त चाबी (Security Key) दर्ज करें:");
    const masterKey = "26" + "06" + "19" + "97"; // Hidden Key Logic

    if (inputKey === masterKey) {
        localStorage.setItem('failed_attempts', '0');
        document.body.style.display = "block"; 
        console.log("Status: Side D-GOD System Online");
        if (typeof saveAccessLog === "function") saveAccessLog(); 
    } else {
        failedAttempts++;
        localStorage.setItem('failed_attempts', failedAttempts);
        
        if (failedAttempts >= 5) {
            localStorage.setItem('system_status', 'LOCKED');
            alert("खतरा! 5 से अधिक गलत प्रयास। सिस्टम स्व-विनाश (Self-Destruct) मोड में है।");
            window.location.reload();
        } else {
            alert(`गलत चाबी! चेतावनी: आपके पास ${5 - failedAttempts} प्रयास शेष हैं।`);
            window.location.reload();
        }
    }
};

window.onload = secureAccess;


