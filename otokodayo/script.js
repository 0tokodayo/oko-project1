// ============================================
// 0TOKODAYO — INTERAKSI WEBSITE
// ============================================

// Tombol mode gelap / terang
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const modeTerang = document.body.classList.contains("light-mode");
        const ikonTema = themeToggle.querySelector("iconify-icon");

        if (ikonTema) {
            ikonTema.setAttribute(
                "icon",
                modeTerang ? "lucide:moon" : "lucide:sun"
            );
        }
        themeToggle.setAttribute(
            "aria-label",
            modeTerang ? "Aktifkan mode gelap" : "Aktifkan mode terang"
        );
    });
}


// Menu navigasi untuk tampilan ponsel
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    const tutupMenu = () => {
        menuToggle.classList.remove("is-open");
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    };

    menuToggle.addEventListener("click", () => {
        const sedangTerbuka = menuToggle.classList.toggle("is-open");
        mainNav.classList.toggle("is-open", sedangTerbuka);
        menuToggle.setAttribute("aria-expanded", String(sedangTerbuka));
        menuToggle.setAttribute(
            "aria-label",
            sedangTerbuka ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    mainNav.querySelectorAll("a").forEach((tautan) => {
        tautan.addEventListener("click", tutupMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) tutupMenu();
    });
}

// Sembunyikan bingkai foto logo jika file logo.png belum ditambahkan.
// Setelah foto tersedia, gambar akan tampil otomatis.
const logoImage = document.getElementById("logoImage");
if (logoImage) {
    logoImage.addEventListener("error", () => {
        logoImage.style.display = "none";
    });
    logoImage.addEventListener("load", () => {
        logoImage.style.display = "block";
    });
}

// Animasi elemen saat mulai terlihat di layar
const elemenAnimasi = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const pengamat = new IntersectionObserver(
        (daftar, observer) => {
            daftar.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add("is-visible");
                    observer.unobserve(item.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    elemenAnimasi.forEach((elemen) => pengamat.observe(elemen));
} else {
    elemenAnimasi.forEach((elemen) => elemen.classList.add("is-visible"));
}

// Menandai menu sesuai bagian yang sedang dibaca
const bagianHalaman = document.querySelectorAll("main section[id]");
const tautanMenu = document.querySelectorAll(".nav-menu a");

if ("IntersectionObserver" in window) {
    const pengamatMenu = new IntersectionObserver(
        (daftar) => {
            daftar.forEach((item) => {
                if (item.isIntersecting) {
                    tautanMenu.forEach((tautan) => {
                        tautan.classList.toggle(
                            "active",
                            tautan.getAttribute("href") === `#${item.target.id}`
                        );
                    });
                }
            });
        },
        { rootMargin: "-35% 0px -55% 0px" }
    );

    bagianHalaman.forEach((bagian) => pengamatMenu.observe(bagian));
}

console.log("Selamat datang di website 0tokodayo!");
