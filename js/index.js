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
const logoImg = document.getElementById("logo-img");
logoImg.src = siteContent.nav["img-src"];

//  navigation section 

const navItems = document.querySelectorAll('nav a');
navItems[0].text = siteContent.nav["nav-item-1"];
navItems[1].text = siteContent.nav["nav-item-2"];
navItems[2].text = siteContent.nav["nav-item-3"];
navItems[3].text = siteContent.nav["nav-item-4"];
navItems[4].text = siteContent.nav["nav-item-5"];
navItems[5].text = siteContent.nav["nav-item-6"];

navItems.forEach(element =>{
  element.style.color ="#15ad3d";
})

const newNav = document.querySelector('nav');
let homeNav = document.createElement('a');
homeNav.innerHTML = "Home";
newNav.prepend(homeNav);
homeNav.style.color ="#15ad3d";
 
let logNav = document.createElement('a');
logNav.innerHTML = "Log";
newNav.append(logNav);
logNav.style.color ="#15ad3d";





const ctaText = document.querySelector(".cta h1");
ctaText.innerText = siteContent.cta['h1'];


const btn = document.querySelector('.cta button');
btn.innerText = siteContent.cta.button;


const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];


const h4Tag = document.querySelectorAll('.text-content h4');
h4Tag[0].innerText = siteContent["main-content"]["features-h4"];
h4Tag[1].innerText = siteContent["main-content"]["about-h4"];
h4Tag[2].innerText = siteContent["main-content"]["services-h4"];
h4Tag[3].innerText = siteContent["main-content"]["product-h4"];
h4Tag[4].innerText = siteContent["main-content"]["vision-h4"];


const pTag = document.querySelectorAll('.text-content p');
pTag[0].innerHTML = siteContent["main-content"]["features-content"];
pTag[1].innerHTML = siteContent["main-content"]["about-content"];
pTag[2].innerHTML = siteContent["main-content"]["services-content"];
pTag[3].innerHTML = siteContent["main-content"]["product-content"];
pTag[4].innerHTML = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];


const contH4 = document.querySelector('.contact h4');
contH4.innerHTML = siteContent["contact"]["contact-h4" ];



const contP = document.querySelectorAll('.contact p');
contP[0].innerHTML = siteContent["contact"]["address"]
contP[1].innerHTML = siteContent["contact"]["phone"]
contP[2].innerHTML = siteContent["contact"]["email"]

const buttomLine = document.querySelector('footer p');
buttomLine.innerHTML = siteContent["footer"]["copyright" ]



