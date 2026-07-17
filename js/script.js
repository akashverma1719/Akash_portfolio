/*=========================================
    NOTE:
    Typing animation, active-navbar highlighting, page loader,
    cursor... wait keep cursor here, mobile menu, sticky navbar,
    and dark/light theme are already handled by inline <script>
    blocks in index.html. This file only contains the features
    that are NOT duplicated there, to avoid "Identifier has
    already been declared" SyntaxErrors (classic scripts share
    one global scope, so redeclaring the same const/let names
    across files/blocks crashes the whole file that runs last).
=========================================*/

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
    CONTACT FORM -> SEND VIA WHATSAPP
=========================================*/

const sendWhatsapp = document.getElementById("sendWhatsapp");

if (sendWhatsapp) {

sendWhatsapp.addEventListener("click", function () {

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

}
