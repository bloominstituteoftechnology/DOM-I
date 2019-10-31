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



// Started Project: Created Selectors


const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".container header nav");
const anchor = document.querySelectorAll("nav a");
const logoImg = document.querySelector("#logo-img");
const ctaSection = document.querySelector(".cta");
const ctaDiv = document.querySelector(".cta-text");
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");
const mainCon = document.querySelector(".main-content");
const mainTop = document.querySelector(".main-content .top-content");
const mainH4 = document.querySelectorAll(".top-content .text-content h4");
const mainP = document.querySelectorAll(".top-content .text-content p");
const middleImg = document.querySelector("#middle-img");
const bottomCon = document.querySelector(".bottom-content");
const bottomH4 = document.querySelectorAll(".bottom-content .text-content h4");
const bottomP = document.querySelectorAll(".bottom-content .text-content p");
const contactH4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");
const footerP = document.querySelector("footer p");
//
// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// Nav
anchor[0].textContent = 'Services';
anchor[1].textContent = 'Product';
anchor[2].textContent = 'Vision';
anchor[3].textContent = 'Features';
anchor[4].textContent = 'About';
anchor[5].textContent = 'Contact';

// Img
logoImg.src = 'img/logo.png';
ctaImg.src = 'img/header-img.png';
middleImg.src = 'img/mid-page-accent.jpg';

// CTA Section
const dom = 'DOM';
const is = ' Is';
const awesome = ' Awesome';
ctaH1.innerHTML = dom + '<br />' + is + '<br />' + awesome;

ctaButton.innerText = 'Get Started';

// Main Content - Top Content
mainH4[0].innerText = 'Features';
mainP[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainH4[1].innerText = 'About';
mainP[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Main Content - Bottom content
bottomH4[0].innerText = 'Services';
bottomP[0].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomH4[1].innerText = 'Product';
bottomP[1].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomH4[2].innerText = 'Vision';
bottomP[2].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Contact
contactH4.innerText = 'Contact';
const address = '123 Way 456 Street';
const cityState = 'Somewhere, USA';
contactP[0].innerHTML = address + '<br />' + cityState;
contactP[1].innerText = '1 (888) 888-8888';
contactP[2].innerText = 'sales@greatidea.io';

// Footer
footerP.innerText = 'Copyright Great Idea! 2018';

//
// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// Color Change for Nav Text
for (let i = 0; i < anchor.length; i++) {
  anchor[i].style.color = 'green';
};
// creating Children
const originalChild = document.createElement('a');
const davidPrependThis = document.createElement('a');
originalChild.innerText = 'Original';
davidPrependThis.innerText = 'Digital Timer';
originalChild.style.color = 'green';
davidPrependThis.style.color = 'green';
originalChild.href = 'original.html';
davidPrependThis.href = './stretch-assignment/digital_timer/index.html';

// adding Children
nav.appendChild(originalChild);
nav.prepend(davidPrependThis);


body.style.backgroundColor = 'black';
body.style.color = 'white';
mainCon.style.borderTop = '2px solid white';
mainCon.style.borderBottom = '2px solid white';
logo.style.backgroundColor = 'white';


body.addEventListener('click', (event) => {
  if(body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    mainCon.style.borderTop = '2px solid black';
    mainCon.style.borderBottom = '2px solid black';
  }else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    mainCon.style.borderTop = '2px solid white';
    mainCon.style.borderBottom = '2px solid white';
  }
});
