const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


const links = document.querySelectorAll('header nav a');
const realLinksArray = Array.from(links);

console.log(siteContent.nav);
realLinksArray[0].textContent = siteContent["nav"]["nav-item-1"];
realLinksArray[1].textContent = siteContent["nav"]["nav-item-2"];
realLinksArray[2].textContent = siteContent["nav"]["nav-item-3"];
realLinksArray[3].textContent = siteContent["nav"]["nav-item-4"];
realLinksArray[4].textContent = siteContent["nav"]["nav-item-5"];
realLinksArray[5].textContent = siteContent["nav"]["nav-item-6"];

for(let i = 0; i < realLinksArray.length; i++){
  realLinksArray[i].className += ' italic';
}

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1']

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button'];



const topContentTitles = document.querySelectorAll('.top-content .text-content h4');
console.log(topContentTitles);
const realTopContentTitles = Array.from(topContentTitles);
console.log(realTopContentTitles);

realTopContentTitles[0].textContent = siteContent['main-content']['features-h4'];
realTopContentTitles[1].textContent = siteContent['main-content']['about-h4'];

const topContentContent = document.querySelectorAll('.top-content .text-content p');
const realTopContentContent = Array.from(topContentContent);

realTopContentContent[0].textContent = siteContent['main-content']['features-content'];
realTopContentContent[1].textContent = siteContent['main-content']['about-content'];

const bottomContentTitles = document.querySelectorAll('.bottom-content .text-content h4');
const realBottomContentTitles = Array.from(bottomContentTitles);
console.log(bottomContentTitles);
console.log(realBottomContentTitles);

realBottomContentTitles[0].textContent = siteContent['main-content']['services-h4'];
realBottomContentTitles[1].textContent = siteContent['main-content']['product-h4'];
realBottomContentTitles[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentContent = document.querySelectorAll('.bottom-content .text-content p');
const realBottomContentContent = Array.from(bottomContentContent);

realBottomContentContent[0].textContent = siteContent['main-content']['services-content'];
realBottomContentContent[1].textContent = siteContent['main-content']['product-content'];
realBottomContentContent[2].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
const realContactInfo = Array.from(contactInfo);

realContactInfo[0].textContent = siteContent['contact']['address'];
realContactInfo[1].textContent = siteContent['contact']['phone'];
realContactInfo[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.className += ' bold';


const images = document.querySelectorAll('img');
const realImages = Array.from(images);

realImages[0].src = siteContent['images']['logo-img'];
realImages[1].src = siteContent['images']['cta-img'];
realImages[2].src = siteContent['images']['accent-img'];