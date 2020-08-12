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

// Nav
let services = document.getElementsByTagName("a")[0];
services.innerText = siteContent["nav"]["nav-item-1"];
services.style.color = "green";

// Prepend
services.prepend("Home ");

let product = document.getElementsByTagName("a")[1];
product.innerText = siteContent["nav"]["nav-item-2"];
product.style.color = "blue";

let vision = document.getElementsByTagName("a")[2];
vision.innerText = siteContent["nav"]["nav-item-3"];
vision.style.color = "pink";

let features = document.getElementsByTagName("a")[3];
features.innerText = siteContent["nav"]["nav-item-4"];
features.style.color = "red";

let about = document.getElementsByTagName("a")[4];
about.innerText = siteContent["nav"]["nav-item-5"];
about.style.color = "purple";

let contact = document.getElementsByTagName("a")[5];
contact.innerText = siteContent["nav"]["nav-item-6"];
contact.style.color = "teal";

//Append
contact.append(" End");

let h11 = document.getElementsByTagName("h1")[0];
h11.innerText = siteContent["cta"]["h1"];

let buttonA = document.getElementsByTagName("button")[0];
buttonA.innerText = siteContent["cta"]["button"];

let cImg = document.getElementById("cta-img");
cImg.setAttribute("src", siteContent["cta"]["img-src"]);

let featuresH4 = document.getElementsByTagName("h4")[0];
featuresH4.innerText = siteContent["main-content"]["features-h4"];

let featuresCont = document.getElementsByTagName("p")[0];
featuresCont.innerText = siteContent["main-content"]["features-content"];

let bout4 = document.getElementsByTagName("h4")[1];
bout4.innerText = siteContent["main-content"]["about-h4"];

let abContent = document.getElementsByTagName("p")[1];
abContent.innerText = siteContent["main-content"]["about-content"];

let servicesH4 = document.getElementsByTagName("h4")[2];
servicesH4.innerText = siteContent["main-content"]["services-h4"];

let serviceContent = document.getElementsByTagName("p")[2];
serviceContent.innerText = siteContent["main-content"]["services-content"];

let prodH4 = document.getElementsByTagName("h4")[3];
prodH4.innerText = siteContent["main-content"]["product-h4"];

let vizion = document.getElementsByTagName("p")[3];
vizion.innerText = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contact_H4 = document.getElementsByTagName("h4")[5];
contact_H4.innerText = siteContent["contact"]["contact-h4"];

let address = document.getElementsByTagName("p")[5];
address.innerText = siteContent["contact"]["address"];

let phone = document.getElementsByTagName("p")[6];
phone.innerText = siteContent["contact"]["phone"];

let email = document.getElementsByTagName("p")[7];
email.innerText = siteContent["contact"]["email"];

let footer = document.getElementsByTagName("p")[8];
footer.innerText = siteContent["footer"]["copyright"];
