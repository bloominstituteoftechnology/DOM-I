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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//call to action

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])



// STEP ONE - Need to grab the element exactly and assign it to a variable.

const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['h1'];


//nav items
const navItems = document.querySelectorAll('nav a');
navItems.forEach((element, i) => {
  element.style.color = 'green'
  element.textContent = siteContent['nav'][`nav-item-${i++}`];
})

// navItems.appendChild()

//STILL NEED HELP HERE!

// const navBar = document.querySelector('nav')


// const process = document.createElement('a')
// process.textContent = 'Process'

// const studies = document.createElement('a')
// studies.textContent = 'Studies'

// navBar[2].append(process)
// navBar[5].prepend(studies)


//main content
const mainContent = document.getElementById('middle-img');
mainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//THIS CODE IS SUPER DENSE. I CAN FIX THIS.
//top content. FEATURES section.

let topLHeader = document.querySelector('.top-content h4');
topLHeader.textContent = siteContent['main-content']['features-h4'];

let topLText = document.querySelector('.top-content p')
topLText.textContent = siteContent['main-content']['features-content'];


//not sure why these two aren't showing up. Need to ask Chris. ABOUT section
let topRHeader = document.querySelectorAll('.top-content h4');
topRHeader[1].textContent = siteContent['main-content']['about-h4'];

let topRText = document.querySelectorAll('.top-content p')
topRText[1].textContent = siteContent['main-content']['about-content'];

//bottom content

let bottomLHeader = document.querySelector('.bottom-content h4');
bottomLHeader.textContent = siteContent['main-content']['services-h4'];

let bottomLText = document.querySelector('.bottom-content p')
bottomLText.textContent = siteContent['main-content']['services-content'];


//PRODUCT section
let bottomMHeader = document.querySelectorAll('.bottom-content h4');
bottomMHeader[1].textContent = siteContent['main-content']['product-h4'];

let bottomMText = document.querySelectorAll('.bottom-content p')
bottomMText[1].textContent = siteContent['main-content']['product-content'];


//VISION section
let bottomRHeader = document.querySelectorAll('.bottom-content h4');
bottomRHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomRText = document.querySelectorAll('.bottom-content p')
bottomRText[2].textContent = siteContent['main-content']['vision-content'];

//contact section

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactElements = document.querySelectorAll('.contact p')
contactElements[0].textContent = siteContent['contact']['address'];
contactElements[1].textContent = siteContent['contact']['phone'];
contactElements[2].textContent = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
// footer.style.color = 'green';
//THIS WORKED.