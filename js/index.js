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

//NAV


let navItems = document.querySelectorAll('header nav a');
navItems[0].innerText = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2'];
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];


//CTA


let cta = document.querySelector('h1');
cta.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//Main-Content


let allMainContent = document.querySelectorAll('.main-content *');
allMainContent[0]
allMainContent[1]
allMainContent[2].innerHTML = siteContent['main-content']['features-h4']
allMainContent[3].innerText = siteContent['main-content']['features-content']
allMainContent[4]
allMainContent[5].innerHTML = siteContent['main-content']['about-h4']
allMainContent[6].innerText = siteContent['main-content']['about-content']
allMainContent[7].setAttribute('src', siteContent['main-content']['middle-img-src'])
allMainContent[8]
allMainContent[9]
allMainContent[10].innerHTML = siteContent['main-content']['services-h4']
allMainContent[11].innerText = siteContent['main-content']['services-content']
allMainContent[12]
allMainContent[15]
allMainContent[13].innerHTML = siteContent['main-content']['product-h4']
allMainContent[14].innerText = siteContent['main-content']['product-content']
allMainContent[16].innerHTML = siteContent['main-content']['vision-h4']
allMainContent[17].innerText = siteContent['main-content']['vision-content']
console.log(allMainContent);
//code bellow was for alternate solution its left so i dont forget initial idea
// let mainMiddleContent = document.querySelector('')
// let mainBottomContent = document.

let contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = siteContent['contact']['contact-h4'];

// contactAddress 
//tried innerText which also didnt change anything
let contactAddress = document.querySelector('contact address')
contactAddress.innerHTML = siteContent['contact']['address']

// let contactPhone = 
//tried innerText which also didnt change anything
let contactPhone = document.querySelector('contact phone')
contactPhone.innerHTML = siteContent['contact']['phone']

// let contactEmail = document
//tried innerText which also didnt change anything
let contactEmail = document.querySelector('contact email')
contactEmail.innerHTML = siteContent['contact']['email']

























