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

//====== header

// nav anchor tags

// old method

// let servicesNav = navItems[0];
// let productNav = navItems[1];
// let visionNav = navItems[2];
// let featuresNav = navItems[3];
// let aboutNav = navItems[4];
// let contactNav = navItems[5];

// servicesNav.textContent = siteContent["nav"]["nav-item-1"];
// productNav.textContent = siteContent["nav"]["nav-item-2"];
// visionNav.textContent = siteContent["nav"]["nav-item-3"];
// featuresNav.textContent = siteContent["nav"]["nav-item-4"];
// aboutNav.textContent = siteContent["nav"]["nav-item-5"];
// contactNav.textContent = siteContent["nav"]["nav-item-6"];

// DRY attempt

// for loop

// let navItemsArr = Array.from(navItems);
// for (let i = 0; i <= navItemsArr.length ; i++) {
//   navItemsArr[i].textContent = siteContent["nav"][`nav-item-${1 + i}`];
// }

// map method

let navItemsArr = Array.from(navItems);
navItemsArr.map((item, index)=>item.textContent= siteContent["nav"][`nav-item-${1 + index}`])