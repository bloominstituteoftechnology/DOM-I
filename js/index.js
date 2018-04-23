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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("#cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById(“middle-img”);
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";
let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";
let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";
let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";
let contact = document.getElementsByTagName("a")[4];
contact.innerHTML = "Contact";//only shows C?

let ctaH1 = document.getElementsByTagName("h1")[0];
ctaH1.innerHTML = "Dom is Awesome";
let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

let featuresH4 = document.getElementsByTagName("h4")[0];
featuresH4.innerHTML = "Features";
let featuresP = document.getElementsByTagName("p")[0];
featuresP.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let aboutH4 = document.getElementsByTagName("h4")[1];
aboutH4.innerHTML = "About";
let aboutP = document.getElementsByTagName("p")[1];
aboutP.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let servicesH4 = document.getElementsByTagName("h4")[2];
servicesH4.innerHTML = "Services";
let servicesP = document.getElementsByTagName("p")[2];
servicesP.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let productsH4 = document.getElementsByTagName("h4")[3];
productsH4.innerHTML = "Products";
let productsP = document.getElementsByTagName("p")[3];
productsP.innerHTML = "Products content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let visionH4 = document.getElementsByTagName("h4")[4];
visionH4.innerHTML = "Vision";
let visionP = document.getElementsByTagName("p")[4];
visionP.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

let contactH4 = document.getElementsByTagName("h4")[5];
contact.innerHTML = "Contact"[5];
let address = document.getElementsByTagName("p")[6];
address.innerHTML = "123 Way 456 Street Somewhere, USA";
let phone = document.getElementsByTagName("p")[7];
phone.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName("p")[8];
email.innerHTML = "sales@greatidea.io";

let footer = document.getElementsByTagName("p")[9];
footer.innerHTML = "Copyright Great Idea! 2018";


//let ctaImg = document.getElementById("#cta-img");
//cta.setAttribute('src', siteContent["cta"]["img-src"]);


//let middleImg = document.getElementById(“middle-img”);
//middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
