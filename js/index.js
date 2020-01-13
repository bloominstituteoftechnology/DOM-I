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

const navigation = document.querySelectorAll("nav a");
navigation[0].textContent = "Services";
navigation[1].textContent = "Product";
navigation[2].textContent = "Vision";
navigation[3].textContent = "Features";
navigation[4].textContent = "About";
navigation[5].textContent = "Contact";

const newAnchorFirst = document.createElement('a');
newAnchorFirst.textContent = 'Reviews';
newAnchorFirst.style.color = "green";
document.querySelector('nav').prepend(newAnchorFirst);

const newAnchorLast = document.createElement('a');
newAnchorLast.textContent = 'More';
newAnchorLast.style.color = "green";
document.querySelector('nav').appendChild(newAnchorLast);

navigation.forEach(link => {
  link.style.color = "green";
});

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta['h1'];

const getStartedButton = document.querySelector('button');
getStartedButton.textContent = siteContent.cta['button'];

const img = document.querySelector("#cta-img");
img.src = siteContent.cta['img-src'];

const middleText = document.querySelectorAll(".main-content h4");
middleText[0].innerHTML = siteContent["main-content"]["features-h4"];
middleText[1].innerHTML = siteContent["main-content"]["about-h4"];
middleText[2].innerHTML = siteContent["main-content"]["services-h4"];
middleText[3].innerHTML = siteContent["main-content"]["product-h4"];
middleText[4].innerHTML = siteContent["main-content"]["vision-h4"];

const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const middleP = document.querySelectorAll(".main-content p");
middleP[0].innerHTML = siteContent["main-content"]["features-content"];
middleP[1].innerHTML = siteContent["main-content"]["about-content"];
middleP[2].innerHTML = siteContent["main-content"]["services-content"];
middleP[3].innerHTML = siteContent["main-content"]["product-content"];
middleP[4].innerHTML = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];
const contactValue = document.querySelectorAll(".contact p");
contactValue[0].innerHTML = siteContent.contact["address"];
contactValue[1].innerHTML = siteContent.contact["phone"];
contactValue[2].innerHTML = siteContent.contact["email"];

const footer = document.querySelector("footer p");
footer.innerHTML = siteContent.footer["copyright"];