// ======================== DATA MATERI LENGKAP ========================
// SEMUA SUARA MEMBACA MATERI SECARA LENGKAP

// ======================== BANK SOAL PER TOPIK ========================
// Soal untuk setiap topik (tidak random, sesuai materi)
const topicQuestions = {
    // IPAS Questions
    ipas_bab1: [
        { soal: "Sapi memakan rumput, maka sapi termasuk hewan apa?", jawaban: "herbivora", pilihan: ["herbivora", "karnivora", "omnivora"] },
        { soal: "Berikut ini yang termasuk hewan karnivora adalah?", jawaban: "harimau", pilihan: ["sapi", "kambing", "harimau"] },
        { soal: "Hewan yang hidup di air dan di darat disebut?", jawaban: "amfibi", pilihan: ["amfibi", "reptil", "mamalia"] },
        { soal: "Contoh hewan omnivora adalah?", jawaban: "ayam", pilihan: ["kucing", "ayam", "kambing"] },
        { soal: "Hewan berikut yang termasuk herbivora adalah?", jawaban: "kelinci", pilihan: ["kelinci", "ular", "elang"] }
    ],
    ipas_bab2: [
        { soal: "Kupu-kupu mengalami metamorfosis?", jawaban: "sempurna", pilihan: ["sempurna", "tidak sempurna", "sebagian"] },
        { soal: "Berikut ini yang mengalami metamorfosis sempurna adalah?", jawaban: "kupu-kupu", pilihan: ["kupu-kupu", "ayam", "belalang"] },
        { soal: "Tahap setelah ulat pada metamorfosis kupu-kupu adalah?", jawaban: "kepompong", pilihan: ["telur", "kepompong", "kupu-kupu dewasa"] },
        { soal: "Ayam mengalami metamorfosis?", jawaban: "tidak sempurna", pilihan: ["sempurna", "tidak sempurna", "lengkap"] },
        { soal: "Kecebong bernapas dengan?", jawaban: "insang", pilihan: ["paru-paru", "insang", "kulit"] }
    ],
    ipas_bab3: [
        { soal: "Hubungan timbal balik antara makhluk hidup dengan lingkungannya disebut?", jawaban: "ekosistem", pilihan: ["ekosistem", "rantai makanan", "habitat"] },
        { soal: "Peristiwa makan dan dimakan disebut?", jawaban: "rantai makanan", pilihan: ["jaring makanan", "rantai makanan", "piramida makanan"] },
        { soal: "Berikut ini yang merupakan produsen dalam rantai makanan adalah?", jawaban: "padi", pilihan: ["tikus", "ular", "padi"] },
        { soal: "Jika tikus punah, apa yang terjadi pada populasi ular?", jawaban: "berkurang", pilihan: ["bertambah", "berkurang", "tetap"] },
        { soal: "Kegiatan menanam pohon kembali disebut?", jawaban: "reboisasi", pilihan: ["deforestasi", "reboisasi", "urbanisasi"] }
    ],
    ipas_bab4: [
        { soal: "Sumber energi terbesar di bumi adalah?", jawaban: "matahari", pilihan: ["matahari", "angin", "air"] },
        { soal: "Energi yang dihasilkan oleh benda bergerak disebut?", jawaban: "energi gerak", pilihan: ["energi panas", "energi gerak", "energi bunyi"] },
        { soal: "Kipas angin yang berputar menghasilkan energi?", jawaban: "gerak", pilihan: ["panas", "gerak", "kimia"] },
        { soal: "Contoh energi kimia terdapat pada?", jawaban: "baterai", pilihan: ["lampu", "baterai", "kipas angin"] },
        { soal: "Berikut ini cara menghemat energi yang benar adalah?", jawaban: "matikan lampu jika tidak dipakai", pilihan: ["menyalakan lampu seharian", "matikan lampu jika tidak dipakai", "menggunakan air berlebihan"] }
    ],
    ipas_bab5: [
        { soal: "Arah mata angin yang berada di antara Timur dan Selatan disebut?", jawaban: "Tenggara", pilihan: ["Timur Laut", "Tenggara", "Barat Daya"] },
        { soal: "Berikut ini yang termasuk kenampakan buatan adalah?", jawaban: "jembatan", pilihan: ["gunung", "sungai", "jembatan"] },
        { soal: "Contoh kenampakan alam adalah?", jawaban: "danau", pilihan: ["gedung", "jembatan", "danau"] },
        { soal: "Gambar yang menunjukkan letak suatu tempat disebut?", jawaban: "denah", pilihan: ["peta", "denah", "sketsa"] },
        { soal: "Berikut ini yang termasuk fasilitas umum adalah?", jawaban: "sekolah", pilihan: ["rumah pribadi", "sekolah", "toko"] }
    ],
    ipas_bab6: [
        { soal: "Tingkatan pemerintahan terkecil di Indonesia adalah?", jawaban: "RT", pilihan: ["RT", "RW", "Desa"] },
        { soal: "Seorang lurah memimpin wilayah?", jawaban: "kelurahan", pilihan: ["kecamatan", "kelurahan", "kabupaten"] },
        { soal: "Seorang camat memimpin wilayah?", jawaban: "kecamatan", pilihan: ["desa", "kecamatan", "kabupaten"] },
        { soal: "Presiden adalah pemimpin di tingkat?", jawaban: "pusat", pilihan: ["provinsi", "pusat", "kabupaten"] },
        { soal: "Kewajiban kita sebagai warga masyarakat adalah?", jawaban: "menjaga kebersihan", pilihan: ["membuang sampah sembarangan", "menjaga kebersihan", "mengganggu tetangga"] }
    ],
    ipas_bab7: [
        { soal: "Tradisi Sekaten berasal dari daerah?", jawaban: "Yogyakarta", pilihan: ["Yogyakarta", "Bali", "Jawa Barat"] },
        { soal: "Nyepi adalah hari raya umat agama?", jawaban: "Hindu", pilihan: ["Islam", "Hindu", "Budha"] },
        { soal: "Karapan Sapi adalah tradisi dari daerah?", jawaban: "Madura", pilihan: ["Madura", "Sumba", "Bali"] },
        { soal: "Nilai gotong royong mengajarkan kita untuk?", jawaban: "bekerja sama", pilihan: ["bekerja sendiri", "bekerja sama", "bersaing"] },
        { soal: "Melestarikan bahasa daerah adalah salah satu cara?", jawaban: "menjaga warisan budaya", pilihan: ["menjaga warisan budaya", "menghilangkan tradisi", "meninggalkan adat"] }
    ],
    ipas_bab8: [
        { soal: "Gunung tertinggi di Indonesia adalah?", jawaban: "Puncak Jaya", pilihan: ["Gunung Merapi", "Gunung Bromo", "Puncak Jaya"] },
        { soal: "Sungai terpanjang di Indonesia adalah?", jawaban: "Sungai Kapuas", pilihan: ["Sungai Kapuas", "Sungai Musi", "Sungai Citarum"] },
        { soal: "Danau terbesar di Indonesia adalah?", jawaban: "Danau Toba", pilihan: ["Danau Toba", "Danau Maninjau", "Danau Singkarak"] },
        { soal: "Masyarakat yang tinggal di pesisir pantai umumnya bekerja sebagai?", jawaban: "nelayan", pilihan: ["petani", "nelayan", "pedagang"] },
        { soal: "Daerah pegunungan cocok untuk menanam?", jawaban: "sayuran", pilihan: ["padi", "sayuran", "kelapa sawit"] }
    ],
    
    // Matematika Questions
    mtk_bilangan: [
        { soal: "Bilangan 345 dibaca?", jawaban: "tiga ratus empat puluh lima", pilihan: ["tiga ratus empat puluh lima", "tiga ratus empat lima", "tiga empat lima"] },
        { soal: "Angka 7 pada bilangan 578 menempati nilai tempat?", jawaban: "puluhan", pilihan: ["ratusan", "puluhan", "satuan"] },
        { soal: "Nilai dari angka 9 pada bilangan 395 adalah?", jawaban: "90", pilihan: ["9", "90", "900"] },
        { soal: "Bilangan yang lebih besar dari 450 adalah?", jawaban: "460", pilihan: ["440", "445", "460"] },
        { soal: "Bilangan 999 dibaca?", jawaban: "sembilan ratus sembilan puluh sembilan", pilihan: ["sembilan sembilan sembilan", "sembilan ratus sembilan puluh sembilan", "sembilan ratus sembilan sembilan"] }
    ],
    mtk_penjumlahan: [
        { soal: "Hasil dari 245 + 124 = ?", jawaban: "369", pilihan: ["359", "369", "379"] },
        { soal: "Hasil dari 178 + 256 = ?", jawaban: "434", pilihan: ["424", "434", "444"] },
        { soal: "123 + 456 = ?", jawaban: "579", pilihan: ["569", "579", "589"] },
        { soal: "289 + 347 = ?", jawaban: "636", pilihan: ["626", "636", "646"] },
        { soal: "555 + 278 = ?", jawaban: "833", pilihan: ["823", "833", "843"] }
    ],
    mtk_pengurangan: [
        { soal: "Hasil dari 425 - 178 = ?", jawaban: "247", pilihan: ["237", "247", "257"] },
        { soal: "567 - 234 = ?", jawaban: "333", pilihan: ["323", "333", "343"] },
        { soal: "800 - 456 = ?", jawaban: "344", pilihan: ["334", "344", "354"] },
        { soal: "912 - 387 = ?", jawaban: "525", pilihan: ["515", "525", "535"] },
        { soal: "600 - 278 = ?", jawaban: "322", pilihan: ["312", "322", "332"] }
    ],
    mtk_perkalian: [
        { soal: "8 x 7 = ?", jawaban: "56", pilihan: ["54", "56", "58"] },
        { soal: "6 x 9 = ?", jawaban: "54", pilihan: ["52", "54", "56"] },
        { soal: "7 x 8 = ?", jawaban: "56", pilihan: ["54", "56", "58"] },
        { soal: "5 x 12 = ?", jawaban: "60", pilihan: ["55", "60", "65"] },
        { soal: "9 x 9 = ?", jawaban: "81", pilihan: ["79", "81", "83"] }
    ],
    mtk_pembagian: [
        { soal: "36 : 6 = ?", jawaban: "6", pilihan: ["5", "6", "7"] },
        { soal: "48 : 8 = ?", jawaban: "6", pilihan: ["5", "6", "7"] },
        { soal: "54 : 9 = ?", jawaban: "6", pilihan: ["5", "6", "7"] },
        { soal: "72 : 8 = ?", jawaban: "9", pilihan: ["8", "9", "10"] },
        { soal: "81 : 9 = ?", jawaban: "9", pilihan: ["8", "9", "10"] }
    ],
    mtk_pecahan: [
        { soal: "1/2 lebih besar dari?", jawaban: "1/4", pilihan: ["1/2", "1/3", "1/4"] },
        { soal: "Pecahan yang nilainya paling kecil adalah?", jawaban: "1/8", pilihan: ["1/2", "1/4", "1/8"] },
        { soal: "1/3 + 1/3 = ?", jawaban: "2/3", pilihan: ["1/3", "2/3", "1"] },
        { soal: "2/4 sama dengan?", jawaban: "1/2", pilihan: ["1/2", "1/3", "1/4"] },
        { soal: "Pecahan 1/4 dibaca?", jawaban: "satu per empat", pilihan: ["satu per dua", "satu per tiga", "satu per empat"] }
    ],
    mtk_satuan: [
        { soal: "1 meter = ... cm", jawaban: "100", pilihan: ["10", "100", "1000"] },
        { soal: "2 km = ... m", jawaban: "2000", pilihan: ["200", "2000", "20"] },
        { soal: "1 kg = ... gram", jawaban: "1000", pilihan: ["100", "1000", "10"] },
        { soal: "3 ons = ... gram", jawaban: "300", pilihan: ["30", "300", "3000"] },
        { soal: "1 liter = ... ml", jawaban: "1000", pilihan: ["100", "1000", "10"] }
    ],
    mtk_waktu: [
        { soal: "1 jam = ... menit", jawaban: "60", pilihan: ["60", "100", "30"] },
        { soal: "2 jam 30 menit = ... menit", jawaban: "150", pilihan: ["120", "150", "180"] },
        { soal: "180 menit = ... jam", jawaban: "3", pilihan: ["2", "3", "4"] },
        { soal: "1 hari = ... jam", jawaban: "24", pilihan: ["12", "24", "48"] },
        { soal: "Pukul 08.30, jarum panjang menunjuk angka?", jawaban: "6", pilihan: ["8", "6", "3"] }
    ],
    
    // Bahasa Indonesia Questions
    bindo_membaca: [
        { soal: "Dalam cerita 'Liburan di Rumah Nenek', Siti pergi ke mana?", jawaban: "rumah nenek", pilihan: ["rumah teman", "rumah nenek", "sekolah"] },
        { soal: "Berapa lama perjalanan Siti ke rumah nenek?", jawaban: "2 jam", pilihan: ["1 jam", "2 jam", "3 jam"] },
        { soal: "Apa yang dibuat nenek untuk Siti?", jawaban: "kue bolu", pilihan: ["kue bolu", "nasi goreng", "jus buah"] },
        { soal: "Siti bermain apa dengan sepupunya?", jawaban: "petak umpet", pilihan: ["petak umpet", "bola", "lompat tali"] },
        { soal: "Siti berjanji akan datang lagi kapan?", jawaban: "bulan depan", pilihan: ["minggu depan", "bulan depan", "tahun depan"] }
    ],
    bindo_idepokok: [
        { soal: "Ide pokok adalah...", jawaban: "gagasan utama paragraf", pilihan: ["gagasan utama paragraf", "kalimat penjelas", "akhir cerita"] },
        { soal: "Kalimat utama biasanya terletak di...", jawaban: "awal atau akhir paragraf", pilihan: ["tengah paragraf", "awal atau akhir paragraf", "setiap kalimat"] },
        { soal: "Paragraf tentang 'Buah mangga mengandung vitamin C' memiliki ide pokok?", jawaban: "manfaat buah mangga", pilihan: ["manfaat buah mangga", "rasa buah mangga", "cara makan mangga"] },
        { soal: "Ide pokok disebut juga...", jawaban: "gagasan pokok", pilihan: ["gagasan pokok", "kalimat penjelas", "kesimpulan"] },
        { soal: "Untuk menemukan ide pokok, kita harus...", jawaban: "membaca seluruh paragraf", pilihan: ["membaca judul saja", "membaca seluruh paragraf", "membaca kalimat terakhir"] }
    ],
    bindo_kosakata: [
        { soal: "Sinonim dari kata 'cepat' adalah?", jawaban: "kencang", pilihan: ["lambat", "kencang", "pelan"] },
        { soal: "Antonim dari kata 'besar' adalah?", jawaban: "kecil", pilihan: ["besar", "kecil", "tinggi"] },
        { soal: "Persamaan kata 'senang' adalah?", jawaban: "gembira", pilihan: ["sedih", "gembira", "marah"] },
        { soal: "Lawan kata 'panas' adalah?", jawaban: "dingin", pilihan: ["hangat", "dingin", "sejuk"] },
        { soal: "Sinonim dari 'pintar' adalah?", jawaban: "cerdas", pilihan: ["bodoh", "cerdas", "rajin"] }
    ],
    bindo_kalimat: [
        { soal: "Contoh kalimat tanya yang benar adalah?", jawaban: "Siapa nama gurumu?", pilihan: ["Tutup pintu!", "Siapa nama gurumu?", "Aku senang"] },
        { soal: "Kalimat perintah biasanya diakhiri dengan tanda?", jawaban: "!", pilihan: [".", "?", "!"] },
        { soal: "Kata tanya untuk menanyakan tempat adalah?", jawaban: "di mana", pilihan: ["siapa", "kapan", "di mana"] },
        { soal: "Contoh kalimat ajakan adalah?", jawaban: "Marilah kita belajar", pilihan: ["Pergi kamu!", "Marilah kita belajar", "Siapa namamu?"] },
        { soal: "Kata tanya untuk menanyakan alasan adalah?", jawaban: "mengapa", pilihan: ["apa", "mengapa", "berapa"] }
    ],
    bindo_menulis: [
        { soal: "Bagian cerita yang berisi pengenalan tokoh dan tempat disebut?", jawaban: "orientasi", pilihan: ["orientasi", "komplikasi", "resolusi"] },
        { soal: "Konflik dalam cerita disebut juga?", jawaban: "komplikasi", pilihan: ["orientasi", "komplikasi", "koda"] },
        { soal: "Penyelesaian masalah dalam cerita disebut?", jawaban: "resolusi", pilihan: ["orientasi", "komplikasi", "resolusi"] },
        { soal: "Pesan moral dalam cerita disebut?", jawaban: "koda", pilihan: ["orientasi", "komplikasi", "koda"] },
        { soal: "Cerita yang baik harus memiliki struktur yang...", jawaban: "jelas dan runtut", pilihan: ["acak", "jelas dan runtut", "panjang"] }
    ],
    bindo_puisi: [
        { soal: "Ciri-ciri puisi adalah...", jawaban: "memiliki rima", pilihan: ["memiliki rima", "cerita panjang", "tanpa bait"] },
        { soal: "Satu bait puisi biasanya terdiri dari... baris", jawaban: "4", pilihan: ["2", "4", "6"] },
        { soal: "Persamaan bunyi di akhir baris puisi disebut?", jawaban: "rima", pilihan: ["irama", "rima", "majas"] },
        { soal: "Puisi menggunakan kata-kata...", jawaban: "indah", pilihan: ["biasa", "indah", "sulit"] },
        { soal: "Contoh puisi untuk anak-anak biasanya bertema?", jawaban: "kegembiraan", pilihan: ["kesedihan", "kegembiraan", "kemarahan"] }
    ],
    bindo_dongeng: [
        { soal: "Tokoh utama dalam dongeng 'Si Kancil dan Buaya' adalah?", jawaban: "Kancil", pilihan: ["Buaya", "Kancil", "Harimau"] },
        { soal: "Kancil ingin menyeberangi?", jawaban: "sungai", pilihan: ["laut", "sungai", "gunung"] },
        { soal: "Kancil menggunakan akalnya untuk...", jawaban: "menghitung buaya", pilihan: ["menghitung buaya", "memberi makan buaya", "bertarung dengan buaya"] },
        { soal: "Pesan moral dari dongeng tersebut adalah?", jawaban: "kecerdikan mengalahkan kekuatan", pilihan: ["kekuatan lebih penting", "kecerdikan mengalahkan kekuatan", "kejujuran yang utama"] },
        { soal: "Siapa yang tertipu oleh Kancil?", jawaban: "buaya", pilihan: ["harimau", "buaya", "singa"] }
    ],
    bindo_ungkapan: [
        { soal: "'Hatiku berbunga-bunga' artinya?", jawaban: "sangat senang", pilihan: ["sangat sedih", "sangat senang", "sangat marah"] },
        { soal: "'Darahku mendidih' artinya?", jawaban: "sangat marah", pilihan: ["sangat senang", "sangat marah", "sangat takut"] },
        { soal: "'Air mata berlinang' artinya?", jawaban: "menangis", pilihan: ["tertawa", "menangis", "marah"] },
        { soal: "'Jantungku berdebar kencang' artinya?", jawaban: "takut/deg-degan", pilihan: ["senang", "takut/deg-degan", "marah"] },
        { soal: "'Pucat pasi' artinya?", jawaban: "wajah pucat karena takut", pilihan: ["wajah merah", "wajah pucat karena takut", "wajah berseri"] }
    ]
};

