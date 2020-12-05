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

// Example: Update the img src for the logo0
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/// Image 2 /// 
const logo1 = document.getElementById('cta-img');
logo1.src = 'img/header-img.png';

/// Middle Image /// 
const middleimage = document.getElementById('middle-img');
middleimage.src = 'img/mid-page-accent.jpg';

//// Nav Information /// 

let nav1 = document.getElementsByTagName('a');
nav1[0].textContent = "Services"; 

let nav2 = document.getElementsByTagName('a');
nav2[1].textContent = "Product"; 

let nav3 = document.getElementsByTagName('a');
nav3[2].textContent = "Vision"; 

let nav4 = document.getElementsByTagName('a');
nav4[3].textContent = "Features"; 

let nav5 = document.getElementsByTagName('a');
nav5[4].textContent = "About";

let nav6 = document.getElementsByTagName('a');
nav6[0].textContent = "Contact"; 

/// Middle Content /// 

let h40 = document.getElementsByTagName('h4');
h40[0].textContent = "Features"; 

let p0 = document.getElementsByTagName('p');
p0[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus    scelerisque quis."; 

let h41 = document.getElementsByTagName('h4');
h41[1].textContent = "About"; 

let p1 = document.getElementsByTagName('p');
p1[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus  scelerisque quis.."; 

let h42 = document.getElementsByTagName('h4');
h42[2].textContent = "Services"; 

let p2 = document.getElementsByTagName('p');
p2[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 

let h43 = document.getElementsByTagName('h4');
h43[3].textContent = "Product"; 

let p3 = document.getElementsByTagName('p');
p3[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 

let h44 = document.getElementsByTagName('h4');
h44[4].textContent = "Vision"; 

let p4 = document.getElementsByTagName('p');
p4[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in  interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";