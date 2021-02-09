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


let navItems = document.querySelectorAll("nav a");
// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
// }
navItems.forEach((item, i) => {
 item.textContent = siteContent['nav'][Object.keys(siteContent['nav'])[i]];
});

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaItem1 = document.querySelector(".cta-text > h1");
ctaItem1.textContent = siteContent['cta']["h1"];
let ctaItem2 = document.querySelector(".cta-text > button");
ctaItem2.textContent = siteContent['cta']["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', "img/mid-page-accent.jpg");

//Create Array of SiteContent
const siteContentArray = Object.entries(siteContent["main-content"]);

let mainContent_h4 = [];
let mainContent_p = [];

//Loop through siteContentArray to find <h4> and <p> keys; return new arrays
siteContentArray.forEach((item) => {
  item[0].includes('h4') ? mainContent_h4.push(item[1]) 
  : item[0].includes('content') ? mainContent_p.push(item[1]) 
  : null;
});
// console.log(mainContent_h4);
// console.log(mainContent_p);


//Create variables to hold new <h4> and <p> content for .main-content section
let h4Items = document.querySelectorAll(".main-content h4");
let pItems = document.querySelectorAll(".main-content p");

//Loop through arrays to set new content.

h4Items.forEach((item, i) => {
  item.textContent = mainContent_h4[i];
});


pItems.forEach((item, i) => {
  item.textContent = mainContent_p[i];
});

let contactSection_h4 = document.querySelector('.contact h4');
contactSection_h4.textContent = siteContent['contact']['contact-h4'];

let contactSection_p = document.querySelectorAll('.contact p');
console.log(contactSection_p);

let address;
let phone;
let email;
const contact_p = Object.entries(siteContent["contact"]);
contact_p.forEach((item) => {
    item[0].includes('address') ? address = item[1] 
  : item[0].includes('phone') ? phone = item[1]
  : item[0].includes('email') ?  email = item[1]
  :null;
});


let index1 = address.indexOf("Somewhere");
console.log(index1);

let slice1 = address.slice(0,18);
console.log(slice1);

 let slice2 = address.slice(19);
 console.log(slice2);

 const br = document.createElement('br');

contactSection_p[0].append(slice1, br, slice2);
contactSection_p[1].textContent = phone;
contactSection_p[2].textContent = email;


let footerSection = document.querySelector('footer p');
footerSection.textContent = siteContent["footer"]["copyright"];