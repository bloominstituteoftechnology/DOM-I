const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo



// let n = document.querySelectorAll('nav a');
// navMenu = Array.from(n);
// navMenu.forEach((item, index) => {
//   for(let i = 0; i < siteContent['nav'].keys.length; i++){
//   item.innerHTML = siteContent['nav'][];
//   }

// })


// nav menu
let nav = document.querySelector('nav');
let linkHome = document.createElement('a');
linkHome.textContent = 'Home';
nav.prepend(linkHome);
let linkBlog = document.createElement('a');
linkBlog.textContent = 'Blog';
nav.appendChild(linkBlog);
let navMenu = document.querySelector('nav');
navMenu.childNodes[2].textContent = siteContent['nav']['nav-item-1'];
navMenu.childNodes[4].textContent = siteContent['nav']['nav-item-2'];
navMenu.childNodes[6].textContent = siteContent['nav']['nav-item-3'];
navMenu.childNodes[8].textContent = siteContent['nav']['nav-item-4'];
navMenu.childNodes[10].textContent = siteContent['nav']['nav-item-5'];
navMenu.childNodes[12].textContent = siteContent['nav']['nav-item-6'];
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(item => {
  item.style.color = 'green';
});


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//cta section
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];
let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent['cta']['button'];
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);


//main content////////////
//top content
let mainTop = document.querySelectorAll('.main-content .top-content .text-content')
mainTop[0].childNodes[1].innerText = siteContent['main-content']['features-h4'];
mainTop[0].childNodes[3].innerText = siteContent['main-content']['features-content'];
mainTop[1].childNodes[1].innerText = siteContent['main-content']['about-h4'];
mainTop[1].childNodes[3].innerText = siteContent['main-content']['about-content'];

//middle content
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
let mainBottom = document.querySelectorAll('.main-content .bottom-content .text-content');
mainBottom[0].childNodes[1].innerText = siteContent['main-content']['services-h4'];
mainBottom[0].childNodes[3].innerText = siteContent['main-content']['services-content'];
mainBottom[1].childNodes[1].innerText = siteContent['main-content']['product-h4'];
mainBottom[1].childNodes[3].innerText = siteContent['main-content']['product-content'];
mainBottom[2].childNodes[1].innerText = siteContent['main-content']['vision-h4'];
mainBottom[2].childNodes[3].innerText = siteContent['main-content']['vision-content'];
let contactInfo = document.querySelector('.contact');
contactInfo.childNodes[1].innerText = siteContent['contact']['contact-h4'];
contactInfo.childNodes[3].innerText = siteContent['contact']['address'];
contactInfo.childNodes[5].innerText = siteContent['contact']['phone'];
contactInfo.childNodes[7].innerText = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];


// events /////////////////////////////

middleImg.addEventListener('mouseover', () => {
 TweenMax.to(middleImg, .75, {
   //all 4 corners    
   borderRadius: "50%"
 });
})
middleImg.addEventListener('mouseleave', () => {
TweenMax.to(middleImg, .75, {
  //top-left and bottom-right | top-right and bottom-left
  borderRadius: "0px"
});
})


ctaButton.addEventListener('dblclick', () => {
  ctaImage.setAttribute('src', 'https://i.ytimg.com/vi/EadVhR6c49k/maxresdefault.jpg');
  ctaImage.setAttribute('class', 'cat');
  TweenMax.to(ctaImage, 2, {scale:"0.65"});
});

ctaButton.addEventListener('click', () => {
ctaText.style.color = 'red';
});

ctaImage.addEventListener('dragend', () => {
  ctaImage.setAttribute('src', siteContent['cta']['img-src']);
  ctaImage.removeAttribute('class', 'cat');
}); 

document.addEventListener('keydown', (char) => {
  if (char.keyCode === 78) {
  alert('nightvision activated')
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'green';
  }

  if (char.keyCode === 82) {
    alert('regular mode activated')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }

});

window.addEventListener('load',()=>{
  alert('press N to enter night vision mode, press R to return to regular mode')
});
