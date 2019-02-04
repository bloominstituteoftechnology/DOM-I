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

const anchors = document.querySelectorAll("a")
for(let i = 0; i < anchors.length; i++) {
  anchors[i].innerHTML = Object.values(siteContent["nav"])[i]
} 

const queryhtml = (query, index) => {
  return document.querySelector(query).innerHTML = siteContent[index][query]
}

queryhtml('h1', 'cta');
queryhtml('button', 'cta');

const h4main = document.querySelector(".main-content").querySelectorAll('h4');
const p = document.querySelector(".main-content").querySelectorAll("p");
const objMain = siteContent["main-content"];
const mainImg = siteContent["main-content"]["middle-img-src"];
delete siteContent["main-content"]["middle-img-src"];

for(let i = 0; i < h4main.length; i++) {
  for(let n = 0; n < Object.values(objMain).length; n++) {
    n % 2 == 0 ? h4main[i].innerHTML = Object.values(objMain)[n] : p[i].innerHTML = Object.values(objMain)[n]
  }
}

document.getElementById("cta-img").setAttribute('src', mainImg);

document.getElementById("middle-img").setAttribute('src', mainImg);

const contact = document.querySelector('.contact')
contact.querySelector("h4").innerHTML = siteContent["contact"]["contact-h4"];

contact.querySelectorAll("p").forEach((a, b) => {return a.innerHTML = Object.values(siteContent["contact"])[b + 1]})

document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].innerHTML = siteContent["footer"]["copyright"];