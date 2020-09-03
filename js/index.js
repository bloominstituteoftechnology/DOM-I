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
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let midImg = document.querySelector(".middle-img");
midImg.src =  siteContent["main-content"]["middle-img-src"];



// let navI = document.getElementById("nav-item-1");
// navI.textContent = siteContent["nav"]["nav-item-1"];
// let x = document.getElementsByTagName("nav");
let x = document.querySelectorAll("nav > a");
/// /Almost professinoal way of it
// let i ;
// for (i = 0; i < x.length; i++) {
//   let g = i+1;
//   x[i].textContent = siteContent["nav"]["nav-item-"+g];
// } 
// The interview question answer for applying a json object to a nav link
x.forEach(function(e,y){
  y = y+ 1;
   e.textContent = siteContent["nav"]["nav-item-"+y];
   e.style.color = "green";
});

// Now add the two new items to the nav ssystem

const parent = document.querySelector("nav");
const child = document.querySelector("nav");
const newContent  = document.createElement("a");
newContent.textContent = "New Stuff";
newContent.style.color = "green";
newContent.href = "#";
const newContentChild  = document.createElement("a");
newContentChild.textContent = "Old Stuff";
newContentChild.style.color = "green";
newContentChild.href = "#";
// Places at the begginning
parent.prepend(newContent);
// Places at the end
child.appendChild(newContentChild);



// Stretch

let stretchit = {"button":"", "h1":"",
    "h4s":{
      "h4-1":"",
      "h4-2":""
    }
     };
stretchit["h1"] = document.querySelector("h1");
stretchit["h1"].textContent = "Dom is Awesome!";

stretchit["button"] = document.querySelector("button");
stretchit["button"].textContent = "Get Started"; 

stretchit["h4s"] = document.querySelectorAll(".top-content > .text-content");
stretchit["h4s"]["h4-1"] = document.querySelector("h4");
stretchit["h4s"]["h4-1"].textContent = "FEATURES";
// stretchit["h4s"][1] = document.querySelector("h4");
// stretchit["h4s"]["h4-1"].appendChild("h4");
// stretchit["h4s"]["h4-1"].textContent = "About"
// stretchit["h4s"]["h4-1"].appendChild(stretchit["h4s"]["h4-2"]);

console.log(stretchit);
