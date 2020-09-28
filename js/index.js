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

// nav
const navigationBar = document.querySelectorAll('a');
navigationBar[0].textContent = "Services"
navigationBar[1].textContent = "Product"
navigationBar[2].textContent = "Vision"
navigationBar[3].textContent = "Features"
navigationBar[4].textContent = "About"
navigationBar[5].textContent = "Contact"

// cta
const h1 = document.querySelector('h1')
h1.textContent = "DOM Is Awesome"

const button = document.querySelector('button')
button.textContent = "Get Started"

const titleSectionImg = document.querySelector('#cta-img')
titleSectionImg.setAttribute('src', siteContent["cta"]["img-src"])

// main content
// features and about text boxes
const mainContent = document.querySelector('.main-content')
const topContent = document.querySelector('.top-content')
const bottomContent = document.querySelector('.bottom-content')

const textBox = topContent.querySelector('.text-content')
const textBoxOne = textBox.cloneNode(true)
topContent.appendChild(textBoxOne)

const cardTitleFeatures = textBox.querySelector('h4')
const cardContentFeatures = textBox.querySelector('p')
cardTitleFeatures.textContent = "Features"
cardContentFeatures.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const cardTitleAbout = textBoxOne.querySelector('h4')
const cardContentAbout = textBoxOne.querySelector('p')
cardTitleAbout.textContent = "About"
cardContentAbout.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// middle image
const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// services, product, and vision text boxes
const textBoxTwo = bottomContent.querySelector('.bottom-content')
const textBoxThree = textBoxTwo.cloneNode(true)
const textboxFour = textBoxTwo.cloneNode(true)
bottomContent.appendChild(textBoxTwo)
bottomContent.appendChild(textBoxThree)
bottomContent.appendChild(textBoxFour)


// contact

// footer
