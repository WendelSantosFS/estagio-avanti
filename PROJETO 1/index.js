const hoverAllCategories = document.getElementById("menuHamburgue")
hoverAllCategories.addEventListener('mouseover', () =>{
   document.getElementById('divSecondAllCategories').classList.toggle('dNone')
})
hoverAllCategories.addEventListener('mouseout', () =>{
    document.getElementById('divSecondAllCategories').classList.toggle('dNone')
 })


const hoverAllDepartments = document.getElementById("hoverDepartment")
hoverAllDepartments.addEventListener('mouseover', () => {
   document.getElementById('divDepartments').classList.toggle('dNone')
})
hoverAllDepartments.addEventListener('mouseout', () =>{
    document.getElementById('divDepartments').classList.toggle('dNone')
})



const accordionBotton1 = document.querySelector('.accordionText1')
accordionBotton1.addEventListener('click', () => {
    const ptextSection8 = document.querySelector('.textAccordion1')
    ptextSection8.classList.toggle('dNone')
})
const accordionBotton2 = document.querySelector('.accordionText2')
accordionBotton2.addEventListener('click', () => {
    const ptextSection8 = document.querySelector('.textAccordion2')
    ptextSection8.classList.toggle('dNone')
})
const accordionBotton3 = document.querySelector('.accordionText3')
accordionBotton3.addEventListener('click', () => {
    const ptextSection8 = document.querySelector('.textAccordion3')
    ptextSection8.classList.toggle('dNone')
})



const fileiraCard1 = document.querySelector(".containerSwiper1")
const fileiraCard1_2 = document.querySelector(".containerSwiper1-2")

const fileiraCard2 = document.querySelector(".containerSwiper2")
const fileiraCard2_2 = document.querySelector(".containerSwiper2-2")

const fileiraCard3 = document.querySelector(".containerSwiper3")
const fileiraCard3_2 = document.querySelector(".containerSwiper3-2")

const positionSlidesSection1 = document.getElementById("renderPositionSlides")

const swiper = new Swiper(".mySwiper", {
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

function addCardDiv(user, fileira, index) {
    const divPrincipal = document.createElement('div')
    divPrincipal.className = `cards card${index + 1}`
    const div2 = document.createElement('div')
    div2.className = 'div2'
    const div3 = document.createElement('div')
    div3.className = 'div3'
    const div4 = document.createElement('div')
    div4.className = 'div4'

    const btnNovo = document.createElement('button')
    btnNovo.className = 'btnTopBlue'
    btnNovo.innerHTML = '<span class="textBold">NOVO</span>'
    btnNovo.disabled = true
    
    const percentPrice = document.createElement('p')
    percentPrice.className = 'percentPrice'
    percentPrice.innerHTML = '<a href="https://www.nike.com.br/air-max-1-86-027221.html?cor=51" target="_blank">10% OFF</a>'

    const img = document.createElement('img')
    img.src = user.image
    img.alt = 'imagem do produto'

    const nameProduct = document.createElement('p')
    nameProduct.className = 'nameProduct'
    nameProduct.innerText = user.name

    const divPrices = document.createElement('div')
    divPrices.className = 'prices'
    const price = document.createElement('p')
    price.className = 'price'
    price.innerHTML = `<del>R$${user.price}</del>`
    const priceDescont = document.createElement('p')
    priceDescont.className = 'priceDescont'
    priceDescont.innerHTML = `<span class="textBoldBlack">R$${((parseFloat(user.price) * 0.8) - 0.1).toFixed(2)}</span>`

    const partialPrice = document.createElement('p')
    partialPrice.className = 'partialPrice'
    partialPrice.innerHTML = 'Ou em até <span class="textBold">10x de R$ 7,90</span>'

    const btnBuy = document.createElement('button')
    btnBuy.className = 'btnBuy'
    btnBuy.innerHTML = 'Comprar'

    div4.appendChild(percentPrice)
    div3.append(price, priceDescont)
    divPrices.append(div3, div4)
    divPrincipal.append(btnNovo, img, nameProduct, divPrices, partialPrice, btnBuy)
    fileira.append(divPrincipal)
}

async function renderNav() {
    const user = await fetch("./products.json")
    const data = await user.json()
    const dadosProntos = data.Products

    dadosProntos.forEach( (product, index)=> {
        addCardDiv(product, fileiraCard1, index)
        addCardDiv(product, fileiraCard1_2, index)
    })
    dadosProntos.forEach( (product, index)=> {
        addCardDiv(product, fileiraCard2, index)
        addCardDiv(product, fileiraCard2_2, index)
    })
    dadosProntos.forEach( (product, index)=> {
        addCardDiv(product, fileiraCard3, index)
        addCardDiv(product, fileiraCard3_2, index)
    })
}
renderNav()





const resultSearch = document.getElementById('resultSearch')
const btnLupa = document.getElementById('btnLupa')
const inputSearch = document.getElementById('inputSearch')

btnLupa.addEventListener('click', () => {
    let valueInput = inputSearch.value

    const p = document.createElement('p')
    p.className = 'paragrafoSearch'
    p.id = 'paragrafoSearch'
    
    if (valueInput.trim().length === 0) {
        console.log('Pesquisa vazia')
        return;
    } else {
        p.innerHTML = `<span class="textBold">Você pesquisou por: '${valueInput}'</span>`
        inputSearch.value = ''
    }

    resultSearch.append(p)
    


    setTimeout( () => {
        document.getElementById('paragrafoSearch').remove()
    } , 4000)
})

function renderPointers () {
    const pointer1 = document.createElement('div')
    pointer1.className = 'pointer pointer1'

    const pointer2 = document.createElement('div')
    pointer2.className = 'pointer'

    const pointer3 = document.createElement('div')
    pointer3.className = 'pointer'

    positionSlidesSection1.append(pointer1, pointer2, pointer3)
}
renderPointers()


const menuMobile = document.querySelector(".menuHamburguerMobile")
menuMobile.addEventListener('mouseover', () => {
    document.querySelector(".menuMobile").classList.toggle('dNone')
})
menuMobile.addEventListener('mouseout', () => {
    document.querySelector(".menuMobile").classList.toggle('dNone')
})