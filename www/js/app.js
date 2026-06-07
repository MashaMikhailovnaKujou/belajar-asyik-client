// ======================== APLIKASI UTAMA ========================

// State aplikasi
const savedUser = localStorage.getItem('activeUser');
window.currentUser = savedUser ? JSON.parse(savedUser) : null;
window.soundOn = true;
console.log("👤 User Aktif:", window.currentUser);
let currentPage = "home";
let currentMateriType = null;
let currentTopicId = null;
let currentSubPage = null;
let quizActive = false;
let currentQuizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

const contentDiv = document.getElementById("mainContent");
const globalBackBtn = document.getElementById("globalBackBtn");

if (!window.currentUser) {
    if (!window.location.href.includes("login.html")) {
        window.location.href = "login.html";
    }
}

// Kumpulan sapaan menyenangkan
const greetings = [
    "Halo, Sobat Hebat!", "Halo, Teman-Teman Semua!", "Hore, Selamat Datang!",
    "Ayo, Semangat Belajar!", "Halo, Anak-Anak Hebat!", "Salam Belajar, Sobat Cerdas!",
    "Halo, Pejuang Ilmu!", "Yuk, Belajar Bersama!", "Halo, Bintang Kecil!",
    "Selamat Datang di Kelas Seru!"
];

// Kumpulan kalimat pembuka suara
const openingMessages = [
    "Halo, sobat semua! Apa kabar? Ayo semangat belajar!",
    "Halo, teman-teman! Belajar itu asyik, lho! Yuk kita mulai!",
    "Hai, anak-anak hebat! Masih semangat belajarnya? Pasti dong!",
    "Halo, semuanya! Selamat datang di Belajar Asyik. Ayo belajar bersama!",
    "Hai, sobat cerdas! Yuk kita belajar sambil bermain yang seru!",
    "Halo, bintang-bintang kecil! Siap belajar hari ini? Ayo!",
    "Halo, kawan-kawan! Belajar itu menyenangkan. Yuk mulai petualangan kita!"
];

function getRandomGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function render() {
    if (quizActive) {
        renderQuiz();
        return;
    }
    if (currentPage === "home") renderHome();
    else if (currentPage === "materi") renderMateriUtama();
    else if (currentPage === "profil") renderProfil();
    else renderHome();

    document.querySelectorAll(".nav-item").forEach(el => {
        if (el.getAttribute("data-nav") === currentPage) el.classList.add("active");
        else el.classList.remove("active");
    });
}

