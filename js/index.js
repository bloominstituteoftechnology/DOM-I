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
// let logo = document.getElementById("logo-img");
// logo.src = siteContent["nav"]["img-src"];


let nav = document.querySelector('nav');
console.log(nav);

const newElement1 = document.createElement('a');
newElement1.innerText = 'Welcome';
newElement1.href = 'https://google.com';
newElement1.style.color = "green";
nav.prepend(newElement1);

const newElement2 = document.createElement('a');
newElement2.innerText = 'Shopping';
newElement2.href = 'https://amazon.com';
newElement2.style.color = "green";
nav.appendChild(newElement2);


let navA = document.querySelectorAll('nav a');
console.log(navA.length);
for(let i=1; i < navA.length-1; i++){
  navA[i].innerText = siteContent["nav"]["nav-item-"+i];
  navA[i].style.color = "green";
}



let headerImg = document.querySelector('#logo-img');
 headerImg.src = siteContent["nav"]["img-src"];


let ctaH1 = document.querySelector('.cta h1');
ctaH1.innerText = siteContent["cta"]["h1"];

let ctaBut = document.querySelector('.cta button');
ctaBut.innerText = siteContent["cta"]["button"];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];



let mainH4 = document.querySelectorAll('.main-content h4');
mainH4[0].innerText = siteContent["main-content"]["features-h4"];
mainH4[1].innerText = siteContent["main-content"]["about-h4"];
mainH4[2].innerText = siteContent["main-content"]["services-h4"];
mainH4[3].innerText = siteContent["main-content"]["product-h4"];

let mainCont = document.querySelectorAll('.main-content p');
mainCont[0].innerText = siteContent["main-content"]["features-content"];
mainCont[1].innerText = siteContent["main-content"]["about-content"];
mainCont[2].innerText = siteContent["main-content"]["services-content"];
mainCont[3].innerText = siteContent["main-content"]["product-content"];

let mainImg = document.querySelector('#middle-img');
mainImg.src = siteContent["main-content"]["middle-img-src"];


let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent["contact"]["address"];
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

let footerP = document.querySelector('footer p');
footerP.innerText = siteContent["footer"]["copyright"];

