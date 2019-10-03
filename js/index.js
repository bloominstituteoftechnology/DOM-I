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
  "mainContent": {
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
logo.src = './img/logo.png';
//adds the img w code reference
let headingImg = document.getElementById('cta-img');
headingImg.setAttribute('src', siteContent["cta"]["img-src"]);
//middle image
let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["mainContent"]["middle-img-src"]);
midImg.src = "img/mid-page-accent.jpg";
//add dom is Awesome
const bigText = document.querySelector('h1');
//bigText.setAttribute('textContent', siteContent['cta']['h1']);
bigText.textContent = siteContent['cta']['h1'];

let bttn = document.querySelector('button');
bttn.textContent = siteContent['cta']['button'];

//footer
// let foot = document.getElementsByTagName('footer');
// foot.textContent = siteContent['footer']['copyright'];


//navs suck ass
let multiNav = document.querySelectorAll('nav a');
let i = 0;
for(let prop in siteContent.nav){
  if(i > multiNav.length - 1){
    continue;
  }
  multiNav[i].textContent = siteContent.nav[prop];
  i++;
};

// onto the section headers i fucking guess
// const $midContentH4 = document.querySelectorAll('text-content h4');
// const $midContentP = document.querySelectorAll('text-content p');
// for(let key in siteContent[]){
//   if(i % 2===0){
//     $midContentH4[i]
//   }
//   i++;
// }

let sectHeads = document.querySelectorAll('.mainContent .text-content');
for(let key in siteContent.mainContent){
  sectHeads[i].textContent = siteContent.mainContent[key];
  i++;
}



//TRY FOR feature content
 let featCont = document.querySelector('top-content');
// featCont = siteContent["mainContent"]["features-h4"];
