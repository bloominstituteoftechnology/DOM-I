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
    "h1": "DOM\nIs\nAwesome",
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
    "address" : "123 Way 456 Street\nSomewhere, USA",
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

let centerImg = document.getElementById("cta-img");
centerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const anchor = document.querySelectorAll("a");
anchor[0].textContent = siteContent["nav"]["nav-item-1"];
anchor[1].textContent = siteContent["nav"]["nav-item-2"];
anchor[2].textContent = siteContent["nav"]["nav-item-3"];
anchor[3].textContent = siteContent["nav"]["nav-item-4"];
anchor[4].textContent = siteContent["nav"]["nav-item-5"];
anchor[5].textContent = siteContent["nav"]["nav-item-6"];

const heading = document.querySelector("h1");
heading.textContent = siteContent["cta"]["h1"];

// const content = heading.innerHTML;
// heading.innerHTML = <br>"DOM"</br> + <br> "is" </br> + "Awesome!"

// linebreak = document.createElement("br");
// heading.appendChild(linebreak);



const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const headers = document.querySelectorAll("h4");

// headers.forEach(item => {
// return item.textContent = siteContent["main-content"]["main-content.index??"]
// });

headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["product-h4"];
headers[3].textContent = siteContent["main-content"]["services-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
headers[5].textContent = siteContent["contact"]["contact-h4"];

const par = document.querySelectorAll(".main-content p");
par[0].textContent = siteContent["main-content"]["features-content"];
par[1].textContent = siteContent["main-content"]["about-content"];
par[2].textContent = siteContent["main-content"]["product-content"];
par[3].textContent = siteContent["main-content"]["services-content"];
par[4].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelectorAll(".contact p");
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["email"];
contact[2].textContent = siteContent["contact"]["phone"];

const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

anchor.forEach (item => {
  item.style.color = "green";
});

const newNav = document.createElement('a');
newNav.setAttribute('href', '#');
newNav.textContent = 'Home';

const parentNav = document.querySelector('nav');
parentNav.prepend(newNav);

const newNav2 = document.createElement('a');
newNav2.setAttribute('href', '#');
newNav2.textContent = 'More';

const parentNav2 = document.querySelector('nav');
parentNav2.appendChild(newNav2);

newNav.style.color = "green";
newNav2.style.color = "green";

// var br = document.createElement('br');
// heading.appendChild(br);

heading.style.whiteSpace = "pre-line";
contact[0].style.whiteSpace = "pre-line";
