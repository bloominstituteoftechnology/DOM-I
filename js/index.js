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
logo.setAttribute('src', `img/logo.png`);


let logoCta = document.getElementById("cta-img");
logoCta.setAttribute('src', siteContent["cta"]["img-src"]);
logoCta.setAttribute('src', `img/header-img.png`);

let mainContentimg = document.getElementById("middle-img");
mainContentimg.setAttribute(`src`, siteContent["middle-img"["img-src"]]);
mainContentimg.setAttribute('src', `img/mid-page-accent.jpg`);



let nav = document.getElementById(`nav`);

let cta = document.getElementById(`cta`);

let mainNav =document.querySelectorAll("a");
for (let i=0; i<mainNav.length; i++){
  mainNav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}
let ctaHeader= document.querySelector("h1");
ctaHeader.innerText = siteContent["cta"]["h1"]


let button =document.querySelector("button");
button.innerText = siteContent["cta"]["button"]

let h4 =document.querySelectorAll("h4");
h4[0].innerText= siteContent["main-content"]["features-h4"];
h4[1].innerText= siteContent["main-content"]["about-h4"];
h4[2].innerText= siteContent["main-content"]["services-h4"];
h4[3].innerText= siteContent["main-content"]["product-h4"];
h4[4].innerText= siteContent["main-content"]["vision-h4"];

h4[5].innerText = siteContent["contact"]["contact-h4"];

let paragraph =document.querySelectorAll("p");
paragraph[0].innerText= siteContent["main-content"]["features-content"];
paragraph[1].innerText= siteContent["main-content"]["about-content"];
paragraph[2].innerText= siteContent["main-content"]["services-content"];
paragraph[3].innerText= siteContent["main-content"]["product-content"];
paragraph[4].innerText= siteContent["main-content"]["vision-content"];


paragraph[5].innerText= siteContent["contact"]["address"];
paragraph[6].innerText= siteContent["contact"]["phone"];
paragraph[7].innerText= siteContent["contact"]["email"];

paragraph[8].innerText= siteContent["footer"]["copyright"];

mainNav.forEach((link,i) => {
  link.style.color = "green";
})

mainNav = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
mainNav.prepend(createNewNode("Lilly"));
mainNav.append(createNewNode("Brutus"));
paragraph.display(flex);

mainNav.style.display(flex);