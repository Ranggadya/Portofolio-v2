# Design Doc: Shoes4Us Case Study Dossier Technical Elevation

**Date:** 2026-11-08  
**Topic:** Elevasi Keunggulan Teknis Shoes4Us (Keamanan, Fast Query, Transaksi Atomik) pada Detail Project Dossier  
**Target:** `src/data/projects.ts` (`id: 'shoes4us'`)  

---

## 1. Intent & The Why
Menonjolkan keunggulan *engineering* nyata pada platform **Shoes4Us** di portofolio, khususnya pada modal detail studi kasus (**Project Dossier Modal**). Narasi disusun dengan bahasa yang menjual dan ramah pengguna (*user-friendly*) di bagian atas mengenai masalah nyata belanja online (bebas lemot, transaksi aman, ukuran pasti dapat), kemudian dibuktikan dengan data teknis arsitektur di bawahnya (keamanan Bcrypt/JWT/anti-SQLi, query sub-15ms Go + pgx, dan transaksi atomik `SELECT ... FOR UPDATE`).

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
- Memperbarui data `dossier` pada proyek `shoes4us` di `src/data/projects.ts` dengan salinan (*copy*) yang lebih persuasif dan menjual.
- Memperjelas 3 pilar rekayasa sistem:
  1. **Fast Query & Low Latency**: Sub-15ms response via Go Chi + `pgxpool` connection pooling + B-Tree composite index.
  2. **Zero-Trust Security**: Bcrypt hash, dual-mode JWT (Bearer + HttpOnly), RBAC Route Guard, dan query terparameterisasi kebal SQLi.
  3. **Atomic Concurrency Integrity**: Row-level locking `SELECT ... FOR UPDATE` untuk eliminasi 100% *race condition* dan *overselling* stok varian ukuran.
- Menjaga potongan kode Go nyata (`inventory_service.go`) yang mendemonstrasikan penguncian stok atomik.

### Non-Goals
- **Tidak mengubah kartu mockup depan** (`Shoes4UsMockup.tsx`): Tampilan mockup kartu di halaman utama dipertahankan persis seperti kondisi saat ini.
- **Tidak mengubah skema styling/warna modal** (`ProjectDossierModal.tsx`): Semua kelas CSS, layout, dan token warna dual-theme (`bg-[#fafafc]`, `dark:bg-[#101216]`, bordir, dsb.) tetap menggunakan sistem desain yang sudah ada.

### Anti-Goals
- Tidak merusak kompatibilitas skema antarmuka `ProjectDossier` di `src/types/index.ts`.
- Tidak menggunakan istilah promosi ritel generik (diskon/sale) yang mengaburkan kapabilitas teknis pengembang.

---

## 3. Constraints
- **Preservasi Skema Data**: Tetap mematuhi tipe `ProjectDossier` tanpa ada properti yang *missing* atau *undefined*.
- **Desain & Warna**: 100% mengikuti gaya visual dan palet warna yang sudah aktif di portofolio.

---

## 4. Approaches Considered
- **Approach 1 (Mockup HUD + Dossier)**: Mengubah kartu depan dan modal sekaligus.  
  *Status*: Ditolak oleh pengguna karena kartu depan ingin dipertahankan apa adanya.
- **Approach 2 (Dossier Enrichment - Selected)**: Mempertahankan kartu mockup depan persis seperti sekarang, dan memfokuskan pembaruan pada data `dossier` modal studi kasus dengan narasi menjual + pembuktian keamanan dan performa query.  
  *Status*: Dipilih dan disetujui pengguna.

---

## 5. Rincian Pembaruan Data (`src/data/projects.ts`)

1. **`summary`**:
   *"Platform ritel alas kaki modern yang dirancang untuk mengeliminasi friksi belanja online: navigasi dan pencarian instan tanpa lemot, proteksi keamanan data dan pembayaran lapis baja, serta penguncian stok ukuran fisik secara atomik agar pembeli terhindar dari pembatalan pesanan sepihak."*

2. **`challengeParagraphs`**:
   - Paragraf 1: Mengangkat frustrasi belanja online konvensional—loading lama saat filter sepatu, kekhawatiran manipulasi transaksi pembayaran, dan momok pembatalan pesanan sepihak akibat *overselling* saat rebutan stok ukuran fisik.
   - Paragraf 2: Solusi arsitektur Shoes4Us—SPA React 18 yang instan dipadukan dengan backend Go (Chi Router) berkecepatan tinggi, query terparameterisasi anti-SQL Injection, serta transaksi atomik PostgreSQL `FOR UPDATE` yang menggaransi ketersediaan ukuran secara presisi.

3. **`layers`**:
   - **Layer 01**: *LAYER 01: CLIENT STOREFRONT* (VITE / REACT 18) — *Instant Catalog Discovery & State Engine*.
   - **Layer 02**: *LAYER 02: HIGH-SPEED BACKEND* (GO 1.25 / CHI) — *Sub-15ms Query Latency & pgx Pooling*.
   - **Layer 03**: *LAYER 03: ZERO-TRUST DEFENSE* (SECURITY & RBAC) — *Bcrypt Hashing, Dual-Mode JWT & Anti-SQLi*.
   - **Layer 04**: *LAYER 04: TRANSACTIONAL INTEGRITY* (POSTGRESQL LOCKS) — *Atomic Row-Level Stock Locking (SELECT FOR UPDATE)*.

4. **`decisions` & `capabilities`**:
   - Diperkaya dengan detail metrik *Sub-15ms API*, *Zero SQL Injection & RBAC*, serta *0% Overselling Guarantee*.

---

## 6. Verification
- Menjalankan `npm run build` (`tsc --noEmit && vite build`) untuk memastikan 100% tipe valid dan bebas error.
- Menguji pembukaan modal *Case Study Dossier* Shoes4Us untuk memastikan keterbacaan, estetika, dan keharmonisan warna.