function renderHome() {
    globalBackBtn.style.visibility = "hidden";
    const randomGreeting = getRandomGreeting();
    const motivationalMessage = [
        "✨ Ayo belajar sambil bermain! ✨", "🌟 Raih bintang sebanyak-banyaknya! 🌟",
        "📚 Belajar itu menyenangkan! 📚", "🎉 Setiap hari adalah petualangan belajar! 🎉",
        "🧠 Pintar itu keren! Ayo belajar! 🧠", "🌈 Bermain sambil belajar, yuk! 🌈",
        "⭐ Kamu hebat! Ayo tunjukkan! ⭐"
    ];
    const randomMessage = motivationalMessage[Math.floor(Math.random() * motivationalMessage.length)];
    
    // 🌟 SAKLAR PENYELAMAT BERANDA DARI UNDEFINED
    const avatarAktif = (!window.currentUser.avatar || window.currentUser.avatar === "undefined") 
        ? "🐰" 
        : window.currentUser.avatar;

    contentDiv.innerHTML = `
        <div class="profile-section">
            <div class="avatar animal-bounce" id="avatarHome">${avatarAktif}</div>
            <div class="greeting">
                <h2>${randomGreeting} <span class="animal-wiggle">🎉</span></h2>
                <p>${randomMessage}</p>
            </div>
        </div>
        <div class="info-box">
            <span class="animal-fly">🦋</span> <span class="animal-walk">🐰</span> <span class="animal-bounce">🐸</span> 
            <strong>Hewan-hewan ikut belajar bersama kamu!</strong> 
            <span class="animal-heartbeat">🐨</span> <span class="animal-float">🦉</span> <span class="animal-spin">🐝</span>
        </div>
        <div class="menu-grid">
            <div class="menu-card" data-mapel="ipas">
                <div class="emoji">🌍</div>
                <h3>IPAS</h3>
                <span>8 Bab Lengkap</span>
            </div>
            <div class="menu-card" data-mapel="matematika">
                <div class="emoji">🧮</div>
                <h3>Matematika</h3>
                <span>8 Topik</span>
            </div>
            <div class="menu-card" data-mapel="bahasa">
                <div class="emoji">📖</div>
                <h3>Bahasa Indonesia</h3>
                <span>8 Topik</span>
            </div>
            <div class="menu-card pulse" id="quizUtamaBtn">
                <div class="emoji">🎮</div>
                <h3>KUIS</h3>
                <span>15 Soal Seru!</span>
            </div>
        </div>
        <div class="info-box" style="background:linear-gradient(135deg, #FFF0D6, #FFE0B2);">
            <span class="animal-fly">✨</span> <strong>24+ materi lengkap Kurikulum Merdeka!</strong> <span class="animal-fly">✨</span><br>
            Pelajari 8 Bab IPAS dengan hewan-hewan lucu yang bergerak!
        </div>
        <div style="text-align:center; margin-top:10px;">
            <span class="animal-heartbeat">💖</span> <strong>Klik avatar untuk mengganti gambarmu!</strong> <span class="animal-heartbeat">💖</span>
        </div>
    `;
    
    document.querySelectorAll("[data-mapel]").forEach(el => {
        el.addEventListener("click", () => {
            const mapel = el.getAttribute("data-mapel");
            currentMateriType = mapel;
            currentSubPage = "list";
            renderSubMateri();
        });
    });
    document.getElementById("quizUtamaBtn")?.addEventListener("click", startGeneralQuiz);
    document.getElementById("avatarHome")?.addEventListener("click", () => {
        changeAvatar();
        renderHome();
    });
    
    if (window.firstLoad === undefined) {
        window.firstLoad = true;
        setTimeout(() => {
            const randomMsg = openingMessages[Math.floor(Math.random() * openingMessages.length)];
            speakTextInternal(randomMsg);
        }, 500);
    }
}

function renderMateriUtama() {
    globalBackBtn.style.visibility = "visible";
    contentDiv.innerHTML = `
        <div style="display:flex; gap:10px; margin-bottom:16px;">
            <button class="back-btn" id="backToHomeFromMateri" style="flex:1;">🏠 Beranda</button>
        </div>
        <div class="menu-grid">
            <div class="menu-card" data-mapel="ipas">
                <div class="emoji">🌍</div>
                <h3>IPAS</h3>
                <span>8 Bab Lengkap!</span>
            </div>
            <div class="menu-card" data-mapel="matematika">
                <div class="emoji">🧮</div>
                <h3>Matematika</h3>
                <span>8 Topik</span>
            </div>
            <div class="menu-card" data-mapel="bahasa">
                <div class="emoji">📖</div>
                <h3>Bahasa Indonesia</h3>
                <span>8 Topik</span>
            </div>
        </div>
        <div class="info-box" style="background:#E8F5E9;">
            🎉 <strong>Fitur Seru!</strong> 
            <span class="animal-float">🦋</span> Klik hewan-hewan di materi untuk mendengar suaranya! 
            <span class="animal-bounce">🐸</span>
        </div>
    `;
    document.querySelectorAll("[data-mapel]").forEach(el => {
        el.addEventListener("click", () => {
            currentMateriType = el.getAttribute("data-mapel");
            currentSubPage = "list";
            renderSubMateri();
        });
    });
    document.getElementById("backToHomeFromMateri")?.addEventListener("click", () => {
        currentPage = "home";
        currentSubPage = null;
        render();
    });
}

