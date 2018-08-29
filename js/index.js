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
    "h1": "DOM<br> Is<br> Awesome",
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

//***Navigation***
const logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];

const navAnchors = document.querySelectorAll("nav a");
navAnchors.forEach((item, index)   =>  {
    return item.innerHTML = siteContent.nav[`nav-item-${index + 1}`];
});

//***CTA***

const ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent.cta.h1;
const button = document.querySelector('button');
button.innerHTML = siteContent.cta.button;
const circleImage = document.getElementById("cta-img");
circleImage.src = siteContent.cta["img-src"];

//***Main Content***

//h4
const siteH4 = document.querySelectorAll('h4');
siteH4[0].innerText = siteContent["main-content"]["features-h4"];
siteH4[1].innerText = siteContent["main-content"]["about-h4"];
siteH4[2].innerText = siteContent["main-content"]["services-h4"];
siteH4[3].innerText = siteContent["main-content"]["product-h4"];
siteH4[4].innerText = siteContent["main-content"]["vision-h4"];

//image

const middleImage = document.getElementById('middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

//Paragraphs

const paragraphs = document.querySelectorAll('p');
paragraphs[0].innerText = siteContent["main-content"]["features-content"];
paragraphs[1].innerText = siteContent["main-content"]["about-content"];
paragraphs[2].innerText = siteContent["main-content"]["services-content"];
paragraphs[3].innerText = siteContent["main-content"]["product-content"];
paragraphs[4].innerText = siteContent["main-content"]["vision-content"];

//***Contact***

//h4

siteH4[5].innerText = siteContent.contact["contact-h4"];

//Paragraphs

paragraphs[5].innerText = siteContent.contact.address;
paragraphs[6].innerText = siteContent.contact.phone;
paragraphs[7].innerText = siteContent.contact.email;

//***Footer*** 

//Paragraphs

paragraphs[8].innerText = siteContent.footer.copyright;

navAnchors.forEach(item => item.style.color = 'green');

const newAnchor = document.createElement('a');
newAnchor.innerText = 'Blog';
newAnchor.style.color = 'green';
newAnchor.href = '#';
const navBar = document.querySelector('nav');
navBar.appendChild(newAnchor);
const firstAnchor = document.createElement('a');
firstAnchor.innerText = 'GitHub';
firstAnchor.style.color = 'green';
firstAnchor.href = '#';
navBar.prepend(firstAnchor);


