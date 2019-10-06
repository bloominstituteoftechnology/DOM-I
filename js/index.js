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
logo.src = './img/logo.png';
//adds the img w code reference
let headingImg = document.getElementById('cta-img');
headingImg.setAttribute('src', siteContent["cta"]["img-src"]);
//middle image
let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
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

let topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];

let topP = document.querySelectorAll('.top-content p');
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

let bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = siteContent['main-content']['services-content'];
bottomP[1].textContent = siteContent['main-content']['product-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];
// onto the section headers i fucking guess
// const $midContentH4 = document.querySelectorAll('text-content h4');
// const $midContentP = document.querySelectorAll('text-content p');
// for(let key in siteContent[]){
//   if(i % 2===0){
//     $midContentH4[i]
//   }
//   i++;
// }
// let mC = 'main-content';
//
// let midContentH4 = document.querySelectorAll('.text-content h4');
// let midContentP = document.querySelectorAll('.text-content p');
// for(let key in siteContent.mC){
//   if(i % 2 === 0){
//     midContentH4[i].textContent = siteContent.mC[key];
//   }
//   if(i > 4){
//     continue;
//   }
//   i++;
// };

// for(let key in siteContent['main-content']){
//   if(i % 2 === 0){
//     midContentH4.textContent = siteContent.mC[i];
//   }
//   i++;
// }

// midContentH4.textContent = siteContent['main-content']['features-h4'], siteContent['main-content']['about-h4'];
// midContentH4.textContent = siteContent['main-content']['about-h4'];
// midContentP.textContent = siteContent['main-content']['features-content'];
// midContentP.textContent = siteContent['main-content']['about-content'];



// let sectHeads = document.querySelectorAll('.main-content .text-content');
// for(let prop in siteContent.main-content){
//   //has to be on the first and 3rd but spaces 0 and 2
//   if(i % 2 === 0){
//     sectHeads[i].textContent = siteContent.main-content[prop];
//   }
//   //when i hits that mid picture it has to exit
//   //if(i)
//   i++;
// }
//
//
//
//TRY FOR feature content
 // let featCont = document.querySelector('top-content');
 // featCont = siteContent["main-content"]["features-h4"];
