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

let CTAtxt = document.getElementsByTagName("h1");

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




// Task 4: Add new content


