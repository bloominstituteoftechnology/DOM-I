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

//Nav 

const navbars = document.querySelectorAll("nav a");
navbars[0].textContent = siteContent["nav"]["nav-item-1"]; 
navbars[1].textContent = siteContent["nav"]["nav-item-2"];
navbars[2].textContent = siteContent["nav"]["nav-item-3"];
navbars[3].textContent = siteContent["nav"]["nav-item-4"];
navbars[4].textContent = siteContent["nav"]["nav-item-5"];
navbars[5].textContent = siteContent["nav"]["nav-item-6"];

//cta

const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
ctaHeader.innerHTML = 'DOM <br> Is <br> Awesome'
// I used .innerHTML beacuse it said on the web that it is for innerHTML can be used to change the contents of the DOM by string, and the use for br worked.


const headerButton = document.querySelector("button");
headerButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//Main content

const topContentHeader = document.querySelectorAll(".top-content h4");
topContentHeader[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeader[1].textContent = siteContent["main-content"]["about-h4"];

const topContentParag = document.querySelectorAll(".top-content p");
topContentParag[0].textContent = siteContent["main-content"]["features-content"];
topContentParag[1].textContent = siteContent["main-content"]["about-content"];

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const bottomContentHeader = document.querySelectorAll(".bottom-content h4");
bottomContentHeader[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].textContent = siteContent["main-content"]["vision-h4"];


const bottomContentParag = document.querySelectorAll(".bottom-content p");
bottomContentParag[0].textContent = siteContent["main-content"]["services-content"];
bottomContentParag[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParag[2].textContent = siteContent["main-content"]["vision-content"];


//Contact

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactParagr = document.querySelectorAll(".contact p");
contactParagr[0].textContent = siteContent["contact"]["address"];
contactParagr[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"

contactParagr[1].textContent = siteContent["contact"]["phone"];
contactParagr[2].textContent = siteContent["contact"]["email"];



//Footer

const footerContent = document.querySelector("footer");
footerContent.textContent = siteContent["footer"]["copyright"];