function renderSubMateri() {
    let topics = {};
    let title = "";
    let mapelName = "";
    if (currentMateriType === "ipas") { topics = ipasTopics; title = "🌍 IPAS Kelas 3 (Kurikulum Merdeka)"; mapelName = "IPAS"; }
    else if (currentMateriType === "matematika") { topics = matematikaTopics; title = "🧮 Matematika Kelas 3"; mapelName = "Matematika"; }
    else { topics = bhsIndonesiaTopics; title = "📖 Bahasa Indonesia Kelas 3"; mapelName = "Bahasa Indonesia"; }

    let listHtml = `<button class="back-btn" id="backToMateriMenu">← Kembali</button><h2 style="font-size:1.3rem; margin:10px 0;">${title}</h2>`;
    listHtml += `<div class="submenu-list">`;
    for (let [id, topic] of Object.entries(topics)) {
        listHtml += `<div class="submenu-item" data-topic="${id}">
            <span style="font-size:32px;" class="animal-walk">📚</span>
            <div><strong>${topic.judul}</strong><br><span style="font-size:11px;">✨ Klik untuk belajar →</span></div>
        </div>`;
    }
    listHtml += `</div><div style="text-align:center; margin-top:12px;">
        <span class="animal-fly">🦋</span> Total ${Object.keys(topics).length} materi siap dipelajari! <span class="animal-bounce">🐸</span>
    </div>`;
    contentDiv.innerHTML = listHtml;
    
    document.querySelectorAll("[data-topic]").forEach(el => {
        el.addEventListener("click", () => {
            const topicId = el.getAttribute("data-topic");
            showDetailMateri(topicId);
        });
    });
    document.getElementById("backToMateriMenu")?.addEventListener("click", () => {
        if (currentPage === "materi") renderMateriUtama();
        else renderHome();
    });
    
    speakTextInternal(`Hore! Sekarang kita akan belajar ${mapelName} kelas 3 SD. Silakan pilih materi yang ingin kamu pelajari. Total ada ${Object.keys(topics).length} topik. Selamat belajar, ya!`);
}

function showDetailMateri(topicId) {
    let topicData = null;
    if (currentMateriType === "ipas") topicData = ipasTopics[topicId];
    else if (currentMateriType === "matematika") topicData = matematikaTopics[topicId];
    else topicData = bhsIndonesiaTopics[topicId];
    if (!topicData) return;

    contentDiv.innerHTML = `
        <button class="back-btn" id="backToList">← Kembali ke Daftar</button>
        <div class="materi-card">
            <div class="materi-judul floating-text">${topicData.judul}</div>
            <div class="materi-isi">${topicData.konten}</div>
            <div class="sound-controls">
                <button class="tombol-suarakan" id="dengarMateri">🔊 Dengarkan Materi</button>
                <button class="tombol-suarakan" id="stopMateri" style="background:#EF5350; display:none;">⏹ Stop</button>
                <button class="tombol-suarakan" id="latihanTopikBtn" style="background:#43A047;">📝 Latihan Soal</button>
            </div>
            <div id="suaraStatus" class="suara-status" style="display:none;">
                <span class="suara-dot"></span> Sedang membaca materi...
            </div>
        </div>
    `;
    
    speakTextInternal(`Sekarang kita akan belajar tentang ${topicData.judul}. Silakan dibaca dan didengarkan dengan saksama.`);
    
    document.getElementById("dengarMateri")?.addEventListener("click", () => {
        if (!window.soundOn) {
            alert("🔊 Aktifkan suara terlebih dahulu!");
            return;
        }
        const fullText = topicData.suara || topicData.judul;
        speakTextInternal(fullText);
        document.getElementById("stopMateri").style.display = "inline-block";
        document.getElementById("suaraStatus").style.display = "flex";
        if ('speechSynthesis' in window) {
            const checkEnd = setInterval(() => {
                if (!window.speechSynthesis.speaking) {
                    clearInterval(checkEnd);
                    const stopBtn = document.getElementById("stopMateri");
                    const statusEl = document.getElementById("suaraStatus");
                    if (stopBtn) stopBtn.style.display = "none";
                    if (statusEl) statusEl.style.display = "none";
                }
            }, 500);
        }
    });
    
    document.getElementById("stopMateri")?.addEventListener("click", () => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        document.getElementById("stopMateri").style.display = "none";
        document.getElementById("suaraStatus").style.display = "none";
    });
    
    document.getElementById("latihanTopikBtn")?.addEventListener("click", () => startTopicQuiz(topicId));
    
    document.getElementById("backToList")?.addEventListener("click", () => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        renderSubMateri();
    });
}

