# Portfolio Rangga v2

Website portfolio pribadi untuk menampilkan profil, pengalaman, project, sertifikat, dan kontak dalam satu halaman interaktif. Project ini dibangun sebagai personal branding website untuk Rangga Dwi Arya, dengan fokus pada tampilan modern, responsif, dan presentasi project yang kuat secara visual.

## Deskripsi

Portfolio ini menggunakan pendekatan single page application. Semua section utama berada dalam satu flow halaman sehingga pengunjung dapat melihat informasi profil secara cepat tanpa berpindah route. Navigasi menggunakan anchor section seperti `home`, `about`, `projects`, `experience`, `certificates`, dan `contact`.

Secara desain, website memakai visual dark interface dengan aksen cyan dan purple. Komponen project menggunakan browser mockup agar screenshot aplikasi terlihat seperti preview produk nyata, sedangkan bagian certificate mengambil data dari Supabase sehingga konten sertifikat dapat dikelola secara dinamis.

## Fitur Utama

- Hero section dengan typing effect untuk menampilkan role secara bergantian.
- Navigasi sticky dengan active section berdasarkan posisi scroll.
- About section untuk memperkenalkan profil dan fokus keahlian.
- Projects section dengan featured project dan grid project 2 kolom yang responsif.
- Browser mockup pada project card lengkap dengan logo pribadi dari `public/logo Ra.png`.
- Experience section untuk pengalaman atau perjalanan profesional.
- Certificates section berbasis carousel dan terhubung ke Supabase.
- Contact section untuk kanal komunikasi.
- Footer dan social links untuk GitHub, LinkedIn, dan Instagram.
- Responsive layout untuk desktop, tablet, dan mobile.

## Tech Stack

### Core

- React 19 sebagai library utama untuk membangun UI berbasis komponen.
- TypeScript untuk type safety dan struktur data yang lebih jelas.
- Vite sebagai development server dan build tool.
- Tailwind CSS untuk styling utility-first.

### UI dan Icon

- Lucide React untuk beberapa icon modern, terutama di certificate card.
- React Icons untuk social media icon seperti GitHub, LinkedIn, dan Instagram.
- Material Symbols digunakan melalui class `material-symbols-outlined` untuk icon UI seperti navigasi, action button, dan badge.

### Data dan Backend Pendukung

- Supabase digunakan sebagai backend service untuk mengambil data sertifikat.
- Environment variable digunakan untuk menyimpan konfigurasi Supabase.

### Tooling

- ESLint untuk menjaga kualitas kode.
- TypeScript compiler untuk validasi tipe saat build.
- PostCSS dan Autoprefixer sebagai pendukung pipeline CSS.

## Library dan Dependency

Dependency utama dari `package.json`:

| Library | Fungsi |
| --- | --- |
| `react` | Membangun komponen UI |
| `react-dom` | Render React ke DOM |
| `@supabase/supabase-js` | Client untuk mengambil data dari Supabase |
| `lucide-react` | Icon set berbasis React component |
| `react-icons` | Icon social media |
| `react-router-dom` | Dependency routing React, tersedia untuk kebutuhan routing |

Development dependency:

| Library | Fungsi |
| --- | --- |
| `vite` | Dev server dan bundler |
| `typescript` | Type checking |
| `tailwindcss` | Styling utility-first |
| `postcss` | CSS processing |
| `autoprefixer` | Prefix CSS otomatis |
| `eslint` | Linting |
| `@vitejs/plugin-react` | Integrasi React dengan Vite |
| `typescript-eslint` | ESLint support untuk TypeScript |
| `eslint-plugin-react-hooks` | Linting React hooks |
| `eslint-plugin-react-refresh` | Support React refresh saat development |

## Arsitektur Aplikasi

Project ini memakai arsitektur frontend modular berbasis komponen. File dipisahkan berdasarkan tanggung jawab:

```text
portfolio/
├── public/
│   ├── logo Ra.png
│   ├── shoes4us.png
│   ├── UMKM.png
│   ├── Porto.png
│   ├── venue.png
│   ├── Photo.jpg
│   ├── cv.pdf
│   └── certificate assets
├── src/
│   ├── components/
│   │   ├── BrandIcons.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── SocialLinks.tsx
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── useCertificates.ts
│   │   └── useTypingEffect.ts
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── project-data.ts
│   │   └── constans.ts
│   ├── page/
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── types/
│   │   ├── certificate.ts
│   │   └── project-type.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Penjelasan Struktur

### `src/App.tsx`

`App.tsx` adalah root layout aplikasi. File ini menyusun semua section utama:

- `Navbar`
- `Home`
- `About`
- `Projects`
- `Experience`
- `Certificates`
- `Contact`
- `Footer`

Di dalamnya juga terdapat ambient glow background yang memberi karakter visual pada seluruh halaman.

### `src/page`

Folder ini berisi section utama portfolio:

- `Home.tsx`: hero section, typing effect, CTA, tech pills, dan social links.
- `About.tsx`: informasi profil dan positioning sebagai software engineer.
- `Projects.tsx`: data project dan layout project grid.
- `Experience.tsx`: pengalaman atau perjalanan profesional.
- `Certificates.tsx`: carousel sertifikat yang mengambil data dari Supabase.
- `Contact.tsx`: informasi dan CTA kontak.

### `src/components`

Folder ini menyimpan komponen reusable:

- `Navbar.tsx`: navigasi utama dan active section.
- `ProjectCard.tsx`: komponen card project dengan browser mockup.
- `SocialLinks.tsx`: list social media.
- `Footer.tsx`: bagian footer.
- `BrandIcons.tsx`: komponen icon brand.
- `SectionHeader.tsx`: header section reusable.

### `src/hooks`

Custom hooks untuk memisahkan logic dari UI:

- `useTypingEffect`: mengatur typing animation pada hero.
- `useActiveSection`: membaca posisi scroll dan menentukan menu aktif.
- `useCertificates`: mengambil data sertifikat dari Supabase, termasuk loading, error, dan refetch state.

### `src/lib`

Folder helper dan konfigurasi:

- `supabase.ts`: membuat Supabase client dari environment variable.
- `project-data.ts`: data dan helper project alternatif.
- `constans.ts`: data konstan project lama/pendukung.

### `src/types`

Folder definisi TypeScript:

- `project-type.ts`: tipe `Project`, `ProjectTag`, `ProjectStat`, `AccentColor`, `ProjectLayout`, dan `ColSpan`.
- `certificate.ts`: tipe data sertifikat.

## Arsitektur Data

### Data Statis

Sebagian besar konten portfolio saat ini bersifat statis dan ditulis langsung di component atau file data, misalnya:

- informasi tech stack di `Home.tsx`
- daftar project di `Projects.tsx`
- konfigurasi link sosial
- asset gambar project dari folder `public`

Pendekatan ini cocok untuk portfolio personal karena cepat, ringan, dan mudah di-deploy.

### Data Dinamis

Data sertifikat diambil dari Supabase melalui hook `useCertificates`.

Alur data certificate:

```text
Certificates.tsx
    ↓
useCertificates()
    ↓
supabase.from("certifikat").select("*")
    ↓
render CertificateCard
```

Jika request gagal, UI menampilkan error state dan tombol retry. Jika data kosong, UI menampilkan empty state.

## Integrasi Supabase

File konfigurasi Supabase berada di:

```text
src/lib/supabase.ts
```

Environment variable yang dibutuhkan:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Jika variable tersebut tidak tersedia, aplikasi akan melempar error:

```text
Missing Supabase environment variables. Please check your .env file.
```

Table yang digunakan untuk certificate:

```text
certifikat
```

Field yang digunakan mengikuti tipe `Certificate`, seperti `id`, `title`, `img`, `link`, dan `created_at`.

## Projects Section

Projects section dirancang untuk menampilkan karya utama secara visual.

Struktur layout:

- Project pertama dengan `layout: "featured"` tampil full width.
- Project lainnya tampil dalam grid 2 kolom pada desktop.
- Setiap card memakai browser mockup agar screenshot project terlihat seperti aplikasi yang sedang dibuka.
- Logo tab browser menggunakan asset pribadi dari `public/logo Ra.png`.

Project yang ditampilkan:

| Project | Deskripsi Singkat | Tech/Role |
| --- | --- | --- |
| E-Commerce Shoes4Us | Website e-commerce untuk pembelian sepatu | Next.js, Tailwind CSS, PostgreSQL |
| Venue Event Management | Sistem manajemen booking venue untuk admin | NestJS, MySQL, Prisma, EJS |
| Web Portofolio Profile | Website portfolio profile | React, Tailwind CSS |
| LokaLin | Web e-commerce untuk UMKM | Next.js, Tailwind CSS, PostgreSQL, Supabase |
| CuanSelor | Platform perencanaan pensiun dengan simulasi Monte Carlo dan AI advisor | Next.js, Express.js, FastAPI, Gemini AI |

## Design System

Portfolio ini menggunakan gaya visual dark interface dengan beberapa pola desain:

- Background utama: `#0b1120`
- Aksen utama: cyan dan purple
- Glass panel dengan border transparan
- Gradient text untuk heading penting
- Badge kecil dengan font monospace
- Browser mockup untuk project preview
- Card dengan shadow halus dan hover state
- Responsive grid berbasis Tailwind breakpoint

