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

// Setting The Navigation
const navItemOne = document.querySelector('nav a:nth-child(1)');
const navItemTwo = document.querySelector('nav a:nth-child(2)');
const navItemThree = document.querySelector('nav a:nth-child(3)');
const navItemFour = document.querySelector('nav a:nth-child(4)');
const navItemFive = document.querySelector('nav a:nth-child(5)');
const navItemSix = document.querySelector('nav a:nth-child(6)');

navItemOne.textContent = siteContent.nav["nav-item-1"];
navItemTwo.textContent = siteContent.nav["nav-item-2"];
navItemThree.textContent = siteContent.nav["nav-item-3"];
navItemFour.textContent = siteContent.nav["nav-item-4"];
navItemFive.textContent = siteContent.nav["nav-item-5"];
navItemSix.textContent = siteContent.nav["nav-item-6"];

const navItems = document.querySelectorAll('nav a');
navItems.forEach(el => {
	el.style.color = ("green");
});

// Createing Links
const navTag = document.querySelector('nav');
const home = document.createElement('a')
home.textContent = "Home";
home.setAttribute('href', '#');
home.style.color = "green";

const lorem = document.createElement('a')
lorem.textContent = "Lorem";
lorem.setAttribute('href', '#');
lorem.style.color = "green";

navTag.prepend(home);
navTag.appendChild(lorem);



// CTA header text
const ctaHeader = document.querySelector('.cta-text');
const ctaArray = siteContent.cta.h1.split(" ");
document.querySelector('.cta-text h1').remove();
ctaHeader.insertAdjacentHTML("afterbegin", `<h1>${ctaArray[0]} <br>${ctaArray[1]}<br> ${ctaArray[2]}</h1>`);

// ctaArray.forEach(word => {
// 	ctaHeader.insertAdjacentHTML('afterbegin', `<h1>${word}<br></h1>`);
// })



// CTA Button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

// CTA Image
const ctaImage = document.querySelector('#cta-img')
ctaImage.src = siteContent.cta["img-src"];

// Feature & About Content
const featuresHeader = document.querySelector('.top-content .text-content:nth-child(1) h4');
const featuresText = document.querySelector('.top-content .text-content:nth-child(1) p');

const aboutHeader = document.querySelector('.top-content .text-content:nth-child(2) h4');
const aboutText = document.querySelector('.top-content .text-content:nth-child(2) p');

featuresHeader.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];

aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];

// Middle Image
const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

// Services Product & Vision
const serviceHeader = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
const serviceText = document.querySelector(".bottom-content .text-content:nth-child(1) p");

const productHeader = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
const productText = document.querySelector(".bottom-content .text-content:nth-child(2) p");

const visionHeader = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
const visionText = document.querySelector(".bottom-content .text-content:nth-child(3) p");

serviceHeader.textContent = siteContent["main-content"]["services-h4"];
serviceText.textContent = siteContent["main-content"]["services-content"];

productHeader.textContent = siteContent["main-content"]["product-h4"];
productText.textContent = siteContent["main-content"]["product-content"];

visionHeader.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHeader = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('section.contact p');

const contactArray = siteContent.contact.address.split(" ");

contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactHeader.insertAdjacentHTML('afterend', `<p>${contactArray[0]} ${contactArray[1]} ${contactArray[2]} ${contactArray[3]} <br> ${contactArray[4]} ${contactArray[5]}`);

contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


// footer
const mainFooterParagraph = document.querySelector('footer p');
mainFooterParagraph.textContent = siteContent.footer.copyright;
