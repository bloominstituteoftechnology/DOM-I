const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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
let logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png");

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png")

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

//Navigation
let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";
let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";
let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";
let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";
let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About"
let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

//CTA
let h1Message = document.getElementsByTagName("h1")[0];
h1Message.innerHTML = "DOM Is Awesome";

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

//Main content 
let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";
let featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";
let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";
let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"
let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";
let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//Contact

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";
let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

//footer
let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"

//Changing color of nav links to green
let navigation = document.querySelectorAll("a");
let i;
for (i = 0; i < navigation.length; i++) {
  navigation[i].style.color = "green";
}

// Creating new elements
let nav = document.getElementsByTagName('nav')[0];

let dylanThomas = document.createElement('a');
nav.appendChild(dylanThomas);
dylanThomas.innerHTML = "TomCat";

let robertLazarus = document.createElement('a');
nav.prepend(robertLazarus);
robertLazarus.innerHTML = "BobCat";

// Bit o' fun
function haveACat() {
  headerImg.setAttribute('src', 'https://scontent.fsea1-1.fna.fbcdn.net/v/t1.0-9/20799352_10154812374828085_1065182825737514534_n.jpg?_nc_cat=0&oh=ce3c571a9536d2c9554653d3bc4ca7b4&oe=5B593AED')
  h1Message.innerHTML = "Cats are awesome";
  button.innerHTML = "No, really";
}

function haveAnotherCat () {
  headerImg.setAttribute('src', 'https://scontent.fsea1-1.fna.fbcdn.net/v/t1.0-9/20840672_10154812374933085_4615810351128590741_n.jpg?_nc_cat=0&oh=44fd469b861848217341018995edcd9f&oe=5B60B44F')
  h1Message.innerHTML = "Cats are awesome";
  button.innerHTML = "No, really";
}
dylanThomas.addEventListener('mouseover', haveACat)
robertLazarus.addEventListener('mouseover', haveAnotherCat);

// Back to seriousness
function reality() {
  headerImg.setAttribute('src', 'img/header-img.png');
  h1Message.innerHTML = "DOM Is awesome";
  button.innerHTML = "Get started";
}
dylanThomas.addEventListener('mouseout', reality);
robertLazarus.addEventListener('mouseout', reality);
