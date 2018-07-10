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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//EVENT 1
logo.addEventListener('click', (event) => {
  event.target.setAttribute('src', 'img/logo_lit.png');
});

const navBar = document.querySelector("nav");

const newNavItem2 = document.createElement("a");
newNavItem2.setAttribute('href', '#');
const newNavItem2Text = document.createTextNode("Bad Ideas");
newNavItem2.appendChild(newNavItem2Text);
navBar.appendChild(newNavItem2);

const newNavItem1 = document.createElement("a");
newNavItem1.setAttribute('href', '#');
const newNavItem1Text = document.createTextNode("Good Ideas");
newNavItem1.prepend(newNavItem1Text);
navBar.prepend(newNavItem1);

const nav = document.querySelectorAll("a");
for( let i = 1; i < nav.length - 1; i++) {
  nav[i].innerText = siteContent["nav"][`nav-item-${i}`];
}

nav.forEach(i => i.style.color = "green");

//EVENT 2
nav.forEach(i => i.addEventListener('click', (event) => {
  event.target.style.color = "blue";
}));

const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerText = siteContent["cta"]["h1"];

//EVENT 3
ctaHeader.addEventListener('mouseover', (event) => {
  event.target.innerText = 'CS12 Is Awesomer!';
});
//EVENT 4
ctaHeader.addEventListener('mouseout', (event) => {
  event.target.innerText = siteContent["cta"]["h1"];
});

const ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//EVENT 5
ctaImg.addEventListener('click', (event) => {
  event.target.style.animation = "rotate 5s";
  event.target.style.webkitAnimation = "rotate 5s";
});

const topContentHeader = document.querySelectorAll(".top-content h4");
topContentHeader[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeader[1].innerText = siteContent["main-content"]["about-h4"];

const topContent = document.querySelectorAll(".top-content p");
topContent[0].innerText = siteContent["main-content"]["features-content"];
topContent[1].innerText = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const bottomContentHeader = document.querySelectorAll(".bottom-content h4");
bottomContentHeader[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].innerText = siteContent["main-content"]["vision-h4"];

const bottomContent = document.querySelectorAll(".bottom-content p");
bottomContent[0].innerText = siteContent["main-content"]["services-content"];
bottomContent[1].innerText = siteContent["main-content"]["product-content"];
bottomContent[2].innerText = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.innerText = siteContent["contact"]["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerText = siteContent["contact"]["address"];
contactContent[1].innerText = siteContent["contact"]["phone"];
contactContent[2].innerText = siteContent["contact"]["email"];

//EVENT
contactContent.forEach(i => i.addEventListener('mouseover', (event) => {
  event.target.style.opacity = 0;
}));
//EVENT
contactContent.forEach(i => i.addEventListener('mouseout', (event) => {
  event.target.style.opacity = 1;
}));

const footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"];