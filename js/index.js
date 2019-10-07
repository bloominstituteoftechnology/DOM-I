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
let $logo = document.getElementById("logo-img");
$logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Image DOMs
const $ctaImg2 = document.querySelector('#cta-img');
$ctaImg2.setAttribute('src',siteContent["cta"]["img-src"]);

const $middleImg2 = document.querySelector('.middle-img');
$middleImg2.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//NAV
const $aTags = document.querySelectorAll('a');
const $navTag = document.querySelectorAll('nav a');
let navIndex = 0;
for (let prop in siteContent.nav){
  if (navIndex > $navTag.length-1){
    continue;
  }
  $navTag[navIndex].textContent += siteContent.nav[prop];
  navIndex++;
}



// const nav = document.querySelectorAll('a');
// nav.style.color ='green';


//CTA
const $ctaH1 = document.querySelector('.cta-text h1');
$ctaH1.textContent = siteContent.cta.h1;
const $ctaButton = document.querySelector('.cta-text button');
$ctaButton.textContent = siteContent.cta.button;

//top-content
const $textContentH4 = document.querySelectorAll('.text-content h4');
const $textContentP = document.querySelectorAll('.text-content p');
$textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
$textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
$textContentP[0].textContent = siteContent["main-content"]["features-content"];
$textContentP[1].textContent = siteContent["main-content"]["about-content"];

//bottom-content

const $bottomTextContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
const $bottomTextContentP = document.querySelectorAll('.bottom-content .text-content p');
$bottomTextContentH4[0].textContent = siteContent["main-content"]["services-h4"];
$bottomTextContentH4[1].textContent = siteContent["main-content"]["product-h4"];
$bottomTextContentH4[2].textContent = siteContent["main-content"]["vision-h4"];
$bottomTextContentP[0].textContent = siteContent["main-content"]["services-content"];
$bottomTextContentP[1].textContent = siteContent["main-content"]["product-content"];
$bottomTextContentP[2].textContent = siteContent["main-content"]["vision-content"];

//contact
// const contactGI = siteContent;
// let address = contactGI.address.split(" ");
// address.splice(4,0,"<br/>");
// address = address.join(" ");
// contactGI.address = address;

const $contactH4 = document.querySelector('.contact h4');
const $contactP = document.querySelectorAll('.contact p');
$contactH4.textContent = siteContent.contact["contact-h4"];
$contactP[0].textContent = siteContent.contact.address;
$contactP[1].textContent = siteContent.contact.phone;
$contactP[2].textContent = siteContent.contact.email;

//footer
const $footer = document.querySelector('footer p');
$footer.textContent = siteContent.footer.copyright;