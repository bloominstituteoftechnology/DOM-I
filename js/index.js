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

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navItems = document.querySelectorAll("a");
  for(let i= 0; i < navItems.length; i++) {
    navItems[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
    navItems[i].style.color = "mediumSpringGreen"
    navItems[i].style.textShadow = "2px 2px 2px green"
}; 

const newNavGuy = document.createElement('a');
const navBar = document.querySelector('header nav');
newNavGuy.innerText = 'Join the Party!';
newNavGuy.href = 'https://party.com';
newNavGuy.style.color = "mediumSpringGreen"
newNavGuy.style.textShadow = "2px 2px 2px green"
navBar.appendChild(newNavGuy);





// navItems[0].innerText = siteContent["nav"]["nav-item-1"]
// navItems[1].innerText = siteContent["nav"]["nav-item-2"]
// navItems[2].innerText = siteContent["nav"]["nav-item-3"]
// navItems[3].innerText = siteContent["nav"]["nav-item-4"]
// navItems[4].innerText = siteContent["nav"]["nav-item-5"]
// navItems[5].innerText = siteContent["nav"]["nav-item-6"]
 
 const mainHeading = document.querySelector("h1");
mainHeading.innerText = siteContent["cta"]["h1"];
mainHeading.style.textShadow = "3px 3px 3px pink"
 const mainBtn = document.querySelector("Button");
mainBtn.innerText = siteContent["cta"]["button"];
 const mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);
const allHeadings = document.querySelectorAll("h4");
//  for(let i = 0; i < allHeadings.length; i++) {
//   allHeadings[i].innerText = siteContent["main-content"][i];
// }; 
allHeadings[0].innerText = siteContent["main-content"]["features-h4"];
allHeadings[1].innerText = siteContent["main-content"]["about-h4"];
allHeadings[2].innerText = siteContent["main-content"]["services-h4"];
allHeadings[3].innerText = siteContent["main-content"]["product-h4"];
allHeadings[4].innerText = siteContent["main-content"]["vision-h4"];
allHeadings[5].innerText = siteContent["contact"]["contact-h4"];
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
 const paragraphs = document.querySelectorAll("p");
paragraphs[0].innerText = siteContent["main-content"]["features-content"];
paragraphs[1].innerText = siteContent["main-content"]["about-content"];
paragraphs[2].innerText = siteContent["main-content"]["services-content"];
paragraphs[3].innerText = siteContent["main-content"]["product-content"];
paragraphs[4].innerText = siteContent["main-content"]["vision-content"];
paragraphs[5].innerText = siteContent["contact"]["address"];
paragraphs[6].innerText = siteContent["contact"]["phone"];
paragraphs[7].innerText = siteContent["contact"]["email"];
paragraphs[8].innerText = siteContent["footer"]["copyright"];


