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
{//Image Links
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);
}

{//navigation bar
  // get elements from index.html
  // use innerText to change the text inside
  // set the inner text to siteContent-whatever
  //for loop so I don't have to write it all out?

  let topNavLinks = document.querySelectorAll('a');
  console.log(topNavLinks);
  for(let i = 0;i<topNavLinks.length;i++){
    topNavLinks[i].innerText = siteContent["nav"][`nav-item-${i+1}`]
  }
}
{//cta
  let mainHeading = document.querySelector('.cta .cta-text h1');
  mainHeading.innerText = `${siteContent["cta"]["h1"]}`

  let getStartedBtn = document.querySelector('.cta .cta-text button');
  getStartedBtn.innerText = `${siteContent["cta"]["button"]}`;
}
{//main-content
  
}




/*
// ===== DOM Step 1: Get the DOM reference stored into JS

const tagElements = document.getElementsByTagName('a');
// console.log(tagElements[2]);

const idExample = document.getElementById('home-tag');
// console.log(idExample);

const classElements = document.getElementsByClassName('nav-item');
// console.log(classElements[2]);

// Must provide the selector syntax inside the querySelector
const headingSelection = document.querySelector('h2');
// console.log(headingSelection);

const selectAnythingAll = document.querySelectorAll('a');
// console.log(selectAnythingAll[0]);

// ===== DOM Step 2: Manipulate the DOM with

// innerHTML for html tags
headingSelection.innerText = 'This is being updated by the DOM!';

// attributes
const kitty = document.querySelector('.kitty');
kitty.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';
kitty.alt = 'This is a kitty';

// style
const mainHeadingExample = document.querySelector('header h1');
mainHeadingExample.style.color = 'red'; 

const mainHeading = document.querySelector('.main-header');
// mainHeading.className = 'testing';

// classList
console.log(mainHeading.classList.length)
mainHeading.classList.add('e');
*/