function startTopicQuiz(topicId) {
    let topicKey = "";
    if (currentMateriType === "ipas") topicKey = `ipas_${topicId}`;
    else if (currentMateriType === "matematika") topicKey = `mtk_${topicId}`;
    else topicKey = `bindo_${topicId}`;
    
    const specificQuestions = topicQuestions[topicKey];
    if (specificQuestions && specificQuestions.length > 0) {
        quizQuestions = [...specificQuestions];
    } else {
        quizQuestions = [...bankSoal].sort(() => 0.5 - Math.random()).slice(0, 5);
    }
    startQuizWithQuestions();
}

function startGeneralQuiz() {
    quizQuestions = [...bankSoal].sort(() => 0.5 - Math.random()).slice(0, 10);
    startQuizWithQuestions();
}

function startQuizWithQuestions() {
    quizActive = true;
    currentQuizIndex = 0;
    quizScore = 0;
    renderQuiz();
    
    setTimeout(() => {
        speakTextInternal(`Halo, Sobat Hebat! Selamat datang di kuis seru! Total ada ${quizQuestions.length} soal. Jawablah dengan benar untuk mendapatkan bintang sebanyak-banyaknya. Kamu pasti bisa! Ayo mulai!`);
    }, 500);
}

function renderQuiz() {
   if (currentQuizIndex >= quizQuestions.length) {
    const percent = (quizScore / quizQuestions.length) * 100;
    createParticles();
        
   let namaBabAtauTopik = "kuis_acak_umum";
    if (currentMateriType && currentTopicId) {
        namaBabAtauTopik = `${currentMateriType}_${currentTopicId}`;
    } else if (currentMateriType) {
        namaBabAtauTopik = `${currentMateriType}_umum`;
    }

  fetch('http://127.0.0.1:3000/api/scores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_user: window.currentUser.id_user,
            nama_siswa: window.currentUser.username,
            no_absen: window.currentUser.no_absen,
            jenis_ujian: currentMateriType ? 'latihan_topik' : 'kuis_umum',
            topik_or_bab: namaBabAtauTopik,
            skor_didapat: quizScore,
            total_soal: quizQuestions.length
        })
    })
    .then(res => res.json())
    .then(data => console.log('📊 Backend Response:', data))
    .catch(err => console.error('❌ Gagal mengirim nilai ke backend:', err));

        if (percent === 100) {
            speakTextInternal(`Wah, luar biasa! Kamu mendapatkan nilai sempurna ${quizScore} dari ${quizQuestions.length}! Kamu benar-benar hebat! Pertahankan semangat belajarmu, ya!`);
        } else if (percent >= 70) {
            speakTextInternal(`Bagus sekali! Nilai kamu ${quizScore} dari ${quizQuestions.length}. Kamu pintar! Terus belajar agar lebih hebat lagi!`);
        } else if (percent >= 50) {
            speakTextInternal(`Kamu mendapatkan nilai ${quizScore} dari ${quizQuestions.length}. Cukup bagus! Ayo coba lagi supaya nilainya lebih baik!`);
        } else {
            speakTextInternal(`Kamu mendapatkan nilai ${quizScore} dari ${quizQuestions.length}. Jangan menyerah ya! Coba pelajari materi lagi, nanti kamu pasti bisa dapat nilai bagus! Semangat!`);
        }
        
        contentDiv.innerHTML = `
            <button class="back-btn" id="exitQuizFinish">← Selesai</button>
            <div class="quiz-container">
                <div class="reward">🎉 ${percent === 100 ? "⭐⭐⭐⭐⭐" : percent >= 70 ? "⭐⭐⭐⭐" : percent >= 50 ? "⭐⭐⭐" : "⭐⭐"}</div>
                <h2 style="text-align:center;">Skor: ${quizScore}/${quizQuestions.length}</h2>
                <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
                <p style="text-align:center; margin:15px 0;">${percent === 100 ? "🎉 HEBAT! Kamu luar biasa! 🎉" : percent >= 70 ? "👍 BAGUS! Terus semangat! 👍" : "💪 Ayo belajar lagi, kamu pasti bisa! 💪"}</p>
                <button id="restartQuiz" style="background:#FF9800; padding:12px; border-radius:50px; width:100%; border:none; font-weight:bold; cursor:pointer;">🔄 Ulangi Kuis</button>
            </div>
        `;
        document.getElementById("exitQuizFinish")?.addEventListener("click", () => { quizActive = false; render(); });
        document.getElementById("restartQuiz")?.addEventListener("click", () => startQuizWithQuestions());
        return;
    }
    
    const q = quizQuestions[currentQuizIndex];
    const soundIndicatorHtml = window.soundOn ? `
        <div class="quiz-sound-indicator" id="quizSoundIndicator">
            <span class="quiz-sound-dot"></span> Soal sedang dibacakan...
            <button onclick="window.speechSynthesis && window.speechSynthesis.cancel(); document.getElementById('quizSoundIndicator').style.display='none';" 
                style="background:none;border:none;cursor:pointer;font-size:0.8rem;color:#E65100;margin-left:6px;">⏹ Stop</button>
        </div>` : '';
    
    contentDiv.innerHTML = `
        <button class="back-btn" id="exitQuizBtn">← Keluar Kuis</button>
        <div class="quiz-container">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>📝 Soal ${currentQuizIndex + 1}/${quizQuestions.length}</span>
                <span>⭐ Skor: ${quizScore}</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${(currentQuizIndex / quizQuestions.length) * 100}%"></div></div>
            ${soundIndicatorHtml}
            <div class="question">${q.soal}</div>
            <div id="optArea"></div>
            <div style="text-align:center; margin-top:10px;">
                <button onclick="readQuizQuestion()" style="background:#E3F2FD; border:2px solid #42A5F5; border-radius:30px; padding:6px 14px; cursor:pointer; font-size:0.8rem; color:#1565C0; font-weight:bold;">🔊 Baca Ulang Soal</button>
            </div>
            <div style="text-align:center; margin-top:8px;"><span class="animal-heartbeat">🐞</span> Pilih jawaban yang benar! <span class="animal-heartbeat">🐞</span></div>
        </div>
    `;
    
    window.readQuizQuestion = function() {
        const currentQ = quizQuestions[currentQuizIndex];
        if (!currentQ) return;
        let textToSpeak = `Soal nomor ${currentQuizIndex + 1}. ${currentQ.soal}. Pilihan jawaban: `;
        currentQ.pilihan.forEach((opt, idx) => {
            const abjadSpeak = ["A", "B", "C", "D"][idx];
            textToSpeak += `${abjadSpeak}. ${opt}. `;
        });
        textToSpeak += `Silakan pilih jawaban yang benar. Semangat!`;
        speakTextInternal(textToSpeak);
        const indicator = document.getElementById("quizSoundIndicator");
        if (indicator) indicator.style.display = "flex";
    };

    setTimeout(() => {
        let textToSpeak = `Soal nomor ${currentQuizIndex + 1}. ${q.soal}. Pilihan jawaban: `;
        q.pilihan.forEach((opt, idx) => {
            const abjadSpeak = ["A", "B", "C", "D"][idx];
            textToSpeak += `${abjadSpeak}. ${opt}. `;
        });
        textToSpeak += `Silakan pilih jawaban yang benar. Semangat!`;
        speakTextInternal(textToSpeak);
        if ('speechSynthesis' in window) {
            const checkDone = setInterval(() => {
                if (!window.speechSynthesis.speaking) {
                    clearInterval(checkDone);
                    const indicator = document.getElementById("quizSoundIndicator");
                    if (indicator) indicator.style.display = "none";
                }
            }, 500);
        }
    }, 300);
    
    const optDiv = document.getElementById("optArea");
    q.pilihan.forEach((opt, idx) => {
        const btn = document.createElement("div");
        btn.className = "option";
        const abjad = String.fromCharCode(65 + idx);
        btn.innerHTML = `${abjad}. ${opt}`;
        btn.onclick = () => {
            if (opt === q.jawaban) {
                quizScore++;
                speakTextInternal(`Hore! Jawaban ${abjad}. ${opt} benar! Kamu hebat! +1 bintang untukmu!`);
                createParticles();
            } else {
                const correctAbjad = String.fromCharCode(65 + q.pilihan.indexOf(q.jawaban));
                speakTextInternal(`Wah, jawaban ${abjad}. ${opt} kurang tepat. Jawaban yang benar adalah ${correctAbjad}. ${q.jawaban}. Jangan menyerah, coba lagi di soal berikutnya ya!`);
            }
            currentQuizIndex++;
            renderQuiz();
        };
        optDiv.appendChild(btn);
    });
    
    document.getElementById("exitQuizBtn")?.addEventListener("click", () => { 
        quizActive = false; 
        speakTextInternal("Kuis dihentikan. Ayo kembali lagi nanti untuk bermain kuis!");
        render(); 
    });
}

