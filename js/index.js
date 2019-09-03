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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Start of header///////////////////////
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navs = document.querySelector("nav");

navs.children[0].innerHTML = siteContent.nav['nav-item-1']
navs.children[1].innerHTML = siteContent.nav['nav-item-2']
navs.children[2].innerHTML = siteContent.nav['nav-item-3']
navs.children[3].innerHTML = siteContent.nav['nav-item-4']
navs.children[4].innerHTML = siteContent.nav['nav-item-5']
navs.children[5].innerHTML = siteContent.nav['nav-item-6']
//end of header/////////////////////////////

//START OF CTA//////////////////////////////
document.querySelector('.cta-text > h1').innerHTML = 'DOM <br> IS<br> AWESOME'
document.querySelector('.cta-text > button').textContent = 'Get Started'

let codePic = document.getElementById("cta-img");
codePic.setAttribute('src', siteContent["cta"]["img-src"])


//END OF CTA////////////////////////////////

//START OF MAIN-CONTENT/////////////////////

let code = document.getElementById("middle-img");
code.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contacts = document.querySelector("contact");
contacts.children[0].innerHTML = siteContent.contact['contact-h4']
contact.children[1].innerHTML = siteContent.contact['address']
contact.children[2].innerHTML = siteContent.contact['phone']
contact.children[3].innerHTML = siteContent.contact['email']





document.querySelector('.bottom-content :nth-child(1) > h4').textContent = 'Features'


const footer = document.querySelector("footer");
footer.children[0].innerHTML = siteContent.footer['copyright']