// const logoElement = document.getElementById("logo-img");
// console.log(logoElement)

// const tagNames = document.getElementsByTagName("nav");
// console.log(tagNames)

// const classNames = document.getElementsByClassName("main-content");
// console.log(classNames)



// const ctaElement = document.querySelector("#")



const logoImg = document.querySelector('#logo-img');
// console.log(logoImage)
logoImg.src = "img/logo.png";

const ctaImgEl = document.querySelector('#cta-img');
ctaImgEl.src = "img/header-img.png";


const midImg = document.querySelector('#middle-img');
midImg.src ="img/mid-page-accent.jpg";


const newNav = document.querySelector('a');
newNav.textContent = "Services Product Vision Features About Contact";

const h1El = document.querySelector('h1');
h1El.textContent = "DOM is Awesome";

const btn = document.querySelector('button');
btn.textContent = "Get Started";

const topContent = document.querySelector('.main-content .top-content h4 ');
topContent.textContent = "Features";
document.querySelector(".main-content .top-content h4").style.fontSize = "xx-large";

const topContentP = document.querySelector('.main-content .top-content p');
topContentP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const secondTopContent = document.querySelector()
// secondTopContent.textContent = "About";

const bottomContent = document.querySelector('.bottom-content .text-content h4');
bottomContent.textContent = "Services";
document.querySelector(".bottom-content .text-content h4").style.fontSize = "xx-large";

const bottomContentP = document.querySelector('.bottom-content .text-content p');
bottomContentP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


const contactSection = document.querySelector('.contact h4');
contactSection.textContent = "Contact";
document.querySelector(".contact h4").style.fontSize = "xx-large";

const contactSectionP = document.querySelector('.contact p');
contactSectionP.textContent = "123 Way 456 Street Somewhere, USA 1 (888) 888-8888 sales@greatidea.io";







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
// logo.setAttribute('src', siteContent["nav"]["img-src"])



