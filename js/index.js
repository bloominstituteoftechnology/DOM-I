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

// this will change color to green

let navItems = document.querySelectorAll('a')
navItems.forEach(item => {
    item.style.color = "green"
})

// this is navItems //

for (let i = 0; i < navItems.length; i++) {
    navItems[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`]
}

let addLastAnhor = document.createElement("a");
addLastAnhor.textContent = "New Tab"
addLastAnhor.href = "#"
document.querySelector("nav").appendChild(addLastAnhor)

let addFirstAnhor = document.createElement("a");
addFirstAnhor.textContent = "New Tab"
addFirstAnhor.href = "#"
document.querySelector("nav").prepend(addFirstAnhor)

//________________________________________________________
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
//________________________________________________________

//________________________________________________________
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//________________________________________________________

let newCta = document.getElementsByClassName("cta")[0];
newCta.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"]
newCta.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"]

let subHeader = document.getElementsByClassName("main-content")[0];
subHeader.getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
subHeader.getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
subHeader.getElementsByTagName('h4')[2].innerHTML = siteContent["main-content"]["services-h4"];
subHeader.getElementsByTagName('h4')[3].innerHTML = siteContent["main-content"]["product-h4"];
subHeader.getElementsByTagName('h4')[4].innerHTML = siteContent["main-content"]["vision-h4"];

let text = document.getElementsByClassName("main-content")[0];
subHeader.getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
subHeader.getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["about-content"];
subHeader.getElementsByTagName('p')[2].innerHTML = siteContent["main-content"]["services-content"];
subHeader.getElementsByTagName('p')[3].innerHTML = siteContent["main-content"]["product-content"];
subHeader.getElementsByTagName('p')[4].innerHTML = siteContent["main-content"]["vision-content"];

let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"]
