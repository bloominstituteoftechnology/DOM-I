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

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements
//  * Create selectors by using any of the DOM element's methods
//  * Note that IDs have been used on all images.  Use the IDs to update src path content

// let navItems = document.querySelectorAll('nav a');

// navItems.forEach(function(element){
//   navItems.setAttribute("innerHTML" ['nav'][element])
// })

let navItems = document.getElementsByTagName("a");
navItems[0].innerHTML = (siteContent["nav"]["nav-item-1"])
navItems[1].innerHTML = (siteContent["nav"]["nav-item-2"])
navItems[2].innerHTML = (siteContent["nav"]["nav-item-3"])
navItems[3].innerHTML = (siteContent["nav"]["nav-item-4"])
navItems[4].innerHTML = (siteContent["nav"]["nav-item-5"])


// Adding elements to the DOM
// There are three steps to adding this text into the DOM. They are:

// Create an HTML element with document.createElement
// Add content to the HTML element by setting the innerHTML.
// Add it to the DOM with parentNode.prepend or parentNode.append.


//new nav item and make font colors greens
let navLog = document.querySelector('nav');

let newNavAnchor= document.createElement('a');

newNavAnchor.innerHTML = "Lambda";

navLog.prepend(newNavAnchor);

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';

// 

let mainCTA = document.querySelector('h1');
mainCTA.innerHTML = (siteContent['cta']['h1']);

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = (siteContent['cta']['button']);

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);


let docH4 = document.getElementsByTagName('h4');

docH4[0].innerHTML = (siteContent['main-content']['features-h4']);
docH4[1].innerHTML = (siteContent['main-content']['about-h4']);
docH4[2].innerHTML = (siteContent['main-content']['services-h4']);
docH4[2].innerHTML = (siteContent['main-content']['product-h4']);
docH4[3].innerHTML = (siteContent['main-content']['vision-h4']);



let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let mainContentP = document.getElementsByTagName('p');
mainContentP[0].innerHTML = (siteContent['main-content']['features-content']);
mainContentP[1].innerHTML = (siteContent['main-content']['about-content']);

mainContentP[2].innerHTML = (siteContent['main-content']['product-content']);
mainContentP[3].innerHTML = (siteContent['main-content']['vision-content']);

//footer

docH4[5].innerHTML = (siteContent['contact']['contact-h4']);

mainContentP[5].innerHTML = (siteContent['contact']['address']);
mainContentP[6].innerHTML = (siteContent['contact']['phone']);
mainContentP[7].innerHTML = (siteContent['contact']['email']);

//copyright

mainContentP[8].innerHTML = (siteContent['footer']['copyright']);