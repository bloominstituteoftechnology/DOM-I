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
let logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png");

// IMAGES

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", "img/header-img.png");

middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg");

// NAVIGATION

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";

product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";

vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";

features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";

about = document.getElementsByTagName("a")[4];
about.innerHTML = "About";

contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

// CTA

let h1Message = document.getElementsByTagName("h1")[0];
h1Message.innerHTML = "DOM Is Awesome";

button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

// MAIN CONTENT

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";

featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";

aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";

servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"

productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";

visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// CONTACT

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";

address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";

phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";

email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

// FOOTER

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"