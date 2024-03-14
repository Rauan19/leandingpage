const botaomenu = document.querySelector('.icone-menu')
const menulateral = document.querySelector('.menu-lateral')
const botaosair = document.querySelector('.botaoSair')

function abrirmenu(){
       menulateral.style.height = "290px"
       botaomenu.style.display = "none"
       botaosair.style.display = "block"
    
}

function sairmenu(){
    botaomenu.style.display = "block"
    menulateral.style.height = "0"
    botaosair.style.display = "none"
    

}


    


botaomenu.addEventListener('click', abrirmenu)
botaosair.addEventListener('click', sairmenu)
