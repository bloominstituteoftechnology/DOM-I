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

Example: Update the img src for the logo

 let logo = document.getElementById("logo-img");
 logo.setAttribute('src', siteContent["nav"]["img-src"])

 let title = document.querySelector('title');
 title.textContent = "Great Idea!";
 console.log(title);

 let navLinks = document.querySelectorAll('nav > a');
 console.log(navLinks);

 navLinks[0].textCOntent = siteContent;

 let h1Text = document.querySelector('h1');
 h1Text.textContent = siteContent['cta']['h1'];

 let codePicture = document.querySelector('#cta-img');
 codePicture.setAtrribute('src', siteContent["cta"]["img-src"]);

 let buttonText = document.querySelector('.cta-text button');
 buttonText.textContent = siteContent['cta']['button'];

 let mainContent = document.querySelector

 const navBar = document.querySelectorAll('nav > a')
 console.log(navBar)

 navBar[0].textContent = siteContent.nav['nav-item-1'];
 navBar[1].textContent = siteContent.nav['nav-item-2'];
 navBar[2].textContent = siteContent.nav['nav-item-3'];
 navBar[3].textContent = siteContent.nav['nav-item-4'];
 navBar[4].textContent = siteContent.nav['nav-item-5'];
 navBar[5].textContent = siteContent.nav['nav-item-6'];

 logoTitle.className = "logo heading green"


///


 
const logo = documnet.getElementByID("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = documnet.querySelectorAll('nav a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];
links.style.color = 'green';

const headerTitle= documnet.querySelector('.cta-text h1');
headerTitle.textContent = siteContent['cta']['h1'];

console.log(headerTitle);

const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button'];

const HeaderImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

const topSelectionContent = document.querySelector('.top-content');
const topSubtitles = topSectionContent.querySelectorAll('h4');
const topPara = topSectionContent.querySelectorAll('p');
topSubtitles[0].textContent = siteContent['main-content']['features-h4'];
topSubtitles[1].textContent = siteContent['main-content']['about-h4'];
topPara[0].textContent = siteContent['main-content']['features-content'];
topPara[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const bottomSectionContent = document.querySelector('bottom-content');
const bottomSubtitles = bottomSectionContent.querySelectorAll('h4');
const bottomPara = bottomSectionContent.querySelectorAll('p');
bottomSubtitles[0].textContent = siteContent['main-content']['services-h4'];

const contact = document.querySelector('contact');
const footer = document.querySelector('footer');

const firstImg = document.querySelector('#cta-img');

const headerEl = documement.querySelector('header');
 headerEl.appendChild(subHeadline)
subHeadline.style.color = "green"

const section = document.querySelector('section');
section.style.flexWrap = "wrap";

section.style.justifyContent="center";
const newImg = document.createElement('img');
newImg
newImg.src="logo.png"

newImg.style.marginRight = '20px';
newImg.alt = "Another Img"

section.prepend(newImg)

