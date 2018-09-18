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
    "address-line-1" : "123 Way 456 Street", 
    "address-line-2" : "Somewhere, USA",
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

// update nav items
let navItems = document.querySelectorAll('nav a');
navItems[0].innerText = siteContent["nav"]["nav-item-1"];
navItems[1].innerText = siteContent["nav"]["nav-item-2"];
navItems[2].innerText = siteContent["nav"]["nav-item-3"];
navItems[3].innerText = siteContent["nav"]["nav-item-4"];
navItems[4].innerText = siteContent["nav"]["nav-item-5"];
navItems[5].innerText = siteContent["nav"]["nav-item-6"];

// update cta

let ctaH1 = document.querySelector('.cta h1');
ctaH1.innerText = siteContent["cta"]["h1"];
let ctaButton = document.querySelector('.cta button');
ctaButton.innerText = siteContent["cta"]["button"];
let ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent["cta"]["img-src"];

// update main content
// features, about
let topContentH4 = document.querySelectorAll('.top-content h4');
let topContentP = document.querySelectorAll('.top-content p');
let featuresH4 = topContentH4[0];
featuresH4.innerText = siteContent["main-content"]["features-h4"];
let featuresContent = topContentP[0];
featuresContent.innerText = siteContent["main-content"]["features-content"];
let aboutH4 = topContentH4[1];
aboutH4.innerText = siteContent["main-content"]["about-h4"];
let aboutContent = topContentP[1];
aboutContent.innerText = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//services, product, vision
let bottomContentH4 = document.querySelectorAll('.bottom-content h4');
let bottomContentP = document.querySelectorAll('.bottom-content p');
let servicesH4 = bottomContentH4[0];
servicesH4.innerText = siteContent["main-content"]["services-h4"];
let servicesContent = bottomContentP[0];
servicesContent.innerText = siteContent["main-content"]["services-content"];
let productH4 = bottomContentH4[1];
productH4.innerText = siteContent["main-content"]["product-h4"];
let productContent = bottomContentP[1];
productContent.innerText = siteContent["main-content"]["product-content"];
let visionH4 = bottomContentH4[2];
visionH4.innerText = siteContent["main-content"]["vision-h4"];
let visionContent = bottomContentP[2];
visionContent.innerText = siteContent["main-content"]["vision-content"];

// update contact
let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];
let contactPs = document.querySelectorAll('.contact p');
contactPs[0].innerHTML = `${siteContent["contact"]["address-line-1"]}<br>${siteContent["contact"]["address-line-2"]}`;
contactPs[1].innerText = siteContent["contact"]["phone"];
contactPs[2].innerText = siteContent["contact"]["email"];

// update footer 
let footerContent = document.querySelector('footer p');
footerContent.innerText = siteContent["footer"]["copyright"];

// add new content

// change navigation text color to green
for(let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = "green";
}
// add two items to navigation using appendChild and prepend
let nav = document.querySelector('nav');
nav.prepend("Home");
nav.append("Portfolio");


// Stretch - Digital Timer 
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM I</title>
//     <link rel="stylesheet" href="./styles.css">
//   </head>
//   <body>
//     <div class="digits">
//       <div class="digit" id="secondTens">-</div>
//       <div class="digit" id="secondOnes">-</div>
//       <div class="digit" id="colon">:</div>
//       <div class="digit" id="msHundreds">-</div>
//       <div class="digit" id="msTens">-</div>
//     </div>
//   </body>
// </html>

// add button to start/stop

let startButton = document.createElement("button");
let digits = document.querySelector("digits");
setInterval(function(){console.log("running")}, 500);















