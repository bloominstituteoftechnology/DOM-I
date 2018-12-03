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
    h1: "DOM Is Awesome",
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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Header Title Text
let h1 = document.getElementsByTagName("h1");
h1[0].textContent = siteContent.cta.h1;

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
headerLink1[0].textContent = siteContent.nav["nav-item-1"];
headerLink1[1].textContent = siteContent.nav["nav-item-2"];
headerLink1[2].textContent = siteContent.nav["nav-item-3"];
headerLink1[3].textContent = siteContent.nav["nav-item-4"];
headerLink1[4].textContent = siteContent.nav["nav-item-5"];
headerLink1[5].textContent = siteContent.nav["nav-item-6"];

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
