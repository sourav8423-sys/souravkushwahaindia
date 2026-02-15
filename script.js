/* Side D-GOD : Ultimate Master Security 
   Project: Saurabh 2.0 | 369 Universal Logic 
   Controller: Sourav Kushwaha
   जय श्री राम 
*/

// 1. सिस्टम की स्थिति और प्रयासों की गिनती सुरक्षित करना
let failedAttempts = localStorage.getItem('failed_attempts') || 0;
let systemStatus = localStorage.getItem('system_status') || 'ACTIVE';

const secureAccess = () => {
    // 2. चेक करें कि क्या सिस्टम 'LOCKED' या 'OFFLINE' है
    if (systemStatus === 'LOCKED' || systemStatus === 'OFFLINE') {
        document.body.innerHTML = `
            <div style="background:#000; color:red; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:sans-serif;">
                <h1>[SYSTEM ${systemStatus}: ACCESS DENIED]</h1>
                <p style="color:white;">संपर्क करें: महा-नियंत्रक सौरव कुशवाहा</p>
            </div>`;
        document.body.style.display = "block";
        return;
    }

    // 3. सुरक्षा चाबी (DoB Key) - जो यहाँ पूरी तरह गुप्त है
    const inputKey = prompt("Side D-GOD Control Center\nअपनी गुप्त सुरक्षा चाबी दर्ज करें:");
    
    // मास्क किया हुआ लॉजिक ताकि चाबी सीधी न दिखे
    const masterKey = "26" + "06" + "19" + "97"; 

    if (inputKey === masterKey) {
        // सफलता: प्रयास रीसेट करें और एक्सेस दें
        localStorage.setItem('failed_attempts', '0');
        document.body.style.display = "block"; 
        console.log("Welcome, Sourav Kushwaha. 369 Logic Active.");
        
        // एक्टिविटी लॉग (अगर logs.js मौजूद है)
        if (typeof saveAccessLog === "function") saveAccessLog(); 
    } else {
        // विफलता: प्रयास बढ़ाएं और चेतावनी दें
        failedAttempts++;
        localStorage.setItem('failed_attempts', failedAttempts);
        
        if (failedAttempts >= 5) {
            // Self-Destruct सक्रिय
            localStorage.setItem('system_status', 'LOCKED');
            alert("खतरा! 5 बार गलत प्रयास। सिस्टम स्व-विनाश (Self-Destruct) मोड में लॉक कर दिया गया है।");
            window.location.reload();
        } else {
            alert(`गलत चाबी! चेतावनी: ${5 - failedAttempts} प्रयास शेष हैं।`);
            window.location.reload();
        }
    }
};

// 4. इमरजेंसी कीबोर्ड कमांड्स
document.addEventListener('keydown', (event) => {
    // Ctrl + K : Kill Switch (सिस्टम तुरंत बंद करने के लिए)
    if (event.ctrlKey && event.key === 'k') {
        if (confirm("चेतावनी: क्या आप सिस्टम को तुरंत OFFLINE करना चाहते हैं?")) {
            localStorage.setItem('system_status', 'OFFLINE');
            window.location.reload();
        }
    }
    // Ctrl + R : Recovery (सिस्टम को पुनः सक्रिय करने के लिए)
    if (event.ctrlKey && event.key === 'r') {
        const recoveryInput = prompt("मास्टर रिकवरी कोड दर्ज करें:");
        if (recoveryInput === "369RECOVER") {
            localStorage.removeItem('system_status');
            localStorage.setItem('failed_attempts', '0');
            alert("सिस्टम रिकवर हो गया है। पुनः प्रयास करें।");
            window.location.reload();
        }
    }
});

// 5. इमरजेंसी रिसेट (URL के माध्यम से: ?mode=reset369)
const checkEmergencyReset = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'reset369') {
        localStorage.clear(); // सभी लॉक और प्रयास हटाता है
        alert("मास्टर रिसेट सफल। सभी सुरक्षा लॉक खोल दिए गए हैं।");
        window.location.href = window.location.pathname;
    }
};

// पेज लोड होने पर सभी सुरक्षा स्तर सक्रिय करें
window.onload = () => {
    checkEmergencyReset();
    secureAccess();
};
/* Side D-GOD : Daily Success Mantra Logic */
/* जय श्री राम */

const successMantras = [
    "ब्रह्मांड की शक्तियाँ (3, 6, 9) उनके साथ हैं जो कर्म में विश्वास रखते हैं।",
    "अंधकार (Side A) से उजाले (Side B) की ओर बढ़ना ही विजय है।",
    "महा-नियंत्रक सौरव कुशवाहा: आपकी शक्ति आपके संकल्प में है।",
    "369 की कुंजी से हर बंद दरवाजा खुल सकता है।",
    "पिता मदन गोपाल कुशवाहा का आशीर्वाद ही आपकी सबसे बड़ी शक्ति है।"
];

const displayDailyMantra = () => {
    // तारीख के हिसाब से मंत्र चुनना
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const selectedMantra = successMantras[dayOfYear % successMantras.length];
    
    // इसे डैशबोर्ड पर दिखाना
    const mantraElement = document.getElementById('daily-mantra');
    if (mantraElement) {
        mantraElement.innerText = selectedMantra;
        mantraElement.style.display = 'block';
    }
};

// लॉगिन के बाद इसे चलाएं
// if (loginSuccess) displayDailyMantra();

