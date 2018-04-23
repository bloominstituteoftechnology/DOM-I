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
    "count": 0,
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//---Stretch: Button
// We'll hide a lot of the page until the button is clicked.
document.querySelectorAll(".main-content, .contact").forEach(element => element.style.display = "none");
// Now, to add an eventListener to the button and function that runs when button is clicked
const button = document.querySelector(".cta-text button");
button.addEventListener("click", function() {
  let displayCheck = document.querySelector(".main-content").style.display;
  if (displayCheck === "none") {
    document.querySelectorAll(".main-content, .contact").forEach(element => element.style.display = "block");
  } else {
    document.querySelectorAll(".main-content, .contact").forEach(element => element.style.display = "none");
  }
  siteContent["contact"]["count"]++;
  console.log(siteContent["contact"]["count"]);
  document.querySelector("#buttonCounter").innerHTML = `The button has been clicked ${siteContent["contact"]["count"]} times.`
;})
//---------End Stretch: Button

//---Header 
// Insert Nav Items into Nav Bar
const nav = document.querySelector("nav");
let navItem = document.querySelectorAll("nav a");
navItem.forEach((element, index) => {
  element.innerHTML = siteContent["nav"]["nav-item-" + (index + 1)];
});
// Adding Two <a> Tags to the Nav-Bar. Some Constants:
const newElem = element => document.createElement(`${element}`);
const newText = text => document.createTextNode(`${text}`);
// Now the actual creation and slapping them into the DOM
// Front
const frontElem = newElem(`a`);
frontElem.appendChild(newText(`Front`));
nav.prepend(frontElem);
// Back
const backElem = newElem(`a`);
backElem.appendChild(newText('Back'));
nav.appendChild(backElem);
// To make all the <a> elements (light) green
navItem = document.querySelectorAll("nav a");
navItem.forEach(element => element.style.color = "lightgreen");
// Let's add a background color to complement that green
nav.style["background-color"] = "#369C9C";
nav.style.padding = "16px";
//---------End Header  

//---CTA
const ctaHeading = document.querySelectorAll(".cta-text")
ctaHeading[0].firstElementChild.innerHTML = siteContent.cta["h1"];
ctaHeading[0].lastElementChild.innerHTML = siteContent.cta["button"];

const ctaLogo = document.querySelector("section img");
ctaLogo.src = 'img/header-img.png';
//---------End CTA 

//---Main-Content 
const topContent = document.querySelector(".top-content");
topContent.children[0].firstElementChild.innerHTML = siteContent["main-content"]["features-h4"];
topContent.children[0].lastElementChild.innerHTML = siteContent["main-content"]["features-content"];
topContent.children[1].firstElementChild.innerHTML = siteContent["main-content"]["about-h4"];
topContent.children[1].lastElementChild.innerHTML = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomContent = document.querySelector(".bottom-content")
bottomContent.children[0].firstElementChild.innerHTML = siteContent["main-content"]["services-h4"];
bottomContent.children[0].lastElementChild.innerHTML = siteContent["main-content"]["services-content"];
bottomContent.children[1].firstElementChild.innerHTML = siteContent["main-content"]["product-h4"];
bottomContent.children[1].lastElementChild.innerHTML = siteContent["main-content"]["product-content"];
bottomContent.children[2].firstElementChild.innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].lastElementChild.innerHTML = siteContent["main-content"]["vision-content"];
//---------End Main-Content 

//---Contact 
const contactHead = document.querySelector(".contact h4");
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

const contactBody = document.querySelectorAll(".contact p");
contactBody[0].innerHTML = siteContent["contact"]["address"];
contactBody[1].innerHTML = siteContent["contact"]["phone"];
contactBody[2].innerHTML = siteContent["contact"]["email"];

const buttonCounter = newElem("p");
buttonCounter.appendChild(newText(`The button yearns for your click.`));
buttonCounter.setAttribute("id","buttonCounter");
document.querySelector(".contact").appendChild(buttonCounter);
//---------End Contact 

//---Footer 
const footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
//---------End Footer 
