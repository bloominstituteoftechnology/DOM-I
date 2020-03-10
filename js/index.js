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

// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
// CIRCLE PIC
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])
// CIRCLE PIC
// BAR PIC
const barPic = document.getElementById("middle-img");
barPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])
// BAR PIC END

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images



// NAV BAR BEG
const navBar = document.getElementsByTagName("a");
// SERVICES
const navItem1 = navBar[0];
navItem1.textContent = siteContent["nav"]["nav-item-1"]
// PRODUCT
const navItem2 = navBar[1];
navItem2.textContent = siteContent["nav"]["nav-item-2"]
// VISION
const navItem3 = navBar[2];
navItem3.textContent = siteContent["nav"]["nav-item-3"]
// FEATURES
const navItem4 = navBar[3];
navItem4.textContent = siteContent["nav"]["nav-item-4"]
// ABOUT 
const navItem5 = navBar[4];
navItem5.textContent = siteContent["nav"]["nav-item-5"]
// CONTACT
const navItem6 = navBar[5];
navItem6.textContent = siteContent["nav"]["nav-item-6"]
// NAV BAR END



// DOM IS AWESOME H1
const domText = document.querySelector(".cta .cta-text h1");
domText.textContent = siteContent["cta"]["h1"] /*WHY CAN'T WE DO ["cta"]["cta-text"]["h1"] ? Why do we need to follow the object we are given?*/
// DOM IS AWESOME H1 END

// BUTTON START
const buttonText = document.querySelector(".cta .cta-text button");
buttonText.textContent = siteContent["cta"]["button"]
// BUTTON END

// TOP MID SECTION h4/TEXT START
// FEATURES START
const topMidLefth4 = document.querySelectorAll(".top-content .text-content h4")
topMidLefth4[0].textContent = siteContent["main-content"]["features-h4"]

const topMidLeftText = document.querySelectorAll(".top-content .text-content p")
topMidLeftText[0].textContent = siteContent["main-content"]["features-content"]
// FEATURES END

// ABOUT START
const topMidRighth4 = document.querySelectorAll(".top-content .text-content h4")
topMidRighth4[1].textContent = siteContent["main-content"]["about-h4"]

const topMidRightText = document.querySelectorAll(".top-content .text-content p")
topMidRightText[1].textContent = siteContent["main-content"]["about-content"]
// ABOUT END
// TOP MID SECTION h4/TEXT END



// BOTTOM MID SECTION TEXT START
// Services START
const bottomMidLefth4 = document.querySelectorAll(".bottom-content .text-content h4")
bottomMidLefth4[0].textContent = siteContent["main-content"]["services-h4"]

const bottomMidLeftText = document.querySelectorAll(".bottom-content .text-content p")
bottomMidLeftText[0].textContent = siteContent["main-content"]["services-content"]
// Services END

// Product START
const bottomMidMidh4 = document.querySelectorAll(".bottom-content .text-content h4")
bottomMidMidh4[1].textContent = siteContent["main-content"]["product-h4"]

const bottomMidMidText = document.querySelectorAll(".bottom-content .text-content p")
bottomMidMidText[1].textContent = siteContent["main-content"]["product-content"]
// Product END

// VISION START
const bottomMidRighth4 = document.querySelectorAll(".bottom-content .text-content h4")
bottomMidRighth4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomMidRightText = document.querySelectorAll(".bottom-content .text-content p")
bottomMidRightText[2].textContent = siteContent["main-content"]["vision-content"]
// VISION END
// BOTTOM SECTION TEXT END



// CONTACT START
// contact h4 start
const contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"]
// contact h4 end

// address start
const contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
// address end
// phone start
// const contactP = document.querySelectorAll(".contact p")
contactP[1].textContent = siteContent["contact"]["phone"]
// phone end

// email start
// const contactP = document.querySelectorAll(".contact p") /*don't call it multiple times to the path*/
contactP[2].textContent = siteContent["contact"]["email"]
// email end
// CONTACT END


// FOOTER START
const footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"]
// FOOTER END



// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.


// // CHANGE NAV TITLES TO GREEN: START
// const greenColorNav = document.querySelectorAll("header nav a");
// for (let i=0; i<greenColorNav.length; i++){
//   greenColorNav[i].style.color = "green";
// }

// // OR USE forEach EXAMPLE BELOW

// // CHANGE NAV TITLES TO GREEN: END


// APPENDCHILD: START
const appendAnchor = document.createElement("a");
appendAnchor.textContent = "Google";
const appendParent = document.querySelector("nav");
appendParent.appendChild(appendAnchor);
// APPENDCHILD: END

// PREPEND: START
const prependAnchor = document.createElement("a");
prependAnchor.textContent = "Amazon";
const prependParent = document.querySelector("nav");
prependParent.prepend(prependAnchor);
// PREPEND: END


// CHANGE NAV TITLES TO GREEN: START
// const greenColorNav = document.querySelectorAll("header nav a");
// for (let i=0; i<greenColorNav.length; i++){
//   greenColorNav[i].style.color = "green";
// }

// OR USE forEach EXAMPLE BELOW
const greenColorNav = document.querySelectorAll("header nav a");
greenColorNav.forEach(element => {
  element.style.color = "purple";
});
// CHANGE NAV TITLES TO GREEN: END