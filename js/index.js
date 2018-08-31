// https://www.youtube.com/watch?v=cbD6nYK6KAs&feature=youtu.be
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

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.getElementsByClassName("middle-img");
midImg[0].src = siteContent["main-content"]["middle-img-src"];

// TASK 3:
// A. cta
let nav = Array.from(document.querySelectorAll('nav a')).reverse();

//Get the nav object
let siteNav = Object.values(siteContent.nav);
//Remove the last element
siteNav.pop();

let siteNavCount = siteNav.length;
nav.forEach(item => item.innerHTML = siteNav[--siteNavCount]);

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1;
document.querySelector(".cta-text button").innerHTML = siteContent.cta.button;

// console.log(ctaH1)
// cta.querySelector("h1").innerHTML = siteContent.cta.h1;


// B. main content
let textConHeaders = document.querySelectorAll(".text-content h4");
// let textConHeaders = Array.from(document.querySelectorAll(".text-content h4")).reverse();
// let siteConHeaders = Array.from(siteContent.nav).map(item => item);
// console.log(siteConHeaders);
//top content h4
textConHeaders[0].innerHTML = siteContent["main-content"]["features-h4"]
textConHeaders[1].innerHTML = siteContent["main-content"]["about-h4"]
//bottom content h4
textConHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
textConHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
textConHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

//top content para
let textConPara = document.querySelectorAll(".text-content p");
textConPara[0].innerHTML = siteContent["main-content"]["features-content"];
textConPara[1].innerHTML = siteContent["main-content"]["about-content"];
//bottom content para
textConPara[2].innerHTML = siteContent["main-content"]["services-content"];
textConPara[3].innerHTML = siteContent["main-content"]["product-content"];
textConPara[4].innerHTML = siteContent["main-content"]["vision-content"];

// C. Middle image
// Completed in SRC section

// C. contact - AWESOME!!
// document.querySelector(".contact h4").innerHTML = siteContent.contact["contact-h4"];
let contactP = Array.from(document.querySelectorAll(".contact")[0].children).reverse();
let addressP = Object.values(siteContent.contact);
console.log(addressP)
let count = addressP.length;
contactP.forEach((item) => item.innerHTML = addressP[--count]);
// console.log(addressP.map((item, index, array) => item))

//Footer
document.querySelector("footer p").innerHTML = siteContent.footer.copyright;



//TASK 4: Content Modification
let navMain = document.querySelectorAll("nav a");
function megaNavCall() {
  navMain.forEach(item => item.setAttribute("style", "color: green;"))
};
// console.log(navColor);
// navColor.setAttribute("style", "color: green;");

function newLinks(navObj, linkName, linkType, place){
  const newALink = document.createElement(linkType);
  newALink.href = "#";
  newALink.innerHTML = linkName;
  if (place === "append"){
    navObj.appendChild(newALink);
  }
  else{
    navObj.prepend(newALink);
  }
}

const navMainLinks = document.querySelector("nav");

newLinks(navMainLinks, "Press", "a", "append");
newLinks(navMainLinks, "Home", "a", "");

//It does not color to new elements because they are created after the initial function 
// was created with the object.
megaNavCall();





// let newALink = document.createElement("a");
// // let newAlinkText = document.createTextNode("Press");
// // newALink = newALink.appendChild(newAlinkText);
// newALink.href = "#";
// newALink.innerHTML = "Press";
// document.querySelector("nav").appendChild(newALink);
// newALink.innerHTML = "Again";
// document.querySelector("nav").appendChild(newALink);