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







// 🌸🌸🌸STUDENT WORK FROM HERE ON🌸🌸🌸//

// title
document.title = "Great Idea";

//select all the anchors through the semantic element "nav a" after the header div
const newNav = document.querySelectorAll("nav a");

//use forEach method to go through each item in the new nav - all the nav anchors, and give them the .innerText method to "import" the key: values from the siteContent
newNav.forEach( (item, index) => {
  item.innerText = siteContent["nav"][Object.keys(siteContent["nav"])[index]]
});

const h1 = document.querySelector("h1"); //declare the variable and where it is
h1.innerHTML = siteContent["cta"]["h1"]; // add the conent to the variable
h1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
// Track team showed me how to do the breaks ^^^

// snippet image
const codeSnippetImage = document.querySelector("#cta-img"); //# targets an ID!
codeSnippetImage.setAttribute("src", siteContent["cta"]["img-src"]);

// button
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// top-content first child h4 target
const topContentFirstChildh4 = document.querySelector(".top-content:first-child h4");
topContentFirstChildh4.textContent = siteContent["main-content"]["features-h4"];

// top-content first child p target
const topContentFirstChildP = document.querySelector(".top-content:first-child p");
topContentFirstChildP.textContent = siteContent["main-content"]["features-content"];

// top-content second child h4 target
const topContentSecondChildh4 = document.querySelector(".top-content:last-child h4");
topContentSecondChildh4.textContent = siteContent["main-content"]["about-h4"];

// top-content p target
const topContentSecondChildP = document.querySelector(".top-content:last-child p");
topContentSecondChildP.textContent = siteContent["main-content"]["about-content"];


// middle image  - SOMETHING BROKE AT THIS POINT, THE IMAGE WAS SHOWING UP BEFORE i ADDED THE TEXT FOR H4 AND P ABOVE, AND THEN IT STOPPED DISPLAYING. i HAVE TO COMMENT THIS OUT TO CHECK MY WORK - DONT KNOW WHAT HAPPENED //
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


// bottom-content first child h4
const bottomContentFirstChildh4 = document.querySelector(".bottom-content:first-child h4");
bottomContentFirstChildh4.textContent = siteContent["main-content"]["services-h4"];

// bottom-content first child p //
const bottomContentFirstChildP = document.querySelector(".bottom-content:first-child p");
bottomContentFirstChildP.textContent = siteContent["main-content"]["services-content"];

// bottom-content middle child h4 // 
const bottomContentNthChildh4 = document.querySelector(".bottom-content:nth-child(1) h4");
bottomContentNthChildh4.textContent = siteContent["main-content"]["products-h4"];

// bottom content middle child p 
const bottomContentNthChildP = document.querySelector(".bottom-content:nth-child(1) p");
bottomContentNthChildP.textContent = siteContent["main-content"]["products-content"];

// bottom-content last child h4
const bottomContentLastChildh4 = document.querySelector(".bottom-content:last-child h4");
bottomContentLastChildh4.textContent = siteContent["main-content"]["vision-h4"];

// bottom content last child p 
const bottomContentLastChildP = document.querySelector(".bottom-content:last-child p");
bottomContentLastChildP.textContent = siteContent["main-content"]["vision-content"];


// contact section //

const contactH4 = document.querySelection(".contact h4");
contactH4.h4

// const contact = document.querySelectorAll(".contact")[0].children;
// const strings = Object.values(siteContent["contact"]);
//   for (let i = 0; i < contact.length; i++) {
//     contact[i].textContent = strings[i];
//   }


// const newNav = "Services"
// document.nav[0].createTextNode("Services")


// nav
// document.createElement = "nav";
// document.header.prepend(nav);


// nav items

// const navItem1 = document.createElement("a");
// navItem1.textContent = "Services";
// navItem1.href = "#";
// document.querySelector("nav").appendChild(navItem1)

// const navItem2 = document.createElement("a");
// navItem2.textContent = "Product"
// navItem2.href = "#";

// const navItem3 = document.createElement("a");
// navItem3.textContent = "Vision"
// navItem3.href = "#";

// const navItem4 =document.createElement("a");
// navItem4.textContent = "Features"
// navItem4.href = "#";

// const navItem5 = document.createElement("a");
// navItem5.textContent = "About"
// navItem5.href = "#";

// const navItem6 = document.createElement("a");
// navItem6.textContent = "Content"
// navItem6.href = "#";



// document.nav[0].a = "Services"
