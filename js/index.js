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

let navigation = document.querySelectorAll("header nav a");

navigation[0].innerHTML = siteContent["nav"]["nav-item-1"];
navigation[1].innerHTML = siteContent["nav"]["nav-item-2"];
navigation[2].innerHTML = siteContent["nav"]["nav-item-3"];
navigation[3].innerHTML = siteContent["nav"]["nav-item-4"];
navigation[4].innerHTML = siteContent["nav"]["nav-item-5"];
navigation[5].innerHTML = siteContent["nav"]["nav-item-6"];

for(let link of navigation) {
  link.style.color = 'green';
}

let navigationBar = document.querySelector("nav");

let navYes = document.createElement("a");
navYes.setAttribute("href", "#");
navYes.style.color = 'green';

let navYesText = document.createTextNode("Members");
navYes.appendChild(navYesText);
navigationBar.prepend(navYes);

let navNo = document.createElement("a");
navNo.setAttribute("href", "#");
navNo.style.color = 'green';

let navNoText = document.createTextNode("Locations");
navigationBar.appendChild(navNo).appendChild(navNoText);

/*Center Text Area Below*/

let centerText = document.querySelector(".cta-text h1");
centerText.innerHTML = "DOM<br> Is<br> Awesome";

centerText.addEventListener('mouseover', (event) => {
  event.target.innerHTML = "Okay";
});

let buttonText = document.querySelector(".cta .cta-text button");
buttonText.innerHTML = siteContent["cta"]["button"];

let circleImage = document.getElementById("cta-img");
circleImage.setAttribute('src', siteContent["cta"]["img-src"]);

let topContentHeader = document.querySelectorAll(".top-content h4");
topContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeader[1].innerHTML = siteContent["main-content"]["about-h4"];

let topContent = document.querySelectorAll(".top-content p");
topContent[0].innerHTML = siteContent["main-content"]["features-content"];
topContent[1].innerHTML =  siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentHeader = document.querySelectorAll(".bottom-content h4");
bottomContentHeader[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content p");
bottomContent[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContent[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContent[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].innerHTML = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

let footerContent = document.querySelectorAll("footer p")
footerContent[0].innerHTML = siteContent["footer"]["copyright"];