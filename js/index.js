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


//nav-bar
let nav = document.querySelector("nav").children;
const aLink = document.createElement("a");
const bLink = document.createElement("a");


document.querySelector("nav").prepend(bLink);


document.querySelector("nav").appendChild(aLink);

siteContent.nav["nav-item-0"] ="Home";
siteContent.nav["nav-item-7"] ="Webring";


for (let index = 0; index < nav.length; index++) {
  nav[index].innerHTML = siteContent.nav["nav-item-"+(index)]
  nav[index].style.color = "green";

}



//cta text
let ctaText = document.querySelector(".cta-text").children;

ctaText[0].innerText = siteContent.cta.h1;
ctaText[1].innerText = siteContent.cta.button;

//cta img

let ctaIMG = document.querySelector("#cta-img");
ctaIMG.setAttribute('src', siteContent.cta["img-src"]);


//text-content (main-content)
const contentTitles = ["features","about","services","product","vision"];


let textContent = document.querySelectorAll(".text-content");

for (let index = 0; index < textContent.length; index++) {
  textContent[index].children[0].innerText =siteContent["main-content"][contentTitles[index] + "-h4"]

  textContent[index].children[1].innerText =siteContent["main-content"][contentTitles[index] + "-content"]

}


//Main-content image
document.querySelector("#middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//contact

let contact = document.querySelector(".contact").children;

contact[0].innerText=siteContent.contact["contact-h4"];
contact[1].innerText=siteContent.contact["address"];
contact[2].innerText=siteContent.contact["phone"];
contact[3].innerText=siteContent.contact["email"];

//footer

document.querySelector("footer p").innerText = siteContent.footer.copyright;