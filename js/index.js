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

const ctaH1 = document.querySelector('div.cta-text > h1');

ctaH1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('div.cta-text > button');

ctaButton.textContent = siteContent["cta"]["button"];

const ctaImage = document.getElementById('cta-img');

ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

const featTitle = document.querySelector('div.text-content > h4');

featTitle.textContent = siteContent["main-content"]["features-h4"];

const featContent = document.querySelector('div.text-content > p');

featContent.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = document.querySelector('div.text-content:nth-child(2) > h4');

aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutCont = document.querySelector('div.text-content:nth-child(2) > p');

aboutCont.textContent = siteContent["main-content"]["about-content"];

const midImage = document.getElementById('middle-img');

midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servTitle = document.querySelector('div.bottom-content > div.text-content > h4');

servTitle.textContent = siteContent["main-content"]["services-h4"];

const servCont = document.querySelector('div.bottom-content > div.text-content > p');

servCont.textContent = siteContent["main-content"]["services-content"];

const prodTitle = document.querySelector('div.bottom-content > div.text-content:nth-child(2) > h4');

prodTitle.textContent = siteContent["main-content"]["product-h4"];

const prodCont = document.querySelector('div.bottom-content > div.text-content:nth-child(2) > p');

prodCont.textContent = siteContent["main-content"]["product-content"];

const visionTitle = document.querySelector('div.bottom-content > div.text-content:nth-child(3) > h4');

visionTitle.textContent = siteContent["main-content"]["product-h4"];

const visionCont = document.querySelector('div.bottom-content > div.text-content:nth-child(3) > p');

visionCont.textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector('section.contact > h4');

contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contAddress = document.querySelector('section.contact > p');

contAddress.textContent = siteContent["contact"]["address"];

const contPhone = document.querySelector('section.contact > p:nth-child(3)');

contPhone.textContent = siteContent["contact"]["phone"];

const contEmail = document.querySelector('section.contact > p:nth-child(4)');

contEmail.textContent = siteContent["contact"]["email"];

const fCopyright = document.querySelector('footer > p');

fCopyright.textContent = siteContent["footer"]["copyright"];

for (let i = 0; i < navSelect.length; i++) {
  navSelect[i].style.color = 'green';
}

let navB = document.createElement('a');
let newText = document.createTextNode('Worked');
navB.appendChild(newText);

let element = document.querySelector('nav');
element.appendChild(navB);

let navC = document.createElement('a');
let newTextTwo = document.createTextNode('This');
navC.appendChild(newTextTwo);

let elementTwo = document.querySelector('nav');
elementTwo.prepend(navC);

const navSelect = document.getElementsByTagName('a');
