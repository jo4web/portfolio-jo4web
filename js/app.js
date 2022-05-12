var button = document.getElementById('showMobile');
var mobileMenu = document.querySelector('.mobile-menu');
var list = document.querySelector('.mm-display').children;
var listDesktop = document.querySelector('.n-desktop').children;
var sectionEl = document.getElementsByTagName('section');

function showMenu () {
  if (getComputedStyle(mobileMenu).top === '-999px') {
    mobileMenu.style.top = '50px';
  } else {
    mobileMenu.style.top = '-999px';
  }
}

for (let i = 0; i < list.length; i++) {  
  var link = list[i].children[0];

  link.onclick = function (e) {
    var href = e.target;
    href.style.color = "#585c60";

    for (let j = 0; j < list.length; j++) {
      if (j !== i) {
        list[j].children[0].style.color = "#ffffff";
      }
    }

    mobileMenu.style.top = '-999px';
  }
}


for (let i = 0; i < listDesktop.length; i++) {
  listDesktop[i].onclick = () => {
    listDesktop[i].style.backgroundColor = '#2c2c2d';
    listDesktop[i].style.color = '#ffffff';

    for (let j = 0; j < listDesktop.length; j++) {
      if (j !== i) {
        listDesktop[j].style.backgroundColor = 'transparent';
        listDesktop[j].style.color = 'rgba(255, 255, 255, 0.5)';
      }
    }
  }
}

function progressiveMenu() {
  for (let i = 0; i < sectionEl.length; i++) {

      var sectionPosition = sectionEl[i].getBoundingClientRect();
       
      var sumTopHeight = sectionPosition.height + sectionPosition.top;
  
      if (document.body.scrollTop  >= sectionPosition.top - 100 && document.body.scrollTop  <= sumTopHeight - 100) {
        listDesktop[i].style.backgroundColor = '#2c2c2d';
        list[i].children[0].style.color = 'rgb(88, 92, 96)';
      } 
      else {
        listDesktop[i].style.backgroundColor = 'transparent';
        list[i].children[0].style.color = '#ffffff';
      }
    }
}

button.addEventListener('click', showMenu);
window.addEventListener('scroll', progressiveMenu);

