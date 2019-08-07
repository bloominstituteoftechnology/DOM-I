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
    "h1-1": "DOM",
    "h1-2": "Is",
    "h1-3": "Awesome",
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
    "address1" : "123 Way 456 Street", 
    "address2" : "Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// images import
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//style button
let button = document.querySelector(".container .cta .cta-text button");
button.style.backgroundColor = "white";
button.style.color = "black";
button.textContent = siteContent["cta"]["button"];
button.addEventListener("mouseenter", e => {button.style.color = "white"; button.style.backgroundColor = "black"});
button.addEventListener("mouseleave", e => {button.style.color = "black"; button.style.backgroundColor = "white"});

//text throughout

let navBar = document.querySelector("nav");
navBar.querySelectorAll("a")[0].textContent = siteContent["nav"]["nav-item-1"];
navBar.querySelectorAll("a")[1].textContent = siteContent["nav"]["nav-item-2"];
navBar.querySelectorAll("a")[2].textContent = siteContent["nav"]["nav-item-3"];
navBar.querySelectorAll("a")[3].textContent = siteContent["nav"]["nav-item-4"];
navBar.querySelectorAll("a")[4].textContent = siteContent["nav"]["nav-item-5"];
navBar.querySelectorAll("a")[5].textContent = siteContent["nav"]["nav-item-6"];

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1-1"] + "<br>"+ siteContent["cta"]["h1-2"]+ "<br>"+ siteContent["cta"]["h1-3"];

let mainTextTop = document.querySelector(".main-content .top-content");
mainTextTop.querySelectorAll("h4")[0].textContent = siteContent["main-content"]["features-h4"];
mainTextTop.querySelectorAll("h4")[1].textContent = siteContent["main-content"]["about-h4"];
mainTextTop.querySelectorAll("p")[0].textContent = siteContent["main-content"]["features-content"];
mainTextTop.querySelectorAll("p")[1].textContent = siteContent["main-content"]["about-content"];


let mainTextBottom = document.querySelector(".main-content .bottom-content");
mainTextBottom.querySelectorAll("h4")[0].textContent = siteContent["main-content"]["services-h4"];
mainTextBottom.querySelectorAll("h4")[1].textContent = siteContent["main-content"]["product-h4"];
mainTextBottom.querySelectorAll("h4")[2].textContent = siteContent["main-content"]["vision-h4"];
mainTextBottom.querySelectorAll("p")[0].textContent = siteContent["main-content"]["services-content"];
mainTextBottom.querySelectorAll("p")[1].textContent = siteContent["main-content"]["product-content"];
mainTextBottom.querySelectorAll("p")[2].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contact.querySelectorAll("p")[0].innerHTML = siteContent["contact"]["address1"]+ "<br>" + siteContent["contact"]["address2"];
contact.querySelectorAll("p")[1].textContent = siteContent["contact"]["phone"];
contact.querySelectorAll("p")[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.querySelector("p").textContent = siteContent["footer"]["copyright"];

//add content
let endNav = document.createElement("a");
endNav.textContent = "Download";
endNav.setAttribute('href','#');
navBar.appendChild(endNav);
let frontNav = document.createElement("a");
frontNav.textContent = "Party";
frontNav.setAttribute('href','#');
navBar.prepend(frontNav);
navBar.querySelectorAll("a").forEach((ele) => ele.style.color = "green");
