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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
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

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaButton = document.querySelector('button')
ctaButton.innerHTML = siteContent.cta.button;


let cta = document.querySelector('h1');
cta.innerHTML = siteContent['cta']['h1'];

let navLinks = document.querySelectorAll('nav a');
navLinks[0].innerText = siteContent['nav']['nav-item-1'];
navLinks[1].innerText = siteContent['nav']['nav-item-2'];
navLinks[2].innerText = siteContent['nav']['nav-item-3'];
navLinks[3].innerText = siteContent['nav']['nav-item-4'];
navLinks[4].innerText = siteContent['nav']['nav-item-5'];
navLinks[5].innerText = siteContent['nav']['nav-item-6'];


let topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerHTML = siteContent["main-content"]["features-content"];
topContentText[1].innerHTML = siteContent["main-content"]["about-content"];

let bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML =
 siteContent["contact"]["contact-h4"];

 let contactInfo =
 document.querySelectorAll('.contact p');
 contactInfo[0].innerHTML =  siteContent["contact"]["address"];
 contactInfo[1].innerHTML = siteContent["contact"]["phone"];
 contactInfo[2].innerHTML = siteContent["contact"]["email"];

 let footer = document.querySelector('footer p');
 footer.innerHTML = siteContent["footer"]["copyright"]


 navLinks.forEach(item => {
   item.setAttribute('style', 'color: green');
 })

const welcome = document.createElement('a');
welcome.innerText = 'Welcome';
welcome.href='#';

const goodbye = document.createElement('a');
goodbye.innerText='Goodbye';
goodbye.href='#';
 let nav = document.querySelector('nav');
 nav.append(goodbye);
 nav.prepend(welcome);

 const newButton = document.createElement('button');
 newButton.innerHTML = 'Blue Text';
 newButton.setAttribute('style', 'display: block; cursor: pointer')
footer.prepend(newButton);
newButton.setAttribute('id', 'blue-color-button');


document.getElementById('blue-color-button').addEventListener('click', function(){
  let allH4 = document.querySelectorAll('h4');
  let allP = document.querySelectorAll('p');
  allH4.forEach(item => {
    item.setAttribute('style', 'color: blue');
  });
  allP.forEach(item => {
    item.setAttribute('style', 'color: blue');
  });

  });
