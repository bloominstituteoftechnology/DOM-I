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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Updating the nav menu
var add = document.createElement('a')
document.querySelector("nav").appendChild(add);
let nav_items = document.querySelectorAll('a');
for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].textContent = siteContent["nav"]["nav-item-" + i];
    nav_items[i].style.color = 'green'
}
// Updating Class "cta section"
let heading = document.querySelector('.cta-text h1');
let heas = siteContent["cta"]["h1"];
var newArray = heas.split(" ")
for (let i = newArray.length - 1; i > -1; i--) {
    var node = document.createElement("h1"); // Create a <li> node
    var textnode = document.createTextNode(newArray[i]); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.querySelector(".cta-text").prepend(node);
}
let butt = document.querySelector('.cta-text button');
butt.textContent = siteContent["cta"]["button"];

let img = document.querySelector('#cta-img');
img.src = siteContent["cta"]["img-src"];

//Updating Main content
let contentHeading = document.querySelectorAll('.top-content h4');
contentHeading[0].textContent = siteContent["main-content"]["features-h4"]
contentHeading[1].textContent = siteContent["main-content"]["about-h4"]

let contentText = document.querySelectorAll('.top-content p');
contentText[0].textContent = siteContent["main-content"]["features-content"]
contentText[1].textContent = siteContent["main-content"]["about-content"]
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

//Updating Middle Content
let bottomContentHeading = document.querySelectorAll('.bottom-content h4');
bottomContentHeading[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentHeading[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentHeading[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentText = document.querySelectorAll('.bottom-content p');
bottomContentText[0].textContent = siteContent["main-content"]["services-content"]
bottomContentText[1].textContent = siteContent["main-content"]["product-content"]
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"]


// Updating Contact Section
document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"]
let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//Updating te footer section 
let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"]