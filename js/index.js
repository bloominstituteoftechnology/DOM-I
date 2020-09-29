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

 const navLinks= document.querySelectorAll('nav a');
 navLinks[0].textContent = 'Services';
 navLinks[1].textContent = 'Product';
 navLinks[2].textContent = 'Vision';
 navLinks[3].textContent = 'Feature';
 navLinks[4].textContent = 'About';
 navLinks[5].textContent = 'Contact';

 const h1 = document.querySelector('h1');
 h1.innerText = `DOM\n Is\n Awesome`

const button = document.querySelector('button');
button.textContent = 'Get Started';

let pic = document.getElementById("cta-img");
pic.setAttribute('src', siteContent["cta"]["img-src"]);

const h4 = document.querySelectorAll('.top-content h4');
h4[0].textContent = `Features`;
h4[1].textContent = `About`;

const p = document.querySelectorAll('.top-content p');
p[0].textContent = siteContent["main-content"]["features-content"]
p[1].textContent = siteContent["main-content"]["about-content"]

let pics = document.getElementById("middle-img");
pics.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const h4bottom = document.querySelectorAll('.bottom-content h4');
h4bottom[0].textContent = `Services`;
h4bottom[1].textContent = `Product`;
h4bottom[2].textContent = `Vision`;

const pbottom = document.querySelectorAll('.bottom-content p');
pbottom[0].textContent = siteContent["main-content"]["services-content"]
pbottom[1].textContent = siteContent["main-content"]["product-content"]
pbottom[2].textContent = siteContent["main-content"]["vision-content"]

const h4foot = document.querySelector('.contact h4');
h4foot.textContent = `Contact`

const pfoot = document.querySelectorAll('.contact p');
pfoot[0].textContent = siteContent["contact"]["address"]
pfoot[1].textContent = siteContent["contact"]["phone"]
pfoot[2].textContent = siteContent["contact"]["email"]

const pfooter = document.querySelector('footer p');
pfooter.textContent = siteContent["footer"]["copyright"]
