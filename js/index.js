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


let topImage = document.getElementById("cta-img");
topImage.setAttribute('src', siteContent["cta"]["img-src"])


let cta = document.querySelector('.cta-text');
 let ctaH1 = cta.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];
// let lineBreak = document.createElement('br');
// lineBreak.appendChild('linebreak');



let ctabtn = document.querySelector('button');
ctabtn.textContent = siteContent['cta']['button'];



let navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];


let mainHeader = document.querySelectorAll("h4");
mainHeader[0].textContent = siteContent['main-content']['features-h4'];
mainHeader[1].textContent = siteContent['main-content']['about-h4'];
mainHeader[2].textContent = siteContent['main-content']['services-h4'];
mainHeader[3].textContent = siteContent['main-content']['product-h4'];
mainHeader[4].textContent = siteContent['main-content']['vision-h4'];
mainHeader[5].textContent = siteContent["contact"]["contact-h4"];




let mainText = document.querySelectorAll("p")
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];
mainText[5].textContent = siteContent['contact']['address'];
mainText[6].textContent = siteContent['contact']['phone'];
mainText[7].textContent = siteContent['contact']['email'];
mainText[8].textContent = siteContent['footer']['copyright'];



let centerImg = document.getElementById('middle-img');
centerImg.setAttribute('src', siteContent['main-content']['middle-img-src']);




