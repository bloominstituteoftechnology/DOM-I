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

// Navigation
let navLink = document.querySelectorAll('a')
navLink[0].textContent = siteContent['nav']["nav-item-1"]
navLink[1].textContent = siteContent['nav']["nav-item-2"]
navLink[2].textContent = siteContent['nav']["nav-item-3"]
navLink[3].textContent = siteContent['nav']["nav-item-4"]
navLink[4].textContent = siteContent['nav']["nav-item-5"]
navLink[5].textContent = siteContent['nav']["nav-item-6"]

// Add Child Element to End of Nav
let newChild = document.createElement("a")
newChild.href = '#'
newChild.textContent = 'Blog'

let navBar = document.querySelector("nav")
navBar.appendChild(newChild);

// Add Child Element to Beginning of Nav
let anotherNewChild = document.createElement("a")
anotherNewChild.href = '#'
anotherNewChild.textContent = 'My CV'

navBar.prepend(anotherNewChild);

// Turn Links Green
for (let i = 0; i < navLink.length; i++) {
  let navColor = navLink[i]
  navColor.style.color = 'green'
}

// CTA Content
let ctaH1 = document.querySelector('section.cta .cta-text h1');
// ctaH1.textContent = siteContent['cta']['h1']

ctaH1.innerHTML = "DOM<br> Is<br> Awesome";

let ctaButton = document.querySelector('section.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button']

let ctaImage = document.querySelector('section.cta img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// Main Content Area
let topContent = document.querySelector('.top-content');

topContent.children[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
topContent.children[0].querySelector('p').textContent = siteContent['main-content']['features-content']
topContent.children[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
topContent.children[1].querySelector('p').textContent = siteContent['main-content']['about-content']

let mainImage = document.querySelector('.middle-img');
mainImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomContent = document.querySelector('.bottom-content');

bottomContent.children[0].querySelector('h4').textContent = siteContent['main-content']['services-h4']
bottomContent.children[0].querySelector('p').textContent = siteContent['main-content']['services-content']
bottomContent.children[1].querySelector('h4').textContent = siteContent['main-content']['product-h4']
bottomContent.children[1].querySelector('p').textContent = siteContent['main-content']['product-content']
bottomContent.children[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
bottomContent.children[2].querySelector('p').textContent = siteContent['main-content']['vision-content']

// Alter h4 Font and Text Decoration
let sectionHeaders = document.querySelectorAll('h4');
for (let i = 0; i < sectionHeaders.length; i++) {
  sectionHeaders[i].style.fontFamily = "hobo std";
  sectionHeaders[i].style.textDecoration = "underline";
}

// Contact Area
let contactArea = document.querySelector('.contact');

contactArea.children[0].textContent = siteContent['contact']['contact-h4']
contactArea.children[1].textContent = siteContent['contact']['address']
contactArea.children[2].textContent = siteContent['contact']['phone']
contactArea.children[3].textContent = siteContent['contact']['email']

// Footer
let footerContent = document.querySelector('footer p').textContent = siteContent['footer']['copyright']

// Mouseover Event
var event = document.querySelector("button");
  console.log(event)
event.addEventListener("mouseenter", function(item) {   

  item.target.style.backgroundColor = "orange";
  item.target.style.borderColor = "skyblue"

  setTimeout(function() {
    item.target.style.backgroundColor = "";
    item.target.style.borderColor = "";
  }, 700);
}, false);