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
let logo = document.getElementById("logo-img"); //
logo.setAttribute('src', siteContent["nav"]["img-src"])

function findTagNames (obj) {
  console.log(Object.keys(obj));
  let keyIndex = [];
  let keyValues = [];
  for (key in obj) {
    if (key.includes("nav")) {
      keyIndex.push(key.slice(-1) - 1);
      keyValues.push(obj[key]);
    }
  }
  return [keyIndex, keyValues];
}
let navTags = findTagNames (siteContent.nav);

let aTags = document.querySelectorAll("a");

function orderedTagNames (arrNumAndVal) {
  let orderedTags = [];
  for (let i = 0; i < arrNumAndVal[0].length; i++) {
    if (arrNumAndVal[0][i] === i) {
      orderedTags.push(arrNumAndVal[1][i]);
    }
  }
  return orderedTags;
}
let aTagsArr = orderedTagNames(navTags);


function createATags (arr) {
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].innerText = arr[i];
  }
}
let createdATags = createATags(aTagsArr);

let ctaTextH1 = document.querySelector(".cta .cta-text h1");
ctaTextH1.innerText = siteContent.cta.h1;

let ctaTextBox = document.querySelector(".cta .cta-text");

let ctaTextButton = document.querySelector(".cta .cta-text button");
ctaTextButton.innerText = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img"); //
ctaImg.setAttribute('src', siteContent.cta["img-src"])

let mainH4 = document.querySelectorAll(".main-content h4");
let mainP = document.querySelectorAll(".main-content p");

console.log(mainH4);


mainH4[0].innerHTML = siteContent["main-content"]["features-h4"];


mainP[0].innerText = siteContent["main-content"] ["features-content"];

mainH4[1].innerText = siteContent["main-content"]["about-h4"];

mainP[1].innerText = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img"); //
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

mainH4[2].innerText = siteContent["main-content"]["services-h4"];

mainP[2].innerText = siteContent["main-content"]["services-content"];

mainH4[3].innerText = siteContent["main-content"]["product-h4"];

mainP[3].innerText = siteContent["main-content"]["product-content"];

mainH4[4].innerText = siteContent["main-content"]["vision-h4"];

mainP[4].innerText = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".container .contact h4");
contactH4.innerText = siteContent.contact["contact-h4"];

let contactP = document.querySelectorAll(".container .contact p");
contactP[0].innerText = siteContent.contact.address;
contactP[1].innerText = siteContent.contact.phone;
contactP[2].innerText = siteContent.contact.email;

let footerP = document.querySelector("footer p");
footerP.innerText = siteContent.footer.copyright;


let nav = document.querySelector("header nav");
// nav.prepend("Portfolio");

let newA = document.createElement("a");
nav.prepend(newA);
// document.body.container.header.nav.appendChild(newA);
newA.innerText = "Portfolio";
newA.href = "#";
newA.style.color = 'green';

let myHeader = document.querySelector("header nav");
let newA2 = document.createElement("a");
myHeader.appendChild(newA2);
newA2.innerText = "Blog";
newA2.href = "#";
newA2.style.color = 'green';

// nav.appendChild("Blog");

// var p = document.createElement("p");
// document.body.appendChild(p);


aTags.forEach(tag => tag.style.color = 'green');
nav.setAttribute("style", "color: green");
nav.style.color = 'green';

ctaTextButton.setAttribute("style", "color: cornflowerBlue; font-weight: bold; background-color: whitesmoke; border: 1px solid cornflowerBlue");

ctaTextButton.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "red";
  event.target.style.border = "1.5px solid red"
  event.target.style.backgroundColor = "white"
  event.target.innerText = "Don't Hover!";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.innerText = "Don't Hover!";

  }, 500);


  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.display = "none";

  }, 750);
}, false);




nav.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "cornflowerBlue";
  event.target.style.textDecoration = "none";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "green";
    event.target.style.textDecoration = "none";

  }, 1000);
}, false);


let newButton = document.createElement("button");
ctaTextBox.append(newButton);

newButton.innerHTML = "Click Here!";

newButton.setAttribute("style", "color: cornflowerBlue; font-weight: bold; background-color: whitesmoke; border: 1px solid cornflowerBlue");

newButton.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "seaGreen";
  event.target.style.border = "1.5px solid seaGreen"
  event.target.style.backgroundColor = "white"

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "cornflowerBlue";
    event.target.style.border = "1px solid cornflowerBlue";
    event.target.style.backgroundColor = "whitesmoke"

  }, 1000);
}, false);

newButton.addEventListener("click", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "white";
  event.target.style.backgroundColor = "cornFlowerBlue";
  event.target.innerText = "Click!";

  // reset the color after a short delay

  setTimeout(function() {
    event.target.style.color = "red";
    event.target.style.textDecoration = "none";
    event.target.innerText = "Clicked!";

  }, 2000);
}, false);
