// ======================== FUNGSI UTILITY ========================

// Membuat partikel bintang berjatuhan
function createParticles() {
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        const stars = ["⭐", "🌟", "✨", "💫", "⭐", "🦋", "🐞"];
        particle.innerHTML = stars[Math.floor(Math.random() * stars.length)];
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = "40%";
        particle.style.fontSize = (15 + Math.random() * 25) + "px";
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

// Fungsi speakText untuk membaca teks LENGKAP (bisa dipanggil dari HTML onclick)
window.speakText = function(text) {
    if (!window.soundOn) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'id-ID';
        u.rate = 0.85;
        u.pitch = 1.1;
        u.volume = 1;
        window.speechSynthesis.speak(u);
    }
};

// Fungsi internal speakText
function speakTextInternal(text) {
    if (!window.soundOn) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'id-ID';
        u.rate = 0.85;
        u.pitch = 1.1;
        u.volume = 1;
        window.speechSynthesis.speak(u);
    }
}

// Ganti avatar (tanpa nama panggilan)
function changeAvatar() {
    const avatars = ["🐰", "🐱", "🐶", "🦊", "🐼", "🐨", "🦁", "🐸", "🐧", "🦉", "🐝", "🦋"];
    let idx = avatars.indexOf(window.currentUser.avatar);
    idx = (idx + 1) % avatars.length;
    window.currentUser.avatar = avatars[idx];
    speakTextInternal(`Halo! Aku sekarang ${window.currentUser.avatar}. Ayo kita belajar bersama!`);
}

// Fungsi untuk membaca pembukaan aplikasi
function playOpeningSound() {
    const openingMessages = [
        "Halo, sobat semua! Apa kabar? Ayo semangat belajar!",
        "Halo, teman-teman! Belajar itu asyik, lho! Yuk kita mulai!",
        "Hai, anak-anak hebat! Masih semangat belajarnya? Pasti dong!",
        "Halo, semuanya! Selamat datang di Belajar Asyik. Ayo belajar bersama!",
        "Hai, sobat cerdas! Yuk kita belajar sambil bermain yang seru!",
        "Halo, bintang-bintang kecil! Siap belajar hari ini? Ayo!",
        "Halo, kawan-kawan! Belajar itu menyenangkan. Yuk mulai petualangan kita!"
    ];
    const randomMessage = openingMessages[Math.floor(Math.random() * openingMessages.length)];
    speakTextInternal(randomMessage);
}

// Fungsi untuk membaca selamat datang di materi
function speakMateriWelcome(materiName) {
    speakTextInternal(`Selamat datang di materi ${materiName}. Silakan pilih topik yang ingin kamu pelajari.`);
}

// Fungsi untuk membaca pengantar kuis
function speakQuizIntro(totalSoal) {
    speakTextInternal(`Halo, Sobat Hebat! Selamat datang di kuis seru! Total ada ${totalSoal} soal. Jawablah dengan benar untuk mendapatkan bintang sebanyak-banyaknya. Kamu pasti bisa! Ayo mulai!`);
}

// Fungsi untuk membaca hasil kuis
function speakQuizResult(score, total, percent) {
    if (percent === 100) {
        speakTextInternal(`Wah, luar biasa! Kamu mendapatkan nilai sempurna ${score} dari ${total}! Kamu benar-benar hebat! Pertahankan semangat belajarmu, ya!`);
    } else if (percent >= 70) {
        speakTextInternal(`Bagus sekali! Nilai kamu ${score} dari ${total}. Kamu pintar! Terus belajar agar lebih hebat lagi!`);
    } else if (percent >= 50) {
        speakTextInternal(`Kamu mendapatkan nilai ${score} dari ${total}. Cukup bagus! Ayo coba lagi supaya nilainya lebih baik!`);
    } else {
        speakTextInternal(`Kamu mendapatkan nilai ${score} dari ${total}. Jangan menyerah ya! Coba pelajari materi lagi, nanti kamu pasti bisa dapat nilai bagus! Semangat!`);
    }
}