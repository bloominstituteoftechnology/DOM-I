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


//Nav 
const navLinks = document.querySelectorAll('nav a')
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


//h1 --- button
const headerH1 = document.querySelector(".cta-text h1").innerHTML = "DOM <br> Is <br> Awesome";
const button = document.querySelector(".cta-text button").innerHTML = "Get Started";


//img
const circleImg = document.querySelector("#cta-img").src = "img/header-img.png";
const rectangleImg = document.querySelector(".middle-img").src = "img/mid-page-accent.jpg";


//feature and about
const titleH4 = document.querySelectorAll(".top-content h4");
const titleParagraph = document.querySelectorAll(".top-content p");


//top-content
titleH4[0].textContent = "Features"
titleParagraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

titleH4[1].textContent = "About"
titleParagraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//bottom-content
bottomH4 = document.querySelectorAll(".bottom-content h4")
bottomParagraph = document.querySelectorAll(".bottom-content p")

bottomH4[0].textContent = "Services"
bottomParagraph[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomH4[1].textContent = "Product"
bottomParagraph[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomH4[2].textContent = "Vision"
bottomParagraph[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//contact
contactList = document.querySelector(".contact h4").innerHTML = "Contact"
contactListSentence = document.querySelectorAll(".contact p")

contactListSentence[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
contactListSentence[1].textContent = siteContent["contact"]["phone"]
contactListSentence[2].textContent = siteContent["contact"]["email"]


//footer aka copyright
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"]


//append and prepend ITEMS
const nav = document.querySelector('.container nav')
const newNav = document.createElement('a')
newNav.textContent = 'Winnie'
newNav.href = "#"
nav.appendChild(newNav)

const newerNav = document.createElement('a') 
newerNav.textContent = 'Casper the Ghost'
newerNav.href = '#'
nav.prepend(newerNav)


//Navigation Colors
navLinks.forEach((element) => {
element.style.color = 'orange'
})

newerNav.style.color = 'green'
newNav.style.color = 'green'


//Paragraph/Header Style
titleH4[0].style.color = 'teal'
titleH4[1].style.color = 'teal'
titleParagraph[0].style.color = 'purple'
titleParagraph[1].style.color = 'purple'
titleParagraph[0].style.fontStyle = 'italic'
titleParagraph[1].style.fontStyle = 'italic'

//Paragraph Color 
const paragraphColor = document.querySelectorAll(".main-content p")

paragraphColor.forEach((color) => {
color.style.color = 'purple'
})

//Header Color Another Way
const h4Color = document.querySelectorAll("body h4")

h4Color.forEach((headercolor) => {
  headercolor.style.color = 'brown'
})

//Paragraph Color Another Way
allParagraphColors = document.querySelectorAll("body p")

allParagraphColors.forEach((pcolor) => {
  pcolor.style.color = 'orange'
})