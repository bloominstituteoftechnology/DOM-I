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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Add h1 text content
let h1 = document.querySelector('h1');
h1.innerHTML = siteContent["cta"]["h1"];

//Add button text content
let button = document.querySelector('button');
button.innerHTML = siteContent["cta"]["button"];

// Grab all anchors and insert text content and style green
let index = 1;
let anchors = document.querySelectorAll('a');
anchors.forEach(element => {
  element.innerHTML = siteContent['nav'][`nav-item-${index}`];
  element.style.color = "green";
  index++;
});

// Add 2 more anchor tags to nav with appendChild
let nav = document.querySelector('nav'); // Grab parent

let newAnchor1 = document.createElement('a'); // Create child element
newAnchor1.innerHTML = "Blog"; // Add text
newAnchor1.style.color = "green"; // Add style
nav.appendChild(newAnchor1); // Append child to nav

let newAnchor2 = document.createElement('a'); // Create child element
newAnchor2.innerHTML = "Gallery"; // Add text
newAnchor2.style.color = "green"; // Add style
nav.appendChild(newAnchor2); // Append child to nav

// Create an array for h4 and paragraph keys
// Get nodelist containing all text-content classes
// Add text content to h4s and paragraphs 
let textContentArray = ['features', 'about', 'services', 'product', 'vision'];
let text_content = document.getElementsByClassName('text-content');
for (let i = 0; i < text_content.length; i++) {
  text_content[i].firstElementChild.innerHTML = siteContent['main-content'][`${textContentArray[i]}-h4`];
  text_content[i].lastElementChild.innerHTML = siteContent['main-content'][`${textContentArray[i]}-content`];
}

// Create an array for all contact keys
// Get nodelist containing contact class
// Add text content to all children of class contact
let contactArray = ['contact-h4', 'address', 'phone', 'email'];
let contact_content = document.getElementsByClassName('contact');
for (let i = 0; i < contactArray.length; i++) {
  contact_content[0].children[i].innerHTML = siteContent['contact'][`${contactArray[i]}`];
}

let footer = document.getElementsByTagName('footer');
footer[0].children[0].innerHTML = siteContent['footer']['copyright'];