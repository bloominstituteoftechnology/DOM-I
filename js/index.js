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


const div3 = document.querySelector('.bottom-content .text-content ')
div3.classList.add('div3')

const div3Header = document.querySelector('.div3 h4')
div3Header.classList.add('div3Header')
div3Header.textContent = siteContent['main-content']['services-h4']

const div3Para = div3Header.nextElementSibling;
div3Para.classList.add('div3Para')
div3Para.textContent = siteContent['main-content']['services-content']

const div4 = div3.nextElementSibling;
div4.classList.add('div4')

const div4Header = document.querySelector('.div4 h4')
div4Header.classList.add('div4Header')
div4Header.textContent = siteContent['main-content']['product-h4']

const div4Para = div4Header.nextElementSibling;
div4Para.classList.add('div4Para')
div4Para.textContent = siteContent['main-content']['product-content']

const div5 = div4.nextElementSibling;
div5.classList.add('div5')

const div5Header = document.querySelector('.div5 h4')
div5Header.classList.add('div5Header')
div5Header.textContent = siteContent['main-content']['vision-h4']

const div5Para = div5Header.nextElementSibling;
div5Para.classList.add('div5Para')
div5Para.textContent = siteContent['main-content']['vision-content']


const contactHeader = document.querySelector('.contact h4 ')
contactHeader.classList.add('ConatctHeader')
contactHeader.textContent = siteContent['contact']['contact-h4']

const contactPara1 = contactHeader.nextElementSibling;
contactPara1.classList.add('ontPara1')
contactPara1.textContent = siteContent['contact']['address']

const contactPara2 = contactPara1.nextElementSibling;
contactPara2.classList.add('contPara2')
contactPara2.textContent = siteContent['contact']['phone']

const contactPara3 = contactPara2.nextElementSibling;
contactPara3.classList.add('contPara3')
contactPara3.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer p')
footer.classList.add('footer')
footer.textContent = siteContent['footer']['copyright']