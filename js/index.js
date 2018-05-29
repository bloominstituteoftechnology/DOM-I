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

let homeElement = document.createElement("a");
let home = document.createTextNode("Home"); 
homeElement.setAttribute('href', '#');
homeElement.appendChild(home);
document.querySelector(".container nav").prepend(homeElement);

let learnElement = document.createElement("a");
let learn = document.createTextNode("Learn"); 
learnElement.setAttribute('href', '#');
learnElement.appendChild(learn);
document.querySelector(".container nav").appendChild(learnElement);

let nav = document.querySelectorAll(".container nav a");
nav[1].innerHTML = siteContent["nav"]["nav-item-1"];
nav[2].innerHTML = siteContent["nav"]["nav-item-2"];
nav[3].innerHTML = siteContent["nav"]["nav-item-3"];
nav[4].innerHTML = siteContent["nav"]["nav-item-4"];
nav[5].innerHTML = siteContent["nav"]["nav-item-5"];
nav[6].innerHTML = siteContent["nav"]["nav-item-6"];

for(let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}

let ctaHeader = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");
ctaHeader.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainImg = document.querySelector("#middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

let mainParagraphs = document.querySelectorAll(".text-content p");
mainParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
mainParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];
mainParagraphs[2].innerHTML = siteContent["main-content"]["services-content"];
mainParagraphs[3].innerHTML = siteContent["main-content"]["product-content"];
mainParagraphs[4].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].innerHTML = siteContent["contact"]["address"];
contactAddress[1].innerHTML = siteContent["contact"]["phone"];
contactAddress[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
// END of DOM - I

// Start of DOM - II

ctaButton.addEventListener("click", () => ctaButton.innerHTML = "You clicked me!");

homeElement.addEventListener("dblclick", () => homeElement.style.color = "red");

learnElement.addEventListener("contextmenu", () => learnElement.style.color = "blue");

nav[1].addEventListener("dragstart", () => nav[1].setAttribute("style", "font-size: 20px; color: purple;"));

ctaImg.addEventListener("mouseover", () => ctaImg.style.width = "100px");

mainParagraphs.forEach(element => element.addEventListener("copy", () => alert("Copied!")));

mainImg.addEventListener("dragend", () => mainImg.style.width = "50px");

ctaHeader.addEventListener("wheel", () => ctaHeader.setAttribute("style", "font-size: 50px"));

logo.addEventListener("mousemove", () => alert(`Don't touch me!`));

contactHeader.addEventListener("mouseup", () => contactHeader.setAttribute("style", "background: grey; font-size: 30px;"));



