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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// function navPop(){
//   let base = document.querySelectorAll('a');
//   let counter = Array.from(base).length;
//   let fillerText = Object.values(siteContent.nav);
//   for (let i = 0; i < counter; i++){
//     base[i].textContent = fillerText[i];
//   };
// };
// navPop();

function populate(section, elem, value){
  let base = document.querySelectorAll('.'+section+' '+elem);
  let counter = Array.from(base).length;
  let baseText = Object.values(siteContent[section]);
  let fillerText = [];
  for (let i = 0; i < baseText.length; i++){
    if (Object.keys(siteContent[section])[i].includes(value) == true){
      fillerText.push(Object.values(siteContent[section])[i]);
    }
  };
  for (let i = 0; i < counter; i++){
    base[i].textContent = fillerText[i];
  };
};

function populate2(section, elem, value){
  let base = document.querySelectorAll(section+' '+elem);
  let counter = Array.from(base).length;
  let baseText = Object.values(siteContent[section]);
  let fillerText = [];
  for (let i = 0; i < baseText.length; i++){
    if (Object.keys(siteContent[section])[i].includes(value) == true){
      fillerText.push(Object.values(siteContent[section])[i]);
    }
  };
  for (let i = 0; i < counter; i++){
    base[i].textContent = fillerText[i];
  };
};

populate2('nav', 'a', 'item');
populate('cta', 'h1', 'h1');
populate('cta', 'button', 'button');
populate('main-content', 'h4', 'h4');
populate('main-content', 'p', 'content');
populate('contact', 'h4', 'h4');
populate('contact', 'p', 'e');
populate2('footer', 'p', 'c');

