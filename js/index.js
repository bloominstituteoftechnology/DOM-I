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

//Header and logos
{
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav1 = document.querySelector('header nav a');
console.log(nav1);
nav1.textContent = siteContent["nav"]["nav-item-1"];
let nav2 = nav1.nextElementSibling;
nav2.textContent = siteContent["nav"]["nav-item-2"];
let nav3 = nav2.nextElementSibling;
nav3.textContent = siteContent["nav"]["nav-item-3"];
let nav4 = nav3.nextElementSibling;
nav4.textContent = siteContent["nav"]["nav-item-4"];
let nav5 = nav4.nextElementSibling;
nav5.textContent = siteContent["nav"]["nav-item-5"];
let nav6 = nav5.nextElementSibling;
nav6.textContent = siteContent["nav"]["nav-item-6"];
}


// CTA Section
{
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];
let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = "dom <br /> is <br /> awesome"; // I'm leaving it like this because the sireContent version does not have the line breaks
let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent["cta"]["button"];
}
//Main content headers
{
let h4Features = document.querySelector(".text-content:nth-of-type(1) h4");
h4Features.innerText = siteContent["main-content"]["features-h4"];
let h4About = document.querySelector(".text-content:nth-of-type(2) h4");
h4About.innerText = siteContent["main-content"]["about-h4"];
let h4Services = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
h4Services.innerText = siteContent["main-content"]["services-h4"];
let h4Product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
h4Product.innerText = siteContent["main-content"]["product-h4"];
let h4Vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
h4Vision.innerText = siteContent["main-content"]["vision-h4"];
}
// Main Content image and paragraphs
{
let midimg = document.querySelector('.middle-img');
midimg.src = siteContent["main-content"]["middle-img-src"];

let featuresP = document.querySelector('.text-content:nth-of-type(1) p');
featuresP.innerText = siteContent["main-content"]["features-content"];

let aboutP = document.querySelector('.text-content:nth-of-type(2) p');
aboutP.innerText = siteContent["main-content"]["about-content"];

let servicesP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p'); 
servicesP.innerText = siteContent["main-content"]["services-content"];
let productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p'); 
productP.innerText = siteContent["main-content"]["product-content"];
let visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p'); 
visionP.innerText = siteContent["main-content"]["vision-content"];
}

//Footer 
{
let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];

let contactP1 = document.querySelector('.contact p:nth-of-type(1)');
contactP1.innerHTML = "123 Way 456 Street <br />Somewhere, USA"; // I'm keeping it this way for the break
let contactP2 = document.querySelector('.contact p:nth-of-type(2)');
contactP2.innerText = siteContent["contact"]["phone"];
let contactP3 = document.querySelector('.contact p:nth-of-type(3)');
contactP3.innerText = siteContent["contact"]["email"];



let footerP = document.querySelector('footer p');
footerP.innerText = siteContent["footer"]["copyright"];
}