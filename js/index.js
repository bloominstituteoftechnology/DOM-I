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
const navKeys = Object.keys(siteContent.nav);


document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"])
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);



let aTags = document.getElementsByTagName('a');
for(let i = 0; i < aTags.length; i++) {
  aTags[i].innerText = siteContent.nav[navKeys[i]];
}
// aTags[0].innerText = 'Services';
// aTags[1].innerHTML = 'Product';
// aTags[2].innerHTML = 'Vision';
// aTags[3].innerHTML = 'Features';
// aTags[4].innerHTML = 'About';
// aTags[5].innerHTML = 'Contact';



document.querySelector('h1').appendChild(document.createTextNode("DOM"));
document.querySelector('h1').appendChild(document.createElement("br"));
document.querySelector('h1').appendChild(document.createTextNode("Is"));
document.querySelector('h1').appendChild(document.createElement("br"));
document.querySelector('h1').appendChild(document.createTextNode("Awesome"));

document.querySelector('button').appendChild(document.createTextNode("Get Started"));

pTags = document.getElementsByTagName('p');


pTags[0].innerText = siteContent["main-content"]["features-content"];
pTags[1].innerText = siteContent["main-content"]["about-content"];
pTags[2].innerText = siteContent["main-content"]["services-content"];
pTags[3].innerText = siteContent["main-content"]["product-content"];
pTags[4].innerText = siteContent["main-content"]["vision-content"];
pTags[5].innerText = siteContent["contact"]["address"];
pTags[6].innerText = siteContent["contact"]["phone"];
pTags[7].innerText = siteContent["contact"]["email"];
pTags[8].innerText = siteContent["footer"]["copyright"];

h4Tags = document.getElementsByTagName('h4');
h4Tags[0].innerText = siteContent["main-content"]["features-h4"];
h4Tags[1].innerText = siteContent["main-content"]["about-h4"];
h4Tags[2].innerText = siteContent["main-content"]["services-h4"];
h4Tags[3].innerText = siteContent["main-content"]["product-h4"];
h4Tags[4].innerText = siteContent["main-content"]["vision-h4"];
h4Tags[5].innerText = siteContent["contact"]["contact-h4"];
