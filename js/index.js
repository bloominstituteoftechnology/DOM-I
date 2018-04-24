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

/*---------------Nav-----------------------*/

let kelnav = document.getElementsByTagName("nav")[0];
kelnav.getElementsByTagName("a")[0].innerHTML = siteContent["nav"]["nav-item-1"];
kelnav.getElementsByTagName("a")[1].innerHTML = siteContent["nav"]["nav-item-2"];
kelnav.getElementsByTagName("a")[2].innerHTML = siteContent["nav"]["nav-item-3"];
kelnav.getElementsByTagName("a")[3].innerHTML = siteContent["nav"]["nav-item-4"];
kelnav.getElementsByTagName("a")[4].innerHTML = siteContent["nav"]["nav-item-5"];
kelnav.getElementsByTagName("a")[5].innerHTML = siteContent["nav"]["nav-item-6"];


/*----------------CTA----------------------*/
let cta = document.querySelector(".cta-text h1");
cta.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

/*---------------Main Content---------------*/

document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"]; 

document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"]; 
document.getElementsByTagName("h4")[1].innerHTML = siteContent["main-content"]["about-h4"]; 
document.getElementsByTagName("p")[1].innerHTML = siteContent["main-content"]["about-content"]; 

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.getElementsByTagName("h4")[2].innerHTML = siteContent["main-content"]["services-h4"]; 
document.getElementsByTagName("p")[2].innerHTML = siteContent["main-content"]["services-content"]; 
document.getElementsByTagName("h4")[3].innerHTML = siteContent["main-content"]["product-h4"]; 
document.getElementsByTagName("p")[3].innerHTML = siteContent["main-content"]["product-content"]; 
document.getElementsByTagName("h4")[4].innerHTML = siteContent["main-content"]["vision-h4"]; 
document.getElementsByTagName("p")[4].innerHTML = siteContent["main-content"]["vision-content"]; 

/*-----------contact--------------*/

document.getElementsByTagName("h4")[5].innerHTML = siteContent["contact"]["contact-h4"]; 
document.getElementsByTagName("p")[5].innerHTML = siteContent["contact"]["address"];
document.getElementsByTagName("p")[6].innerHTML = siteContent["contact"]["phone"];
document.getElementsByTagName("p")[7].innerHTML = siteContent["contact"]["email"]; 

/*-----------footer--------------*/

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
