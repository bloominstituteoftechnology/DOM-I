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

console.log('project wired!')
//fixing the header
const headerNav = document.querySelectorAll('nav a');
const headerNavLinks=Array.from(headerNav);
headerNavLinks[0].textContent="Services";
headerNavLinks[0].classList.add('italic');
headerNavLinks[1].textContent="Product";
headerNavLinks[1].classList.add('italic');
headerNavLinks[2].textContent="Vision";
headerNavLinks[2].classList.add('italic');
headerNavLinks[3].textContent="Features";
headerNavLinks[3].classList.add('italic');
headerNavLinks[4].textContent="About";
headerNavLinks[4].classList.add('italic');
headerNavLinks[5].textContent="Contact";
headerNavLinks[5].classList.add('italic');
const headerLogo = document.querySelector('#logo-img');
headerLogo.src="http://localhost:9000/img/logo.png";

// fixing the area directly under the header
const secondSection = document.querySelector('.cta');
const secondSectionTitle=secondSection.querySelector('h1');
const secondSectionButton=secondSection.querySelector('button');
const secondSectionImg=secondSection.querySelector('img');
secondSectionTitle.textContent="DOM Is Awesome";
secondSectionButton.textContent="Get Started";
secondSectionImg.src='http://localhost:9000/img/cta.png';

// fixing the top of the website body
const mainContent=document.querySelector(".main-content");
const mainContentTop=mainContent.querySelector('.top-content');
const mainContentTopText=mainContentTop.querySelectorAll('.text-content');
const mainContentArray=Array.from(mainContentTopText);
const mainContentFeatures=mainContentArray[0].querySelector('h4');
const mainContentFeaturesContent=mainContentArray[0].querySelector('p');
mainContentFeatures.textContent="Features";
mainContentFeaturesContent.textContent='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
const mainContentAbout=mainContentArray[1].querySelector('h4');
const mainContentAboutContent=mainContentArray[1].querySelector('p');
mainContentAbout.textContent="About";
mainContentAboutContent.textContent='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
//adding an image in the middle 
const middleImage=mainContent.querySelector('img');
middleImage.src="http://localhost:9000/img/accent.png";
// fixing the bottom of the website body
const mainContentBottom=mainContent.querySelector('.bottom-content');
const mainContentBottomText=mainContentBottom.querySelectorAll('.text-content');
const bottomContentArray=Array.from(mainContentBottomText);
const mainContentServices=bottomContentArray[0].querySelector('h4');
const mainContentServicesContent=bottomContentArray[0].querySelector('p');
mainContentServices.textContent="Services";
mainContentServicesContent.textContent='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
const mainContentProduct=bottomContentArray[1].querySelector('h4');
const mainContentProductContent=bottomContentArray[1].querySelector('p');
mainContentProduct.textContent="Product";
mainContentProductContent.textContent='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
const mainContentVision=bottomContentArray[2].querySelector('h4');
const mainContentVisionContent=bottomContentArray[2].querySelector('p');
mainContentVision.textContent='Vision';
mainContentVisionContent.textContent='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// fixing the contacts
const contacts=document.querySelector('.contact');
const contactsTitle=contacts.querySelector('h4');
contactsTitle.textContent='Contact';
const contactsList= contacts.querySelectorAll('p');
const contactsArray=Array.from(contactsList);
contactsArray[0].textContent='123 Way 456 Street Somewhere, USA';
contactsArray[1].textContent='1 (888) 888-8888';
contactsArray[2].textContent='sales@greatidea.io';
//fixing the footer
const footerCopyright=document.querySelector("footer a");
footerCopyright.classList.add('bold');
footerCopyright.textContent="Copyright Great Idea! 2021";