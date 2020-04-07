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



const navLinks = document.querySelectorAll('nav a');
for (let i = 0; i <navLinks.length; i++){
const navTexts = Object.values(siteContent.nav)
navLinks[i].textContent = navTexts[i]
navLinks[i].style.color ='green'
}

// for first section
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const secButton = document.querySelector('.cta-text button');
secButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src',siteContent['cta']['img-src']);


const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


const sectionHeader = document.querySelectorAll('.main-content h4');
sectionHeader[0].textContent = siteContent['main-content']['features-h4'];
sectionHeader[1].textContent = siteContent['main-content']['about-h4'];
sectionHeader[2].textContent = siteContent['main-content']['services-h4'];
sectionHeader[3].textContent = siteContent['main-content']['product-h4'];
sectionHeader[4].textContent = siteContent['main-content']['vision-h4'];

const sectionParagraph = document.querySelectorAll('.main-content p');
sectionParagraph[0].textContent = siteContent['main-content']['features-content'];
sectionParagraph[1].textContent = siteContent['main-content']['about-content'];
sectionParagraph[2].textContent = siteContent['main-content']['services-content'];
sectionParagraph[3].textContent = siteContent['main-content']['product-content'];
sectionParagraph[4].textContent = siteContent['main-content']['vision-content'];




// const mainContentFirstH = document.querySelector('.text-content h4');
// mainContentFirstH.textContent = Object.values(siteContent['main-content']['features-h4']);

// const mainContentFirstP = document.querySelector('.text-content p');
// mainContentFirstP.textContent = Object.values(siteContent['main-content']['features-content']);





// const mainContentSecondH = document.querySelector('.text-content h4')
// mainContentSecondH.textContent = Object.values(siteContent['main-content']['about-h4'])

// const mainContentSecondP = document.querySelector('.text-content p')
// mainContentSecondP.textContent = Object.values(siteContent['main-content']['about-content'])




// const sectionHeader = document.querySelector('.maim-content .text-content h4');
// topContentHeader[0].textContent = Object.values(siteContent['main-content']['features-h4']);
// topContentHeader[1].textContent = Object.values(siteContent['main-content']['about-h4'])

// const topContentParagraph = document.querySelector('.main-content .text-content p');
// topContentParagraph[0].textContent = Object.values(siteContent['main-content']['features-content']);
// topContentParagraph[1].textContent = Object.values(siteContent['main-content']['about-content'])
