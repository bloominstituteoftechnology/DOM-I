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

// Create selectors to point your data into elements and update HTML with the JSON Data
let navBar = document.querySelectorAll("nav a");
navBar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navBar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navBar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navBar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navBar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navBar[5].innerHTML = siteContent["nav"]["nav-item-6"];

let domIsAwesome = document.querySelector(".cta .cta-text h1");
domIsAwesome.innerHTML = siteContent["cta"]["h1"];

let getStarted = document.querySelector(".cta .cta-text button");
getStarted.innerHTML = siteContent["cta"]["button"];

let greatIdeaLogo = document.querySelector("#cta-img");
greatIdeaLogo.setAttribute('src', siteContent["cta"]["img-src"])

let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll(".text-content p");
mainText[0].innerHTML = siteContent["main-content"]["features-content"];
mainText[1].innerHTML = siteContent["main-content"]["about-content"];
mainText[2].innerHTML = siteContent["main-content"]["services-content"];
mainText[3].innerHTML = siteContent["main-content"]["product-content"];
mainText[4].innerHTML = siteContent["main-content"]["vision-content"];

let midImage = document.querySelector("#middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactHead = document.querySelector(".contact h4");
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

let contactBody = document.querySelectorAll(".contact p");
contactBody[0].innerHTML = siteContent["contact"]["address"];
contactBody[1].innerHTML = siteContent["contact"]["phone"];
contactBody[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];

// Change the color of the navigation text to green
// navBar[0].style.color = 'green';
// navBar[1].style.color = 'green';
// navBar[2].style.color = 'green';
// navBar[3].style.color = 'green';
// navBar[4].style.color = 'green';
// navBar[5].style.color = 'green';
let mainNav = document.querySelector("nav");
for(let i = 0; i < navBar.length; i++){
  navBar[i].style.color = 'green';
}

// Utilize .appendChild() and .prepend() to add two new items to the navigation 
// system. You can call them whatever you want.
let newAnchor = document.createElement("a");
newAnchor.innerHTML = "Blahh";
mainNav.appendChild(newAnchor);


let secondAnchor = document.createElement("a");
secondAnchor.innerHTML = "Yahh";
mainNav.prepend(secondAnchor);

for(let i = 0; i < mainNav.length; i++){
  mainNav[i].style.color = 'green';
}