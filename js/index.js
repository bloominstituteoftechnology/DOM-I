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

// Task 2 - Lets grab all of the references
const logo = document.getElementById("logo-img");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav a");
const ctaHeading = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImage = document.getElementById("cta-img");
const mainContentHeading = document.querySelectorAll(".main-content h4");
const mainContentContent = document.querySelectorAll(".main-content p");
const middleImg = document.getElementById("middle-img");
const contactHeading = document.querySelector(".contact h4");
const contactContent = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer");

// setup the elements to append and prepend
let projects = document.createElement("a");
let projectsText = document.createTextNode("Projects");
let home = document.createElement("a");
let homeText = document.createTextNode("Home");

// header

// setup the logo image
logo.src =  siteContent["nav"]["img-src"];

// nav
// itterate over the navItems and set the content from the JSON object
for(let i = 0; i < 6; i++) {
  navItems[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
  // change the nav items green
  navItems[i].style.color = "green";
}

// add the text in to the a tag
home.appendChild(homeText);
//set the styles of the home element
home.style.cssText = "color: green; cursor: pointer;";
// prepend home to the start of the nav
nav.prepend(home);

// add text to the a tag
projects.appendChild(projectsText);
// set the styles of the projects element
projects.style.cssText = "color: green; cursor: pointer;";
// append the projects element to the nav
nav.appendChild(projects);

// cta section

// set the content of the H1 in the cta from the JSON Object 
ctaHeading.innerHTML = siteContent["cta"]["h1"];

// set the content of the button in the cta from the JSON Object
ctaButton.innerHTML = siteContent["cta"]["button"];

// add an event listener to the get started button
ctaButton.addEventListener("click", function(){
  

  logo.src = "https://image.ibb.co/dgtnFp/logo_sml.png";

  ctaHeading.innerHTML = "JOSH IS <br> AWESOME";
  
  ctaImage.src = "https://avatars2.githubusercontent.com/u/1958368?s=400&v=4";
  ctaImage.style.cssText = "margin-left: 100px; border-radius: 20px;"
  ctaButton.innerText = "Click Again";
  ctaButton.addEventListener("click", function() {
   ctaImage.src = "https://avatars1.githubusercontent.com/u/29240650?s=400&v=4"
   ctaHeading.innerHTML = "CHARLETTA <br> IS <br> AWESOME";
   ctaButton.style.display = "none";
  });
});

// set the source of the cta image from the JSON Object
ctaImage.src = siteContent["cta"]["img-src"];

// main content section

// set the top-content from the JSON Object
mainContentHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentContent[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentHeading[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentContent[1].innerHTML = siteContent["main-content"]["about-content"];

// set the middle-img source from the JSON Object
middleImg.src = siteContent["main-content"]["middle-img-src"];

// set the bottom-content from the JSON Object
mainContentHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentContent[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentContent[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainContentContent[4].innerHTML = siteContent["main-content"]["vision-content"];

// Contact section
contactHeading.innerHTML = siteContent["contact"]["contact-h4"];
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

// footer section
footer.innerHTML = siteContent["footer"]["copyright"];