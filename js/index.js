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

const multipleClasses = document.querySelectorAll ("nav");
console.log(multipleClasses[0])

// Cta Section

const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

const ctaH = document.querySelector("h1");
console.log(ctaH);

ctaH.textContent = siteContent.cta.h1;


const ctaB = document.querySelector("button");
console.log(ctaB)

ctaB.textContent = siteContent.cta.button;

// Main-Content Section

//FEATURES H4
const mainContent = document.querySelector(".main-content .top-content h4");
console.log(mainContent);

//FEATURES H4 TEXT-CONTENT
mainContent.textContent = siteContent["main-content"]["features-h4"];



//FEATURES CONTENT 
const mainFeatures = document.querySelector(".main-content .top-content p")
console.log(mainFeatures);

//FEATURES CONTENT (TEXT-CONTENT)
mainFeatures.textContent = siteContent["main-content"]["features-content"];


//ABOUT H4
const mainAboutH = document.querySelector(".main-content .top-content .text-content h4")
console.log(mainAboutH);

//ABOUT H4 TEXT-CONTENT
mainAboutH.textContent = siteContent["main-content"]["about-h4"]


//ABOUT CONTENT 
const mainAboutContent = document.querySelector(".main-content .top-content .text-content p");
console.log(mainAboutContent);

//ABOUT CONTENT (TEXT-CONTENT)
mainAboutContent.textContent = siteContent["main-content"]["about-content"];


//MIDDLE IMG SRC
const mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
console.log(mainImg);


//SERVICE H4
const mainServicesH = document.querySelector(".main-content .bottom-content h4");
console.log(mainServicesH);

//SERVICE H4 (TEXT-CONTENT)
mainServicesH.textContent = siteContent["main-content"]["services-h4"];



//SERVICE CONTENT 
const mainServicesC = document.querySelector(".main-content .bottom-content p"); 
console.log(mainServicesC)

//SERVICE CONTENT (TEXT-CONTENT)
mainServicesC.textContent = siteContent["main-content"]["services-content"]



//PRODUCT H4
const mainProductH = document.querySelector(".main-content .bottom-content .text-content h4"); 
console.log(mainProductH)

//PRODUCT H4 (TEXT-CONTENT)
mainProductH.textContent = siteContent["main-content"]["product-h4"]



//PRODUCT CONTENT 
const mainProductC = document.querySelector(".main-content .bottom-content .text-content p")
console.log(mainProductC)

//PRODUCT CONTENT (TEXT-CONTENT)
mainProductC.textContent = siteContent["main-content"]["product-content"]



//VISION H4
const mainVisionH = document.querySelector(".main-content .bottom-content .text-content h4")
console.log(mainVisionH)

//VISION H4 (TEXT-CONTENT)
mainVisionH.textContent = siteContent["main-content"]["vision-h4"];



//VISION CONTENT
const mainVisionC = document.querySelector(".main-content .bottom-content .text-content p")
console.log(mainVisionC)

//VISION CONTENT (TEXT-CONTENT)
mainVisionC.textContent = siteContent["main-content"]["vision-content"];

/*Contact Section */ 

const contactH = document.querySelector(".contact h4");
console.log(contactH)
contactH.textContent = siteContent.contact["contact-h4"]

const contactAddress = document.querySelector(".contact p");
console.log(contactAddress)
contactAddress.textContent = siteContent.contact.address;

const contactPhone = document.querySelector(".contact p");
console.log(contactPhone)
contactPhone.textContent = siteContent.contact.phone


const contactEmail = document.querySelector(".contact p");
console.log(contactEmail)
contactEmail.textContent = siteContent.contact.email


/*Footer Section */

const footerCR = document.querySelector("footer p");
footerCR.textContent = siteContent.footer.copyright;

console.log(footerCR)






