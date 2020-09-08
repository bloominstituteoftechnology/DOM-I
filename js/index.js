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

const menu = document.getElementsByTagName('a');
menu[0].textContent = siteContent["nav"]["nav-item-1"];


menu[1].textContent = siteContent["nav"]["nav-item-2"];
menu[2].textContent = siteContent["nav"]["nav-item-3"];
menu[3].textContent = siteContent["nav"]["nav-item-4"];
menu[4].textContent = siteContent["nav"]["nav-item-5"];
menu[5].textContent = siteContent["nav"]["nav-item-6"];


let mainpic = document.getElementById("cta-img");
mainpic.setAttribute('src',siteContent['cta']["img-src"]);

const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let toph = document.querySelectorAll('.main-content .top-content .text-content h4' )

toph[0].textContent = siteContent['main-content']['features-h4'];
toph[1].textContent = siteContent['main-content']['about-h4'];

let topP = document.querySelectorAll('.main-content .top-content .text-content p')

topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

let middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent ['main-content']['middle-img-src'])

let bottomH = document.querySelectorAll('.main-content .bottom-content .text-content h4')
bottomH[0].textContent = siteContent['main-content']['services-h4']
bottomH[1].textContent = siteContent['main-content']['product-h4']
bottomH[2].textContent = siteContent['main-content']['vision-h4']

let bottomP = document.querySelectorAll('.main-content .bottom-content .text-content p')
bottomP[0].textContent = siteContent['main-content']['services-content']
bottomP[1].textContent = siteContent['main-content']['product-content']
bottomP[2].textContent = siteContent['main-content']['vision-content']

let contactH = document.querySelector('.contact h4')
contactH.textContent = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')
footer.textContent = siteContent['footer']['copyright']



const parent = document.querySelector("nav");

const Link1 = document.createElement("a")
const Link2 = document.createElement("a")

Link1.textContent = "Bad ideas";
Link2.textContent = "More Bad ideas";

parent.appendChild(Link1);
parent.prepend(Link2);

const navItems = document.querySelectorAll('a')

navItems.forEach(element => {
  element.style.color = "green";
})