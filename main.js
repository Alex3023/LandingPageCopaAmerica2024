document.addEventListener("DOMContentLoaded", function(){

    //Para el botón Modo Oscuro
    const btnDark = document.querySelector("#btn_dark")
    const btnIndicador = document.querySelector("#btn_indicador")
    const btnIcon = document.querySelector("#btn_container i")
    const icon = document.querySelectorAll(".icon")

    let isLeft = true;

    btnDark.addEventListener("click",function(){
        if (isLeft) {
            btnIndicador.style.transform = "translateX(70%)"
            btnIndicador.classList.remove("bg-slate-800")
            btnIndicador.classList.add("bg-black")
            document.documentElement.classList.add('dark')
            
            //Cambio de color de iconos
            icon.forEach(icons => {
                icons.style.color = "#FFFFFF"
            })

            btnIcon.classList.remove("fa-solid", "fa-futbol", "fa-sm")
            btnIcon.classList.add("fa-solid", "fa-trophy", "fa-sm")

        } else {
            btnIndicador.style.transform = "translateX(0)"
            btnIndicador.classList.remove("bg-black")
            btnIndicador.classList.add("bg-slate-800")
            document.documentElement.classList.remove('dark')

            //Cambio de color de iconos
            icon.forEach(icons => {
                icons.style.color = "#4B5563"
            })

            btnIcon.classList.remove("fa-solid", "fa-trophy", "fa-sm")
            btnIcon.classList.add("fa-solid", "fa-futbol", "fa-sm")

        }
        isLeft = !isLeft;
    })

    //Para el menú desplegable lateral

    const btnMenu = document.querySelector('#botonMenu')
    const btnCerrar = document.querySelector('#cerrar')
    const menu = document.querySelector('#menu')

    btnMenu.addEventListener('click', function(){
        menu.classList.remove('translate-x-full')
    })

    btnCerrar.addEventListener("click", function(){
        menu.classList.add('translate-x-full')
    })

    //Menú idiomas desplegable Deskop

    const btnIdiomaDeskop = document.querySelector('#botonIdiomaDeskop')
    const idiomaDeskop = document.querySelector('#idiomaDeskop')
    const btnTriReverse = document.querySelector('#triReverse')

    let ocultarTri = true

    btnIdiomaDeskop.addEventListener('click', function(){
        idiomaDeskop.classList.toggle('hidden')

        if(ocultarTri){
            btnTriReverse.classList.remove("fa-solid", "fa-caret-down")
            btnTriReverse.classList.add("fa-solid", "fa-caret-up")
        }else{
            btnTriReverse.classList.remove("fa-solid", "fa-caret-up")
            btnTriReverse.classList.add("fa-solid", "fa-caret-down")
        }

        ocultarTri = !ocultarTri
    })

    //Menú idiomas desplegable Mobile

    const btnIdiomasMobile = document.querySelector('#botonIdiomaMenu')
    const menuIdiomaMobile = document.querySelector('#idiomasMobile')
    const btnMasIdioma = document.querySelector('#botonMasIdioma')

    let ocultarIM = true

    btnIdiomasMobile.addEventListener('click', function(){
        menuIdiomaMobile.classList.toggle('hidden')

        if(ocultarIM){
            btnMasIdioma.classList.remove("fa-solid", "fa-plus")
            btnMasIdioma.classList.add("fa-solid", "fa-minus")
        }else{
            btnMasIdioma.classList.remove("fa-solid", "fa-minus")
            btnMasIdioma.classList.add("fa-solid", "fa-plus")
        }

        ocultarIM = !ocultarIM
    })

    //Botón para cambiar bandera del botón idioma principal
    const languageDivs = document.querySelectorAll("#idiomaDeskop > li > div")
    const originalIcon = document.querySelector("#botonIdiomaDeskop .fa-language")

    function clickCambioIconos(event) {
        const img1 = event.currentTarget.querySelector("img").cloneNode(true)
        const img2 = event.currentTarget.querySelector("img").cloneNode(true)
        const currentImgDeskop = document.querySelector("#botonIdiomaDeskop > img")
        if (currentImgDeskop) {
            currentImgDeskop.remove()
        }

        const currentImgMobile = document.querySelector("#botonIdiomaMenu div > img")
        if (currentImgMobile) {
            currentImgMobile.remove()
        }

        originalIcon.style.display = "none"
        originalIconMobile.style.display = "none"
        const idiomaTextDeskop = document.querySelector("#botonIdiomaDeskop p")
        idiomaTextDeskop.insertAdjacentElement('afterend', img1)
        const idiomaTextMobile = document.querySelector("#botonIdiomaMenu div p")
        idiomaTextMobile.insertAdjacentElement('beforebegin', img2)
    }

    languageDivs.forEach(div => {
        div.addEventListener("click", clickCambioIconos)
    })

    //Botón para cambiar bandera del botón idioma mobile
    const languageDivsMobile = document.querySelectorAll("#idiomasMobile > li > div")
    const originalIconMobile = document.querySelector("#botonIdiomaMenu .fa-globe")

    function clickCambioIconosMobile(event) {
        const img1 = event.currentTarget.querySelector("img").cloneNode(true)
        const img2 = event.currentTarget.querySelector("img").cloneNode(true)
        const currentImgMobile = document.querySelector("#botonIdiomaMenu div > img")
        if (currentImgMobile) {
            currentImgMobile.remove()
        }

        const currentImgDeskop = document.querySelector("#botonIdiomaDeskop > img")
        if (currentImgDeskop) {
            currentImgDeskop.remove()
        }
        
        originalIconMobile.style.display = "none"
        originalIcon.style.display = "none"
        const idiomaTextMobile = document.querySelector("#botonIdiomaMenu div p")
        idiomaTextMobile.insertAdjacentElement('beforebegin', img1)
        const idiomaTextDeskop = document.querySelector("#botonIdiomaDeskop p")
        idiomaTextDeskop.insertAdjacentElement('afterend', img2)
    }

    languageDivsMobile.forEach(div => {
        div.addEventListener("click", clickCambioIconosMobile)
    })

    //Botón para aplicar idioma escritorio
    const flags = document.querySelector('#idiomaDeskop')
    const flagsMobile = document.querySelector('#idiomasMobile')
    const textoTraducido = document.querySelectorAll("[data-section]")

    const changeLanguage = async (language) => {
        const requestJson = await fetch( `./languages/${language}.json`)
        const texts = await requestJson.json()

        for(const textoTrad of textoTraducido){
            const section = textoTrad.dataset.section
            const value = textoTrad.dataset.value

            textoTrad.innerHTML = texts[section][value]
        }
    }

    flags.addEventListener("click", (e) =>{
        changeLanguage(e.target.parentElement.dataset.language)
    })

    flagsMobile.addEventListener("click", (e) =>{
        changeLanguage(e.target.parentElement.dataset.language)
    })

})