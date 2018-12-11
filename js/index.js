// ## Task 2: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  
//Use the IDs to update src path content

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
    "h1": "DOM <br> Is <br> Awesome",
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

//==========================================IMAGES
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// ============ End example image.

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// =========================================== NAV

//textContent is the one Josh used.

// Emily's example:
const nav = document.querySelectorAll("a");
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";

// const mainNav = document.querySelector('.nav');

// const newElement = document.createElement("a");
// newElement.href = "#";
// newElement.textContent = "Portfolio";

// mainNav.append(newElement);
// newElement.style.color = "green";

// const newElement2 = document.createElement("a");
// newElement2.href = "#";
// newElement2.textContent = "Inquiries";
// // const mainNav = document.querySelector('nav');
// mainNav.prepend(newElement2);
// newElement2.style.color = "green";

// // 1. Create Element
// const newElement = document.createElement('a');
// // <a></a>

// // 2. Add values / attributes
// newElement.href = "#";
// newElement.textContent = "Testing";
// // <a href="#">Testing</a>

// // 3. Create a place for the element to land
// const mainNav = document.querySelector('.main-nav');

// // 4. Append or prepend the newly created element
// mainNav.prepend(newElement);



// ============ A different way to do this:

// const nav1 = document.querySelectorAll('nav a');
// nav1.forEach((a, index) => {
// a.textContent= siteContent.nav['nav-item-${index + 1}']
// });

// nav1.forEach(param, => param.style.color = 'green');

// =========== What I originally did:

// const nav = document.querySelectorAll("a");

// let navItem1 = document.getElementsByTagName("a")
// navItem1[0].innerHTML = "Services";

// let navItem2 = document.getElementsByTagName("a")
// navItem2[1].innerHTML = "Product";

// let navItem3 = document.getElementsByTagName("a")
// navItem3[2].innerHTML = "Vision";

// let navItem4 = document.getElementsByTagName("a")
// navItem4[3].innerHTML = "Features";

// let navItem5 = document.getElementsByTagName("a")
// navItem5[4].innerHTML = "About";

// let navItem6 = document.getElementsByTagName("a")
// navItem6[5].innerHTML = "Contact";


// =================================================== CTA

let ctaH1 = document.querySelector("h1");
// ctaH1.textContent = siteContent["cta"]["h1"];
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// ================================================== MAIN CONTENT

// ========= h4

const mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent['main-content']['features-h4'];
mainContent[1].textContent = siteContent['main-content']['about-h4'];
mainContent[2].textContent = siteContent['main-content']['services-h4'];
mainContent[3].textContent = siteContent['main-content']['product-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-h4'];

// ======== P 

const mainContentP = document.querySelectorAll("p");
mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];

// mainContentP[4].textContent = siteContent['main-content']['.vision-content, p'];
// could do this ^

// =========================================== CONTACT

const contact = document.querySelectorAll("h4");
contact[5].textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll("p");
contactP[5].textContent = siteContent['contact']['address'];
contactP[6].textContent = siteContent['contact']['phone'];
contactP[7].textContent = siteContent['contact']['email'];


// =========================================== FOOTER 

const footerP = document.querySelectorAll("p");
footerP[8].textContent = siteContent['footer']['copyright'];