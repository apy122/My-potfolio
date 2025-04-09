document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const header = document.createElement("header");
    const enlaces = document.createElement("div");
    enlaces.id = "enlaces";

    const enlacesData = [
        { texto: "Inicio", url: "../index.html" },
        { texto: "Contacto", url: "contacto.html" }
    ];

    for (let i = 0; i < enlacesData.length; i++) {
        const p = document.createElement("p");
        p.classList.add("cab", "pags");

        const a = document.createElement("a");
        a.href = enlacesData[i].url;
        a.textContent = enlacesData[i].texto;
        a.classList.add("pagenl");

        p.appendChild(a);
        enlaces.appendChild(p);
    }

    header.appendChild(enlaces);
    body.appendChild(header);
});