function renderProfil() {
    globalBackBtn.style.visibility = "visible";
    const randomGreeting = getRandomGreeting();

    // 🌟 SAKLAR PENYELAMAT HALAMAN PROFIL DARI UNDEFINED
    const avatarProfilAktif = (!window.currentUser.avatar || window.currentUser.avatar === "undefined") 
        ? "🐰" 
        : window.currentUser.avatar;

    contentDiv.innerHTML = `
        <div class="profile-section" style="flex-direction:column; text-align:center;">
            <div class="avatar animal-bounce" id="avatarProfil" style="font-size:80px;">${avatarProfilAktif}</div>
            <h2>${randomGreeting}</h2>
            <p>Kelas 3 SD • Pejuang Ilmu! <span class="animal-wiggle">📚</span></p>
            <button id="gantiAvatarProfil" style="background:#FFB74D; border:none; padding:8px 20px; border-radius:40px; margin:5px; cursor:pointer;">🔄 Ganti Avatar</button>
        </div>
        <div class="info-box" style="background:linear-gradient(135deg, #E8F5E9, #C8E6C9);">
            <h3>🏆 Progress Belajar Kamu</h3>
            <p>✅ 24+ Topik Materi Lengkap</p>
            <p>✅ 8 Bab IPAS (Kurikulum Merdeka)</p>
            <p>✅ Hewan Animasi Bergerak + Suara</p>
            <p>✅ Kuis dengan Reward Bintang Jatuh</p>
            <p>✅ Suara membaca materi LENGKAP</p>
        </div>
        <div class="tips-box">
            <span class="animal-heartbeat">💡</span> <strong>Tips Belajar:</strong> <span class="animal-heartbeat">💡</span><br>
            • Belajar setiap hari 15 menit saja<br>
            • Ajak teman atau orang tua menemani<br>
            • Jangan lupa istirahat dan bermain!
        </div>
        <button class="back-btn" id="backFromProfil" style="margin-top:16px; width:100%;">Kembali ke Beranda</button>
    `;
    document.getElementById("gantiAvatarProfil")?.addEventListener("click", changeAvatar);
    document.getElementById("avatarProfil")?.addEventListener("click", changeAvatar);
    document.getElementById("backFromProfil")?.addEventListener("click", () => {
        currentPage = "home";
        render();
    });
}

