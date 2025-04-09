document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const enlaces = document.createElement("div");
    enlaces.id = "enlaces";
    enlaces.innerHTML = `
        <p class="cab pags"><a href="html/social.html" class="pagenl">Social</a></p>
        <p class="cab pags"><a href="html/dam.html" class="pagenl">DAM</a></p>
    `;
    let header= document.createElement("header");
    header.appendChild(enlaces)
    body.appendChild(header);

    const contenedor1 = document.createElement("div");
    contenedor1.classList.add("contenedor");
    contenedor1.innerHTML = `
        <h2 class="cab">Hi There!</h2>
        <h1 class="cab">I'M <span id="nombre">Álvaro</span></h1>
        <h3 class="cab" id="titulacion">Educador Social</h3>
    `;

    const contenedor2 = document.createElement("div");
    contenedor2.classList.add("contenedor");
    contenedor2.innerHTML = `
        <h1 id="sobreMi" class="cab">Sobre mí</h1>
        <p class="cab"><strong>Correo Electrónico: </strong>
            <a href="mailto:apy122@gmail.com">apy122@gmail.com</a>
        </p>
        <p class="cab"><strong>Número de teléfono: </strong>
            <a href="tel:+34655832060">+34 655 832 060</a>
        </p>
        <p class="cab"><strong>Redes sociales: </strong></p>
        <div class="redes">
            <a href="https://www.linkedin.com/in/alvaroperezyu" target="_blank">
                <img src="assets/img/linkedin.webp" alt="Perfil de LinkedIn" class="logos">
            </a>
            <a href="https://github.com/apy122" target="_blank">
                <img src="assets/img/github.webp" alt="Perfil de GitHub" class="logos">
            </a>
        </div>
    `;

    body.appendChild(contenedor1);
    body.appendChild(contenedor2);
});
