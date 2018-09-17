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

//nav elements
const navElements = document.querySelectorAll("a");

//console.log(navElements);
navElements[0].innerText = siteContent.nav["nav-item-1"];
navElements[1].innerText = siteContent.nav["nav-item-2"];
navElements[2].innerText = siteContent.nav["nav-item-3"];
navElements[3].innerText = siteContent.nav["nav-item-4"];
navElements[4].innerText = siteContent.nav["nav-item-5"];
navElements[5].innerText = siteContent.nav["nav-item-6"];

//To add new nav elements
//1..  create the elements
let newNavElementOne = document.create('a');
let newNavElementTwo = document.create('a');
//2.. reference is navElements
//3.. Add value
newNavElementOne.innerText = "WEB";
newNavElementTwo.innerText = "DOM";
//append and prepend
navElements.prepend(newNavElementOne);
navElements.append(newNavElementTwo);


//applyint nav elements green color.
navElements.style.color = "green";

//cta section elements h1, button , image
let ctaH1Element = document.querySelector('.cta-text h1');
ctaH1Element.innerText = siteContent.cta["h1"];
let ctaButtonElement = document.querySelector('.cta-text button');
ctaButtonElement.innerText = siteContent.cta["button"];
let ctaImgElement = document.querySelector("#cta-img");
ctaImgElement.src = siteContent.cta["img-src"];

//main-content SECTION div-h4-p
//top-content  h4 elements -- features and about
let topContentH4 = document.querySelectorAll('.top-content .text-content h4');
topContentH4[0].innerText = siteContent["main-content"]["features-h4"];
topContentH4[1].innerText = siteContent["main-content"]["about-h4"];
//p elements
let topContentPtag = document.querySelectorAll('.top-content .text-content p');
topContentPtag[0].innerText = siteContent["main-content"]["features-content"];
topContentPtag[1].innerText = siteContent["main-content"]["about-content"];
//middle image 
let mainContentImage = document.querySelector('#middle-img');
mainContentImage.src = siteContent["main-content"]["middle-img-src"];

//.bottom-content .text-content h4
//h4 elements -- services and product, vision
let bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH4[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentH4[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentH4[2].innerText = siteContent["main-content"]["vision-h4"];
//p elements
let bottomContentPtag = document.querySelectorAll('.bottom-content .text-content p');
bottomContentPtag[0].innerText = siteContent["main-content"]["services-content"];
bottomContentPtag[1].innerText = siteContent["main-content"]["product-content"];
bottomContentPtag[2].innerText = siteContent["main-content"]["vision-content"];

//contact section

let contactH4 = document.querySelector('.contact h4');
cotactH4.innerText = siteContent.contact.["contact-h4"];
let contactPtags = document.querySelectorAll('.contact p');
contactPtags[0].innerText = siteContent.contact.["address"];
contactPtags[1].innerText = siteContent.contact.["phone"];
contactPtags[2].innerText = siteContent.contact.["email"];

//footer 
let footerPtagElement = document.querySelector('footer p');
footerPtagElement.innerText = siteContent.footer.copyright;