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

const nav = document.querySelector("nav");
const navBar = document.querySelectorAll("a");
const allImgs = document.querySelectorAll("img");

const allH1 = document.querySelector("h1");
const button = document.querySelector("button");

const allh4 = document.querySelectorAll("h4");
const allPara = document.querySelectorAll("p");

allh4.forEach((h) => {
	h.style.color = "green";
});

navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

navBar.forEach((l) => {
	l.style.color = "green";
});

const newLink1 = document.createElement("a");
newLink1.textContent = "IDK";
newLink1.href = "#";
nav.appendChild(newLink1);

const newLink2 = document.createElement("a");
newLink2.textContent = "Link2";
newLink2.href = "#";
nav.prepend(newLink2);

allImgs[1].setAttribute("src", siteContent["cta"]["img-src"]);
allImgs[2].setAttribute("src", siteContent["main-content"]["middle-img-src"]);

allH1.innerHTML = "Dom <br>Is <br>Awesome!";
button.textContent = siteContent["cta"]["button"];
button.addEventListener("click", (event) => {
	button.style.backgroundColor = "red";
});

allh4[0].textContent = siteContent["main-content"]["features-h4"];
allPara[0].textContent = siteContent["main-content"]["features-content"];

allh4[1].textContent = siteContent["main-content"]["about-h4"];
allPara[1].textContent = siteContent["main-content"]["about-content"];

allh4[2].textContent = siteContent["main-content"]["services-h4"];
allPara[2].textContent = siteContent["main-content"]["services-content"];

allh4[3].textContent = siteContent["main-content"]["features-h4"];
allPara[3].textContent = siteContent["main-content"]["features-content"];

allh4[4].textContent = siteContent["main-content"]["vision-h4"];
allPara[4].textContent = siteContent["main-content"]["vision-content"];

allh4[5].textContent = siteContent["contact"]["contact-h4"];
allPara[5].textContent = siteContent["contact"]["address"];
allPara[6].textContent = siteContent["contact"]["phone"];
allPara[7].textContent = siteContent["contact"]["email"];

allPara[8].textContent = siteContent["footer"]["copyright"];