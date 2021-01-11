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


//Task 2a

//Create selectors by using any of the DOM element's methods

//Title Change
const h1=document.querySelector('h1');
h1.textContent="DOM Is Awesome";

//Header Image Add
const circleImg=document.querySelector('#cta-img');
circleImg.src='img/header-img.png';

//Button Change
const button=document.querySelector('button');
button.textContent="Get Started";

//Mid Page Accent Add
const midAccent=document.querySelector('#middle-img');
midAccent.src='img/mid-page-accent.jpg';

//Nav Add
const navBar=document.querySelectorAll('a');
navBar[0].textContent='Services';
navBar[1].textContent='Product';
navBar[2].textContent='Vision';
navBar[3].textContent='Features';
navBar[4].textContent='About';
navBar[5].textContent='Contact';

//Text around the accent
//Subheaders
const subheader=document.getElementsByClassName("main-content")[0];
subheader.getElementsByTagName('h4')[0].innerHTML=siteContent["main-content"]["features-h4"]
subheader.getElementsByTagName('h4')[1].innerHTML=siteContent["main-content"]["about-h4"]
subheader.getElementsByTagName('h4')[2].innerHTML=siteContent["main-content"]["services-h4"]
subheader.getElementsByTagName('h4')[3].innerHTML=siteContent["main-content"]["product-h4"]
subheader.getElementsByTagName('h4')[4].innerHTML=siteContent["main-content"]["vision-h4"]

//Text
const text=document.getElementsByClassName("main-content")[0];
text.getElementsByTagName('p')[0].innerHTML=siteContent["main-content"]["features-content"]
text.getElementsByTagName('p')[1].innerHTML=siteContent["main-content"]["about-content"]
text.getElementsByTagName('p')[2].innerHTML=siteContent["main-content"]["services-content"]
text.getElementsByTagName('p')[3].innerHTML=siteContent["main-content"]["product-content"]
text.getElementsByTagName('p')[4].innerHTML=siteContent["main-content"]["vision-content"]

//Contact
const contact=document.getElementsByClassName("contact")[0];
contact.getElementsByTagName('h4')[0].innerHTML=siteContent['contact']['contact-h4']
contact.getElementsByTagName('p')[0].innerHTML=siteContent['contact']['address']
contact.getElementsByTagName('p')[1].innerHTML=siteContent['contact']['phone']
contact.getElementsByTagName('p')[2].innerHTML=siteContent['contact']['email']


//Attempt #1
//const navBar=document.querySelector('nav');
//const sectionOne=document.querySelector('cta');
//const mainContent=document.querySelector('main-content');
//const contactInfo=document.querySelector('contact');
//const footer=document.querySelector('footer');

//Note that IDs have been used on all images. Use the IDs to update src path content

