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
//Test for logo-img
console.log(logo);


//Update navBar Selector
const navBar = document.querySelector('nav');

const navATag = document.querySelectorAll('a');
navATag.forEach(function(item, index){
  item.innerText = siteContent['nav'][`nav-item-${index + 1}`];
  item.style.color = 'silver';
});

//Test navBar  
console.log(navBar);

// Updated images for cta
let cta = document.getElementById("cta-img");;
cta.setAttribute('src', siteContent["cta"]["img-src"] );

//Test for cta-img
console.log(cta);

// Update to cta-text
const ctaText1 = document.querySelector('h1');
const ctaText2 = siteContent['cta']['h1'].split(' ');

ctaText2.splice(1,0, '\r\n');
ctaText2.splice(3,0, '\r\n');

ctaText1.innerText = ctaText2.join('');

//Test ctaText1 out put should be "DOM IS AWESOME"
console.log(ctaText1);

//cta-text button
const Button = document.querySelector('.cta-text button');
Button.textContent = siteContent['cta']['button'];

// Test Button on console "Get Started"
console.log(Button);

// features & abouT h4
const contentTopH4 = document.querySelectorAll('.top-content .text-content h4');
contentTopH4[0].textContent = siteContent['main-content']['features-h4'];
contentTopH4[1].textContent = siteContent['main-content']['about-h4'];

//test contentTopH4[]
console.log(contentTopH4[0].textContent);
console.log(contentTopH4[1].textContent);


// Features and About contents on Top Content area
const contentTopP = document.querySelectorAll('.top-content .text-content p');
contentTopP[0].textContent = siteContent['main-content']['features-content'];
contentTopP[1].textContent = siteContent['main-content']['about-content'];


//Test contentTopP  for Features and About
console.log(contentTopP[0].textContent);
console.log(contentTopP[1].textContent);

//Updated images for middle-img-src
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Test for middleImage
console.log(middleImage);

//features  & about h4 for bottom contents
const contentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
contentBottomH4[0].textContent = siteContent['main-content']['services-h4'];
contentBottomH4[1].textContent = siteContent['main-content']['product-h4'];
contentBottomH4[2].textContent = siteContent['main-content']['vision-h4'];

//Test contentBottomH4 for services, product and vision
console.log(contentBottomH4[0].textContent);
console.log(contentBottomH4[1].textContent);
console.log(contentBottomH4[2].textContent);

//features  & about P for bottom contents
const contentBottomP = document.querySelectorAll('.bottom-content .text-content p');
contentBottomP[0].textContent = siteContent['main-content']['services-content'];
contentBottomP[1].textContent = siteContent['main-content']['product-content'];
contentBottomP[2].textContent = siteContent['main-content']['vision-content'];

//Test features and about P for bottom contents for services, product, and vision
console.log(contentBottomP[0].textContent);
console.log(contentBottomP[1].textContent);
console.log(contentBottomP[2].textContent);

//Features for contact h4 
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

//Test for contact h4 CONTACT
console.log(contactH4);


// ContactP element
const contactP = document.querySelectorAll('.contact p');

let address = siteContent['contact']['address'].split(" ");
address.splice(4,0, '\r\n');

//Features for contact p tags
contactP[0].innerText = address.join(' ');
contactP[1].textContent = siteContent ['contact']['phone'];
contactP[2].textContent = siteContent ['contact']['email'];

//Test address and contactP
console.log(address);
console.log(contactP[0].innerText);
console.log(contactP[1].textContent);
console.log(contactP[2].textContent);


