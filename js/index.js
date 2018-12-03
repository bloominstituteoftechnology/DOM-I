const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM<br> Is<br> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

const newSiteContent = {
  nav: {
    "nav-item-1": "Pull Requests",
    "nav-item-2": "Projects",
    "nav-item-3": "Insights",
    "nav-item-4": "Wiki",
    "nav-item-5": "Code",
    "nav-item-6": "Settings",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "GITHUB<br> Is<br> Awesome",
    button: "Git Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "GIT Features",
    "features-content":
      "GIT Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "GIT About",
    "about-content":
      "GIT About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "GIT Services",
    "services-content":
      "GIT Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "GIT Product",
    "product-content":
      "GIT Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "GIT Vision",
    "vision-content":
      "GIT Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "GIT Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "GITsales@greatidea.io"
  },
  footer: {
    copyright: "Copyright GIT Great Idea! 2018"
  }
};
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Header Title Text
let h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = siteContent.cta.h1;

// Call to Action Button
let button = document.getElementsByTagName("button");
button[0].textContent = siteContent.cta.button;

// Paragraph Titles
let h4 = document.getElementsByTagName("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

// Code snippet image
let snippet = document.getElementById("cta-img");
snippet.setAttribute("src", siteContent["cta"]["img-src"]);

// Header Links
let headerLink1 = document.querySelectorAll("a");

for (let i = 0; i < headerLink1.length; i++) {
  headerLink1[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// Changing color to GREEN
headerLink1.forEach(a => {
  a.style.color = "green";
});

// Paragraph Text
let featuresPTags = document.querySelectorAll("p");
let contentArray = [
  siteContent["main-content"]["features-content"],
  siteContent["main-content"]["about-content"],
  siteContent["main-content"]["services-content"],
  siteContent["main-content"]["product-content"],
  siteContent["main-content"]["vision-content"]
];
for (let i = 0; i < featuresPTags.length; i++) {
  featuresPTags[i].textContent = contentArray[i];
}

// Middle Image
let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact Section
let contact = document.querySelector(".contact").querySelectorAll("p");
let contacth4 = document.querySelector(".contact").querySelectorAll("h4");
contacth4[0].textContent = siteContent.contact["contact-h4"];
contact[0].textContent = siteContent.contact.address;
contact[1].textContent = siteContent.contact.phone;
contact[2].textContent = siteContent.contact.email;

// Footer Section
let footerText = document.querySelector("footer").querySelector("p");
footerText.innerText = siteContent.footer.copyright;

let nav = document.querySelector("nav");

// Append Child to NAV
let aNode = document.createElement("a");
aNode.style.color = "green";
let textNode = document.createTextNode("Portfolio");

// Prepend Child to NAV
let aNode1 = document.createElement("a");
aNode1.style.color = "green";
let textNode1 = document.createTextNode("About Me");

aNode.appendChild(textNode); // <a>Portfolio</a>
aNode1.prepend(textNode1);
nav.appendChild(aNode); // <nav> ... <a>Portfolio</a> </nav>
nav.prepend(aNode1);

// STRETCH GOALS
const handleClick = () => {
  h1[0].innerHTML = newSiteContent.cta.h1;
  button[0].textContent = newSiteContent.cta.button;

  h4[0].textContent = newSiteContent["main-content"]["features-h4"];
  h4[1].textContent = newSiteContent["main-content"]["about-h4"];
  h4[2].textContent = newSiteContent["main-content"]["services-h4"];
  h4[3].textContent = newSiteContent["main-content"]["product-h4"];
  h4[4].textContent = newSiteContent["main-content"]["vision-h4"];

  headerLink1[0].textContent = newSiteContent.nav["nav-item-1"];
  headerLink1[1].textContent = newSiteContent.nav["nav-item-2"];
  headerLink1[2].textContent = newSiteContent.nav["nav-item-3"];
  headerLink1[3].textContent = newSiteContent.nav["nav-item-4"];
  headerLink1[4].textContent = newSiteContent.nav["nav-item-5"];
  headerLink1[5].textContent = newSiteContent.nav["nav-item-6"];

  let newContentArray = [
    newSiteContent["main-content"]["features-content"],
    newSiteContent["main-content"]["about-content"],
    newSiteContent["main-content"]["services-content"],
    newSiteContent["main-content"]["product-content"],
    newSiteContent["main-content"]["vision-content"]
  ];

  for (let i = 0; i < featuresPTags.length; i++) {
    featuresPTags[i].textContent = newContentArray[i];
  }

  contacth4[0].textContent = newSiteContent.contact["contact-h4"];
  contact[0].textContent = newSiteContent.contact.address;
  contact[1].textContent = newSiteContent.contact.phone;
  contact[2].textContent = newSiteContent.contact.email;

  footerText.innerText = newSiteContent.footer.copyright;
};
