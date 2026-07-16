/*=========================================
    TYPING ANIMATION
=========================================*/

const typingElement = document.getElementById("typing");

if (typingElement) {

    new Typed("#typing", {

        strings: [

            "Full Stack .NET Developer",

            "ASP.NET MVC Developer",

            "C# Developer",

            "Web API Developer"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1500,

        loop: true

    });

}

/*=========================================
    ACTIVE NAVBAR LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
    PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1500);

    }

});


/*=========================================
    CURSOR EFFECT
=========================================*/

const cursor = document.getElementById("cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

}


/*=========================================
    BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display = window.scrollY > 500 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("navLinks");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {

            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        }

    });

}


/*=========================================
    STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/*=========================================
    DARK / LIGHT THEME
=========================================*/

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}


/*=========================================
    AOS
=========================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        offset: 80

    });

}
document.getElementById("sendWhatsapp").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name=="" || email=="" || subject=="" || message==""){
        alert("Please fill all fields.");
        return;
    }

    let text =
`*New Inquiry*

👤 Name: ${name}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

    let phone = "919520232324";   // <-- apna WhatsApp number

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url,"_blank");

});