// ======================== IPAS - 8 BAB LENGKAP ========================
const ipasTopics = {
    "bab1": {
        judul: "🐾 Bab 1: Mari Kenali Hewan di Sekitar Kita",
        konten: "<strong>✨ Hewan di Sekitar Kita</strong><br><br>" +
               "<div style='display:flex; flex-wrap:wrap; gap:8px; margin:10px 0;'>" +
               "<div class='animal-card' onclick='window.speakText(\"Kucing adalah hewan peliharaan yang lucu. Kucing suka bermain bola dan memakan ikan.\")'><span class='animal-walk'>🐱</span><br>Kucing</div>" +
               "<div class='animal-card' onclick='window.speakText(\"Anjing adalah hewan yang setia kepada majikannya. Anjing suka menggonggong dan berlari.\")'><span class='animal-bounce'>🐶</span><br>Anjing</div>" +
               "<div class='animal-card' onclick='window.speakText(\"Kelinci adalah hewan yang suka makan wortel. Kelinci memiliki telinga panjang dan ekor pendek.\")'><span class='animal-float'>🐰</span><br>Kelinci</div>" +
               "<div class='animal-card' onclick='window.speakText(\"Burung adalah hewan yang bisa terbang. Burung memiliki paruh dan sayap.\")'><span class='animal-fly'>🐦</span><br>Burung</div>" +
               "<div class='animal-card' onclick='window.speakText(\"Ikan adalah hewan yang hidup di air. Ikan bernapas dengan insang.\")'><span class='animal-walk'>🐟</span><br>Ikan</div>" +
               "<div class='animal-card' onclick='window.speakText(\"Kupu-kupu adalah serangga yang indah. Kupu-kupu membantu penyerbukan bunga.\")'><span class='animal-fly'>🦋</span><br>Kupu-kupu</div>" +
               "</div><br>" +
               "<span class='animal-wiggle'>🦁</span> <strong>Hewan berdasarkan tempat hidup:</strong><br>" +
               "• Hewan darat: kucing, kambing, sapi, ayam, kelinci, gajah, harimau<br>" +
               "• Hewan air: ikan, udang, kepiting, cumi-cumi, paus, lumba-lumba<br>" +
               "• Hewan amfibi: katak (hidup di air dan darat)<br><br>" +
               "<span class='animal-heartbeat'>🦒</span> <strong>Hewan berdasarkan makanan:</strong><br>" +
               "• Herbivora (pemakan tumbuhan): sapi, kambing, kelinci, gajah, kuda, jerapah<br>" +
               "• Karnivora (pemakan daging): harimau, singa, serigala, elang, hiu, buaya<br>" +
               "• Omnivora (pemakan segalanya): ayam, tikus, beruang, orangutan, babi, musang<br><br>" +
               "📌 <strong>Contoh soal:</strong> Sapi memakan rumput, maka sapi termasuk hewan herbivora.",
        suara: "Selamat datang di Bab 1, Mari Kenali Hewan di Sekitar Kita. Hewan di sekitar kita dapat dikelompokkan berdasarkan tempat hidupnya. Pertama, hewan darat adalah hewan yang hidup di daratan. Contoh hewan darat antara lain kucing, kambing, sapi, ayam, kelinci, gajah, dan harimau. Kedua, hewan air adalah hewan yang hidup di air. Contoh hewan air antara lain ikan, udang, kepiting, cumi-cumi, paus, dan lumba-lumba. Ketiga, hewan amfibi adalah hewan yang bisa hidup di dua tempat, yaitu di air dan di darat. Contoh hewan amfibi adalah katak. Selain berdasarkan tempat hidup, hewan juga dapat dikelompokkan berdasarkan jenis makanannya. Pertama, herbivora adalah hewan pemakan tumbuhan. Contoh hewan herbivora adalah sapi, kambing, kelinci, gajah, kuda, dan jerapah. Kedua, karnivora adalah hewan pemakan daging. Contoh hewan karnivora adalah harimau, singa, serigala, elang, hiu, dan buaya. Ketiga, omnivora adalah hewan pemakan segalanya, baik tumbuhan maupun daging. Contoh hewan omnivora adalah ayam, tikus, beruang, orangutan, babi, dan musang. Contoh soal: Sapi memakan rumput, maka sapi termasuk hewan herbivora. Selamat belajar, semoga mudah dipahami!"
    },
    "bab2": {
        judul: "🦋 Bab 2: Siklus pada Makhluk Hidup",
        konten: "<strong>✨ Metamorfosis (Perubahan Bentuk)</strong><br><br>" +
               "<span class='animal-fly' style='font-size:48px'>🦋</span> <strong>Kupu-kupu (Metamorfosis Sempurna):</strong><br>" +
               "🥚 Telur → 🐛 Ulat → 🧴 Kepompong → 🦋 Kupu-kupu dewasa<br>" +
               "⭐ Peran kupu-kupu: membantu penyerbukan bunga (tanpa kupu-kupu, bunga susah menjadi buah)<br><br>" +
               "<span class='animal-bounce' style='font-size:48px'>🐸</span> <strong>Katak (Metamorfosis Sempurna):</strong><br>" +
               "🥚 Telur (dalam air) → 🐸 Kecebong (berenang, bernapas insang) → 🐸 Katak berekor → 🐸 Katak dewasa (bernapas paru-paru)<br><br>" +
               "<span class='animal-walk' style='font-size:48px'>🐔</span> <strong>Ayam (Metamorfosis Tidak Sempurna):</strong><br>" +
               "🥚 Telur (dierami 21 hari) → 🐤 Anak ayam → 🐔 Ayam dewasa<br><br>" +
               "<span class='animal-heartbeat' style='font-size:48px'>🌱</span> <strong>Daur Hidup Tumbuhan:</strong><br>" +
               "Biji → Tunas → Tanaman dewasa → Berbunga → Berbuah → Biji baru",
        suara: "Bab 2 tentang Siklus pada Makhluk Hidup. Metamorfosis adalah perubahan bentuk pada makhluk hidup. Ada dua jenis metamorfosis, yaitu metamorfosis sempurna dan metamorfosis tidak sempurna. Pertama, mari kita pelajari tentang kupu-kupu. Kupu-kupu mengalami metamorfosis sempurna. Tahapan metamorfosis kupu-kupu dimulai dari telur. Telur kupu-kupu kemudian menetas menjadi ulat. Setelah itu, ulat berubah menjadi kepompong. Dan akhirnya, kepompong berubah menjadi kupu-kupu dewasa. Peran kupu-kupu sangat penting karena membantu penyerbukan bunga. Tanpa kupu-kupu, bunga akan sulit menjadi buah. Kedua, katak juga mengalami metamorfosis sempurna. Katak bertelur di dalam air. Telur katak menetas menjadi kecebong. Kecebong berenang dan bernapas dengan insang. Kemudian kecebong tumbuh kaki dan berekor menjadi katak berekor. Setelah itu, ekornya hilang dan menjadi katak dewasa yang bernapas dengan paru-paru. Ketiga, ayam mengalami metamorfosis tidak sempurna. Ayam betina bertelur. Telur ayam dierami oleh induknya selama dua puluh satu hari. Setelah itu, telur menetas menjadi anak ayam. Anak ayam kemudian tumbuh menjadi ayam dewasa. Keempat, tumbuhan juga memiliki daur hidup. Daur hidup tumbuhan dimulai dari biji. Biji yang ditanam akan tumbuh menjadi tunas. Tunas tumbuh menjadi tanaman dewasa. Tanaman dewasa akan berbunga. Bunga akan berbuah. Dan buah akan menghasilkan biji baru. Selamat belajar!"
    },
    "bab3": {
        judul: "🌳 Bab 3: Hidup Bersama Alam",
        konten: "<strong>✨ Ekosistem dan Interaksi Makhluk Hidup</strong><br><br>" +
               "🌍 <strong>Ekosistem adalah</strong> hubungan timbal balik antara makhluk hidup dengan lingkungannya.<br><br>" +
               "🌿 <strong>Rantai Makanan:</strong><br>" +
               "<span class='animal-walk'>🌾</span> Padi → <span class='animal-bounce'>🐭</span> Tikus → <span class='animal-walk'>🐍</span> Ular → <span class='animal-fly'>🦅</span> Elang<br>" +
               "<span class='animal-float'>🌿</span> Rumput → <span class='animal-bounce'>🐐</span> Kambing → <span class='animal-walk'>🐯</span> Harimau<br>" +
               "<span class='animal-fly'>🌸</span> Bunga → <span class='animal-fly'>🦋</span> Kupu-kupu → <span class='animal-fly'>🐦</span> Burung → <span class='animal-walk'>🐱</span> Kucing<br><br>" +
               "♻️ <strong>Keseimbangan Alam:</strong> Jika satu hewan punah, rantai makanan terganggu.<br><br>" +
               "💚 <strong>Cara melestarikan alam:</strong><br>" +
               "• Tidak memburu hewan liar<br>" +
               "• Menanam pohon (reboisasi)<br>" +
               "• Membuang sampah pada tempatnya<br>" +
               "• Mendaur ulang sampah (3R: Reduce, Reuse, Recycle)",
        suara: "Bab 3 tentang Hidup Bersama Alam. Ekosistem adalah hubungan timbal balik antara makhluk hidup dengan lingkungannya. Dalam ekosistem, terjadi rantai makanan. Rantai makanan adalah peristiwa makan dan dimakan antara makhluk hidup. Berikut contoh rantai makanan yang pertama: Padi dimakan oleh tikus, tikus dimakan oleh ular, dan ular dimakan oleh elang. Contoh rantai makanan yang kedua: Rumput dimakan oleh kambing, dan kambing dimakan oleh harimau. Contoh rantai makanan yang ketiga: Bunga dihisap sarinya oleh kupu-kupu, kupu-kupu dimakan oleh burung, dan burung dimakan oleh kucing. Keseimbangan alam sangat penting. Jika satu hewan punah, maka rantai makanan akan terganggu. Oleh karena itu, kita harus melestarikan alam. Cara melestarikan alam antara lain: Pertama, tidak memburu hewan liar. Kedua, menanam pohon atau disebut juga reboisasi. Ketiga, membuang sampah pada tempatnya. Keempat, mendaur ulang sampah dengan prinsip 3R yaitu Reduce, Reuse, dan Recycle. Selamat belajar!"
    },
    "bab4": {
        judul: "⚡ Bab 4: Berkenalan dengan Energi",
        konten: "<strong>✨ Sumber dan Bentuk Energi</strong><br><br>" +
               "☀️ <strong>Sumber energi:</strong> Matahari, Angin, Air, Baterai, Makanan, Bahan bakar minyak (bensin, solar, gas)<br><br>" +
               "💡 <strong>Bentuk energi:</strong> Energi panas, Energi cahaya, Energi bunyi, Energi gerak, Energi listrik, Energi kimia<br><br>" +
               "🔋 <strong>Hemat energi:</strong> Matikan lampu jika tidak dipakai, gunakan air secukupnya, kurangi penggunaan kendaraan bermotor!",
        suara: "Bab 4 tentang Berkenalan dengan Energi. Energi adalah kemampuan untuk melakukan usaha atau kerja. Sumber energi adalah segala sesuatu yang menghasilkan energi. Sumber energi terbesar di bumi adalah matahari. Selain matahari, sumber energi lainnya antara lain angin, air, baterai, makanan, dan bahan bakar minyak seperti bensin, solar, dan gas. Bentuk-bentuk energi antara lain: pertama, energi panas, contohnya panas dari matahari dan api. Kedua, energi cahaya, contohnya cahaya lampu dan senter. Ketiga, energi bunyi, contohnya suara dari speaker dan gitar. Keempat, energi gerak, contohnya kipas angin yang berputar dan mobil yang berjalan. Kelima, energi listrik, contohnya listrik yang menyalakan televisi dan kulkas. Keenam, energi kimia, contohnya energi dari baterai dan makanan yang kita makan. Kita harus hemat energi. Cara menghemat energi antara lain: matikan lampu jika tidak digunakan, gunakan air secukupnya, dan kurangi penggunaan kendaraan bermotor. Selamat belajar!"
    },
    "bab5": {
        judul: "🏠 Bab 5: Aku dan Lingkungan Sekitarku",
        konten: "<strong>✨ Denah Rumah dan Lingkungan</strong><br><br>" +
               "🧭 <strong>Arah Mata Angin:</strong> Utara (U), Selatan (S), Timur (T), Barat (B), Timur Laut (TL), Tenggara (TG), Barat Daya (BD), Barat Laut (BL)<br><br>" +
               "🏡 <strong>Komponen Denah Rumah:</strong> Kamar tidur, ruang tamu, dapur, kamar mandi, teras, garasi, taman, ruang keluarga<br><br>" +
               "🏘️ <strong>Fasilitas Umum di Lingkungan:</strong> Masjid/mushola, sekolah, pasar, rumah sakit, puskesmas, taman, kantor polisi, kantor pos, balai desa, stasiun, terminal<br><br>" +
               "🏔️ <strong>Kenampakan Alam:</strong> gunung, sungai, danau, laut, pantai, lembah, bukit, rawa, hutan, gurun<br>" +
               "🏢 <strong>Kenampakan Buatan:</strong> gedung, jembatan, waduk, bendungan, sawah, perkebunan, bandara, pelabuhan",
        suara: "Bab 5 tentang Aku dan Lingkungan Sekitarku. Denah adalah gambar yang menunjukkan letak suatu tempat. Untuk membaca denah, kita perlu memahami arah mata angin. Ada delapan arah mata angin, yaitu: Utara, Selatan, Timur, Barat, Timur Laut, Tenggara, Barat Daya, dan Barat Laut. Komponen denah rumah antara lain: kamar tidur untuk beristirahat, ruang tamu untuk menerima tamu, dapur untuk memasak, kamar mandi, teras, garasi, taman, dan ruang keluarga. Fasilitas umum adalah tempat yang digunakan bersama oleh masyarakat. Contoh fasilitas umum: masjid atau mushola untuk beribadah, sekolah untuk belajar, pasar untuk berbelanja, rumah sakit dan puskesmas untuk berobat, taman untuk bermain, kantor polisi untuk keamanan, kantor pos untuk mengirim surat, balai desa untuk musyawarah, stasiun dan terminal untuk transportasi. Kenampakan alam adalah bentang alam yang terbentuk secara alami. Contoh kenampakan alam: gunung, sungai, danau, laut, pantai, lembah, bukit, rawa, hutan, dan gurun. Kenampakan buatan adalah bentang alam yang dibuat oleh manusia. Contoh kenampakan buatan: gedung, jembatan, waduk, bendungan, sawah, perkebunan, bandara, dan pelabuhan. Selamat belajar!"
    },
    "bab6": {
        judul: "🏛️ Bab 6: Aku Bagian dari Masyarakat",
        konten: "<strong>✨ Pemerintahan di Daerahku</strong><br><br>" +
               "🏠 <strong>Tingkatan Pemerintahan (dari terkecil ke terbesar):</strong><br>" +
               "• RT (Rukun Tetangga) - dipimpin oleh Ketua RT<br>" +
               "• RW (Rukun Warga) - dipimpin oleh Ketua RW<br>" +
               "• Desa/Kelurahan - dipimpin oleh Kepala Desa/Lurah<br>" +
               "• Kecamatan - dipimpin oleh Camat<br>" +
               "• Kabupaten/Kota - dipimpin oleh Bupati/Walikota<br>" +
               "• Provinsi - dipimpin oleh Gubernur<br>" +
               "• Pusat - dipimpin oleh Presiden<br><br>" +
               "👨‍💼 <strong>Tugas Pemimpin:</strong> Melayani dan mengayomi masyarakat, menjaga keamanan dan ketertiban, membangun fasilitas umum, menyerap aspirasi masyarakat<br><br>" +
               "🤝 <strong>Kewajiban di Lingkungan Masyarakat:</strong> Menjaga kebersihan (ikut kerja bakti), menghormati tetangga, mematuhi peraturan yang berlaku, membayar iuran RT untuk kebersihan",
        suara: "Bab 6 tentang Aku Bagian dari Masyarakat. Dalam kehidupan bermasyarakat, ada tingkatan pemerintahan dari yang terkecil hingga terbesar. Tingkatan pertama adalah RT atau Rukun Tetangga, dipimpin oleh Ketua RT. Tingkatan kedua adalah RW atau Rukun Warga, dipimpin oleh Ketua RW. Tingkatan ketiga adalah Desa atau Kelurahan, dipimpin oleh Kepala Desa atau Lurah. Tingkatan keempat adalah Kecamatan, dipimpin oleh Camat. Tingkatan kelima adalah Kabupaten atau Kota, dipimpin oleh Bupati atau Walikota. Tingkatan keenam adalah Provinsi, dipimpin oleh Gubernur. Tingkatan ketujuh adalah Pusat, dipimpin oleh Presiden. Tugas seorang pemimpin antara lain: melayani dan mengayomi masyarakat, menjaga keamanan dan ketertiban, membangun fasilitas umum seperti jalan, jembatan, sekolah, dan rumah sakit, serta menyerap aspirasi masyarakat. Sebagai anggota masyarakat, kita juga memiliki kewajiban. Kewajiban kita antara lain: menjaga kebersihan lingkungan dengan ikut kerja bakti, menghormati tetangga dan orang yang lebih tua, mematuhi peraturan yang berlaku, serta membayar iuran RT untuk kebersihan. Selamat belajar!"
    },
    "bab7": {
        judul: "📜 Bab 7: Cerita dari Kampung Halaman",
        konten: "<strong>✨ Tradisi Keluarga dan Masyarakat</strong><br><br>" +
               "🎉 <strong>Contoh Tradisi di Indonesia:</strong><br>" +
               "• Sekaten (Yogyakarta) - peringatan Maulid Nabi Muhammad SAW<br>" +
               "• Seren Taun (Jawa Barat) - syukuran panen padi masyarakat Sunda<br>" +
               "• Lomban (Jepara) - sedekah laut dengan mengapungkan kepala kerbau<br>" +
               "• Grebeg Sudiro (Solo) - akulturasi budaya Jawa dan Tionghoa<br>" +
               "• Nyepi (Bali) - hari raya umat Hindu dengan berdiam diri<br>" +
               "• Cap Go Meh (Tionghoa) - puncak perayaan Imlek<br>" +
               "• Pasola (Sumba) - perang tanding berkuda<br>" +
               "• Karapan Sapi (Madura) - adu cepat sapi<br><br>" +
               "📖 <strong>Nilai-Nilai Tradisi:</strong> Gotong royong, hormat kepada orang tua dan leluhur, syukur kepada Tuhan Yang Maha Esa, kebersamaan dan persatuan<br><br>" +
               "🏺 <strong>Menjaga Warisan Budaya:</strong> Mempelajari tarian daerah, melestarikan bahasa daerah, mengikuti upacara adat dengan tertib, mengenakan pakaian adat pada acara tertentu",
        suara: "Bab 7 tentang Cerita dari Kampung Halaman. Setiap daerah di Indonesia memiliki tradisi yang unik. Berikut beberapa contoh tradisi di Indonesia. Pertama, Sekaten dari Yogyakarta, yaitu tradisi peringatan Maulid Nabi Muhammad SAW. Kedua, Seren Taun dari Jawa Barat, yaitu syukuran panen padi masyarakat Sunda. Ketiga, Lomban dari Jepara, yaitu sedekah laut dengan mengapungkan kepala kerbau. Keempat, Grebeg Sudiro dari Solo, yaitu akulturasi budaya Jawa dan Tionghoa. Kelima, Nyepi dari Bali, yaitu hari raya umat Hindu dengan berdiam diri. Keenam, Cap Go Meh dari masyarakat Tionghoa, yaitu puncak perayaan Imlek. Ketujuh, Pasola dari Sumba, yaitu perang tanding berkuda. Kedelapan, Karapan Sapi dari Madura, yaitu adu cepat sapi. Tradisi mengandung nilai-nilai luhur, antara lain: gotong royong atau kerja sama dalam masyarakat, hormat kepada orang tua dan leluhur, rasa syukur kepada Tuhan Yang Maha Esa, serta kebersamaan dan persatuan. Kita harus menjaga warisan budaya dengan cara: mempelajari tarian daerah, melestarikan bahasa daerah, mengikuti upacara adat dengan tertib, serta mengenakan pakaian adat pada acara-acara tertentu. Selamat belajar!"
    },
    "bab8": {
        judul: "🗺️ Bab 8: Bentang Alam Indonesia",
        konten: "<strong>✨ Ragam Bentang Alam di Indonesia</strong><br><br>" +
               "🏔️ <strong>Bentang Alam Daratan:</strong><br>" +
               "• Gunung (contoh: Gunung Bromo, Gunung Merapi, Gunung Rinjani, Gunung Krakatau)<br>" +
               "• Bukit, lembah, dataran rendah, dataran tinggi, plateau<br>" +
               "• Hutan (hutan hujan tropis, hutan bakau), rawa, gurun pasir<br><br>" +
               "🌊 <strong>Bentang Alam Perairan:</strong><br>" +
               "• Laut (Laut Jawa, Laut Banda, Laut Sulawesi, Samudera Hindia, Samudera Pasifik)<br>" +
               "• Sungai (Sungai Kapuas, Sungai Mahakam, Sungai Citarum, Sungai Musi)<br>" +
               "• Danau (Danau Toba, Danau Maninjau, Danau Singkarak, Danau Poso)<br>" +
               "• Waduk, rawa air tawar, telaga, selat (Selat Lombok, Selat Sunda, Selat Malaka), teluk (Teluk Jakarta, Teluk Bayur, Teluk Bone)<br><br>" +
               "👨‍🌾 <strong>Pengaruh Bentang Alam terhadap Pekerjaan:</strong><br>" +
               "• Pegunungan/dataran tinggi: petani sayur (wortel, kubis, kentang), peternak sapi perah, perkebunan teh<br>" +
               "• Dataran rendah: petani padi, jagung, kedelai; kawasan industri, perkantoran<br>" +
               "• Pesisir pantai/kelautan: nelayan, pembuat garam, budidaya rumput laut, tambak udang dan bandeng<br>" +
               "• Sungai/danau: nelayan air tawar, petani apung, pariwisata air<br><br>" +
               "🌏 <strong>Keberagaman Budaya Akibat Bentang Alam:</strong> Rumah panggung di daerah rawan banjir, pakaian tebal di daerah dingin pegunungan, mata pencaharian berbeda-beda sesuai alam sekitarnya",
        suara: "Bab 8 tentang Bentang Alam Indonesia. Indonesia memiliki bentang alam yang beragam. Pertama, bentang alam daratan. Daratan meliputi gunung, contohnya Gunung Bromo, Gunung Merapi, Gunung Rinjani, dan Gunung Krakatau. Ada juga bukit, lembah, dataran rendah, dataran tinggi, dan plateau. Selain itu, ada hutan seperti hutan hujan tropis dan hutan bakau, rawa, serta gurun pasir. Kedua, bentang alam perairan. Perairan meliputi laut, contohnya Laut Jawa, Laut Banda, Laut Sulawesi, Samudera Hindia, dan Samudera Pasifik. Ada sungai seperti Sungai Kapuas, Sungai Mahakam, Sungai Citarum, dan Sungai Musi. Ada danau seperti Danau Toba, Danau Maninjau, Danau Singkarak, dan Danau Poso. Ada juga waduk, rawa air tawar, telaga, selat seperti Selat Lombok, Selat Sunda, dan Selat Malaka, serta teluk seperti Teluk Jakarta, Teluk Bayur, dan Teluk Bone. Bentang alam mempengaruhi jenis pekerjaan masyarakat. Di daerah pegunungan atau dataran tinggi, masyarakat bekerja sebagai petani sayur seperti wortel, kubis, dan kentang, peternak sapi perah, atau perkebunan teh. Di dataran rendah, masyarakat bekerja sebagai petani padi, jagung, dan kedelai, serta bekerja di kawasan industri dan perkantoran. Di pesisir pantai, masyarakat bekerja sebagai nelayan, pembuat garam, budidaya rumput laut, serta tambak udang dan bandeng. Di sungai dan danau, masyarakat bekerja sebagai nelayan air tawar, petani apung, dan pariwisata air. Bentang alam juga mempengaruhi keberagaman budaya. Misalnya, rumah panggung banyak ditemukan di daerah rawan banjir. Pakaian tebal digunakan di daerah dingin pegunungan. Mata pencaharian masyarakat berbeda-beda sesuai dengan alam di sekitarnya. Selamat belajar!"
    }
};

