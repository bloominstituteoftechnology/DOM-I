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

// nav bar

let add = document.querySelector('.container nav')
let a = document.createElement('a')
add.prepend('Prepend', a);
add.append('Append', a);
add.style.color = 'green';

let nav1 = document.querySelector('.container a:nth-child(1)')
nav1.textContent = siteContent['nav']['nav-item-1']
nav1.style.color = 'green';

let nav2 = document.querySelector('.container a:nth-child(2)')
nav2.textContent = siteContent['nav']['nav-item-2']
nav2.style.color = 'green';

let nav3 = document.querySelector('.container a:nth-child(3)')
nav3.textContent = siteContent['nav']['nav-item-3']
nav3.style.color = 'green';

let nav4 = document.querySelector('.container a:nth-child(4)')
nav4.textContent = siteContent['nav']['nav-item-4']
nav4.style.color = 'green';

let nav5 = document.querySelector('.container a:nth-child(5)')
nav5.textContent = siteContent['nav']['nav-item-5']
nav5.style.color = 'green';

let nav6 = document.querySelector('.container a:nth-child(6)')
nav6.textContent = siteContent['nav']['nav-item-6']
nav6.style.color = 'green';

// h1 and button

let h1 = document.querySelector('.cta-text h1')
h1.textContent = siteContent['cta']['h1']
h1.style.textAlign = 'center';

let ctaBtn = document.querySelector('.cta-text button')
ctaBtn.textContent = siteContent['cta']['button']

// circle img

let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

// top text

let leftH4 = document.querySelector('.main-content .text-content:nth-child(1) h4')
leftH4.textContent = siteContent['main-content']['features-h4']

let leftP = document.querySelector('.main-content .text-content:nth-child(1) p')
leftP.textContent = siteContent['main-content']['features-content']

let rightH4 = document.querySelector('.main-content .text-content:nth-child(2) h4')
rightH4.textContent = siteContent['main-content']['about-h4']

let rightP = document.querySelector('.main-content .text-content:nth-child(2) p')
rightP.textContent = siteContent['main-content']['about-content']

// middle img

let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// bottom text

let btmLeftH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4')
btmLeftH4.textContent = siteContent['main-content']['services-h4']

let btmLeftP = document.querySelector('.bottom-content .text-content:nth-child(1) p')
btmLeftP.textContent = siteContent['main-content']['services-content']

let btmMidH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
btmMidH4.textContent = siteContent['main-content']['product-h4']

let btmMidP = document.querySelector('.bottom-content .text-content:nth-child(2) p')
btmMidP.textContent = siteContent['main-content']['product-content']

let btmRightH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4')
btmRightH4.textContent = siteContent['main-content']['vision-h4']

let btmRightP = document.querySelector('.bottom-content .text-content:nth-child(3) p')
btmRightP.textContent = siteContent['main-content']['vision-content']

// address

let classH4 = document.querySelector('.contact h4')
classH4.textContent = siteContent['contact']['contact-h4']

let classP1 = document.querySelector('.contact p:nth-child(2)')
classP1.textContent = siteContent['contact']['address']


let classP2 = document.querySelector('.contact p:nth-child(3)')
classP2.textContent = siteContent['contact']['phone']

let classP3 = document.querySelector('.contact p:nth-child(4)')
classP3.textContent = siteContent['contact']['email']

// footer

let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']