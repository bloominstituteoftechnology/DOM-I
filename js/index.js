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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const anchorSelect = document.querySelectorAll("a");
for(let i = 0; i < anchorSelect.length; i++){
  let add = i + 1;
  anchorSelect[i].textContent = siteContent["nav"][`nav-item-${add}`];
  anchorSelect[i].style.color = 'green';
}

const navSelect = document.querySelector("nav");
const newNav1 = document.createElement('a');
newNav1.textContent = 'Ideas';
newNav1.style.color = 'green';
navSelect.appendChild(newNav1);
const newNav2 = document.createElement('a');
newNav1.textContent = 'Home';
newNav1.style.color = 'green';
navSelect.prepend(newNav1);

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];
let ctaCont = document.querySelector(".cta-text");
ctaCont.style.width = "20vw";

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];


const h4Select = document.querySelectorAll("h4");
for(let i = 0; i < h4Select.length; i++){
  if(i === 0){
    h4Select[i].textContent = siteContent["main-content"]["features-h4"];
  }else if(i === 1){
    h4Select[i].textContent = siteContent["main-content"]["about-h4"];
  }else if(i === 2){
    h4Select[i].textContent = siteContent["main-content"]["services-h4"];
  }else if(i === 3){
    h4Select[i].textContent = siteContent["main-content"]["product-h4"];
  }else if(i === 4){
    h4Select[i].textContent = siteContent["main-content"]["vision-h4"];
  }else if(i === 5){
    h4Select[i].textContent = siteContent["contact"]["contact-h4"];
  }
}

const contentSelect = document.querySelectorAll("p");
for(let i = 0; i < contentSelect.length; i++){
  if(i === 0){
    contentSelect[i].textContent = siteContent["main-content"]["features-content"];
  }else if(i === 1){
    contentSelect[i].textContent = siteContent["main-content"]["about-content"];
  }else if(i === 2){
    contentSelect[i].textContent = siteContent["main-content"]["services-content"];
  }else if(i === 3){
    contentSelect[i].textContent = siteContent["main-content"]["product-content"];
  }else if(i === 4){
    contentSelect[i].textContent = siteContent["main-content"]["vision-content"];
  }else if(i === 5){
    contentSelect[i].textContent = siteContent["contact"]["address"];
  }else if(i === 6){
    contentSelect[i].textContent = siteContent["contact"]["phone"];
  }else if(i === 7){
    contentSelect[i].textContent = siteContent["contact"]["email"];
  }else if(i === 8){
    contentSelect[i].textContent = siteContent["footer"]["copyright"];
  }
}
