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
    "h1": "DOM\nIs\nAwesome",
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

// Selectors
const nav = document.querySelector("nav");

const cta = document.querySelector(".cta");
const main = document.querySelector(".main-content");
const mainTop = main.querySelectorAll(".top-content .text-content");
const mainImg = main.querySelector("#middle-img");
const mainBottom = main.querySelectorAll(".bottom-content .text-content");
const contact = document.querySelector(".contact");
const contactH4 = contact.querySelector("h4");
const contactText = contact.querySelectorAll("p");
const footer = document.querySelector("footer");

// Updating content 

// Nav Link Update
let navIndex = 1;

const newLink1 = document.createElement("a");
newLink1.href = "#";
newLink1.textContent = "Appended";
const newLink2 = document.createElement("a");
newLink2.href = "#";
newLink2.textContent = "Prepended";


nav.appendChild(newLink1);
nav.prepend(newLink2);
const navLinks = nav.querySelectorAll("a");

document.querySelector("header").setAttribute("style", 
                                "background: dodgerblue;" + 
                                "position: fixed; top: 0;" + 
                                "left: 0;" + 
                                "width: 100%;" + 
                                "padding: 0 17%;");

navLinks.forEach(link => {
  
  if(navIndex < navLinks.length && (link.textContent != "Prepended" && link.textContent != "Appended")) {
    link.textContent = siteContent["nav"]["nav-item-" + navIndex];
    navIndex++;
  } else if (navIndex === navLinks.length - 2) {
    link.textContent = siteContent["nav"]["nav-item-" + navIndex];
  }

  link.setAttribute("style", "color: green;");
  
});



// CTA content update
cta.querySelector("h1").innerText = siteContent["cta"]["h1"];
cta.querySelector("button").textContent = siteContent["cta"]["button"];
cta.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

const myButton = document.createElement("button");
myButton.type = "button";
myButton.innerText = "Click ME!";
myButton.setAttribute("onclick", "changeH1()");

cta.querySelector("button").after(myButton);

function changeH1() {
  if(cta.querySelector("h1").innerText != "I\nAm\nAwesome") {
    cta.querySelector("h1").innerText = "I\nAm\nAwesome";
  } else {
    cta.querySelector("h1").innerText = siteContent["cta"]["h1"];
  }

}

// Main Content Update
const sections = ["features", "about", "services", "product", "vision"];
let secIndex = 0;

// Top content


mainTop.forEach(section => {
  section.querySelector("h4").innerText = siteContent["main-content"][sections[secIndex] + "-h4"];
  section.querySelector("p").innerText = siteContent["main-content"][sections[secIndex] + "-content"];
  secIndex++;
});

// Middle Image
mainImg.src = siteContent["main-content"]["middle-img-src"];

//Bottom Content
secIndex = 2;
mainBottom.forEach(section => {
  section.querySelector("h4").innerText = siteContent["main-content"][sections[secIndex] + "-h4"];
  section.querySelector("p").innerText = siteContent["main-content"][sections[secIndex] + "-content"];
  secIndex++;
});


//Contact Section Update
contactH4.innerText = siteContent["contact"]["contact-h4"];
const contactInfo = ["address", "phone", "email"];
let contactInfoIndex = 0;

contactText.forEach(p => {
  p.innerText = siteContent["contact"][contactInfo[contactInfoIndex]];
  contactInfoIndex++;
});


// Footer Update
footer.querySelector("p").innerText = siteContent["footer"]["copyright"];