// ======================== MATEMATIKA LENGKAP - 8 Topik ========================
const matematikaTopics = {
    "bilangan": {
        judul: "🔢 Bilangan Cacah 1-1000",
        konten: "<strong>✨ Bilangan Cacah</strong><br><br>" +
               "Bilangan cacah adalah bilangan yang dimulai dari 0, 1, 2, 3, ... dan seterusnya sampai tak terhingga.<br><br>" +
               "📌 <strong>Cara membaca bilangan:</strong><br>" +
               "245 dibaca <strong>dua ratus empat puluh lima</strong><br>" +
               "708 dibaca <strong>tujuh ratus delapan</strong><br>" +
               "310 dibaca <strong>tiga ratus sepuluh</strong><br>" +
               "999 dibaca <strong>sembilan ratus sembilan puluh sembilan</strong><br><br>" +
               "📝 <strong>Nilai tempat bilangan:</strong><br>" +
               "Pada bilangan 345:<br>" +
               "• Angka 3 menempati tempat ratusan = 300<br>" +
               "• Angka 4 menempati tempat puluhan = 40<br>" +
               "• Angka 5 menempati tempat satuan = 5<br><br>" +
               "📝 <strong>Perbandingan bilangan:</strong><br>" +
               "500 > 300 (lebih besar), 250 < 300 (lebih kecil), 450 = 450 (sama dengan)",
        suara: "Mari kita belajar tentang bilangan cacah. Bilangan cacah adalah bilangan yang dimulai dari nol, satu, dua, tiga, dan seterusnya sampai tak terhingga. Sekarang kita belajar cara membaca bilangan. Contoh pertama, angka dua ratus empat puluh lima dibaca dua ratus empat puluh lima. Contoh kedua, angka tujuh ratus delapan dibaca tujuh ratus delapan. Contoh ketiga, angka tiga ratus sepuluh dibaca tiga ratus sepuluh. Contoh keempat, angka sembilan ratus sembilan puluh sembilan dibaca sembilan ratus sembilan puluh sembilan. Selanjutnya, kita belajar tentang nilai tempat. Perhatikan bilangan tiga ratus empat puluh lima. Angka tiga menempati tempat ratusan, nilainya tiga ratus. Angka empat menempati tempat puluhan, nilainya empat puluh. Angka lima menempati tempat satuan, nilainya lima. Terakhir, kita belajar membandingkan bilangan. Lima ratus lebih besar dari tiga ratus. Dua ratus lima puluh lebih kecil dari tiga ratus. Empat ratus lima puluh sama dengan empat ratus lima puluh. Selamat belajar!"
    },
    "penjumlahan": {
        judul: "➕ Penjumlahan (Tanpa dan Dengan Menyimpan)",
        konten: "<strong>✨ Cara Penjumlahan Bersusun</strong><br><br>" +
               "📌 <strong>Contoh 1 (tanpa menyimpan):</strong><br>" +
               "    245<br>" +
               "    124<br>" +
               "    ---+<br>" +
               "    369<br><br>" +
               "📌 <strong>Contoh 2 (dengan menyimpan):</strong><br>" +
               "    178<br>" +
               "    256<br>" +
               "    ---+<br>" +
               "    434<br>" +
               "Langkah: 8+6=14 (tulis 4, simpan 1 ke puluhan) → 1+7+5=13 (tulis 3, simpan 1 ke ratusan) → 1+1+2=4<br><br>" +
               "📌 <strong>Soal latihan:</strong><br>" +
               "1. 123 + 456 = 579<br>" +
               "2. 289 + 347 = 636<br>" +
               "3. 555 + 278 = 833",
        suara: "Mari kita belajar penjumlahan bersusun. Ada dua jenis penjumlahan bersusun, yaitu penjumlahan tanpa menyimpan dan penjumlahan dengan menyimpan. Contoh pertama, penjumlahan tanpa menyimpan. Dua ratus empat puluh lima ditambah seratus dua puluh empat. Kita jumlahkan satuan dulu: lima tambah empat sama dengan sembilan. Puluhan: empat tambah dua sama dengan enam. Ratusan: dua tambah satu sama dengan tiga. Jadi hasilnya tiga ratus enam puluh sembilan. Contoh kedua, penjumlahan dengan menyimpan. Seratus tujuh puluh delapan ditambah dua ratus lima puluh enam. Langkah pertama, jumlahkan satuan: delapan tambah enam sama dengan empat belas. Kita tulis angka empat, dan simpan satu ke puluhan. Langkah kedua, jumlahkan puluhan: satu yang tadi disimpan ditambah tujuh ditambah lima sama dengan tiga belas. Kita tulis angka tiga, dan simpan satu ke ratusan. Langkah ketiga, jumlahkan ratusan: satu yang tadi disimpan ditambah satu ditambah dua sama dengan empat. Jadi hasilnya empat ratus tiga puluh empat. Untuk latihan, coba kerjakan soal berikut. Seratus dua puluh tiga ditambah empat ratus lima puluh enam sama dengan lima ratus tujuh puluh sembilan. Dua ratus delapan puluh sembilan ditambah tiga ratus empat puluh tujuh sama dengan enam ratus tiga puluh enam. Lima ratus lima puluh lima ditambah dua ratus tujuh puluh delapan sama dengan delapan ratus tiga puluh tiga. Selamat belajar!"
    },
    "pengurangan": {
        judul: "➖ Pengurangan (Meminjam)",
        konten: "<strong>✨ Pengurangan Bersusun dengan Teknik Meminjam</strong><br><br>" +
               "📌 <strong>Contoh: 425 - 178</strong><br><br>" +
               "Langkah-langkah:<br>" +
               "1. Satuan: 5 - 8 (tidak bisa, pinjam 1 puluhan dari angka 2)<br>" +
               "   → 2 menjadi 1, 5 menjadi 15, 15 - 8 = 7<br>" +
               "2. Puluhan: 1 (sisa puluhan) - 7 (tidak bisa, pinjam 1 ratusan dari angka 4)<br>" +
               "   → 4 menjadi 3, 1 menjadi 11, 11 - 7 = 4<br>" +
               "3. Ratusan: 3 - 1 = 2<br>" +
               "Hasil akhir: 247<br><br>" +
               "📌 <strong>Soal latihan:</strong><br>" +
               "1. 567 - 234 = 333<br>" +
               "2. 800 - 456 = 344<br>" +
               "3. 912 - 387 = 525",
        suara: "Mari kita belajar pengurangan bersusun dengan teknik meminjam. Contoh soal: empat ratus dua puluh lima dikurangi seratus tujuh puluh delapan. Langkah pertama, kita lihat angka satuan. Lima dikurang delapan tidak bisa, karena lima lebih kecil dari delapan. Maka kita pinjam satu puluhan dari angka dua. Angka dua menjadi satu, dan angka lima menjadi lima belas. Lima belas dikurang delapan sama dengan tujuh. Langkah kedua, kita lihat angka puluhan. Sekarang angka puluhan tersisa satu. Satu dikurang tujuh tidak bisa, karena satu lebih kecil dari tujuh. Maka kita pinjam satu ratusan dari angka empat. Angka empat menjadi tiga, dan angka satu menjadi sebelas. Sebelas dikurang tujuh sama dengan empat. Langkah ketiga, kita lihat angka ratusan. Tiga dikurang satu sama dengan dua. Jadi hasil akhirnya adalah dua ratus empat puluh tujuh. Untuk latihan, coba kerjakan soal berikut. Lima ratus enam puluh tujuh dikurangi dua ratus tiga puluh empat sama dengan tiga ratus tiga puluh tiga. Delapan ratus dikurangi empat ratus lima puluh enam sama dengan tiga ratus empat puluh empat. Sembilan ratus dua belas dikurangi tiga ratus delapan puluh tujuh sama dengan lima ratus dua puluh lima. Selamat belajar!"
    },
    "perkalian": {
        judul: "✖️ Perkalian 1-10",
        konten: "<strong>✨ Perkalian = Penjumlahan Berulang</strong><br><br>" +
               "📖 <strong>Tabel Perkalian 1-5:</strong><br>" +
               "1x1=1, 1x2=2, 1x3=3, 1x4=4, 1x5=5, 1x6=6, 1x7=7, 1x8=8, 1x9=9, 1x10=10<br>" +
               "2x1=2, 2x2=4, 2x3=6, 2x4=8, 2x5=10, 2x6=12, 2x7=14, 2x8=16, 2x9=18, 2x10=20<br>" +
               "3x1=3, 3x2=6, 3x3=9, 3x4=12, 3x5=15, 3x6=18, 3x7=21, 3x8=24, 3x9=27, 3x10=30<br>" +
               "4x1=4, 4x2=8, 4x3=12, 4x4=16, 4x5=20, 4x6=24, 4x7=28, 4x8=32, 4x9=36, 4x10=40<br>" +
               "5x1=5, 5x2=10, 5x3=15, 5x4=20, 5x5=25, 5x6=30, 5x7=35, 5x8=40, 5x9=45, 5x10=50<br><br>" +
               "📖 <strong>Perkalian 6-10:</strong><br>" +
               "6x1=6, 6x2=12, 6x3=18, 6x4=24, 6x5=30, 6x6=36, 6x7=42, 6x8=48, 6x9=54, 6x10=60<br>" +
               "7x1=7, 7x2=14, 7x3=21, 7x4=28, 7x5=35, 7x6=42, 7x7=49, 7x8=56, 7x9=63, 7x10=70<br>" +
               "8x1=8, 8x2=16, 8x3=24, 8x4=32, 8x5=40, 8x6=48, 8x7=56, 8x8=64, 8x9=72, 8x10=80<br>" +
               "9x1=9, 9x2=18, 9x3=27, 9x4=36, 9x5=45, 9x6=54, 9x7=63, 9x8=72, 9x9=81, 9x10=90<br>" +
               "10x1=10, 10x2=20, 10x3=30, 10x4=40, 10x5=50, 10x6=60, 10x7=70, 10x8=80, 10x9=90, 10x10=100",
        suara: "Mari kita belajar perkalian. Perkalian adalah penjumlahan berulang. Contoh, dua kali tiga sama dengan dua tambah dua tambah dua sama dengan enam. Sekarang kita akan menghafal tabel perkalian dari satu sampai sepuluh. Perkalian satu: satu kali satu sama dengan satu, satu kali dua sama dengan dua, satu kali tiga sama dengan tiga, satu kali empat sama dengan empat, satu kali lima sama dengan lima, satu kali enam sama dengan enam, satu kali tujuh sama dengan tujuh, satu kali delapan sama dengan delapan, satu kali sembilan sama dengan sembilan, satu kali sepuluh sama dengan sepuluh. Perkalian dua: dua kali satu sama dengan dua, dua kali dua sama dengan empat, dua kali tiga sama dengan enam, dua kali empat sama dengan delapan, dua kali lima sama dengan sepuluh, dua kali enam sama dengan dua belas, dua kali tujuh sama dengan empat belas, dua kali delapan sama dengan enam belas, dua kali sembilan sama dengan delapan belas, dua kali sepuluh sama dengan dua puluh. Perkalian tiga: tiga kali satu sama dengan tiga, tiga kali dua sama dengan enam, tiga kali tiga sama dengan sembilan, tiga kali empat sama dengan dua belas, tiga kali lima sama dengan lima belas, tiga kali enam sama dengan delapan belas, tiga kali tujuh sama dengan dua puluh satu, tiga kali delapan sama dengan dua puluh empat, tiga kali sembilan sama dengan dua puluh tujuh, tiga kali sepuluh sama dengan tiga puluh. Perkalian empat, lima, enam, tujuh, delapan, sembilan, dan sepuluh dapat kalian pelajari dari tabel. Selamat belajar dan hafalkan tabel perkalian dengan rajin!"
    },
    "pembagian": {
        judul: "➗ Pembagian Dasar",
        konten: "<strong>✨ Pembagian = Kebalikan dari Perkalian</strong><br><br>" +
               "📌 12 : 3 = 4 karena 3 x 4 = 12<br>" +
               "📌 20 : 5 = 4 karena 5 x 4 = 20<br>" +
               "📌 18 : 2 = 9 karena 2 x 9 = 18<br>" +
               "📌 24 : 6 = 4 karena 6 x 4 = 24<br>" +
               "📌 30 : 5 = 6 karena 5 x 6 = 30<br>" +
               "📌 45 : 9 = 5 karena 9 x 5 = 45<br>" +
               "📌 64 : 8 = 8 karena 8 x 8 = 64<br>" +
               "📌 81 : 9 = 9 karena 9 x 9 = 81<br><br>" +
               "🍕 <strong>Contoh cerita:</strong> 15 permen dibagi 3 anak, masing-masing mendapat 5 permen.<br>" +
               "🍎 28 apel dibagi 4 keranjang, setiap keranjang berisi 7 apel.",
        suara: "Mari kita belajar pembagian. Pembagian adalah kebalikan dari perkalian. Contoh pertama, dua belas dibagi tiga sama dengan empat, karena tiga kali empat sama dengan dua belas. Contoh kedua, dua puluh dibagi lima sama dengan empat, karena lima kali empat sama dengan dua puluh. Contoh ketiga, delapan belas dibagi dua sama dengan sembilan, karena dua kali sembilan sama dengan delapan belas. Contoh keempat, dua puluh empat dibagi enam sama dengan empat, karena enam kali empat sama dengan dua puluh empat. Contoh kelima, tiga puluh dibagi lima sama dengan enam, karena lima kali enam sama dengan tiga puluh. Contoh keenam, empat puluh lima dibagi sembilan sama dengan lima, karena sembilan kali lima sama dengan empat puluh lima. Contoh ketujuh, enam puluh empat dibagi delapan sama dengan delapan, karena delapan kali delapan sama dengan enam puluh empat. Contoh kedelapan, delapan puluh satu dibagi sembilan sama dengan sembilan, karena sembilan kali sembilan sama dengan delapan puluh satu. Sekarang, coba simak contoh cerita berikut. Jika ada lima belas permen dibagi kepada tiga anak, maka masing-masing anak mendapat lima permen. Jika ada dua puluh delapan apel dibagi ke empat keranjang, maka setiap keranjang berisi tujuh apel. Selamat belajar!"
    },
    "pecahan": {
        judul: "🍕 Pecahan Sederhana",
        konten: "<strong>✨ Mengenal Pecahan 1/2, 1/3, 1/4</strong><br><br>" +
               "🍕 <strong>1/2 (setengah)</strong> = pizza dipotong menjadi 2 bagian sama besar, kita ambil 1 bagian<br>" +
               "🍰 <strong>1/3 (sepertiga)</strong> = kue dipotong menjadi 3 bagian sama besar, kita ambil 1 bagian<br>" +
               "🍉 <strong>1/4 (seperempat)</strong> = semangka dipotong menjadi 4 bagian sama besar, kita ambil 1 bagian<br><br>" +
               "📌 <strong>Membandingkan pecahan:</strong><br>" +
               "Semakin besar angka penyebut (angka di bawah), semakin kecil nilai pecahannya.<br>" +
               "1/2 lebih besar dari 1/4 (karena 2 lebih kecil dari 4)<br>" +
               "1/3 lebih besar dari 1/6 (karena 3 lebih kecil dari 6)<br><br>" +
               "✏️ <strong>Latihan:</strong> Mana yang lebih besar? 1/4 atau 1/8? Jawabannya 1/4",
        suara: "Mari kita belajar pecahan sederhana. Pecahan setengah atau satu per dua artinya sebuah pizza dipotong menjadi dua bagian sama besar, lalu kita mengambil satu bagian. Pecahan sepertiga atau satu per tiga artinya sebuah kue dipotong menjadi tiga bagian sama besar, lalu kita mengambil satu bagian. Pecahan seperempat atau satu per empat artinya sebuah semangka dipotong menjadi empat bagian sama besar, lalu kita mengambil satu bagian. Sekarang kita belajar membandingkan pecahan. Perlu diingat, semakin besar angka penyebut atau angka yang di bawah, maka semakin kecil nilai pecahannya. Contoh, satu per dua lebih besar dari satu per empat, karena angka dua lebih kecil dari angka empat. Satu per tiga lebih besar dari satu per enam, karena angka tiga lebih kecil dari angka enam. Untuk latihan, manakah yang lebih besar, satu per empat atau satu per delapan? Jawabannya adalah satu per empat, karena empat lebih kecil dari delapan. Selamat belajar!"
    },
    "satuan": {
        judul: "📏 Satuan Panjang dan Berat",
        konten: "<strong>✨ Satuan Baku dalam Pengukuran</strong><br><br>" +
               "📏 <strong>Satuan Panjang:</strong><br>" +
               "1 km (kilometer) = 1000 m (meter)<br>" +
               "1 m (meter) = 100 cm (centimeter)<br>" +
               "1 cm (centimeter) = 10 mm (milimeter)<br>" +
               "📌 Contoh: 2 m = 200 cm, 3 km = 3000 m<br><br>" +
               "⚖️ <strong>Satuan Berat:</strong><br>" +
               "1 kg (kilogram) = 1000 gram<br>" +
               "1 ons = 100 gram<br>" +
               "📌 Contoh: 3 kg = 3000 gram, 5 ons = 500 gram<br><br>" +
               "🧴 <strong>Satuan Volume (Cairan):</strong><br>" +
               "1 liter = 1000 ml (mililiter)<br>" +
               "1 ml = 1 cc (centimeter kubik)",
        suara: "Mari kita belajar satuan panjang, berat, dan volume. Pertama, satuan panjang. Satu kilometer sama dengan seribu meter. Satu meter sama dengan seratus centimeter. Satu centimeter sama dengan sepuluh milimeter. Contoh, dua meter sama dengan dua ratus centimeter. Tiga kilometer sama dengan tiga ribu meter. Kedua, satuan berat. Satu kilogram sama dengan seribu gram. Satu ons sama dengan seratus gram. Contoh, tiga kilogram sama dengan tiga ribu gram. Lima ons sama dengan lima ratus gram. Ketiga, satuan volume untuk cairan. Satu liter sama dengan seribu mililiter. Satu mililiter sama dengan satu centimeter kubik. Selamat belajar!"
    },
    "waktu": {
        judul: "⏰ Waktu dan Durasi",
        konten: "<strong>✨ Membaca Jam dan Menghitung Durasi</strong><br><br>" +
               "🕐 <strong>Hubungan satuan waktu:</strong><br>" +
               "1 hari = 24 jam<br>" +
               "1 jam = 60 menit<br>" +
               "1 menit = 60 detik<br>" +
               "1 minggu = 7 hari<br>" +
               "1 bulan = 30 hari<br>" +
               "1 tahun = 365 hari (atau 366 hari di tahun kabisat)<br><br>" +
               "⏰ <strong>Membaca jam analog:</strong><br>" +
               "Jarum pendek = menunjukkan jam<br>" +
               "Jarum panjang = menunjukkan menit<br>" +
               "Contoh: Pukul 08.30 = jarum pendek di angka 8 lebih sedikit, jarum panjang di angka 6<br><br>" +
               "📌 <strong>Menghitung durasi:</strong><br>" +
               "• 2 jam = 120 menit<br>" +
               "• 3 jam 15 menit = 195 menit<br>" +
               "• 180 menit = 3 jam",
        suara: "Mari kita belajar tentang waktu dan durasi. Pertama, hubungan satuan waktu. Satu hari sama dengan dua puluh empat jam. Satu jam sama dengan enam puluh menit. Satu menit sama dengan enam puluh detik. Satu minggu sama dengan tujuh hari. Satu bulan sama dengan tiga puluh hari. Satu tahun sama dengan tiga ratus enam puluh lima hari, atau tiga ratus enam puluh enam hari pada tahun kabisat. Kedua, membaca jam analog. Pada jam analog, jarum pendek menunjukkan jam, dan jarum panjang menunjukkan menit. Contoh, pukul setengah sembilan atau jam delapan lewat tiga puluh menit, jarum pendek berada di angka delapan lebih sedikit, dan jarum panjang tepat di angka enam. Ketiga, menghitung durasi. Dua jam sama dengan seratus dua puluh menit. Tiga jam lima belas menit sama dengan seratus sembilan puluh lima menit. Seratus delapan puluh menit sama dengan tiga jam. Selamat belajar!"
    }
};

