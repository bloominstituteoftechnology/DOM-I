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



// ***********************************
// *****************NAV***************
// ***********************************
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');
const navItems = Array.from(document.querySelectorAll('nav > a'));
const navContent = siteContent.nav["nav-item-1"];
const newNavItem1 = document.createElement("a");
const newNavItem2 = document.createElement("a");
newNavItem1.textContent = "Sample";
newNavItem2.textContent = "Check";
newNavItem1.style.color = "green";
newNavItem2.style.color = "green";
nav.appendChild(newNavItem1);
nav.prepend(newNavItem2);
// console.log(nav);
const header = document.querySelector('header');
header.style.backgroundColor="aqua";
header.style.padding = "0 1rem 1.5rem";
header.style.borderRadius = "0 0 10px 10px"

navItems.forEach((i, index) => i.textContent = siteContent.nav[`nav-item-${index + 1}`]);
// navItems[0].textContent = siteContent.nav["nav-item-1"];
// navItems[1].textContent = siteContent.nav["nav-item-2"];
// navItems[2].textContent = siteContent.nav["nav-item-3"];
// navItems[3].textContent = siteContent.nav["nav-item-4"];
// navItems[4].textContent = siteContent.nav["nav-item-5"];
// navItems[5].textContent = siteContent.nav["nav-item-6"];
// navItems[0].style.color = "green";
// navItems[1].style.color = "green";
// navItems[2].style.color = "green";
// navItems[3].style.color = "green";
// navItems[4].style.color = "green";
// navItems[5].style.color = "green";
navItems.forEach(i=>i.style.color = "green");

// ***********************************
// ****************CTA****************
// ***********************************
const ctaH1= document.querySelector('.cta-text > h1');
let ctaArr = siteContent['cta']['h1'].toString().split(" ");
console.log(ctaArr);



const ctaH1_2 = document.createElement("h1");
const ctaH1_3 = document.createElement("h1");
const ctaButton = document.querySelector('.cta-text > button');
const ctaImg = document.querySelector('#cta-img');
console.log(ctaButton);

ctaButton.addEventListener("click", function(){
  let update = prompt("what do you want to add as an awesome thing?");
  ctaH1.textContent = `${update} is Awesome!!!`;
  ctaImg.src = "https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg?auto=compress&cs=tinysrgb&h=350";
  // e.preventDefault();
});
// const changeHeroImg = 

ctaH1.textContent = ctaArr[0];
ctaH1.appendChild(ctaH1_2);
ctaH1.appendChild(ctaH1_3);
ctaH1_2.textContent = ctaArr[1];
ctaH1_3.textContent = ctaArr[2];
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// ***********************************
// ****************MAIN***************
// ***********************************

const firstTopContentH4 = document.querySelector('.top-content > .text-content h4');
const firstTopContentP = document.querySelector('.top-content > .text-content p');
const secondTopContentH4 = document.querySelector('.top-content > :last-child h4');
const secondTopContentP = document.querySelector('.top-content > :last-child p');
const mainImg = document.querySelector('#middle-img');
const firstBottomContentH4 = document.querySelector('.bottom-content > .text-content h4');
const firstBottomContentP = document.querySelector('.bottom-content > .text-content p');
const secondBottomContentH4 = document.querySelector('.bottom-content > :nth-child(2) h4');
const secondBottomContentP = document.querySelector('.bottom-content > :nth-child(2) p');
const thirdBottomContentH4 = document.querySelector('.bottom-content > :last-child h4');
const thirdBottomContentP = document.querySelector('.bottom-content > :last-child p');

firstTopContentH4.textContent = siteContent["main-content"]["features-h4"];
firstTopContentP.textContent = siteContent["main-content"]["features-content"];
secondTopContentH4.textContent = siteContent["main-content"]["about-h4"];
secondTopContentP.textContent = siteContent["main-content"]["about-content"];
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
firstBottomContentH4.textContent = siteContent["main-content"]["services-h4"];
firstBottomContentP.textContent = siteContent["main-content"]["services-content"];
secondBottomContentH4.textContent = siteContent["main-content"]["product-h4"];
secondBottomContentP.textContent = siteContent["main-content"]["product-content"];
thirdBottomContentH4.textContent = siteContent["main-content"]["vision-h4"];
thirdBottomContentP.textContent = siteContent["main-content"]["vision-content"];

// ***********************************
// *************CONTACT***************
// ***********************************

const contactH4 = document.querySelector('.contact > h4');
const contactAddress = document.querySelector('.contact > p');
const contactPhone = document.querySelector('.contact > p:nth-child(3)');
const addressLocations = document.createElement('p');
const contactEmail = document.querySelector('.contact > p:last-child');
const addressLines = siteContent['contact']['address'].toString().split(" ");
const addressLine1 = `${addressLines[0]} ${addressLines[1]} ${addressLines[2]} ${addressLines[3]}`;
const addressLine2 = `${addressLines[4]} ${addressLines[5]}`;




contactH4.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = addressLine1;
contactAddress.appendChild(addressLocations);
addressLocations.textContent = addressLine2;
addressLocations.style.marginTop = "0";
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

// ***********************************
// *************FOOTER****************
// ***********************************

const footerP = document.querySelector('footer > p');
footerP.textContent = siteContent["footer"]["copyright"];
const footer = document.querySelector('footer');
footer.style.backgroundColor = "aqua";
footer.style.padding = "3rem 0 1rem";
footer.style.marginBottom = '0';
footer.style.borderRadius = '10px 10px 0 0';



