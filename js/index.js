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


const servLink = document.createElement("a");
servLink.textContent = "Services";
servLink.href = "#";
document.querySelector("nav").appendChild(servLink);

const proLink = document.createElement("a");
proLink.textContent = "Product";
proLink.href = "#";
document.querySelector("nav").appendChild(proLink);

const visLink = document.createElement("a");
visLink.textContent = "Vision";
visLink.href = "#";
document.querySelector("nav").appendChild(visLink);

const featLink = document.createElement("a");
featLink.textContent = "Features";
featLink.href = "#";
document.querySelector("nav").appendChild(featLink);

const aboutLink = document.createElement("a");
aboutLink.textContent = "About";
aboutLink.href = "#";
document.querySelector("nav").appendChild(aboutLink);

const contactLink = document.createElement("a");
contactLink.textContent = "Contact";
contactLink.href = "#";
document.querySelector("nav").appendChild(contactLink);

const testLink = document.createElement("a");
testLink.textContent = "Test";
testLink.href = "#";
document.querySelector("nav").appendChild(testLink);

const checkLink = document.createElement("a");
checkLink.textContent = "Check";
checkLink.href = "#";
document.querySelector("nav").appendChild(checkLink);


const test = document.querySelector('.cta-text h1');
test.textContent = siteContent["cta"]["h1"];

const main = document.querySelector('.text-content h4');
main.textContent = siteContent["main-content"]["features-h4"];

const mainone = document.querySelector(".text-content p");
mainone.textContent = siteContent["main-content"]["features-content"];

const main2 = document.querySelectorAll('.text-content h4');
main2.textContent = siteContent["main-content"]["about-h4"];


const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];





const middleImg = document.querySelector('.middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const logoImg = document.querySelector('.logo');
logoImg.src = 'img/logo.png';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const feet = document.querySelector('.contact h4');
feet.textContent = siteContent["contact"]["contact-h4"];

const add = document.querySelectorAll('.contact p');
add[1].textContent = siteContent["contact"]["address"];

const phone = document.querySelectorAll('.contact p');
phone[2].textContent = siteContent["contact"]["phone"];

const mail = document.querySelectorAll('.contact p')[3];
mail[3].textContent = siteContent["contact"]["email"];










