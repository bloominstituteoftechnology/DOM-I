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
logo.setAttribute('src', 'https://raw.githubusercontent.com/maribelcuales/DOM-I/master/img/logo.png')

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', "img/header-img.png");

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', "img/mid-page-accent.jpg")


//Nav Header
let navItem1 = document.querySelector("a")
navItem1.innerHTML = siteContent["nav"]["nav-item-1"]

let navItem2 = document.getElementsByTagName("a");
console.log(navItem2[1].innerHTML);
navItem2[1].innerHTML = siteContent["nav"]["nav-item-2"]

let navItem3 = document.getElementsByTagName("a");
console.log(navItem2[2].innerHTML);
navItem2[2].innerHTML = siteContent["nav"]["nav-item-3"]

let navItem4 = document.getElementsByTagName("a");
console.log(navItem2[3].innerHTML);
navItem2[3].innerHTML = siteContent["nav"]["nav-item-4"]

let navItem5 = document.getElementsByTagName("a");
console.log(navItem2[4].innerHTML);
navItem2[4].innerHTML = siteContent["nav"]["nav-item-5"]

let navItem6 = document.getElementsByTagName("a");
console.log(navItem2[5].innerHTML);
navItem2[5].innerHTML = siteContent["nav"]["nav-item-6"]

//change nav color to green 
navItem1.style.color = "green";
navItem2[1].style.color = "green";
navItem3[2].style.color = "green";
navItem4[3].style.color = "green";
navItem5[4].style.color = "green";
navItem6[5].style.color = "green";


//cta
let ctaText = document.querySelector("h1");
console.log(ctaText.innerHTML);
ctaText.innerHTML = siteContent["cta"]["h1"]

ctaText.style.flexDirection = 'column' ;

let ctaButton = document.getElementsByTagName("button")[0];
ctaButton.innerHTML = "Get Started";


//Main Content 

//top-content 
let topFeatures = document.getElementsByTagName("h4")[0];
topFeatures.innerHTML = siteContent ["main-content"]["features-h4"];

let featureContent = document.getElementsByTagName("p")[0];
featureContent.innerHTML = siteContent ["main-content"]["features-content"];

let about = document.getElementsByTagName("h4")[1];
about.innerHTML = siteContent ["main-content"]["about-h4"];

let aboutContent = document.getElementsByTagName("p")[1];
aboutContent.innerHTML = siteContent ["main-content"]["about-content"];


//bottom-content
let services = document.getElementsByTagName("h4")[2];
services.innerHTML = siteContent ["main-content"]["services-h4"];

let servicesContent = document.getElementsByTagName("p")[2];
servicesContent.innerHTML = siteContent ["main-content"]["services-content"];

let product = document.getElementsByTagName("h4")[3];
product.innerHTML = siteContent ["main-content"]["product-h4"];

let productContent = document.getElementsByTagName("p")[3];
productContent.innerHTML = siteContent ["main-content"]["product-content"];

let vision = document.getElementsByTagName("h4")[4];
vision.innerHTML = siteContent ["main-content"]["vision-h4"];

let visionContent = document.getElementsByTagName("p")[4];
visionContent.innerHTML = siteContent ["main-content"]["vision-content"];

//contact 
let contactInfo  = document.getElementsByTagName("h4")[5];
contactInfo.innerHTML = siteContent ["contact"]["contact-h4"];

let addressInfo = document.getElementsByTagName("p")[5];
addressInfo.innerHTML = siteContent ["contact"]["address"];

let phoneInfo = document.getElementsByTagName("p")[6];
phoneInfo.innerHTML = siteContent ["contact"]["phone"];

let emailInfo = document.getElementsByTagName("p")[7];
emailInfo.innerHTML = siteContent ["contact"]["email"];

//footer 
let footerInfo = document.getElementsByTagName("p")[8];
footerInfo.innerHTML = siteContent["footer"]["copyright"]; 