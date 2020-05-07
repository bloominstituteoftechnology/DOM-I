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

let nav1 = document.querySelectorAll("nav a");
nav1.forEach(( currentValue, index) => {
  currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`];
  });

nav1.forEach((element) => {
element.style.color = 'gray'
});

let newContent = document.createElement("a");
newContent.innerHTML = 'Portfolio';
document.querySelector("nav").appendChild(newContent);
let newContent2 = document.createElement("a");
newContent2.textContent = 'Support';
document.querySelector("nav").appendChild(newContent2)

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

let TYon = document.querySelector('button');
TYon.textContent = siteContent["cta"]["button"];

let circleCodeImg = document.getElementById("cta-img");
circleCodeImg.src = "img/header-img.png";

let midAccentImg = document.querySelector(".middle-img");
midAccentImg.src = "img/mid-page-accent.jpg";

let mainHeaders = document.querySelectorAll(".main-content h4");

let mainText = document.querySelectorAll(".main-content p");

let sections = ['features', 'about', 'services', 'product', 'vision']; 
for(let i=0; i<mainHeaders.length; i++){
  mainHeaders[i].textContent = sections[i];
  mainText[i].textContent = siteContent["main-content"][`${sections[i]}-content`];
}

let Contact = document.querySelector('.contact'); 
Contact.innerHTML = '<h4>Contact</h4> <p>123 Way 456 Street<br>Somewhere, USA</p> <p>1 (888) 888-8888</p> <p>sales@greatidea.io</p>';

let Footer = document.querySelector('footer');
Footer.innerHTML = 'Copyright Great Idea! 2018';