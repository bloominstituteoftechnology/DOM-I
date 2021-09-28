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

const nav = document.querySelector('nav')
nav.classList.add('mainNav')

const navLinkOne = document.querySelector('nav a')
navLinkOne.classList.add('nav-item-1')
navLinkOne.textContent = siteContent['nav']['nav-item-1']

const navLinkTwo = navLinkOne.nextElementSibling;
navLinkTwo.classList.add('nav-item-2')
navLinkTwo.textContent = siteContent['nav']['nav-item-2']

const navLinkThree = navLinkTwo.nextElementSibling;
navLinkThree.classList.add('nav-item-3')
navLinkThree.textContent = siteContent['nav']['nav-item-3']

const navLinkFour = navLinkThree.nextElementSibling;
navLinkFour.classList.add('nav-item-4')
navLinkFour.textContent = siteContent['nav']['nav-item-4']

const navLinkFive = navLinkFour.nextElementSibling;
navLinkFive.classList.add('nav-item-5')
navLinkFive.textContent = siteContent['nav']['nav-item-5']

const navLinkSix = navLinkFive.nextElementSibling;
navLinkSix.classList.add('nav-item-6')
navLinkSix.textContent = siteContent['nav']['nav-item-6']

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaText = document.querySelector('.cta-text h1')
ctaText.textContent = siteContent["cta"]['h1']

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const div1 = document.querySelector('div .text-content');
div1.classList.add('div1')

const div1Header = document.querySelector('.div1 h4')
div1Header.classList.add('div1Header')
div1Header.textContent = siteContent['main-content']['features-h4']

const div1Para = div1Header.nextElementSibling;
div1Para.classList.add('div1Para')
div1Para.textContent = siteContent['main-content']['features-content']

const div2 = div1.nextElementSibling;
div2.classList.add('div2')

const div2Header = document.querySelector('.div2 h4')
div2Header.classList.add('div2Header')
div2Header.textContent = siteContent["main-content"]['about-h4']

const div2Para = div2Header.nextElementSibling;
div2Para.classList.add('div2Para')
div2Para.textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

