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




let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItems = document.getElementsByTagName('a');

let key='';
for(let i = 0; i<= navItems.length-1;i++)
{
  key = 'nav-item-'+(i+1);
  navItems[i].innerText = siteContent.nav[key];
}

let h1 = document.getElementsByTagName('h1');
h1[0].innerText=siteContent.cta.h1;

let ctaBtn = document.querySelector('button');
ctaBtn.innerText = siteContent.cta.button;

function wreckIt(){

  let imgs = document.querySelectorAll('img')

  console.log(imgs);
  
  //its even a fun game to see how many times you get to click the button.
  let x = (Math.round(Math.random() * (2 - 0) + 0));
  let y = (Math.round(Math.random() * (2 - 0) + 0));
  let z = (Math.round(Math.random() * (2 - 0) + 0));
  
  imgs[0].src = imgs[x].src;
  imgs[1].src = imgs[y].src;
  imgs[2].src = imgs[z].src; 
  
}


ctaBtn.addEventListener('click',wreckIt);






ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

document.getElementById('middle-img').setAttribute('src',siteContent["main-content"]["middle-img-src"]);

let topContent = document.getElementsByClassName('top-content');
let textHeaders = topContent[0].getElementsByTagName('h4');
textHeaders[0].innerText = siteContent["main-content"]["features-h4"];
textHeaders[1].innerText = siteContent["main-content"]["about-h4"];
let textBlocks = topContent[0].getElementsByTagName('p');
textBlocks[0].innerText = siteContent["main-content"]["features-content"];
textBlocks[1].innerText = siteContent["main-content"]["about-content"];

let botContent = document.getElementsByClassName('bottom-content');   
let btmTextHeaders = botContent[0].getElementsByTagName('h4');
btmTextHeaders[0].innerText = siteContent["main-content"]["services-h4"];
btmTextHeaders[1].innerText = siteContent["main-content"]["product-h4"];
btmTextHeaders[2].innerText = siteContent["main-content"]["vision-h4"];
let btmTextBlocks = botContent[0].getElementsByTagName('p');
btmTextBlocks[0].innerText = siteContent["main-content"]["services-content"];
btmTextBlocks[1].innerText = siteContent["main-content"]["product-content"];
btmTextBlocks[2].innerText = siteContent["main-content"]["vision-content"];

let contact = document.getElementsByClassName('contact');
let cntHeader = contact[0].getElementsByTagName('h4');
cntHeader[0].innerText = siteContent.contact["contact-h4"];
let paras = contact[0].getElementsByTagName('p');
paras[0].innerText = siteContent.contact.address;
paras[1].innerText = siteContent.contact.phone;
paras[2].innerText = siteContent.contact.email;

let element = document.getElementsByTagName('footer');
let p = element[0].getElementsByTagName('p');
p[0].innerText = siteContent.footer.copyright;



let navItem1 = document.createElement('a');
navItem1.href = '#';
navItem1.innerText = 'Coffee'
let navItem2 = document.createElement('a');
navItem2.href = '#';
navItem2.innerText = 'RedBull'

let myNav = document.querySelector('nav');
myNav.appendChild(navItem1);
myNav.prepend(navItem2)



let aCollection = document.querySelectorAll('a');
aCollection.forEach(element=>{
  element.style.color = 'green'
})


