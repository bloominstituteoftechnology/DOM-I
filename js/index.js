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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//let nav1 = document.getElementsByTagName('nav a');
//nav1.setAttribute( ,siteContent["nav"]["nav-item-1"]);
let nav1 = document.querySelectorAll("nav a");
nav1.forEach(( currentValue, index) => {
  currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`];
  });
let nav2 = document.querySelectorAll("nav a")
nav1.forEach((element) => {
element.style.color = 'green'
});

let newContent = document.createElement("a");
newContent.innerHTML = 'Now';
document.querySelector("nav").appendChild(newContent);
let newContent2 = document.createElement("a");
newContent2.textContent = 'Help';
document.querySelector("nav").appendChild(newContent2)

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

let TYon = document.querySelector('button');
TYon.textContent = siteContent["cta"]["button"];

let firstImage = document.getElementById("cta-img");
firstImage.src= "img/header-img.png";

let secondImage = document.querySelector(".middle-img");
secondImage.src= "img/mid-page-accent.jpg";

let mainHeaders = document.querySelectorAll(".main-content h4");
let mainText = document.querySelectorAll(".main-content p");
let sections = ['features', 'about', 'services', 'product', 'vision'];
for(let i=0; i<mainHeaders.length; i++){
  mainHeaders[i].textContent = sections[i];
  mainText[i].textContent = siteContent["main-content"][`${sections[i]}-content`];
}

//let Features = document.querySelector(".main-content .top-content");
//Features.innerHTML = "<h4>Features<h4><br><p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p><h4>About<h4><br><p>About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.</p>";
 //Features.innerHTML = "<h4>Feature</h4><h4>About<h4>"



 //let para = document.querySelector(".main-content .bottom-content p");
 //para.innerHTML = "<p>content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.</p>"

 let Tacts = document.querySelector('.contact');
Tacts.innerHTML = '<h4>Contact</h4><p>123 Way 456 Street<br>Somewhere, USA</p><p>1 (888) 888-8888</p> <p>sales@greatidea.io</p>';

let Foot = document.querySelector('footer');
Foot.innerHTML = 'Copyright Great Idea! 2018';