// ======================== BAHASA INDONESIA LENGKAP - 8 Topik ========================
const bhsIndonesiaTopics = {
    "membaca": {
        judul: "📖 Membaca Pemahaman",
        konten: "<strong>✨ Cerita: \"Liburan di Rumah Nenek\"</strong><br><br>" +
               "Hari Minggu, Siti dan keluarganya pergi ke rumah nenek di desa. Perjalanan memakan waktu 2 jam. Sesampainya di sana, Siti senang sekali karena bisa bertemu dengan sepupu-sepupunya. Mereka bermain petak umpet di halaman yang luas. Nenek membuatkan kue bolu yang lezat. Sore hari, Siti berpamitan pulang. Dia berjanji akan datang lagi bulan depan.<br><br>" +
               "<strong>📝 Jawab pertanyaan berikut!</strong><br>" +
               "1. Ke mana Siti pergi? (Ke rumah nenek)<br>" +
               "2. Berapa lama perjalanan Siti? (2 jam)<br>" +
               "3. Apa yang dibuat nenek? (Kue bolu)<br>" +
               "4. Siapa saja yang ditemui Siti? (Sepupu-sepupunya)<br>" +
               "5. Kapan Siti akan datang lagi? (Bulan depan)",
        suara: "Mari belajar membaca pemahaman. Simak cerita berikut dengan saksama. Hari Minggu, Siti dan keluarganya pergi ke rumah nenek di desa. Perjalanan memakan waktu dua jam. Sesampainya di sana, Siti senang sekali karena bisa bertemu dengan sepupu-sepupunya. Mereka bermain petak umpet di halaman yang luas. Nenek membuatkan kue bolu yang lezat. Sore hari, Siti berpamitan pulang. Dia berjanji akan datang lagi bulan depan. Setelah mendengarkan cerita ini, coba jawab pertanyaan-pertanyaan berikut. Pertama, ke mana Siti pergi? Jawabannya adalah ke rumah nenek. Kedua, berapa lama perjalanan Siti? Jawabannya adalah dua jam. Ketiga, apa yang dibuat nenek? Jawabannya adalah kue bolu. Keempat, siapa saja yang ditemui Siti? Jawabannya adalah sepupu-sepupunya. Kelima, kapan Siti akan datang lagi? Jawabannya adalah bulan depan. Selamat belajar membaca pemahaman!"
    },
    "idepokok": {
        judul: "💡 Menentukan Ide Pokok",
        konten: "<strong>✨ Apa itu Ide Pokok?</strong><br>" +
               "Ide pokok adalah gagasan utama atau pikiran utama dalam sebuah paragraf.<br><br>" +
               "📌 <strong>Cara menemukan ide pokok:</strong><br>" +
               "1. Bacalah seluruh kalimat dalam paragraf dengan saksama<br>" +
               "2. Temukan kalimat utama (biasanya di awal atau akhir paragraf)<br>" +
               "3. Ide pokok adalah inti dari kalimat utama<br><br>" +
               "📖 <strong>Contoh paragraf:</strong><br>" +
               "'Buah mangga mengandung vitamin C yang tinggi. Rasanya manis dan segar. Banyak orang suka mangga. Mangga juga bisa diolah menjadi jus, rujak, atau manisan.'<br><br>" +
               "✅ <strong>Ide pokok:</strong> Manfaat dan kelezatan buah mangga.<br><br>" +
               "📖 <strong>Contoh lain:</strong><br>" +
               "'Sekolahku sangat bersih. Setiap pagi kami membersihkan kelas. Ada banyak tempat sampah di setiap sudut. Tanaman hias juga menghiasi halaman sekolah.'<br><br>" +
               "✅ <strong>Ide pokok:</strong> Kebersihan sekolahku.",
        suara: "Mari belajar menentukan ide pokok. Ide pokok adalah gagasan utama atau pikiran utama dalam sebuah paragraf. Cara menemukan ide pokok: pertama, bacalah seluruh kalimat dalam paragraf dengan saksama. Kedua, temukan kalimat utama yang biasanya berada di awal atau akhir paragraf. Ketiga, ide pokok adalah inti dari kalimat utama tersebut. Sekarang perhatikan contoh paragraf berikut. Buah mangga mengandung vitamin C yang tinggi. Rasanya manis dan segar. Banyak orang suka mangga. Mangga juga bisa diolah menjadi jus, rujak, atau manisan. Ide pokok dari paragraf tersebut adalah manfaat dan kelezatan buah mangga. Contoh paragraf lain: Sekolahku sangat bersih. Setiap pagi kami membersihkan kelas. Ada banyak tempat sampah di setiap sudut. Tanaman hias juga menghiasi halaman sekolah. Ide pokok dari paragraf tersebut adalah kebersihan sekolahku. Selamat belajar!"
    },
    "kosa kata": {
        judul: "📝 Kosa Kata Baru (Sinonim & Antonim)",
        konten: "<strong>✨ Sinonim (Persamaan Kata)</strong><br><br>" +
               "Senang = Gembira = Bahagia = Sukacita<br>" +
               "Besar = Raksasa = Agung = Gede<br>" +
               "Cepat = Kencang = Cekatan = Laju<br>" +
               "Pintar = Cerdas = Jenius = Pandai<br>" +
               "Rajin = Tekun = Giat = Ulet<br>" +
               "Kaya = Berlimpah = Makmur = Mampu<br><br>" +
               "<strong>✨ Antonim (Lawan Kata)</strong><br><br>" +
               "Tinggi ↔ Rendah<br>" +
               "Panas ↔ Dingin<br>" +
               "Kaya ↔ Miskin<br>" +
               "Besar ↔ Kecil<br>" +
               "Cepat ↔ Lambat<br>" +
               "Pintar ↔ Bodoh<br>" +
               "Rajin ↔ Malas<br>" +
               "Terang ↔ Gelap<br>" +
               "Baru ↔ Lama<br>" +
               "Mahal ↔ Murah<br><br>" +
               "📌 <strong>Contoh kalimat:</strong> 'Rumah itu sangat besar, sedangkan rumahku kecil.' (besar lawan katanya kecil)",
        suara: "Mari belajar tentang sinonim dan antonim. Sinonim adalah persamaan kata. Contoh, senang sama dengan gembira, bahagia, atau sukacita. Besar sama dengan raksasa, agung, atau gede. Cepat sama dengan kencang, cekatan, atau laju. Pintar sama dengan cerdas, jenius, atau pandai. Rajin sama dengan tekun, giat, atau ulet. Kaya sama dengan berlimpah, makmur, atau mampu. Antonim adalah lawan kata. Contoh, tinggi lawannya rendah. Panas lawannya dingin. Kaya lawannya miskin. Besar lawannya kecil. Cepat lawannya lambat. Pintar lawannya bodoh. Rajin lawannya malas. Terang lawannya gelap. Baru lawannya lama. Mahal lawannya murah. Contoh kalimat: Rumah itu sangat besar, sedangkan rumahku kecil. Kata besar lawan katanya adalah kecil. Selamat belajar!"
    },
    "kalimat": {
        judul: "✍️ Kalimat Tanya dan Perintah",
        konten: "<strong>📌 Kalimat Tanya</strong><br>" +
               "Kalimat tanya digunakan untuk menanyakan sesuatu. Menggunakan kata tanya: apa, siapa, kapan, mengapa, bagaimana, di mana, berapa.<br><br>" +
               "Contoh kalimat tanya:<br>" +
               "• 'Siapa nama gurumu?'<br>" +
               "• 'Kapan kamu liburan?'<br>" +
               "• 'Mengapa kamu tidak masuk sekolah kemarin?'<br>" +
               "• 'Di mana rumahmu?'<br>" +
               "• 'Berapa harga buku itu?'<br><br>" +
               "<strong>📌 Kalimat Perintah</strong><br>" +
               "Kalimat perintah digunakan untuk memerintah atau meminta seseorang melakukan sesuatu. Biasanya diakhiri dengan tanda seru (!).<br><br>" +
               "Contoh kalimat perintah:<br>" +
               "• 'Tolong tutup pintu!'<br>" +
               "• 'Ayo belajar bersama!'<br>" +
               "• 'Jangan membuang sampah sembarangan!'<br>" +
               "• 'Dengarkan penjelasan gurumu!'<br><br>" +
               "<strong>📌 Kalimat Ajakan:</strong> 'Marilah kita menjaga kebersihan lingkungan.'",
        suara: "Mari belajar tentang kalimat tanya dan kalimat perintah. Kalimat tanya adalah kalimat yang digunakan untuk menanyakan sesuatu. Kalimat tanya menggunakan kata tanya seperti: apa, siapa, kapan, mengapa, bagaimana, di mana, dan berapa. Contoh kalimat tanya: Siapa nama gurumu? Kapan kamu liburan? Mengapa kamu tidak masuk sekolah kemarin? Di mana rumahmu? Berapa harga buku itu? Kalimat perintah adalah kalimat yang digunakan untuk memerintah atau meminta seseorang melakukan sesuatu. Kalimat perintah biasanya diakhiri dengan tanda seru. Contoh kalimat perintah: Tolong tutup pintu! Ayo belajar bersama! Jangan membuang sampah sembarangan! Dengarkan penjelasan gurumu! Selain itu ada juga kalimat ajakan, contohnya: Marilah kita menjaga kebersihan lingkungan. Selamat belajar!"
    },
    "menulis": {
        judul: "📝 Menulis Cerita Sederhana",
        konten: "<strong>✨ Struktur Cerita (Narrative Text)</strong><br><br>" +
               "📖 <strong>Struktur cerita yang baik:</strong><br>" +
               "1. Orientasi (pengenalan tokoh, waktu, dan tempat)<br>" +
               "2. Komplikasi/Konflik (masalah yang dihadapi tokoh)<br>" +
               "3. Resolusi (penyelesaian masalah)<br>" +
               "4. Koda (pesan moral/kesimpulan)<br><br>" +
               "📌 <strong>Contoh kerangka cerita:</strong><br>" +
               "'Hari Minggu, aku bermain di taman kota bersama adikku. Tiba-tiba aku melihat seorang anak kecil menangis tersedu-sedu karena kehilangan ibunya. Aku segera mendekatinya dan membawanya ke kantor keamanan taman. Dengan bantuan petugas, akhirnya dia bertemu kembali dengan ibunya. Aku senang bisa membantu dan merasa lega.'<br><br>" +
               "✏️ <strong>Tugas:</strong> Buatlah cerita pendek minimal 5 kalimat tentang pengalamanmu membantu teman!",
        suara: "Mari belajar menulis cerita sederhana. Struktur cerita yang baik terdiri dari empat bagian. Pertama, orientasi, yaitu bagian yang berisi pengenalan tokoh, waktu, dan tempat. Kedua, komplikasi atau konflik, yaitu bagian yang berisi masalah yang dihadapi oleh tokoh. Ketiga, resolusi, yaitu bagian yang berisi penyelesaian masalah. Keempat, koda, yaitu bagian yang berisi pesan moral atau kesimpulan dari cerita. Berikut contoh kerangka cerita: Hari Minggu, aku bermain di taman kota bersama adikku. Tiba-tiba aku melihat seorang anak kecil menangis tersedu-sedu karena kehilangan ibunya. Aku segera mendekatinya dan membawanya ke kantor keamanan taman. Dengan bantuan petugas, akhirnya dia bertemu kembali dengan ibunya. Aku senang bisa membantu dan merasa lega. Tugas untuk kalian: buatlah cerita pendek minimal lima kalimat tentang pengalamanmu membantu teman! Selamat belajar!"
    },
    "puisi": {
        judul: "🎵 Puisi Anak",
        konten: "<strong>✨ Puisi \"Sekolahku\"</strong><br><br>" +
               "Sekolahku yang hijau<br>" +
               "Banyak bunga di tamanmu<br>" +
               "Guru-guru ramah<br>" +
               "Teman-teman ceria<br>" +
               "Aku bangga sekolah di sini<br>" +
               "Setiap hari penuh bahagia<br><br>" +
               "✨ <strong>Ciri-ciri puisi:</strong><br>" +
               "• Menggunakan kata-kata indah (majas)<br>" +
               "• Bersajak/rima (bunyi akhir yang sama)<br>" +
               "• Ekspresif dan penuh perasaan<br>" +
               "• Ditulis dalam bentuk bait (1 bait = 4 baris)<br><br>" +
               "📌 <strong>Contoh puisi lain:</strong><br>" +
               "'Hujan turun rintik-rintik<br>" +
               "Di pagi yang sangat cantik<br>" +
               "Bunga-bunga mekar merekah<br>" +
               "Kupu-kupu beterbangan ke mana-mana'<br><br>" +
               "✏️ <strong>Tugas:</strong> Coba buat puisi 2 bait tentang hewan kesayanganmu!",
        suara: "Mari belajar puisi anak. Puisi adalah karya sastra dengan kata-kata indah dan bersajak. Berikut contoh puisi berjudul Sekolahku: Sekolahku yang hijau, banyak bunga di tamanmu, guru-guru ramah, teman-teman ceria, aku bangga sekolah di sini, setiap hari penuh bahagia. Ciri-ciri puisi antara lain: menggunakan kata-kata indah atau majas, bersajak atau memiliki bunyi akhir yang sama, ekspresif dan penuh perasaan, serta ditulis dalam bentuk bait. Satu bait biasanya terdiri dari empat baris. Contoh puisi lain: Hujan turun rintik-rintik, di pagi yang sangat cantik, bunga-bunga mekar merekah, kupu-kupu beterbangan ke mana-mana. Tugas untuk kalian: coba buat puisi dua bait tentang hewan kesayanganmu! Selamat belajar!"
    },
    "dongeng": {
        judul: "👑 Dongeng Nusantara",
        konten: "<strong>✨ Dongeng \"Si Kancil dan Buaya\"</strong><br><br>" +
               "Pada suatu hari, Kancil ingin menyeberangi sungai yang lebat. Namun, sungai itu dipenuhi oleh buaya-buaya yang lapar. Dengan cerdik, Kancil berkata kepada buaya, 'Hai buaya-buaya, aku diutus oleh raja untuk menghitung jumlah kalian. Berbarislah kalian dari ujung sungai ke ujung lainnya!'<br><br>" +
               "Para buaya pun berbaris dengan rapi. Kancil lalu melompat ke punggung buaya pertama sambil menghitung, 'Satu... dua... tiga...' dan seterusnya hingga sampai di seberang.<br><br>" +
               "Setelah berhasil menyeberang, Kancil tertawa dan berkata, 'Terima kasih, buaya-buaya bodoh! Aku sudah sampai di seberang!'<br><br>" +
               "Para buaya pun marah, tetapi Kancil sudah kabur masuk ke dalam hutan.<br><br>" +
               "📌 <strong>Pesan moral:</strong> Kecerdikan dan ketenangan dapat mengalahkan kekuatan dan kebodohan.<br><br>" +
               "📌 <strong>Amanat:</strong> Jangan mudah tertipu, dan gunakan akal sehat dalam menghadapi masalah.",
        suara: "Mari belajar dongeng Nusantara. Kali ini kita akan mendengarkan dongeng berjudul Si Kancil dan Buaya. Pada suatu hari, Kancil ingin menyeberangi sungai yang lebat. Namun, sungai itu dipenuhi oleh buaya-buaya yang lapar. Dengan cerdik, Kancil berkata kepada buaya, 'Hai buaya-buaya, aku diutus oleh raja untuk menghitung jumlah kalian. Berbarislah kalian dari ujung sungai ke ujung lainnya!' Para buaya pun berbaris dengan rapi. Kancil lalu melompat ke punggung buaya pertama sambil menghitung, 'Satu, dua, tiga,' dan seterusnya hingga sampai di seberang. Setelah berhasil menyeberang, Kancil tertawa dan berkata, 'Terima kasih, buaya-buaya bodoh! Aku sudah sampai di seberang!' Para buaya pun marah, tetapi Kancil sudah kabur masuk ke dalam hutan. Pesan moral dari dongeng ini adalah kecerdikan dan ketenangan dapat mengalahkan kekuatan dan kebodohan. Amanatnya, jangan mudah tertipu, dan gunakan akal sehat dalam menghadapi masalah. Selamat belajar!"
    },
    "ungkapan": {
        judul: "💬 Ungkapan Perasaan",
        konten: "<strong>✨ Ungkapan Perasaan dalam Bahasa Indonesia</strong><br><br>" +
               "📌 <strong>Ungkapan Senang:</strong><br>" +
               "• 'Hatiku berbunga-bunga' (sangat senang)<br>" +
               "• 'Seperti naik ke puncak gunung' (gembira sekali)<br>" +
               "• 'Muka berseri-seri' (terlihat sangat senang)<br><br>" +
               "📌 <strong>Ungkapan Sedih:</strong><br>" +
               "• 'Hatiku hancur' (sangat sedih)<br>" +
               "• 'Air mata berlinang' (menangis)<br>" +
               "• 'Jantungku terasa remuk' (kecewa berat)<br><br>" +
               "📌 <strong>Ungkapan Marah:</strong><br>" +
               "• 'Darahku mendidih' (sangat marah)<br>" +
               "• 'Darurat hitam' (situasi marah/serius)<br>" +
               "• 'Muka merah padam' (wajah memerah karena marah)<br><br>" +
               "📌 <strong>Ungkapan Takut:</strong><br>" +
               "• 'Jantungku berdebar kencang' (deg-degan, takut)<br>" +
               "• 'Merinding bulu kudukku' (ketakutan)<br>" +
               "• 'Pucat pasi' (wajah pucat karena takut)<br><br>" +
               "📌 <strong>Contoh dalam kalimat:</strong><br>" +
               "'Mendengar kabar kelulusannya, hati ibu berbunga-bunga.'",
        suara: "Mari belajar ungkapan perasaan dalam bahasa Indonesia. Pertama, ungkapan senang. Hatiku berbunga-bunga artinya sangat senang. Seperti naik ke puncak gunung artinya gembira sekali. Muka berseri-seri artinya terlihat sangat senang. Kedua, ungkapan sedih. Hatiku hancur artinya sangat sedih. Air mata berlinang artinya menangis. Jantungku terasa remuk artinya kecewa berat. Ketiga, ungkapan marah. Darahku mendidih artinya sangat marah. Darurat hitam artinya situasi marah atau serius. Muka merah padam artinya wajah memerah karena marah. Keempat, ungkapan takut. Jantungku berdebar kencang artinya deg-degan atau takut. Merinding bulu kudukku artinya ketakutan. Pucat pasi artinya wajah pucat karena takut. Contoh dalam kalimat: Mendengar kabar kelulusannya, hati ibu berbunga-bunga. Selamat belajar!"
    }
};

