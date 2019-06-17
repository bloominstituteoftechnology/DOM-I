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
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])
//const nav = document.querySelector('nav');
//var nav = document.createElement("nav-items");
  //       var heading_text = document.createTextNode("DOM Is Awesome");
    //     heading.appendChild(heading_text);
      //   document.body.appendChild(heading);
      
        //const mainheader = document.querySelector('.cta h1');
        
      
  //nav.style.backgroundColor = "green";
//const navbar = document.querySelector('nav');
//nav.textContent('.nav-item-7', Portfolio);
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[0]);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[1]);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[2]);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[3]);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[4]);
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[5]);
var p = document.appendElement("p");
p.innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",";       
 
//const middleimg = document.querySelector('middle-img-src');
//middleimg.src = "img/mid-page-accent.jpg";
//middleimg.alt ="middle pic";
//const info = document.getElementsByClassName('main-element');
//info.textContent.add(".main-content");

//const contact = document.querySelector('contact');
//contact.classList.add('.address');
var fh4 = document.getElementById("features-h4").innerHTML = "Features";