document.querySelectorAll(".nav-item").forEach(el => {
    el.addEventListener("click", (e) => {
        if (quizActive) { 
            speakTextInternal("Selesaikan kuis dulu ya sebelum pindah halaman! Semangat!");
            alert("✨ Selesaikan kuis dulu ya sebelum pindah halaman! ✨"); 
            return; 
        }
        const page = el.getAttribute("data-nav");
        if (page === "home") { currentPage = "home"; currentSubPage = null; render(); }
        else if (page === "materi") { currentPage = "materi"; currentSubPage = null; renderMateriUtama(); }
        else if (page === "profil") { currentPage = "profil"; renderProfil(); }
    });
});

globalBackBtn.addEventListener("click", () => {
    if (quizActive) return;
    if (currentPage === "materi" && currentSubPage !== null) {
        renderSubMateri();
    } else if (currentPage === "materi") {
        renderHome();
    } else if (currentPage === "profil") {
        currentPage = "home";
        render();
    } else {
        renderHome();
    }
});

document.getElementById("toggleSound")?.addEventListener("click", () => {
    window.soundOn = !window.soundOn;
    document.getElementById("toggleSound").innerText = window.soundOn ? "🔊" : "🔇";
    if (window.soundOn) {
        speakTextInternal("Suara diaktifkan! Selamat belajar dan bersenang-senang!");
    } else {
        window.speechSynthesis.cancel();
    }
});

render();