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
logo.setAttribute('src', siteContent ["nav"]["img-src"])

const navLinks = document.querySelectorAll("nav a");
let count = 1
navLinks.forEach(item => {
  item.textContent = siteContent.nav [`nav-item-${count.toString()}`];
  count++;
});

const awesomeDom = document.querySelector("h1");
awesomeDom.textContent = siteContent ["cta"]["h1"]
awesomeDom.innerHTML = "DOM <br> IS <br> AWESOME"

const button = document.querySelector("button");
button.textContent = siteContent ["cta"]["button"];

const snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent ["cta"]["img-src"]);

const features1 = document.querySelector(".text-content h4");
features1.textContent = siteContent ["main-content"]["features-h4"];

const features2 = document.querySelector(".text-content p");
features2.textContent = siteContent ["main-content"]["features-content"];

const about1 = document.querySelector(".text-content h4");
features1.textContent = siteContent ["main-content"]["about-h4"];

const about2 = document.querySelector(".text-content p");
about2.textContent = siteContent ["main-content"]["about-content"];

const snippetAcross = document.getElementById("middle-img");
snippetAcross.setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

const contactTitle = document.querySelector(".contact h4")
 contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll('.contact p');
// declaring contactinfo which is going to take all the p tags with a  class of contact and put it into a nodelist which for now think of it as a group
let contact = Array.from(contactInfo)
// this turns the nodelist into an array so were declaring a new variable and making an array from the nodelist which in this case is contactInfo
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];


const Links = document.querySelectorAll("a");

const LinksArray = Array.from(Links);

for(i=0;i<LinksArray.length;i++){
  LinksArray[i].style.color = "green"
}