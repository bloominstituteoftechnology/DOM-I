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

let firstNav = document.querySelector("a:nth-of-type(1)")
console.log(firstNav)
firstNav.textContent = siteContent.nav["nav-item-1"]

let secondNav = document.querySelector("a:nth-of-type(2)")
console.log(secondNav)
secondNav.textContent = siteContent.nav["nav-item-2"]

let thirdNav = document.querySelector("a:nth-of-type(3)")
console.log(thirdNav)
thirdNav.textContent = siteContent.nav["nav-item-3"]

let fourthNav = document.querySelector("a:nth-of-type(4)")
console.log(fourthNav)
fourthNav.textContent = siteContent.nav["nav-item-4"]

let fifthNav = document.querySelector("a:nth-of-type(5)")
console.log(fifthNav)
fifthNav.textContent = siteContent.nav["nav-item-5"]

let sixthNav = document.querySelector("a:nth-of-type(6)")
console.log(sixthNav)
sixthNav.textContent = siteContent.nav["nav-item-6"]

let ctatext = document.querySelector("h1");
console.log(ctatext);
ctatext.textContent = "DOM" + "\n"+ "is " + "awesome"


let buttontext = document.querySelector("button");
console.log(buttontext);
buttontext.textContent = siteContent.cta.button

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let featuresH4 = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
console.log(featuresH4);
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".top-content .text-content:nth-of-type(1) p");
console.log(featuresContent);
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
console.log(aboutH4);
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector(".top-content .text-content:nth-of-type(2) p");
console.log(aboutContent);
aboutContent.textContent = siteContent["main-content"]["about-content"];

let snippets = document.getElementById("middle-img");
snippets.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let servicesH4 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
console.log(servicesH4);
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let serviesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
console.log(serviesContent);
serviesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
console.log(productH4);
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
console.log(productContent);
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
console.log(visionH4);
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
console.log(visionContent);
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
console.log(contactH4)
contactH4.textContent = siteContent.contact["contact-h4"]

let contactAddress = document.querySelector(".contact p:nth-of-type(1)")
console.log(contactAddress)
contactAddress.textContent = siteContent.contact.address

let contactPhoneNumber = document.querySelector(".contact p:nth-of-type(2)")
console.log(contactPhoneNumber)
contactPhoneNumber.textContent = siteContent.contact.phone

let contactEmail = document.querySelector(".contact p:nth-of-type(3)")
console.log(contactEmail)
contactEmail.textContent = siteContent.contact.email


const footer = document.querySelector('footer');
footer.textContent =  "Copyright Great Idea! 2018"

const secondaryContent = document.querySelector('body');
secondaryContent.append(footer);

