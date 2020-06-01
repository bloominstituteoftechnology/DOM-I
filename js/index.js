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


// Header --------------------------------------------------------------------------------
// Adding an Announcement Banner ---- 
const grabBody = document.querySelector('body');
const bannerAnnouncement = document.createElement('div');
bannerAnnouncement.style.height = "100px";

bannerAnnouncement.setAttribute("class", "banner");
bannerAnnouncement.style.backgroundColor = "lightblue";
bannerAnnouncement.style.display = "flex";
bannerAnnouncement.style.justifyContent = "center";
bannerAnnouncement.style.alignItems = "center";

grabBody.prepend(bannerAnnouncement);



const grabBanner = document.querySelector('.banner');
const announcement = document.createElement("h1");

announcement.textContent = "🔥Buy Now!!🔥"
announcement.style.fontSize = "2rem";
announcement.style.color = "black";

grabBanner.prepend(announcement);

// Adding an Announcement Banner ---- 


// - Grab elements on the DOM 
const navItems = document.querySelectorAll('nav a');
navItems[0].setAttribute("class", siteContent.nav["nav-item-1"]);
navItems[1].setAttribute("class", siteContent.nav["nav-item-2"]);
navItems[2].setAttribute("class", siteContent.nav["nav-item-3"]);
navItems[3].setAttribute("class", siteContent.nav["nav-item-4"]);
navItems[4].setAttribute("class", siteContent.nav["nav-item-5"]);
navItems[5].setAttribute("class", siteContent.nav["nav-item-6"]);
 

// - Assigning jSON content
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[0].style.color = "green";

navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[1].style.color = "green";

navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[2].style.color = "green";

navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[3].style.color = "green";

navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[4].style.color = "green";

navItems[5].textContent = siteContent.nav["nav-item-6"];
navItems[5].style.color = "green";
// Header --------------------------------------------------------------------------------


// cta --------------------------------------------------------------------------------

const ctaText = document.querySelector('.cta h1');
ctaText.textContent  = siteContent.cta.h1;

const ctaButt = document.querySelector('.cta button');
ctaButt.textContent = siteContent.cta.button

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);


// cta --------------------------------------------------------------------------------


// main-content --------------------------------------------------------------------------------

const topTextContent = document.querySelectorAll('.text-content h4');
topTextContent[0].textContent = siteContent["main-content"]["features-h4"];
topTextContent[1].textContent = siteContent["main-content"]["about-h4"];
topTextContent[2].textContent = siteContent["main-content"]["services-h4"];
topTextContent[3].textContent = siteContent["main-content"]["product-h4"];
topTextContent[4].textContent = siteContent["main-content"]["vision-h4"];

const topParaTextContent = document.querySelectorAll('.text-content p');
topParaTextContent[0].textContent = siteContent["main-content"][ "features-content"];
topParaTextContent[1].textContent = siteContent["main-content"][ "about-content"];
topParaTextContent[2].textContent = siteContent["main-content"][ "services-content"];
topParaTextContent[3].textContent = siteContent["main-content"][ "product-content"];
topParaTextContent[4].textContent = siteContent["main-content"][ "vision-content"];

const getImg = document.querySelector(".middle-img");
getImg.src = siteContent["main-content"]["middle-img-src"]

// contact --------------------------------------------------------------------------------
const contactH4 = document.querySelector('.contact h4');
const contactp = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent.contact["contact-h4"];
contactp[0].textContent = siteContent.contact.address
contactp[1].textContent = siteContent.contact.phone
contactp[2].textContent = siteContent.contact.email
// contact --------------------------------------------------------------------------------

// footer --------------------------------------------------------------------------------
const daFooter = document.querySelector('footer p');
daFooter.textContent = siteContent.footer.copyright

// footer --------------------------------------------------------------------------------