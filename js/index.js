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

//images
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg= document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//create selectors: 
const allNavItems = document.querySelectorAll('a');
const cta = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");
const h1 = document.querySelector(".cta-text h1");
const button = document.querySelector(".cta-text button");
const textContentList = document.querySelectorAll(".text-content");
const contactText = document.querySelector(".contact")
const footerText = document.querySelector("footer")


//fill in nav:
allNavItems[0].innerHTML = siteContent["nav"]["nav-item-1"];
allNavItems[1].innerHTML = siteContent["nav"]["nav-item-2"];
allNavItems[2].innerHTML = siteContent["nav"]["nav-item-3"];
allNavItems[3].innerHTML = siteContent["nav"]["nav-item-4"];
allNavItems[4].innerHTML = siteContent["nav"]["nav-item-5"];
allNavItems[5].innerHTML = siteContent["nav"]["nav-item-6"];

h1.innerHTML = "DOM <br> is <br> awesome";
button.innerHTML = siteContent["cta"]["button"];

//fill in h4 and p content:
textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];

textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];

textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

contactText.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactText.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactText.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactText.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];

footerText.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

//styles: 
allNavItems[0].style.color = "green";
allNavItems[1].style.color = "green";
allNavItems[2].style.color = "green";
allNavItems[3].style.color = "green";
allNavItems[4].style.color = "green";
allNavItems[5].style.color = "green";



