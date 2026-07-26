document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. REMOVE TELA DE CARREGAMENTO (LOADER) ---
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.classList.add("hidden");
            const mainHeading = document.querySelector("h1");
            if (mainHeading) mainHeading.focus();
        });
    }

    // --- 2. CONTROLE DO MENU RESPONSIVO (MOBILE) ---
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileMenuBtn && navMenu) {
        const toggleMenu = () => {
            const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
            mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
            navMenu.classList.toggle("active");
            
            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars");
                menuIcon.classList.toggle("fa-xmark");
            }
        };

        mobileMenuBtn.addEventListener("click", toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navMenu.classList.contains("active")) {
                    toggleMenu();
                }
            });
        });
    }

    // --- 3. CONTROLE DO ESTILO DO HEADER AO ROLAR ---
    const header = document.getElementById("header");
    const handleScrollHeader = () => {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", handleScrollHeader, { passive: true });

    // --- 4. EFEITO DE REVELAÇÃO DO CONTEÚDO (SCROLL REVEAL) ---
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.2;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll, { passive: true });

    // --- 5. BOTÃO VOLTAR AO TOPO ---
    const backToTopBtn = document.getElementById("back-to-top");
    
    if (backToTopBtn) {
        const handleBackToTopVisibility = () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleBackToTopVisibility, { passive: true });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