// ======================== BANK SOAL UMUM (15 Soal untuk Kuis Random) ========================
const bankSoal = [
    { soal: "Sapi memakan rumput, maka sapi termasuk hewan apa?", jawaban: "herbivora", pilihan: ["herbivora", "karnivora", "omnivora"], suaraSoal: "Soal nomor 1. Sapi memakan rumput, maka sapi termasuk hewan apa? Pilihan jawaban: A. Herbivora, B. Karnivora, C. Omnivora." },
    { soal: "Kupu-kupu mengalami metamorfosis sempurna atau tidak sempurna?", jawaban: "sempurna", pilihan: ["sempurna", "tidak sempurna", "sebagian"], suaraSoal: "Soal nomor 2. Kupu-kupu mengalami metamorfosis sempurna atau tidak sempurna? Pilihan jawaban: A. Sempurna, B. Tidak sempurna, C. Sebagian." },
    { soal: "Sumber energi terbesar di bumi adalah apa?", jawaban: "matahari", pilihan: ["matahari", "angin", "air"], suaraSoal: "Soal nomor 3. Sumber energi terbesar di bumi adalah apa? Pilihan jawaban: A. Matahari, B. Angin, C. Air." },
    { soal: "Arah mata angin yang berada di antara Timur dan Selatan disebut apa?", jawaban: "Tenggara", pilihan: ["Timur Laut", "Tenggara", "Barat Daya"], suaraSoal: "Soal nomor 4. Arah mata angin yang berada di antara Timur dan Selatan disebut apa? Pilihan jawaban: A. Timur Laut, B. Tenggara, C. Barat Daya." },
    { soal: "Tingkatan pemerintahan terkecil di Indonesia adalah apa?", jawaban: "RT", pilihan: ["RT", "RW", "Desa"], suaraSoal: "Soal nomor 5. Tingkatan pemerintahan terkecil di Indonesia adalah apa? Pilihan jawaban: A. RT, B. RW, C. Desa." },
    { soal: "Hasil dari 2 dikali 8 berapa?", jawaban: "16", pilihan: ["14", "16", "18"], suaraSoal: "Soal nomor 6. Hasil dari 2 dikali 8 berapa? Pilihan jawaban: A. 14, B. 16, C. 18." },
    { soal: "Hasil dari 15 dibagi 3 berapa?", jawaban: "5", pilihan: ["4", "5", "6"], suaraSoal: "Soal nomor 7. Hasil dari 15 dibagi 3 berapa? Pilihan jawaban: A. 4, B. 5, C. 6." },
    { soal: "Sinonim atau persamaan kata dari kata 'cepat' adalah apa?", jawaban: "kencang", pilihan: ["lambat", "kencang", "pelan"], suaraSoal: "Soal nomor 8. Sinonim atau persamaan kata dari kata 'cepat' adalah apa? Pilihan jawaban: A. Lambat, B. Kencang, C. Pelan." },
    { soal: "Antonim atau lawan kata dari kata 'besar' adalah apa?", jawaban: "kecil", pilihan: ["besar", "kecil", "tinggi"], suaraSoal: "Soal nomor 9. Antonim atau lawan kata dari kata 'besar' adalah apa? Pilihan jawaban: A. Besar, B. Kecil, C. Tinggi." },
    { soal: "Contoh kalimat tanya yang benar adalah yang mana?", jawaban: "Siapa nama gurumu?", pilihan: ["Tutup pintu!", "Siapa nama gurumu?", "Aku senang"], suaraSoal: "Soal nomor 10. Contoh kalimat tanya yang benar adalah yang mana? Pilihan jawaban: A. Tutup pintu, B. Siapa nama gurumu, C. Aku senang." },
    { soal: "Berapa menitkah 2 jam?", jawaban: "120", pilihan: ["60", "120", "180"], suaraSoal: "Soal nomor 11. Berapa menitkah 2 jam? Pilihan jawaban: A. 60 menit, B. 120 menit, C. 180 menit." },
    { soal: "Nilai tempat angka 7 pada bilangan 578 adalah berapa?", jawaban: "70", pilihan: ["7", "70", "700"], suaraSoal: "Soal nomor 12. Nilai tempat angka 7 pada bilangan 578 adalah berapa? Pilihan jawaban: A. 7, B. 70, C. 700." },
    { soal: "Hasil dari 345 ditambah 278 berapa?", jawaban: "623", pilihan: ["613", "623", "633"], suaraSoal: "Soal nomor 13. Hasil dari 345 ditambah 278 berapa? Pilihan jawaban: A. 613, B. 623, C. 633." },
    { soal: "Pecahan 1 per 2 lebih besar dari pecahan apa?", jawaban: "1/4", pilihan: ["1/2", "1/3", "1/4"], suaraSoal: "Soal nomor 14. Pecahan 1 per 2 lebih besar dari pecahan apa? Pilihan jawaban: A. 1 per 2, B. 1 per 3, C. 1 per 4." },
    { soal: "Cerita Kancil dan Buaya mengajarkan tentang apa?", jawaban: "kecerdikan", pilihan: ["kekuatan", "kecerdikan", "kejujuran"], suaraSoal: "Soal nomor 15. Cerita Kancil dan Buaya mengajarkan tentang apa? Pilihan jawaban: A. Kekuatan, B. Kecerdikan, C. Kejujuran." }
];