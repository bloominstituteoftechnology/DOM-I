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


/////NAV////////
let nav = document.getElementsByTagName("nav");
let navItems = nav[0].children;
///  nav items
for(let i = 0; i < navItems.length; i++){
  // console.log(i)
  navItems[i].innerText = siteContent["nav"][`nav-item-${i+1}`]
}

/////CTA/////
const ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.innerText = siteContent.cta.h1;
const ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent.cta.button;
const ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];

//////////MAIN CONTENT////////

  ////TOP////
const topContent = document.querySelector(".top-content").children;
//features
const featuresHeading = topContent[0].querySelector("h4");
featuresHeading.innerText = siteContent["main-content"]["features-h4"];
const featuresParagraph = topContent[0].querySelector("p");
featuresParagraph.innerText = siteContent["main-content"]["features-content"];
//about
const aboutHeading = topContent[1].querySelector("h4");
aboutHeading.innerText = siteContent["main-content"]["about-h4"];
const aboutParagraph = topContent[1].querySelector("p");
aboutParagraph.innerText = siteContent["main-content"]["about-content"];

///middle image///
const middleImage = document.querySelector(".middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

  ////bottom/////
const bottomContent = document.querySelector(".bottom-content").children;
const servicesHeading = bottomContent[0].querySelector("h4");
servicesHeading.innerText = siteContent["main-content"]["services-h4"];
const servicesParagraph = bottomContent[0].querySelector("p");
servicesParagraph.innerText = siteContent["main-content"]["services-content"];

const productHeading = bottomContent[1].querySelector("h4");
productHeading.innerText = siteContent["main-content"]["product-h4"];
const productParagraph = bottomContent[1].querySelector("p");
productParagraph.innerText = siteContent["main-content"]["product-content"];

const visionHeading = bottomContent[2].querySelector("h4");
visionHeading.innerText = siteContent["main-content"]["vision-h4"];
const visionParagraph = bottomContent[2].querySelector("p");
visionParagraph.innerText = siteContent["main-content"]["vision-content"];

///////////CONTACT////////////////////

const contact = document.querySelector(".contact").children;
const contactHeading = contact[0];
contactHeading.innerText = siteContent["contact"]["contact-h4"];
const address = contact[1];
address.innerText = siteContent["contact"]["address"];
const phone = contact[2];
phone.innerText = siteContent["contact"]["phone"];
const email = contact[3];
email.innerText = siteContent["contact"]["email"];

////FOOTER/////

const footer = document.getElementsByTagName("footer")

const footerParagraph = footer[0].querySelector("p");
footerParagraph.innerText = siteContent["footer"]["copyright"];

console.log(footerParagraph);


// console.log(anchorTag1);
// navItems[1].innerText = siteContent["nav"]["nav-item-2"]

// console.log(navItems.length);



//stretch probs
const anchorTag1 = document.createElement('a');
const anchorTag2 = document.createElement('a');
anchorTag1.innerText = "ANCHORTAG1";
anchorTag2.innerText = "ANCHORTAG2";
anchorTag1.href = "#";
anchorTag2.href = "#";
nav[0].appendChild(anchorTag1);
nav[0].prepend(anchorTag2)



