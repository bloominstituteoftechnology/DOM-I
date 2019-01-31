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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


//NAV BAR 
const navItems = siteContent.nav
// console.log(navItems);

 const navItemsKeys = Object.keys(navItems)

 const navItemsValues = Object.values(navItems)
// console.log(navItemsValues)
for (let i=0; i < navItemsKeys.length; i++) {
  if (navItemsKeys[i] !== "img-src") {
    document.querySelector("nav").children[i].textContent = navItemsValues[i];
    document.querySelector("nav").children[i].style.color = "green";
  }
}
let mainHeading = document.querySelector('h1');
mainHeading.style.whiteSpace = 'pre';
mainHeading.textContent = "DOM \r\n";
mainHeading.textContent += "Is \r\n";
mainHeading.textContent += "Awesome";

 let domButton = document.querySelector('button');
domButton.textContent = siteContent.cta.button;

 let headerImg = document.getElementById('cta-img');
headerImg.src = siteContent.cta["img-src"];


 let smallHeadings = document.querySelectorAll('h4');
let headingsArray = [].slice.call(smallHeadings);
headingsArray[0].textContent = `${siteContent["main-content"]["features-h4"]}`
headingsArray[1].textContent = `${siteContent["main-content"]["about-h4"]}`
headingsArray[2].textContent = `${siteContent["main-content"]["services-h4"]}`
headingsArray[3].textContent = `${siteContent["main-content"]["product-h4"]}`
headingsArray[4].textContent = `${siteContent["main-content"]["vision-h4"]}`
headingsArray[5].textContent = `${siteContent["contact"]["contact-h4"]}`

 let webContent = document.querySelectorAll('p');
let paragraphArray = [].slice.call(webContent);
paragraphArray[0].textContent = `${siteContent["main-content"]["features-content"]}`
paragraphArray[1].textContent = `${siteContent["main-content"]["about-content"]}`
paragraphArray[2].textContent = `${siteContent["main-content"]["services-content"]}`
paragraphArray[3].textContent = `${siteContent["main-content"]["product-content"]}`
paragraphArray[4].textContent = `${siteContent["main-content"]["vision-content"]}`
paragraphArray[5].textContent = `${siteContent["contact"]["address"]}`
paragraphArray[6].textContent = `${siteContent["contact"]["phone"]}`
paragraphArray[7].textContent = `${siteContent["contact"]["email"]}`
paragraphArray[8].textContent = `${siteContent["footer"]["copyright"]}`

 let mdlImg = document.getElementById("middle-img");
mdlImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

 // 1. Create Element
const newElement = document.createElement('a');


 // 2. Add attributes
newElement.href = "#";
newElement.textContent = "Home";
newElement.style.color = "green";


 // 3. Create a place for the element
const mainNav = document.querySelector('nav');

 // 4. Append or prepend the newly created element
mainNav.prepend(newElement);

const newElement2 = document.createElement('a');
newElement2.href = "#";
newElement2.textContent = "New";
newElement2.style.color ="green";
mainNav.append(newElement2);
