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
    "h1": "DOM \r\nIs \r\n Awesome",
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
// ==================================== HTML/DOM STORAGE =======================================
const header = document.querySelector('header');
//Navigation
const navigation = document.querySelector('nav');
const navLinks = document.querySelectorAll('a');
console.log(navLinks);
const navigationLinkA = navigation.children[0];
const navigationLinkB = navigation.children[1];
const navigationLinkC = navigation.children[2];
const navigationLinkD = navigation.children[3];
const navigationLinkE = navigation.children[4];
const navigationLinkF = navigation.children[5];
// Logo
const logo = document.querySelector("#logo-img");
//Call to Action
const cta = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
const ctaH1 = ctaText.children[0];
const ctaBTN = ctaText.children[1];
const ctaImg = document.querySelector('#cta-img');
// Main Content
const mainContent = document.querySelector('.main-content');
const topContent = document.querySelector('.top-content');
// Top Content
// Top Text Content One
const topTextContentOne = topContent.children[0];
const topContentOneH4= topTextContentOne.children[0];
const topContentOneP= topTextContentOne.children[1];
// Top Text Content Two
const topTextContentTwo = topContent.children[1];
const topContentTwoH4= topTextContentTwo.children[0];
const topContentTwoP= topTextContentTwo.children[1];
// Middle Image 
const midImg = document.querySelector('#middle-img');
// Bottom Content
const bottomContent = document.querySelector('.bottom-content');
// Bottom Text Content One
console.log(bottomContent.children);
const botTextContentOne = bottomContent.children[0];
const botTextContentOneH4= botTextContentOne.children[0];
const botTextContentOneP= botTextContentOne.children[1];
// Bottom Text Content Two
const botTextContentTwo = bottomContent.children[1];
const botTextContentTwoH4= botTextContentTwo.children[0];
const botTextContentTwoP= botTextContentTwo.children[1];
// Bottom Text Content Three
const botTextContentThree = bottomContent.children[2];
const botTextContentThreeH4= botTextContentThree.children[0];
const botTextContentThreeP= botTextContentThree.children[1];
// Contact
const contact = document.querySelector('.contact');
const contactH4 = contact.children[0];
const contactP1 = contact.children[1];
const contactP2 = contact.children[2];
const contactP3 = contact.children[3];
//Footer
const footer = document.querySelector('footer');
const footerP = footer.children[0]


// ====================================== UPDATING TEXT =========================================
//Navigation
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// navigationLinkA.textContent= siteContent['nav']['nav-item-1'];
// navigationLinkB.textContent= siteContent['nav']['nav-item-2'];
// navigationLinkC.textContent= siteContent['nav']['nav-item-3'];
// navigationLinkD.textContent= siteContent['nav']['nav-item-4'];
// navigationLinkE.textContent= siteContent['nav']['nav-item-5'];
// navigationLinkF.textContent= siteContent['nav']['nav-item-6'];
// Nav Logo
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Call to Action
ctaH1.textContent=`${siteContent["cta"]["h1"]}`;
ctaH1.setAttribute('style', 'white-space: pre;');
ctaH1.style.textAlign="center";
ctaBTN.textContent=`${siteContent["cta"]["button"]}`;
ctaImg.src= `${siteContent["cta"]["img-src"]}`;
// Main Content
// Headers
topContentOneH4.textContent=`${siteContent["main-content"]["features-h4"]}`;
topContentTwoH4.textContent=`${siteContent["main-content"]["about-h4"]}`;
botTextContentOneH4.textContent=`${siteContent["main-content"]["services-h4"]}`;
botTextContentTwoH4.textContent=`${siteContent["main-content"]["product-h4"]}`;
botTextContentThreeH4.textContent=`${siteContent["main-content"]["vision-h4"]}`;
// IMAGE
midImg.src="img/mid-page-accent.jpg"
// Paragraphs
topContentOneP.textContent=`${siteContent["main-content"]["features-content"]}`;
topContentTwoP.textContent=`${siteContent["main-content"]["about-content"]}`;
botTextContentOneP.textContent=`${siteContent["main-content"]["services-content"]}`;
botTextContentTwoP.textContent=`${siteContent["main-content"]["product-content"]}`;
botTextContentThreeP.textContent=`${siteContent["main-content"]["vision-content"]}`;

// Contact
contactH4.textContent=`${siteContent["contact"]["contact-h4"]}`;
contactP1.textContent=`${siteContent["contact"]["address"]}`;
contactP1.style.width="25%";
contactP2.textContent=`${siteContent["contact"]["phone"]}`;
contactP3.textContent=`${siteContent["contact"]["email"]}`;
// Footer
footerP.textContent= `${siteContent["footer"]["copyright"]}`;

// ====================================== ADDING STYLES =======================================
// // Green Nav
// navLinks.forEach(function(a){
//   a.style.color="green";
// });
// // Append & Prepend
// var aTown = document.createElement("a");
// aTown.textContent="Atlanta";
// aTown.style.color="green";
// var hTown = document.createElement("a");
// hTown.textContent="Houston";
// hTown.style.color="green";
// navigation.appendChild(aTown);
// navigation.prepend(hTown);
