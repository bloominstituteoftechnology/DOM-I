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

console.log("Test");

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let CodeImg = document.getElementById("cta-img");
CodeImg.setAttribute('src', siteContent["cta"]["img-src"]);

let MidImg = document.getElementById("middle-img");
MidImg.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

/* Task 2: Create Selectors */
// Container
let Container = document.getElementsByClassName("container");
console.log(Container);

// Navigation
let Nav = document.getElementsByTagName("nav");
console.log(Nav);

// Anchor tags of Nav
let nAnchor = document.getElementsByTagName("a");
console.log(nAnchor);

// Main Content
let MainContent = document.getElementsByClassName("main-content");
console.log(MainContent);

// Contact Info
let Contact = document.getElementsByClassName("contact");
console.log(Contact);

// CTA h1
let CTAtxt = document.getElementsByTagName("h1");

// CTA button
let CTAbtn = document.getElementsByTagName("button");
/* Task 3: Update HTML with JSON data */
// Get the Nav bar text-menu on the page
for(let i=1;i<7;i++){
	nAnchor[i-1].innerHTML = siteContent["nav"]["nav-item-"+i];
	console.log(nAnchor[i-1]);
}

// Set up the CTA stuff
// h1
CTAtxt[0].innerHTML = siteContent["cta"]["h1"];
console.log(CTAtxt);
// button
CTAbtn[0].innerHTML = siteContent["cta"]["button"];
console.log(CTAbtn);

// Set up Main-Content stuffs

let MainSel = document.querySelectorAll(".top-content .text-content ");
console.log(MainSel);
console.log(MainSel[0]);

// Set up 'Features'
let MainSelH41 = MainSel[0].querySelector("h4");
let MainSelP1 = MainSel[0].querySelector("p");
MainSelH41.innerHTML = siteContent["main-content"]["features-h4"];
MainSelP1.innerHTML = siteContent["main-content"]["features-content"];
//console.log(MainSelH41);
//console.log(MainSelP1);

// Set up 'About'
let AboutH4 = MainSel[1].querySelector("h4");
let AboutP = MainSel[1].querySelector("p");
AboutH4.innerHTML = siteContent["main-content"]["about-h4"];
AboutP.innerHTML = siteContent["main-content"]["about-content"];

//* Set up Bottom Content for Main-Content *//
let BottomSel = document.querySelectorAll(".bottom-content .text-content");
console.log(BottomSel);

let ServiceH4 = BottomSel[0].querySelector("h4");
let ServiceP = BottomSel[0].querySelector("p");
ServiceH4.innerHTML = siteContent["main-content"]["services-h4"];
ServiceP.innerHTML = siteContent["main-content"]["services-content"];

let ProductH4 = BottomSel[1].querySelector("h4");
let ProductP = BottomSel[1].querySelector("p");
ProductH4.innerHTML = siteContent["main-content"]["product-h4"];
ProductP.innerHTML = siteContent["main-content"]["product-content"];

let VisionH4 = BottomSel[2].querySelector("h4");
let VisionP = BottomSel[2].querySelector("p");
VisionH4.innerHTML = siteContent["main-content"]["vision-h4"];
VisionP.innerHTML = siteContent["main-content"]["vision-content"];


// Task 4: Add new content


