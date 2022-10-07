
//navbar
let Bars = document.querySelector('.bars')
let Navbar = document.getElementById('ul')
let section = document.querySelector('section')
let content = document.querySelector('.content')

Bars.addEventListener('click', function(){
  Navbar.classList.toggle('move')
})
section.addEventListener('click', function(){
  Navbar.classList.remove('move')
})
content.addEventListener('click', function(){
  Navbar.classList.remove('move')
})



// scrolling 

let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let abdesslem = document.querySelector('.abdesslem')
let Header = document.querySelector('header')

window.onscroll = function(){
  let value = scrollY
  stars.style.left = value + 'px'
  moon.style.top = value* 4 + 'px'
  mountains3.style.top = value* 2 + 'px'
  mountains4.style.top = value* 1.5 + 'px'
  river.style.top = value + 'px'
  boat.style.top = value + 'px'
  boat.style.left = value* 3 + 'px'
  abdesslem.style.fontSize = value/2 + 'px'
  if(scrollY >= 67){
    abdesslem.style.fontSize = 57 + 'px'
    abdesslem.style.position = 'fixed'
     if(scrollY >= 430){
       abdesslem.style.display = 'none'
       Header.style.backgroundColor = '#200016'
     }
     else{
      abdesslem.style.display = 'block'
      Header.style.backgroundColor = 'transparent'
     }
     if(scrollY >= 127){
       document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
     }else{
       document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
     }
  }

}