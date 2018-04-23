const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

let navItems = siteContent.nav;
let keys = Object.keys(navItems);
let values = Object.values(navItems);

for (let i = 0; i < keys.length; i++) {
  if (keys[i] !== "img-src") {
    document.getElementsByTagName('nav')[0].children[i].innerHTML = values[i];
    document.getElementsByTagName('nav')[0].children[i].className = keys[i];
  }
}

//adding the image

document.getElementById('cta-img').src = siteContent.cta['img-src'];

//adding text to h1

//console.log(document.querySelector('.cta-text').getElementsByTagName('h1'));

document.querySelector('.cta-text').firstElementChild.innerHTML = siteContent.cta.h1;

document.querySelector('.cta-text').getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;

// factory for adding h4s and p tags

let textContentDivs = document.getElementsByClassName('text-content');
//console.log(textContentDivs);
//console.log(Object.keys(siteContent['main-content']).filter(item => item.includes('h4')));
let h4Values = Object.keys(siteContent['main-content']).filter(item => item.includes('h4'));

let mainContentPs = Object.keys(siteContent['main-content']).filter(item => item.includes('content'));

for (let i = 0; i < h4Values.length; i++) {
  textContentDivs[i].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content'][h4Values[i]];
  textContentDivs[i].getElementsByTagName('p')[0].innerHTML = siteContent['main-content'][mainContentPs[i]];
};

document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];