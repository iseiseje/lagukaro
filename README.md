# lagukaro.id 🎵

Platform web modern untuk direktori, indeks, dan lirik lagu daerah Karo (Sumatera Utara, Indonesia).

---

## 🚀 Fitur Utama

- **Koleksi & Indeks Lagu Karo**: Indeks lagu terorganisir berdasarkan abjad (A–Z).
- **Pencarian Cepat**: Fitur search bar untuk menemukan lagu dan lirik dengan instan.
- **Tampilan Responsif & Modern**: Desain responsif, clean, dan mobile-friendly dengan Tailwind CSS v4.
- **Performa Tinggi & SEO Friendly**: Static Site Generation (SSG) menggunakan Astro v7 dengan skor performa tinggi dan metadata terstruktur.
- **Integrasi CMS**: Data lagu terhubung dengan Strapi headless CMS.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 via `@tailwindcss/vite`)
- **Backend / CMS**: [Strapi](https://strapi.io/)
- **Bahasa**: TypeScript / JavaScript (ES Modules)
- **Node.js Target**: `>=22.12.0`

---

## 📁 Struktur Proyek

```text
/
├── public/                 # File aset statis (favicon, logo, robots.txt, dll)
├── src/
│   ├── components/         # Komponen UI (Navbar, Footer, SearchBar, Card, dll)
│   ├── layouts/            # Layout utama halaman
│   ├── lib/                # Helper & API client (Strapi fetch)
│   ├── pages/              # Halaman & dynamic routes Astro
│   └── styles/             # Global CSS & Tailwind imports
├── .env.example            # Contoh konfigurasi environment variable
├── astro.config.mjs        # Konfigurasi Astro & integrasi Tailwind
├── package.json            # Daftar dependensi & script proyek
└── tsconfig.json           # Konfigurasi TypeScript
```

---

## 💻 Panduan Instalasi & Menjalankan Lokal

### 1. Prasyarat
- Node.js versi 22.12.0 atau lebih baru
- npm, pnpm, atau yarn

### 2. Clone & Pasang Dependensi
```bash
git clone https://github.com/<username>/lagukaro.git
cd lagukaro
npm install
```

### 3. Konfigurasi Environment
Salin file `.env.example` ke `.env`:
```bash
cp .env.example .env
```
Sesuaikan nilai URL API Strapi dan URL situs jika diperlukan:
```env
PUBLIC_STRAPI_URL=https://api.lagukaro.id
PUBLIC_SITE_URL=https://lagukaro.id
```

### 4. Menjalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 5. Build untuk Produksi
```bash
npm run build
npm run preview
```

---

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi [MIT](LICENSE).
