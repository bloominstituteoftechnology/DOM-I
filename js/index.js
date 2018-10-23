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

/* STEP 2 // Data allocation into elements. */
let navItems = Array.from(document.querySelectorAll('nav a'));
let h1 = document.querySelector('h1');
let button = document.querySelector('button');
let headerImage = document.querySelector('#cta-img');
let h4Tags = Array.from(document.querySelectorAll(h4));
let textCotentTags = Array.from(document.querySelectorAll('.text-content p'));
let featuresH = h4Tags[0];
let aboutH4 = h4Tags[1];
let aboutContent = textContentTags[1];
let middleImage = document.querySelector('#middle-img');
let servicesH4 = h4Tags[2];
let servicesContent = textContentTags[2];
let productH4 = h4Tags[3];
let productContent = textContentTags[3];
let visionH4 = h4Tags[4];
let visionContent = textContentTags[4];
let contactH4 = h4Tags[5];
let contactPTags = Array.from(document.querySelectorAll('p'));
let address = contactpTags[0];
let phone = contactPTags[1];
let email = contactPTags[2];
let copyright = document.querySelector('footer p');

/* STEP 3 // Update HTML with JSON. */
console.log(h4Tags.length);
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent['nav']['nav-item-' + (i + 1)];
}

let h1Words = siteContent['cta']['h1'].split(' ');
console.log(h1Words);

for (let i = 0; i < h1Words.length; i++) {
  h1.innerHTML += h1Words[i] + '<br>';
}

button.textContent = siteContent['cta']['button'];
headerImage.src = siteContent['cta']['img-src'];

featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content']
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
middleImage.src = siteContent['main-content']['middle-img-src'];
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productH4.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

contactH4.textContent = siteContent['contact']['contact-h4'];
let addressText = siteContent['contact']['address'];
address.innerHTML = addressText.substring(0, 18) + '<br>' + addressText.substring(19);
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

copyright.textContent = siteContent['footer']['copyright'];

/* STEP 4 // Input new content. */
let nav = document.querySelector('nav');
let help = document.createElement('a');
help.textContent = "Help";
help.href = "#";

let main = document.createElement('a');
main.textContent = "Main";
main.href = "#";

nav.prepend(main);
nav.append(help);

navItems.unshift(main);
navItems.push(help);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = "#1BB231";
}