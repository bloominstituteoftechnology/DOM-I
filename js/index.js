const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/////////////////////////////////////////////////////////////////////////////////////

const h1Text = document.querySelector("h1");
h1Text.textContent = "Dom is awesome";

const button5 = document.querySelector(".cta-text button");
button5.textContent = "Get Started";

let hero1 = document.getElementById("middle-img");
hero1.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let globeImg = document.getElementById("cta-img");

globeImg.setAttribute("src", siteContent["cta"]["img-src"]);

////////////////////////add anchors/////////////////////////////////////

const anchorTags = document.querySelectorAll("nav a");

const ancArray = Array.from(anchorTags);

ancArray[0].textContent = "Services";
ancArray[1].textContent = "Product";
ancArray[2].textContent = "Vision";
ancArray[3].textContent = "Features";
ancArray[4].textContent = "About";
ancArray[5].textContent = "Contact";

const teamAnchor = document.createElement("a");

teamAnchor.setAttribute("href", "#");

teamAnchor.textContent = "Team";

nav = document.querySelector("nav");

nav.appendChild(teamAnchor);

const projectAnchor = document.createElement("a");

projectAnchor.setAttribute("href", "#");

projectAnchor.textContent = "Projects";

nav.appendChild(projectAnchor);

///////////////////////////////pTags///////////////////////////////

pTags = document.querySelectorAll("p");

const pTagsArray = Array.from(pTags);

pTagsArray[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTagsArray[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTagsArray[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTagsArray[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTagsArray[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTagsArray[5].textContent = "123 Way 456 Street Somewhere, USA";
pTagsArray[6].textContent = "1 (888) 888-8888";
pTagsArray[7].textContent = "sales@greatidea.io";
pTagsArray[8].textContent = "Copyright Great Idea! 2018";

/////////////////////////////////Green nav/////////////////////////////

const newAncs = document.querySelectorAll("nav a");
const newAncsArray = Array.from(newAncs);

for (let i of newAncsArray) {
  i.style.color = "green";
}

//////////////random event listeners/////////////////////

const b = document.querySelector("body");

b.addEventListener("dblclick", () => {
  b.style.backgroundColor = "#A3BBAD";
  b.style.transition = "2s";
});

hero1.addEventListener("mouseover", () => {
  hero1.style.transform = "scaleX(-1)";
  hero1.style.transition = "1s";
});

hero1.addEventListener("mouseleave", () => {
  hero1.style.transform = "scaleX(1)";
  hero1.style.transition = "1s";
});
