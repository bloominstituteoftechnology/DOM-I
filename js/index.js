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


let links = document.querySelectorAll("nav a");
links.forEach((elem, i) => elem.innerText = siteContent["nav"][`nav-item-${i+1}`]);

let header = document.querySelector(".cta h1"); 
header.innerHTML = siteContent["cta"]["h1"]; 

let button = document.querySelector(".cta button");
button.innerHTML = siteContent["cta"]["button"]; 

let headerImg = document.querySelector("#cta-img"); 
headerImg.setAttribute("src", siteContent["cta"]["img-src"]); 


// main content--------------------------------------------------//

let h4Tag = document.getElementsByTagName('h4') 
let paraTag = document.getElementsByTagName('p');

//top-content---------------------------------------------------------

h4Tag[0].innerText = siteContent["main-content"]["features-h4"];
paraTag[0].innerText = siteContent["main-content"]["features-content"]; 
h4Tag[1].innerText = siteContent["main-content"]["about-h4"];
paraTag[1].innerText = siteContent["main-content"]["about-content"]; 

//middle img------------------------------------------------------
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom-content------------------------------------------------------
h4Tag[2].innerText = siteContent["main-content"]["services-h4"]; 
paraTag[2].innerText = siteContent["main-content"]["services-content"]; 
h4Tag[3].innerText = siteContent["main-content"]["product-h4"];
paraTag[3].innerText = siteContent["main-content"]["product-content"]; 
h4Tag[4].innerText = siteContent["main-content"]["vision-h4"]; 
paraTag[4].innerText = siteContent["main-content"]["vision-content"]; 

