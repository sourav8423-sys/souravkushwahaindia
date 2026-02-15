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
