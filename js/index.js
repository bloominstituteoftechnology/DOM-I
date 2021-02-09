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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let newNav = document.querySelector('nav');
let newK = document.createElement('a');
let preK = document.createElement('a')
newK.setAttribute('href', '#');
preK.setAttribute('href', '#');
newNav.appendChild(newK);
newNav.prepend(preK);

let nav = document.querySelectorAll("nav a");
nav.forEach( (item, index)=> {
  item.innerText = siteContent['nav'][Object.keys(siteContent['nav'])[index-1]]
  item.style.color = 'purple';
})

newK.innerText = 'Its Me';
preK.innerText = 'Hello';

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctabut = document.querySelector("button");
ctabut.innerText = siteContent["cta"]["button"];

let ctah1 = document.querySelector('h1');
ctah1.textContent = siteContent['cta']['h1']

let mContent = Object.entries(siteContent['main-content']);
let mh4 = document.querySelectorAll('.main-content h4');
let mp = document.querySelectorAll('.main-content p');
let mainH4 = [];
let mainC =[];

mContent.forEach( (item) => {
  if(item[0].includes('h4')){
    mainH4.push(item[1]);
  } else if(item[0].includes('content')){
    mainC.push(item[1]);
  }else{null}
})

mh4.forEach((item, index) => {
  item.innerText = mainH4[index];
})

mp.forEach((item, index) => {
  item.innerText = mainC[index];
})

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let conh4 = document.querySelector('.contact h4');
conh4.textContent = siteContent['contact']['contact-h4'];

let conp = document.querySelectorAll(".contact p");
conp.forEach( (item, index)=> {
  item.textContent = siteContent['contact'][Object.keys(siteContent['contact'])[index+1]]
})

let foot = document.querySelector('footer');
foot.innerText = siteContent['footer']['copyright'];















  