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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//update anchor text content--------------------------------------------------
const anchText = document.querySelectorAll('nav a')
for(let i = 0; i < anchText.length; i++){
  anchText[i].textContent = siteContent["nav"]["nav-item-" + (i+1).toString()];
  //update to be green
  anchText[i].style.color = "green";
}

//update cta content---------------------------------------------------------
const ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent.cta.h1;
const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta.button;
//update cta image
document.querySelector('#cta-img').src = siteContent.cta["img-src"];

//update main content--------------------------------------------------------
const mainContentH4s = document.querySelectorAll('.main-content h4');
const mainContentPs = document.querySelectorAll('.main-content p');
// assign h4s
mainContentH4s[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4s[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4s[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4s[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4s[4].textContent = siteContent["main-content"]["vision-h4"];
// assign Ps
mainContentPs[0].textContent = siteContent["main-content"]["features-content"];
mainContentPs[1].textContent = siteContent["main-content"]["about-content"];
mainContentPs[2].textContent = siteContent["main-content"]["services-content"];
mainContentPs[3].textContent = siteContent["main-content"]["product-content"];
mainContentPs[4].textContent = siteContent["main-content"]["vision-content"];
// assign img src
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

//update contact------------------------------------------------------------
const contactH4 = document.querySelector('.contact h4');
const contactPs = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent.contact["contact-h4"];
contactPs[0].textContent = siteContent.contact["address"];
contactPs[1].textContent = siteContent.contact["phone"];
contactPs[2].textContent = siteContent.contact.email;

//update footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;

// add items to nav
const newNavEle1 = document.createElement('a');
const newNavEle2 = document.createElement('a');
newNavEle1.href = '#';
newNavEle2.href = "#";
newNavEle1.textContent = "I'm not";
newNavEle2.textContent = "Original";
const mainNav = document.querySelector('header nav');
mainNav.prepend(newNavEle1);
mainNav.appendChild(newNavEle2);
// mainNav.style.color = "green"; // this doesnt work!  explicit 
// //specificity in CSS overrides inline style of parent
newNavEle1.style.color = "green";
newNavEle2.style.color = "green";

//stretch 
//i want the header fixed
const header = document.querySelector('header');
header.style.backgroundColor = "lightgray";
header.style.opacity = 0.8;
header.style.position = 'fixed';
header.style.top = 0;
header.style.left = 0;
header.style.display = 'flex';
header.style.justifyContent = 'center';
mainNav.style.width = '600px';
document.querySelector('.cta').style.marginTop = "150px";

//stretch 2
// make the button text change when clicked

ctaButton.addEventListener("click",writeStuff);
function writeStuff(){
  ctaButton.textContent = "HAH! YOU CLICKED ME!";
}