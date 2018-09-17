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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

const siteContent1 = {
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
    "h1": "Services",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Web",
    "features-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "about-h4": "Mobile",
    "about-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Cybersec",
    "services-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "product-h4": "Quality Assurance",
    "product-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "vision-h4": "Education",
    "vision-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update the nav links
let navList = document.querySelectorAll(".container header nav a");
let navListArray = Array.from(navList);
for (let i = 0; i < navListArray.length; i++) {
  navListArray[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
}
//Make nav links green
for (let link of navListArray) {
  link.style.color = "green";
}

//button stretch 

navListArray[0].addEventListener("click", function () {
  let middleImg = document.querySelector("#middle-img");
  for (let i = 0; i < tCH4Array.length; i++) {

    tCH4Array[i].innerHTML = siteContent1["main-content"][keysH4[i]];
    tCPArray[i].innerHTML = siteContent1["main-content"][keysP[i]];
    tCPArray[i].style.color = "darkgray";
    tCH4Array[i].style.color = "white";
  }
  (document.querySelector(".main-content")).style.backgroundColor = "black";
  (document.querySelector(".text-content h4")).style.color = "white";
  middleImg.setAttribute("src", "/img/serviceslg.jpeg");
  middleImg.style.width = "80%";
  middleImg.style.height = "200px";

});

//add two new nav items

let blog = document.createElement("a");
blog.setAttribute("href", "#");
(document.querySelector("nav")).appendChild(blog);
blog.innerHTML = "Blog";
blog.style.color = "Green";

let social = document.createElement("a");
social.setAttribute("href", "#");
(document.querySelector("nav")).prepend(social);
social.innerHTML = "Social";
social.style.color = "Green";
//Update cta

//Update cta h1
let ctaH1 = document.querySelector(".container .cta .cta-text h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

//Update button
let ctaButton = document.querySelector(".container .cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

//update img src for code snippet
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

/**
 * update main content
 */

/**
 * First - Grab the array-like objects for all h4 and p child nodes
 */
const textContentH4 = document.querySelectorAll(".text-content h4");
const textContentP = document.querySelectorAll(".text-content p");

/**
 * Second - convert to arrays
 */
const tCH4Array = Array.from(textContentH4);
const tCPArray = Array.from(textContentP);

/**
 * Grab all the keys from the sitecontent object
 */
const keysArr = Object.keys(siteContent["main-content"]);

/**
 * Filter out the h4 related keys
 */
const keysH4 = keysArr.filter(item => item.includes("h4"));

/**
 * Filter out the p related keys
 */
const keysP = keysArr.filter(item => item.includes("content"));

/**
 * Loop over the h4 elements and set them equal to corresponding key in the h4 sitecontent keys array
 * Also loop over the p elements and set them equal to their corresponding p keys from sitecontent
 */

for (let i = 0; i < tCH4Array.length; i++) {
  tCH4Array[i].innerHTML = siteContent["main-content"][keysH4[i]];
  tCPArray[i].innerHTML = siteContent["main-content"][keysP[i]];
}

//main content middle img
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact section
//contact h4
let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];
//contact p's
let contactP = document.querySelectorAll(".contact p");
let contactPArray = Array.from(contactP);
let contactKeys = Object.keys(siteContent["contact"]);
for (let i = 0; i < contactPArray.length; i++) {
  contactPArray[i].innerHTML = siteContent["contact"][contactKeys[i + 1]];
}

//footer 
let footerP = document.querySelector("footer p");
footerP.innerHTML = siteContent["footer"]["copyright"];



//messing with page styles = stretch 1
footerP.style.border = "1px solid black";

let mainContent = document.querySelector(".main-content");
mainContent.style.backgroundColor = "lightgray";

let btn = document.querySelector("button");
btn.style.backgroundColor = "lightblue";
btn.style.color = "black";
btn.style.borderRadius = "20px";