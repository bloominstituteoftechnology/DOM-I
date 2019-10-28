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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//images

let cta = document.getElementById(`cta-img`);
cta.setAttribute(`src`, siteContent["cta"]["img-src"]);


let middleImg = document.getElementById(`middle-img`);
middleImg.setAttribute(`src`, "img/mid-page-accent.jpg");

let h1T = document.getElementsByTagName(`h1`)[0]
h1T.textContent = "Dom \n is \n  awsome";


let button = document.getElementsByTagName("button")[0];
button.textContent = "Get started";


//Navigation
let services = document.getElementsByTagName('a')[0];
services.textContent = 'Services';

let product = document.getElementsByTagName('a')[1];
product.textContent = 'Product';

let vision = document.getElementsByTagName('a')[2];
vision.textContent = 'Vision';

let features = document.getElementsByTagName('a')[3];
features.textContent = 'Features';

let about = document.getElementsByTagName('a')[4];
about.textContent = 'About';

let contact = document.getElementsByTagName('a')[5];
contact.textContent = 'Contact';
//Content

let featH4 = document.getElementsByTagName(`h4`)[0];
featH4.textContent = `Features`;

let featCont = document.getElementsByTagName(`p`)[0];
featCont.textContent = " Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ";

let aboutH4 = document.getElementsByTagName(`h4`)[1];
aboutH4.textContent = `About`;

let aboutCont = document.getElementsByTagName(`p`)[1];
aboutCont.textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let servH4 = document.getElementsByTagName(`h4`)[2];
servH4.textContent = `Services`;

let servCont = document.getElementsByTagName(`p`)[2];
servCont.textContent =" Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ";

let prodH4 = document.getElementsByTagName(`h4`)[3];
prodH4.textContent = `Product`;

let prodCont = document.getElementsByTagName(`p`)[3];
prodCont.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.  ";

let visH4 = document.getElementsByTagName(`h4`)[4];
visH4.textContent = `Vision`;

let visCont = document.getElementsByTagName(`p`)[4];
visCont.textContent = " Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspenditersse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ";

// Contact

let contactH4 = document.getElementsByTagName(`h4`)[5];
contactH4.textContent = "Contact";

let address = document.getElementsByTagName(`p`)[5];
address.textContent = "123 Way 456 Stree Somewhere, USA ";

let phone = document.getElementsByTagName(`p`)[6];
phone.textContent = "1 (888) 888-8888 ";

let email = document.getElementsByTagName(`p`)[7];
email.textContent = " sales@greatidea.io";

//Footer

let footer = document.getElementsByTagName(`p`)[8];
footer.textContent = "Copyright Great Idea! 2018";

 