Font yang dipakai melalui class CSS:

- `font-geist`
- `font-grotesk`
- `font-jetbrains`

## Responsive Design

Responsiveness ditangani dengan utility Tailwind seperti:

- `sm:`
- `md:`
- `lg:`
- `xl:`

Contoh penerapan:

- Projects grid berubah dari 1 kolom di mobile menjadi 12-column grid di desktop.
- Card project biasa memakai `md:col-span-6` sehingga tampil 2 kolom.
- Hero section berubah dari stack vertical di mobile menjadi dua kolom di layar besar.
- Certificates carousel menyesuaikan jumlah card per page berdasarkan lebar viewport.

## Cara Menjalankan Project

### 1. Install dependency

```bash
npm install
```

### 2. Buat file environment

Buat file `.env` di root project:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Jalankan development server

```bash
npm run dev
```

Secara default Vite akan menjalankan aplikasi di:

```text
http://localhost:5173
```

### 4. Build production

```bash
npm run build
```

Output build akan dibuat di folder:

```text
dist/
```

### 5. Preview production build

```bash
npm run preview
```

## Script NPM

| Script | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server Vite |
| `npm run build` | Menjalankan TypeScript build dan Vite production build |
| `npm run lint` | Menjalankan ESLint |
| `npm run preview` | Preview hasil production build |

## Asset Public

Folder `public` menyimpan asset yang dapat diakses langsung dari root path aplikasi.

Contoh:

```text
public/logo Ra.png      -> /logo%20Ra.png
public/shoes4us.png     -> /shoes4us.png
public/UMKM.png         -> /UMKM.png
public/Porto.png        -> /Porto.png
public/venue.png        -> /venue.png
public/cv.pdf           -> /cv.pdf
```

Catatan: karena nama file `logo Ra.png` memiliki spasi, path yang digunakan di kode adalah:

```text
/logo%20Ra.png
```

## Build dan Deployment

Project ini cocok dideploy ke platform static hosting seperti:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Jika menggunakan Supabase, pastikan environment variable production juga diisi di dashboard hosting.

## Catatan Pengembangan

- Gunakan TypeScript type di `src/types` saat menambah struktur data baru.
- Simpan gambar public yang perlu diakses langsung di folder `public`.
- Untuk menambah project baru, update array `PROJECTS` di `src/page/Projects.tsx`.
- Untuk menambah section baru, import component section di `App.tsx` dan tambahkan id section agar bisa dinavigasi.
- Jika menambah menu navigasi, update konfigurasi di `Navbar.tsx` dan `useActiveSection.ts`.
- Jika menambah data dinamis baru, buat hook khusus di folder `src/hooks`.

## Ringkasan

Portfolio Rangga v2 adalah aplikasi frontend modern berbasis React, TypeScript, Vite, dan Tailwind CSS. Website ini menampilkan identitas profesional, project, pengalaman, sertifikat, dan kontak dalam satu halaman responsif. Arsitekturnya dibuat modular agar mudah dirawat, sementara integrasi Supabase memberi kemampuan menampilkan data sertifikat secara dinamis.
