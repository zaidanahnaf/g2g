# Grounds2Gourmet (G2G) - MVP Development for Silogy Expo 2025

**"Jamur yang Tumbuh dari Sisa, Bukan dari Sia-Sia."**

Selamat datang di repositori proyek MVP Grounds2Gourmet untuk kompetisi Web Development Silogy Expo 2025! Repositori ini adalah pusat kolaborasi kita untuk membangun prototipe fungsional dalam waktu yang sangat terbatas.
## 🎯 Visi & Misi Proyek MVP

Grounds2Gourmet (G2G) adalah platform web inovatif yang bertujuan untuk mengubah limbah ampas kopi rumah tangga dan kafe menjadi sumber daya berharga untuk budidaya jamur gourmet melalui praktik *urban farming* skala mikro.

**Tujuan Utama MVP ini:**
1.  **Mengurangi Limbah Organik Ampas Kopi:** Menjembatani sumber ampas kopi dengan pihak yang membutuhkan untuk budidaya.
2.  **Memberdayakan Individu & Komunitas:** Menyediakan panduan dan sumber daya dasar untuk memulai *urban farming* jamur.
3.  **Mendemonstrasikan Potensi Circular Economy:** Menunjukkan bagaimana limbah dapat diubah menjadi produk bernilai tinggi.

**Fokus utama kita dalam 3 hari ke depan adalah membangun 2 fitur inti yang fungsional dan *demonstrable* untuk babak penyisihan.**

## 🔩 Fitur Utama MVP (Minimum Viable Product)

Untuk babak penyisihan, kita akan fokus pada implementasi fitur-fitur berikut:

1.  **Permintaan & Penawaran Ampas Kopi (Ampas Kopi Locator & Exchange):**
    * **Deskripsi:** Memungkinkan kafe/rumah tangga untuk "menawarkan" ampas kopi yang tersedia melalui formulir sederhana. Calon petani jamur dapat melihat daftar penawaran yang ada.
    * **Fungsionalitas yang Diharapkan:**
        * Formulir input untuk penyedia ampas kopi (Nama, Jenis Lokasi, Area, Jumlah, Kontak).
        * Tampilan daftar *listing* penawaran ampas kopi.
        * Tombol "Hubungi" pada setiap *listing* (menampilkan kontak atau *mockup* interaksi).
        * **Catatan:** Data akan disimpan menggunakan JavaScript (data *mock* / *local storage*), **tidak menggunakan *backend database* kompleks.**
2.  **Panduan Budidaya Jamur Interaktif:**
    * **Deskripsi:** Menyediakan panduan langkah demi langkah yang mudah diikuti untuk budidaya jamur gourmet dari ampas kopi.
    * **Fungsionalitas yang Diharapkan:**
        * Struktur langkah-langkah budidaya (min. 3 langkah kunci: Persiapan, Sterilisasi, Inokulasi/Perawatan).
        * Teks singkat dan ilustrasi pendukung untuk setiap langkah.
        * Elemen interaktif sederhana: *checkbox* "Saya Sudah Menyelesaikan Langkah Ini!" untuk setiap langkah.
        * (Opsional) *Progress bar* sederhana yang bergerak sesuai *checklist* yang dicentang.
        * **Catatan:** Progres akan disimpan di *local storage* *browser*, **tidak menggunakan *backend database* kompleks.**

---

## 👩‍💻 Pembagian Tugas (Job Description)

Setiap anggota tim memiliki peran krusial dalam keberhasilan MVP ini. Kolaborasi dan komunikasi adalah kunci.

### 🧑‍💼 Dhafa Zaidan Ahnaf (Backend Developer & Project Manager)

* **Peran Project Manager (PM):**
    * Mengelola GitHub Project (Kanban Board): Membuat *issues*, menetapkan *assignee*, memonitor progres *task*.
    * Memastikan tidak ada *scope creep* dan proyek tetap fokus pada fitur MVP yang disepakati.
    * **Bertanggung Jawab penuh atas Finalisasi & Pengiriman Proposal ke lomba.** Mengkoordinasikan pengumpulan materi (teks, *screenshot*) dari tim lain.
    * **Bertanggung Jawab atas Deployment:** Melakukan *deployment* aplikasi ke Vercel/Netlify dan memastikan URL berfungsi stabil.
    * Memimpin *daily check-in* singkat untuk *update* progres dan mengatasi hambatan.
* **Peran "Backend" Developer (JavaScript):**
    * Membangun struktur data (JavaScript *array*) untuk penawaran ampas kopi.
    * Menulis fungsi JavaScript untuk memproses *submit* form *pickup* dan menampilkan daftar penawaran.
    * Menulis fungsi JavaScript untuk mengelola status progres panduan budidaya (menggunakan *local storage*).

### 🎨 Fatkhi Maulana (UI/UX Designer)

