const STAFF_DATABASE = {
    "1234": { name: "Alex (Server)", role: "staff" },
    "0000": { name: "Jordan (Manager)", role: "admin" }
};

let authenticatedUser = null;

function showPinPad(callback) {
    const overlay = document.createElement('div');
    overlay.id = "pin-overlay";
    overlay.className = "fixed inset-0 bg-slate-950/fb z-[999] flex flex-col items-center justify-center backdrop-blur-md";
    overlay.innerHTML = `
        <div class="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl w-80">
            <h2 class="text-xl font-bold text-fuchsia-500 mb-6 text-center tracking-widest">STAFF LOGIN</h2>
            <div id="pin-display" class="flex justify-center gap-3 mb-8 h-4">
                ${[1,2,3,4].map(() => `<div class="w-3 h-3 rounded-full border-2 border-slate-700"></div>`).join('')}
            </div>
            <div class="grid grid-cols-3 gap-3">
                ${[1,2,3,4,5,6,7,8,9, 'C', 0, 'OK'].map(key => `
                    <button onclick="handleKey('${key}', ${callback})" class="h-16 bg-slate-800 rounded-xl text-xl font-bold hover:bg-fuchsia-600 transition-colors">${key}</button>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

let currentPin = "";
function handleKey(key, callback) {
    if (key === 'C') currentPin = "";
    else if (key === 'OK') {
        const user = STAFF_DATABASE[currentPin];
        if (user) {
            document.getElementById('pin-overlay').remove();
            authenticatedUser = user;
            callback(user);
        } else {
            alert("Wrong PIN");
            currentPin = "";
        }
    } else if (currentPin.length < 4) {
        currentPin += key;
    }
    updateDots();
}

function updateDots() {
    const dots = document.getElementById('pin-display').children;
    Array.from(dots).forEach((dot, i) => {
        dot.className = i < currentPin.length ? "w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]" : "w-3 h-3 rounded-full border-2 border-slate-700";
    });
}
