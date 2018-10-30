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

/* ## Task 2: Create selectors to point your data into elements
* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images.  Use the IDs to update src path content */

//NAV BAR

// let newElement = document.createElement ('a');
// newElement.href = '#';
// newElement.textContent = 'Services'
// let navBar = document.querySelector("nav");


// let navBarA = document.querySelector('a');
//query selector must be followed by ("CSS");
let navBarA = document.querySelectorAll('header nav a');
// let navBar = document.nav.children

//to set a specific element at index [x] see below
navBarA[0].textContent = siteContent["nav"]["nav-item-1"];
navBarA[1].textContent = siteContent["nav"]["nav-item-2"];
navBarA[2].textContent = siteContent["nav"]["nav-item-3"];
navBarA[3].textContent = siteContent["nav"]["nav-item-4"];
navBarA[4].textContent = siteContent["nav"]["nav-item-5"];
navBarA[5].textContent = siteContent["nav"]["nav-item-6"];

// More efficient way to do nav bar 
/* let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
}) */

//query selector must be followed by ("CSS");
let h1Var = document.querySelector(".cta .cta-text h1") 
h1Var.textContent = "Dom is Awesome"

//CTA
let ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//MAIN CONTENT
//innerHTML is same as textContent, but textContent is preferable
let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];

textContentList[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];

textContentList[1].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["about-h4"];

textContentList[1].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["about-content"];

textContentList[2].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["services-h4"];

textContentList[2].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["services-content"];

textContentList[3].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["product-h4"];

textContentList[3].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["product-content"];

textContentList[4].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["vision-h4"];

textContentList[4].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Contact Section
// Remember [0] after ("h4")
let contact = document.getElementsByClassName("contact")[0];

contact.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"]

contact.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"]

contact.getElementsByTagName("p")[1].textContent= siteContent["contact"]["phone"]

contact.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"]

// Footer Section
//Only one item so footer[0] not needed.
let footer = document.querySelector("footer");
// footer[0].getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

//Links Section
newNavLinks = document.getElementsByTagName("nav")[0];

/*  Refactored into arrow func

let newLinks = function (linkName) {
  let newLink = document.createElement("a");
  newLink.textContent = linkName;
  return newNode;
}
 */
let newLinks = (linkName) => {
  let newLink = document.createElement("a");
  newLink.textContent = linkName;
  return newNode;

}  //remember parens

newLinks.prepend(createNewNode("Item 1"));
newLinks.append(createNewNode("Item 2"));