* **Fokus Utama:** Merancang pengalaman pengguna yang intuitif dan tampilan visual yang menarik namun **cepat diimplementasikan**.
* **Tugas:**
    * Membuat *wireframe* (sketsa kasar) untuk alur utama pengguna (halaman utama, penawaran, daftar, panduan).
    * Membuat *mockup* (desain visual) untuk elemen-elemen kunci:
        * Header & Navigasi Utama G2G.
        * Formulir "Tawarkan Ampas Kopi".
        * Tampilan daftar penawaran ampas kopi.
        * Halaman panduan budidaya jamur (termasuk *layout* langkah-langkah dan elemen interaktif).
    * Menyiapkan aset visual dasar (palet warna, tipografi, ikon-ikon sederhana) yang dapat digunakan oleh *Frontend Developer*.
* **Kolaborasi:** Berkomunikasi aktif dengan *Frontend Developer* untuk memastikan desain dapat di-*coding* dengan cepat dan realistis.

### 💻 Fauzan Farhan Gayo (Frontend Developer)

* **Fokus Utama:** Mengubah desain UI/UX dan logika JavaScript "backend" menjadi kode web fungsional.
* **Tugas:**
    * Melakukan *setup* proyek *frontend* (HTML, CSS, JavaScript).
    * Membangun struktur HTML untuk semua halaman yang diperlukan MVP.
    * Menerapkan *styling* CSS berdasarkan *mockup* UI/UX (prioritaskan responsivitas dasar).
    * Mengimplementasikan fungsionalitas JavaScript untuk:
        * Menghubungkan formulir "Tawarkan Ampas Kopi" ke logika JavaScript yang disediakan oleh PM.
        * Menampilkan data daftar penawaran ampas kopi.
        * Mengimplementasikan elemen interaktif di halaman panduan (checkbox, progress bar).
* **Kolaborasi:** Berkomunikasi aktif dengan UI/UX Designer mengenai implementasi desain, dan dengan PM/Backend Developer mengenai kebutuhan data dan logika.

---

## 🛠️ Stack Teknologi (Untuk MVP)

* **Frontend:** HTML, CSS, dan JavaScript (Vanilla JS)
* **"Backend":** JavaScript (untuk *mock data* dan logika bisnis minimal)
* **Deployment:** Vercel atau Netlify (otomatis dari GitHub)

## 🤝 Alur Kerja Kolaborasi (GitHub)

1.  **Semua pekerjaan akan dilakukan dalam repositori ini (`g2g-mvp`).**
2.  **GitHub Project (Kanban Board):** Gunakan *board* "G2G MVP Development - Silogy Expo 2025" untuk melihat *task* yang ada, siapa yang bertanggung jawab, dan progresnya.
3.  **Issues:** Setiap *task* diwakili oleh sebuah *issue*.
4.  **Branches:** Selalu bekerja di *branch* terpisah dari `main` (misal: `feat/nama-fitur`, `fix/nama-bug`).
5.  **Pull Requests (PRs):** Setelah selesai mengerjakan *task* di *branch* Anda, buatlah *Pull Request* ke *branch* `main`. Pastikan untuk memberikan deskripsi yang jelas mengenai apa yang Anda kerjakan.
6.  **Review:** PM akan melakukan *review* singkat terhadap PR sebelum di-*merge*.
7.  **Deployment Otomatis:** Setiap *merge* ke *branch* `main` akan secara otomatis memicu *deployment* ulang di Vercel/Netlify.

---

## ⏰ Timeline Mendesak

**Kita hanya punya waktu hingga Minggu, 15 Juni 2025 untuk finalisasi kode dan proposal.** Pengumpulan karya adalah **Senin, 16 Juni 2025.**

* **Jumat, 13 Juni:** Finalisasi *breakdown task*, desain *wireframe* & *mockup* cepat, mulai *coding* struktur HTML/CSS dan logika "backend" untuk fitur **Permintaan & Penawaran Ampas Kopi**.
* **Sabtu, 14 Juni:** Fokus **full-day coding** untuk menyelesaikan fungsionalitas **Permintaan & Penawaran Ampas Kopi** dan memulai **Panduan Budidaya Jamur Interaktif**. UI/UX menyelesaikan desain untuk Panduan.
* **Minggu, 15 Juni:** Selesaikan semua fungsionalitas MVP. Lakukan pengujian menyeluruh. PM mengkoordinasikan pengambilan *screenshot* dan **finalisasi Proposal**.
* **Senin, 16 Juni:** PM melakukan **Review Akhir & Pengumpulan Karya**.

Ayo maksimalkan setiap menit! Jika ada pertanyaan atau hambatan, segera komunikasikan di grup chat atau melalui komentar di GitHub Issues.

**Salam Sukses,**
**Dhafa Zaidan Ahnaf**
