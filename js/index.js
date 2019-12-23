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


// Other images

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])





//1. Create selectors by using any of the DOM element's methods
//  Note that IDs have been used on all images. Use the IDs to update src path content

//nav

const navMulti = document.querySelectorAll('nav');
navMulti.style.color = grey;

navMulti.textContent = "Services";
navMulti.textContent = "Product";
navMulti.textContent = "Vision";
navMulti.textContent = "Features";
navMulti.textContent = "About";
navMulti.textContent = "Contact";


//header

const head = document.querySelectorAll('cta');
head.style.border = red;








// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img/logo.png"])

// logo.alt = "Great Idea! Company logo."



// const code = document.getElementById('cta-img');
// code.src = "img/header-img.png"; 
// code.alt = "Image of a code snippet";



// const middle = document.getElementById('middle-img');
// middle.src = "img/mid-page-accent.jpg" 
// middle.alt = "Image of code snippets across the screen" 





// const parentHeader =  document.getElementsByTagName('nav');

// parentHeader.append(Nav);


