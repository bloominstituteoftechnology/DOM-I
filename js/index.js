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
console.log("sdfa;kfjad;ljfl");
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute('src', siteContent["nav"]["img-src"])



let nav = document.querySelector("nav");
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-1"];
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-2"];
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-3"];
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-4"];
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-5"];
nav.getElementsByTagName("a").innerHTML = siteContent["nav"]["nav-item-6"];
// Change the color of the navigation text to be green.
nav.style.color= "green";


//class cta-----cta-text
const ctaText = document.getElementsByClassName("cta-text");
ctaText.getElementsByTagName("h1").innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button").innerHTML = siteContent["cta"]["button"];
//class cta----id=cta.img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

//class main-content----top-content----text-content
const textContent = document.getElementsByClassName("text-content");
textContent.getElementsByTagName("h4").innerHTML = siteContent["main-content"]["features-h4"];
textContent.getElementsByTagName("p").innerHTML = siteContent["main-content"]["features-content"];
textContent.getElementsByTagName("h4").innerHTML = siteContent["main-content"]["about-h4"];
textContent.getElementsByTagName("p").innerHTML = siteContent["main-content"]["about-content"];
//class main-content----bottom-content----text-content
textContent.getElementsByTagName("h4").innerHTML = siteContent["main-content"][ "services-h4"];
textContent.getElementsByTagName("p").innerHTML = siteContent["main-content"]["services-content"];
textContent.getElementsByTagName("h4").innerHTML = siteContent["main-content"]["product-h4"];
textContent.getElementsByTagName("p").innerHTML = siteContent["main-content"]["product-content"];
textContent.getElementsByTagName("h4").innerHTML = siteContent["main-content"]["vision-h4"];
textContent.getElementsByTagName("p").innerHTML = siteContent["main-content"]["vision-content"];

//class main-content---id middle img
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["middle-content"]["middle-img-src"])

//class=contact
const contact = document.getElementsByClassName("contact");
contact.getElementsByTagName("h4").innerHTML =siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p").innerHTML =siteContent["contact"]["address"];
contact.getElementsByTagName("p").innerHTML =siteContent["contact"]["phone"];
contact.getElementsByTagName("p").innerHTML =siteContent["contact"]["email"];

//footer
const footer = document.querySelector("footer");
footer.getElementsByTagName("p").innerHTML = siteContent["footer"]["copyright"];


// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//parentElement.appendChild(childElement)



