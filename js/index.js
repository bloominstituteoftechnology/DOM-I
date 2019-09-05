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

let navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];
navigation.forEach((item) => {
  item.style.color = 'green';
})


const topText = document.querySelector('h1');
topText.textContent = siteContent.cta['h1'];
topText.style.wordSpacing = '9999rem';
topText.style.display = 'table-caption';
topText.style.width = '65%';
topText.style.height = '13rem';
topText.style.marginLeft = '42.25%';



const button = document.querySelector('button');
button.textContent = siteContent.cta['button'];
button.style.marginTop = '4.5%';
button.style.marginLeft = '42.25%';

const mainPic = document.getElementById("cta-img");
mainPic.setAttribute('src', siteContent.cta["img-src"]);

const mainHeader = document.querySelectorAll('h4');
mainHeader[0].textContent = siteContent["main-content"]['features-h4'];
mainHeader[1].textContent = siteContent["main-content"]['about-h4'];
mainHeader[2].textContent = siteContent["main-content"]['services-h4'];
mainHeader[3].textContent = siteContent["main-content"]['product-h4'];
mainHeader[4].textContent = siteContent["main-content"]['vision-h4'];
mainHeader[5].textContent = siteContent['contact']['contact-h4'];

const mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent["main-content"]['features-content'];
mainText[1].textContent = siteContent["main-content"]['about-content'];
mainText[2].textContent = siteContent["main-content"]['services-content'];
mainText[3].textContent = siteContent["main-content"]['product-content'];
mainText[4].textContent = siteContent["main-content"]['vision-content'];
mainText[5].textContent = siteContent["contact"]['address'];
mainText[6].textContent = siteContent["contact"]['phone'];
mainText[7].textContent = siteContent["contact"]['email'];
mainText[8].textContent = siteContent["footer"]['copyright'];

const middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent['main-content']["middle-img-src"]);

mainText[5].style.width = '20%';