<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maknohan Wonosobo - Tugas Akhir</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        /* BAGIAN CSS (Pindahkan ini ke file .scss Anda nantinya) */
        :root {
            --primary-yellow: #ffc107;
            --dark-brown: #4e342e;
        }

        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            scroll-behavior: smooth; /* Membuat scroll navigasi jadi halus */
        }

        /* Hero Section Styling */
        #hero {
            background-color: #fdfaf0;
            padding: 100px 0;
        }

        .hero-img {
            max-height: 400px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* Section Spacing */
        section {
            padding: 80px 0;
        }

        /* Product Card Hover Effect */
        .product-card {
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border: 1px solid var(--primary-yellow);
        }

        /* Gallery Grid */
        .gallery-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
            transition: 0.3s;
            cursor: pointer;
        }

        .gallery-img:hover {
            filter: brightness(70%);
        }

        footer {
            background-color: #212529;
            color: white;
            padding: 40px 0;
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-warning" href="#">MAKNOHAN <span class="text-dark">WONOSOBO</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#hero">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Tentang Kami</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Produk</a></li>
                    <li class="nav-item"><a class="nav-link" href="#gallery">Galeri</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Kontak</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-4 fw-bold mb-3">Nikmati Kesegaran <span class="text-warning">Carica</span> Khas Dieng</h1>
                    <p class="lead mb-4">Dipetik langsung dari dataran tinggi Dieng, diolah secara alami tanpa bahan pengawet buatan untuk menjaga kualitas rasa.</p>
                    <a href="#products" class="btn btn-warning btn-lg px-4 fw-bold shadow">PESAN SEKARANG</a>
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0 text-center">
                    <img src="data:image/jpeg;base64,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" alt="Hero Carica" class="img-fluid hero-img">
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container text-center">
            <div class="row justify-content-cent
