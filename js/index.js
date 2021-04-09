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



//Selectors//

//navBar and anchors//
const preNavBarAnchors = document.querySelector('.container');
const navBarAnchors = preNavBarAnchors.firstElementChild.firstElementChild.firstElementChild;

const newAnchor = document.createElement('a')

// const frontNav = document.querySelector('nav')
// frontNav.prependChild(newAnchor)
// const firstNav = frontNav.firstElementChild
// firsttNav.textContent = 'Projects'
// firstNav.style.color = 'green'

const nav = document.querySelector('nav')
nav.appendChild(newAnchor)
const lastNav = nav.lastElementChild
lastNav.textContent = 'Socials'
lastNav.style.color = 'green'

const anchor1 = navBarAnchors;
anchor1.textContent = 'Services';
anchor1.style.color = 'green'

const anchor2 = navBarAnchors.nextElementSibling;
anchor2.textContent = 'Product';
anchor2.style.color = 'green'

const anchor3 = anchor2.nextElementSibling;
anchor3.textContent = 'Vision';
anchor3.style.color = 'green'

const anchor4 = anchor3.nextElementSibling;
anchor4.textContent = 'Features';
anchor4.style.color = 'green'

const anchor5 = anchor4.nextElementSibling;
anchor5.textContent = 'About';
anchor5.style.color = 'green'

const anchor6 = anchor5.nextElementSibling;
anchor6.textContent = 'Contact';
anchor6.style.color = 'green'

//h1 text and button//
const h1Container = document.querySelector('.cta-text');

const h1Text = h1Container.firstElementChild;
h1Text.textContent = "Dom is Awesome";

const h1Button = h1Container.lastElementChild;
h1Button.textContent = "Get Started";

//mainImg//
let mainImg = document.getElementById("cta-img").src = 'img/header-img.png'

//topContent//

//**main container**//
const topContent = document.querySelector('.top-content')

//**1st para in top content**/
const paraHeading1 = topContent.firstElementChild.firstElementChild
paraHeading1.textContent = "Features"

const para1 = topContent.firstElementChild.lastElementChild
para1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//**2nd para in top content**//
const paraHeading2 = topContent.lastElementChild.firstElementChild
paraHeading2.textContent = "About"

const para2 = topContent.lastElementChild.lastElementChild
para2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//middleImg//
const middleImg = document.getElementById("middle-img").src = 'img/mid-page-accent.jpg'

//bottomContent//

//**Main container**//
const bottomContent = document.querySelector('.bottom-content')

//**1st para in bottom content**//
const bottomParaHeading1 = bottomContent.firstElementChild.firstElementChild
bottomParaHeading1.textContent = "Services"

const bottomPara1 = bottomContent.firstElementChild.lastElementChild
bottomPara1.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//**2nd para in bottom content**//
const bottomParaHeading2Pre = bottomContent.firstElementChild

const bottomParaHeading2 = bottomParaHeading2Pre.nextElementSibling.firstElementChild
bottomParaHeading2.textContent = "Product"

const bottomPara2 = bottomParaHeading2Pre.nextElementSibling.lastElementChild
bottomPara2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//**3rd para in bottom content**//
const bottomParaHeading3 = bottomContent.lastElementChild.firstElementChild
bottomParaHeading3.textContent = "Vision"

const bottomPara3 = bottomContent.lastElementChild.lastElementChild
bottomPara3.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//contact//
const contactMain = document.querySelector('.contact')

const contactHead = contactMain.querySelector('h4')
contactHead.textContent = "Contact"

const contactPara1 = contactHead.nextElementSibling
contactPara1.innerHTML =  '123 way 456 Street <br/> Somewhere USA'

const contactPara2 = contactPara1.nextElementSibling
contactPara2.textContent = "1 (888) 888-8888"

const contactPara3 = contactPara2.nextElementSibling
contactPara3.textContent = "sales@greatidea.io"

//Footer//
const preFoot = document.querySelector('footer')

const foot = preFoot.firstElementChild
foot.textContent = "Copyright Great Idea! 2018"