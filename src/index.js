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

// console.log('project wired!')
// console.log('hello')

const linkList= document.querySelectorAll('header nav a');
// console.log(linkList)
const linksArray= Array.from(linkList);
// console.log(linksArray)
linksArray.forEach(item=> {
  item.classList.add('italic')
})
linksArray[0].textContent= "Service";
linksArray[1].textContent= "Product";
linksArray[2].textContent= "Vision";
linksArray[3].textContent= "Features";
linksArray[4].textContent= "About";
linksArray[5].textContent= "Contact";

const headerImg= document.querySelector('#logo-img');
headerImg.src= siteContent.images['logo-img'];

const ctaImg= document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']

const middleImg= document.querySelector('#middle-img');
middleImg.src=siteContent.images['accent-img'];

const title= document.querySelector('h1')
title.textContent= "DOM Is Awesome"
const buttonText= document.querySelector('button').textContent= "Get Started";


//THIS REFUSED TO WORK FOR ME...DON'T KNOW WHY
// const mainContent= document.querySelectorAll('.text-content')
// mainContent[0].textContent= 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// mainContent[1].textContent= 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// mainContent[2].textContent= 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// mainContent[3].textContent= 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// mainContent[4].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// // console.log(mainContent)
// const h4Set= document.querySelectorAll('.main-content h4');
// console.log(h4Set);
// h4Set[0].textContent= 'features';
// h4Set[1].textContent= 'about;
// h4Set[2].textContent= 'Services';
// h4Set[3].textContent= 'Product';
// h4Set[4].textContent= 'Vision';
// const mainSectionA= document.querySelector('.main-content .top-content')
// console.log(mainSectionA)

const topSection= document.querySelector('.top-content');
topSection.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topSection.children[0].children[1].textContent = siteContent['main-content'] ['features-content']
topSection.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topSection.children[1].children[1].textContent = siteContent['main-content']['about-content']

const bottomSection=document.querySelector('.bottom-content');
bottomSection.children[0].children[0].textContent= siteContent['main-content']['services-h4'];
bottomSection.children[0].children[1].textContent= siteContent['main-content']['services-content'];
bottomSection.children[1].children[0].textContent= siteContent['main-content']['product-h4'];
bottomSection.children[1].children[1].textContent= siteContent['main-content']['product-content'];
bottomSection.children[2].children[0].textContent= siteContent['main-content']['vision-h4'];
bottomSection.children[2].children[1].textContent= siteContent['main-content']['vision-content'];






const contactInfo= document.querySelector('.contact')
contactInfo.children[0].textContent=siteContent.contact['contact-h4'];
contactInfo.children[1].textContent= siteContent.contact['address'];
contactInfo.children[2].textContent= siteContent.contact['phone']
contactInfo.children[3].textContent= siteContent.contact['email']
// contactInfo.h4.textContent= "Contact";
// const contactText= document.querySelectorAll('.contact p')
// console.log(contactText)
// contactText[0].textContent= "123 Way 456 Street Somewhere, USA";
// contactText[1].textContent= "1 (888) 888-8888";
// contactText[2].textContent= "sales@greatidea.io";

const closingLink= document.querySelector('footer a')
closingLink.textContent= siteContent.footer.copyright;
closingLink.classList.add('bold');