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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo (Do likewise for the rest of the images)
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add new link in navigation element, at the end, called Services
const headerElement = document.querySelector('header');
headerElement;
const newLink = document.createElement('a');
newLink;
newLink.textContent = "Services";
newLink;
headerElement.appendChild(newLink);

// Give the Services link a green color
newLink.style.color = "green";
newLink;

// Add new link to navigation, to the front, called Product
const firstLink = document.createElement('a');
firstLink;
firstLink.textContent = "Product";
firstLink;
headerElement.prepend(firstLink);

// Update all links in navigation bar using querySelectorAll
const linkElements = document.querySelectorAll('nav a');
linkElements;
linkElements[0].textContent = "Alison";
linkElements[0];
linkElements[1].textContent = "Product";
linkElements[1];
linkElements[2].textContent = "Vision";
linkElements[2];
linkElements[3].textContent = "Features";
linkElements[3];
linkElements[4].textContent = "About";
linkElements[4];
linkElements[5].textContent = "Contact";
linkElements[5];
console.log(linkElements);

// Give the links a green color
linkElements[0].style.color = "green";
linkElements;

// try creating a for loop to color all the links at the same time
for (i = 0; i < linkElements.length; ++i) {
    linkElements[i].style.color = "green";
}