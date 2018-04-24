const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM IsAwesome",

    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let nav = document.getElementsByTagName("nav");
nav[0].children[0].innerHTML = siteContent["nav"]["nav-item-1"]
nav[0].children[1].innerHTML = siteContent["nav"]["nav-item-2"]
nav[0].children[2].innerHTML = siteContent["nav"]["nav-item-3"]
nav[0].children[3].innerHTML = siteContent["nav"]["nav-item-4"]
// console.log(nav[0].children[0].innerHTML)
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headering = document.getElementById("cta-img");
headering.setAttribute('src', siteContent["cta"]["img-src"]);

document.querySelector('button').innerHTML = siteContent['cta']['button'];

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//moises way
// console.log(Array.from(Object.entries(siteContent['main-content'])))

// Array.from(Object.entries(siteContent['main-content'])).slice(4, 1)
// Object.entries
//longest way Lol

document.querySelector('h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('h4').innerHTML = siteContent["main-content"]["features-h4"]
document.querySelector('p').innerHTML = siteContent["main-content"]["features-content"]

document.querySelector('').innerHTML = siteContent[''][''];
document.querySelector('').innerHTML = siteContent[""][""]
document.querySelector('').innerHTML = siteContent[""][""]


// console.log(document.querySelector("h4").innerHTML)


// document.getElementsByClass('h4').innerHTML = siteContent['contact']['contact-h4'];
// console.log(document.querySelector('h4').innerHTML)



