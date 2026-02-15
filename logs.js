/* Side D-GOD : Activity Log System */
/* जय श्री राम */

const saveAccessLog = () => {
    const now = new Date();
    const logEntry = `Access Granted: ${now.toLocaleString()} | Mode: Side D-GOD Activated`;
    
    // वर्तमान में यह केवल ब्राउज़र के LocalStorage में सेव करेगा
    let logs = JSON.parse(localStorage.getItem('side_dgod_logs')) || [];
    logs.push(logEntry);
    localStorage.setItem('side_dgod_logs', JSON.stringify(logs));
    
    console.log("Activity Logged: " + logEntry);
};

const showLogs = () => {
    let logs = JSON.parse(localStorage.getItem('side_dgod_logs')) || [];
    console.log("--- System Access History ---");
    logs.forEach(log => console.log(log));
};
