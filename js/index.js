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
logo.setAttribute("src", siteContent["nav"]["img-src"]);


const mainHeader = document.querySelector('header');
mainHeader.style.border = 'solid black 1px';
mainHeader.style.backgroundColor = 'LightGrey';

const mainBody = document.querySelector('html');
mainBody.style.backgroundColor = 'LightSteelBlue';

const navBar = document.querySelectorAll('a');
navBar[0].innerText = siteContent.nav['nav-item-1'];
navBar[1].innerText = siteContent.nav['nav-item-2'];
navBar[2].innerText = siteContent.nav['nav-item-3'];
navBar[3].innerText = siteContent.nav['nav-item-4'];
navBar[4].innerText = siteContent.nav['nav-item-5'];
navBar[5].innerText = siteContent.nav['nav-item-6'];

for (let i=0; i < navBar.length; i++) {
  navBar[i].style.color = 'green';
}

const newItem = document.createElement('a');
const navBar1 = document.querySelector('nav');
newItem.innerText = 'Hello';
navBar1.prepend(newItem);
newItem.style.color = 'green';

const newItem1 = document.createElement('a');
const navBar2 = document.querySelector('nav');
newItem1.innerText = 'GoodBye';
navBar2.append(newItem1);
newItem1.style.color = 'green';



const ctaText = document.getElementsByTagName('h1');
ctaText[0].innerHTML = "Dom <br> is <br> Awesome";

const button = document.getElementsByTagName('button');
button[0].innerText = 'Get Started';

const ctaImage = document.getElementById('cta-img');
ctaImage.src = 'img/header-img.png';

const titleH4 = document.getElementsByTagName('h4');
titleH4[0].innerText = siteContent['main-content'] ['features-h4'];
titleH4[1].innerText = siteContent['main-content']["about-h4"];
titleH4[2].innerText = siteContent['main-content']["services-h4"];
titleH4[3].innerText = siteContent['main-content']["product-h4"];
titleH4[4].innerText = siteContent['main-content']["vision-h4"];



const paraText =document.getElementsByTagName('p');

paraText[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraText[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraText[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraText[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paraText[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

paraText[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
paraText[6].innerText = "1 (888) 888-8888"
paraText[7].innerText = "sales@greatidea.io"

paraText[8].innerText = "Copyright Great Idea! 2018"

const midImage = document.querySelector('.middle-img');
midImage.src = "img/mid-page-accent.jpg";

