const STAFF = {
    "1234": { name: "Server 1", role: "staff" },
    "0000": { name: "Manager", role: "admin" }
};

let currentPin = "";

function showPinPad(callback) {
    const overlay = document.createElement('div');
    overlay.id = "pin-overlay";
    overlay.className = "fixed inset-0 bg-slate-950 z-[999] flex flex-col items-center justify-center";
    overlay.innerHTML = `
        <div class="bg-slate-900 p-8 rounded-3xl border border-slate-800 w-80 shadow-2xl">
            <h2 class="text-fuchsia-500 font-bold text-center mb-6 tracking-widest">STAFF PIN</h2>
            <div id="dots" class="flex justify-center gap-3 mb-8 h-4">
                ${[1,2,3,4].map(() => `<div class="w-3 h-3 rounded-full border-2 border-slate-700"></div>`).join('')}
            </div>
            <div class="grid grid-cols-3 gap-3">
                ${[1,2,3,4,5,6,7,8,9, 'C', 0, 'OK'].map(k => `
                    <button onclick="handleKey('${k}', ${callback})" class="h-16 bg-slate-800 rounded-xl font-bold text-xl hover:bg-fuchsia-600 transition-all">${k}</button>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function handleKey(key, callback) {
    if (key === 'C') currentPin = "";
    else if (key === 'OK') {
        if (STAFF[currentPin]) {
            const user = STAFF[currentPin];
            document.getElementById('pin-overlay').remove();
            currentPin = "";
            callback(user);
        } else {
            alert("Invalid PIN");
            currentPin = "";
        }
    } else if (currentPin.length < 4) {
        currentPin += key;
    }
    const dots = document.getElementById('dots').children;
    Array.from(dots).forEach((dot, i) => dot.className = i < currentPin.length ? "w-3 h-3 rounded-full bg-fuchsia-500" : "w-3 h-3 rounded-full border-2 border-slate-700");
}
