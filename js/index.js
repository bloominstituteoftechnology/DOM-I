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
//selectors

//nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let allAs = document.querySelectorAll('a');
let navy = document.querySelector('nav');
allAs[0].textContent = siteContent['nav']['nav-item-1'];
allAs[1].textContent = siteContent['nav']['nav-item-2'];
allAs[2].textContent = siteContent['nav']['nav-item-3'];
allAs[3].textContent = siteContent['nav']['nav-item-4'];
allAs[4].textContent = siteContent['nav']['nav-item-5'];
allAs[5].textContent = siteContent['nav']['nav-item-6'];
let aStats = document.createElement('a');
let aCareers = document.createElement('a');
aStats.textContent = "Stats";
aCareers.textContent = "Career";
aStats.style.color = "green";
aCareers.style.color = "green";
 navy.appendChild(aCareers);
 navy.prepend(aStats);
//  navy.appendChild('Stats');

allAs.forEach(element => element.style.color = "green");

//cta
let awesome = document.querySelector('h1').textContent = "Dom is Awesome!";
let button = document.querySelector('button').textContent = "Get Started";
let img2 = document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);
//main-content
let h4s = document.querySelectorAll('h4');
let P = document.querySelectorAll("p");
h4s[0].textContent = siteContent['main-content']['features-h4'];
P[0].textContent = siteContent['main-content']['features-content'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
P[1].textContent = siteContent['main-content']['about-content'];
let img3 = document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);
h4s[2].textContent = siteContent['main-content']['services-h4'];
P[2].textContent = siteContent['main-content']['services-content'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
P[3].textContent = siteContent['main-content']['product-content'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
P[4].textContent = siteContent['main-content']['vision-content'];

//contact
h4s[5].textContent = siteContent['contact']['contact-h4'];
P[5].textContent = siteContent['contact']['address'];
P[6].textContent = siteContent['contact']['phone'];
P[7].textContent = siteContent['contact']['email'];
//footer
P[8].textContent = siteContent['footer']['copyright']