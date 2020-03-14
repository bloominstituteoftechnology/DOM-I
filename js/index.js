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

/**********************************************
                  NAV BAR LINKS
 **********************************************/
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

const navBar = document.querySelector('nav');
const addNav1 = document.createElement('a');
const addNav2 = document.createElement('a');

addNav1.href = '#';
addNav1.textContent = 'Home';
addNav1.style.color = 'green';

addNav2.href = '#';
addNav2.textContent = 'Lexi';
addNav2.style.color = 'green';

navBar.prepend(addNav1);
navBar.append(addNav2);

/**********************************************
                    CTA
 **********************************************/

 document.querySelector('h1').textContent = "DOM Is Awesome"
 document.querySelector('button').textContent = "Get Started"
 document.getElementById("cta-img").src = "img/header-img.png";


 /**********************************************
                    Features
 **********************************************/

document.getElementsByTagName('h4')[0].textContent = "Features";
document.getElementsByTagName('p')[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

/**********************************************
                    About
 **********************************************/

document.getElementsByTagName('h4')[1].textContent = "About";
document.getElementsByTagName('p')[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

 /**********************************************
                    Middle Image
 **********************************************/

document.getElementById("middle-img").src = "img/mid-page-accent.jpg";

 /**********************************************
                    Services
 **********************************************/

document.getElementsByTagName('h4')[2].textContent = "Services";
document.getElementsByTagName('p')[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

 /**********************************************
                    Product
 **********************************************/

document.getElementsByTagName('h4')[3].textContent = "Product";
document.getElementsByTagName('p')[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

 /**********************************************
                    Vision
 **********************************************/

document.getElementsByTagName('h4')[4].textContent = "Vision";
document.getElementsByTagName('p')[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

 /**********************************************
                    Contact
 **********************************************/

document.getElementsByTagName('h4')[5].textContent = "Contact";
document.getElementsByTagName('p')[5].textContent = "123 Way 456 Street Somewhere, USA";
document.getElementsByTagName('p')[6].textContent = "1 (888) 888-8888";
document.getElementsByTagName('p')[7].textContent = "sales@greatidea.io";

 /**********************************************
                    Footer
 **********************************************/

 document.getElementsByTagName('p')[8].textContent = "Copyright Great Idea 2018"



