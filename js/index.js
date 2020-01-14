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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav code starts here 
let links = document.querySelectorAll('a')
navLinks = Array.from(links)

for (let i = 0; i < navLinks.length; i++) {
  navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
  navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
  navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
  navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
  navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
  navLinks[5].textContent = siteContent["nav"]["nav-item-6"]
}// nav codes ends here

// Top contents heading and middle heading code starts here
let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1

let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button

let topImage = document.querySelector("#cta-img");
topImage.setAttribute('src', siteContent["cta"]["img-src"]);

let header = document.querySelectorAll('h4')
let textsDiv = document.querySelectorAll(".text-content")
let hFour = Array.from(header)
let textContainer = Array.from(textsDiv)
for (let i = 0; i < hFour.length; i++) {
  hFour[0].textContent = siteContent["main-content"]["features-h4"];
  hFour[1].textContent = siteContent["main-content"]["about-h4"];
  hFour[2].textContent = siteContent["main-content"]["services-h4"];
  hFour[3].textContent = siteContent["main-content"]["product-h4"];
  hFour[4].textContent = siteContent["main-content"]["vision-h4"];
  hFour[5].textContent = siteContent["contact"]["contact-h4"]; // This is footer code
} // Top contents  heading and middle code ends here


// Top content and middle content paragraph code starts here
let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let paragraph = document.querySelectorAll('p')
let allParagraph = Array.from(paragraph)
console.log(allParagraph)
for (let i = 0; i < allParagraph.length; i++) {
  allParagraph[0].textContent = siteContent["main-content"]["features-content"];
  allParagraph[1].textContent = siteContent["main-content"]["about-content"];
  allParagraph[2].textContent = siteContent["main-content"]["services-content"];
  allParagraph[3].textContent = siteContent["main-content"]["product-content"];
  allParagraph[4].textContent = siteContent["main-content"]["vision-content"];
  allParagraph[5].textContent = siteContent.contact.address;
  allParagraph[6].textContent = siteContent.contact.phone;
  allParagraph[7].textContent = siteContent.contact.email;
  allParagraph[8].textContent = siteContent.footer.copyright;
} //Top content and middle content paragraph ends here





