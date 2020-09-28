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

//set nav links text
let navLinks = document.querySelectorAll("a");
function addNavText () {
  let counter = 0;
  for (let i in siteContent.nav) {
    if (navLinks[counter]) {
      navLinks[counter].textContent = `${siteContent["nav"][i]}`
      counter++;
    }
  }
}
addNavText();


//set h1 text
let h1 = document.querySelector("h1");
let h1text = siteContent.cta.h1.split(" ");
h1text = h1text.join("<br> "); 
h1.innerHTML = `${h1text}`

//set button text
document.querySelector("button").textContent = `${siteContent.cta.button}`;

//set cta image
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

//set main content
let h4 = document.querySelectorAll("h4");
let p = document.querySelectorAll("p");


function setMainText(DOM, text) {
  let counter = 0;
  for (let i in siteContent["main-content"]) {
    if (i.includes(text)) {
      DOM[counter].textContent = `${siteContent["main-content"][i]}`;
      counter++;
    }
  }
}

setMainText(h4, "h4");
setMainText(p, "content");

//set middle img
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//set contact info
let contact = document.querySelector(".contact");
contact.children[0].textContent = `${siteContent["contact"]["contact-h4"]}`
function setContactInfo() {
  let counter = 1;
  for (let i in siteContent.contact) {
    if (!i.includes("h4")) {
      contact.children[counter].textContent = `${siteContent["contact"][i]}`;
      counter++;
    }
  }
}
setContactInfo();

//set copyright text
p[p.length-1].textContent = `${siteContent["footer"]["copyright"]}`;



//use appendChild and prepend
let nav = document.querySelector("nav");
nav.appendChild(document.createElement("a"));
nav.children[6].textContent = "Last Page";
nav.prepend(document.createElement("a"));
nav.children[0].textContent = "First Page"

//make links green
navLinks = document.querySelectorAll("a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = "green";
}