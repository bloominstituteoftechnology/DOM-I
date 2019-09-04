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

// nav          DONE
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img"); // ID doesn't need . or #
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("nav a")
// console.log("navLinks",navLinks);
navLinks.forEach((link, i) => {
  link.textContent = siteContent["nav"][`nav-item-${i+1}`]
});


// cta          DONE
let ctaImg = document.getElementById("cta-img");  // make variable & set it to HTML class
ctaImg.src = siteContent["cta"]["img-src"]; // tell variable source to use nested object data

let ctaText = document.querySelector(".cta-text h1"); // make variable and set it to CSS selector
ctaText.textContent = siteContent["cta"]["h1"]; // textContent points to CSS cta/h1 data

let ctaButton = document.querySelector(".cta-text button"); // class needs .
ctaButton.textContent = siteContent["cta"]["button"];


// main-content
let middleImg = document.getElementById("middle-img"); // make variable & set it to HTML class
middleImg.src = siteContent["main-content"]["middle-img-src"]; // tell variable source to use nested object data

let mainContentHeadings = document.querySelectorAll(".text-content h4"); // top-content and bottom-content headings
// console.log("mainContentHeadings",mainContentHeadings);

// let headingArray = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"]; // css content heading keys
let headingArray = ["features", "about", "services", "product", "vision"];

// console.log("headingArray",headingArray);
// need to put each headingArray element into a h4 field
mainContentHeadings.forEach((heading, i) => {
  // console.log(["main-content"][headingArray[i]]);
  // console.log(i);
  // console.log(heading);
  // console.log(heading, i);
  // console.log([headingArray]);
  // console.log([headingArray[i]]);

  // heading.textContent = ["main-content"][headingArray[i]]
  // heading.textContent = [headingArray[i]];
  // console.log(heading.textContent);

  // console.log(["main-content"][`${headingArray[i]}-h4`]); // UNDEFINED
  console.log(siteContent["main-content"][`${headingArray[i]}-h4`]); //siteContent!!!
  heading.textContent = siteContent["main-content"][`${headingArray[i]}-h4`];
});


// contact
let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let contactArray = ["address", "phone", "email"];
//need to put each contactArray element into a <p> in .contact
let contactInfo = document.querySelectorAll(".contact p") // contactInfo uses all 3 <p>
contactInfo.forEach(updateContactInfo);

function updateContactInfo(infoField, infoData) {

}


// footer       DONE
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];

