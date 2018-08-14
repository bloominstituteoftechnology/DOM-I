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

// Create selectors by using any of the DOM element's methods
// const newTask = document.createElement('h2');
// const newContainer = document.querySelector('section');
// newContainer.prepend(newTask);
// newTask.innerText = 'Heading #2';

let firstArray = Array.from(document.querySelectorAll("nav a"));
for (i = 0; i < firstArray.length; i++) {
  // firstArray[i].innerText = siteContent.nav[`nav-item-${i + 1}`];
  firstArray[i].innerText = siteContent["nav"]["nav-item-" + (i + 1)];
}

// Use the IDs to update src path content Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const ctaContainer = document.querySelector(".cta-text");
ctaContainer.getElementsByTagName("h1")[0].innerText = siteContent["cta"]["h1"];
ctaContainer.getElementsByTagName("button")[0].innerText =
  siteContent["cta"]["button"];

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

const textContent = document.querySelectorAll(".text-content");
textContent[0].getElementsByTagName("h4")[0].innerText =
  siteContent["main-content"]["features-h4"];
textContent[0].getElementsByTagName("p")[0].innerText =
  siteContent["main-content"]["features-content"];
textContent[1].getElementsByTagName("h4")[0].innerText =
  siteContent["main-content"]["about-h4"];
textContent[1].getElementsByTagName("p")[0].innerText =
  siteContent["main-content"]["about-content"];

const mdlImage = document.getElementById("middle-img");
mdlImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

textContent[2].getElementsByTagName("h4")[0].innerText =
  siteContent["main-content"]["services-h4"];
textContent[2].getElementsByTagName("p")[0].innerText =
  siteContent["main-content"]["services-content"];
textContent[3].getElementsByTagName("h4")[0].innerText =
  siteContent["main-content"]["product-h4"];
textContent[3].getElementsByTagName("p")[0].innerText =
  siteContent["main-content"]["product-content"];
textContent[4].getElementsByTagName("h4")[0].innerText =
  siteContent["main-content"]["vision-h4"];
textContent[4].getElementsByTagName("p")[0].innerText =
  siteContent["main-content"]["vision-content"];

const contactContent = document.querySelector(".contact");
contactContent.getElementsByTagName("h4")[0].innerText =
  siteContent["contact"]["contact-h4"];
contactContent.getElementsByTagName("p")[0].innerText =
  siteContent["contact"]["address"];
contactContent.getElementsByTagName("p")[1].innerText =
  siteContent["contact"]["phone"];
contactContent.getElementsByTagName("p")[2].innerText =
  siteContent["contact"]["email"];

const footerContent = document.querySelector("footer");
footerContent.getElementsByTagName("p")[0].innerText =
  siteContent["footer"]["copyright"];

for (i = 0; i < firstArray.length; i++) {
  firstArray[i].style.color = "green";
}

firstArray.unshift(document.createElement("a"));
firstArray[0].innerHTML = "Portfolio";
firstArray.push(document.createElement("a"));
firstArray[firstArray.length - 1].innerHTML = "Location";

// firstArray = document.getElementsByTagName("nav")[0];
// let createNewNode = name => {
//   let newNode = document.createElement("a");
//   newNode.innerHTML = name;
//   return newNode;
// };
// firstArray.prepend(createNewNode("Portfolio"));
// firstArray.append(createNewNode("Location"));
