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
const navBarAnchors = document.getElementByTagName('nav a')
const anchor2 = navBarAnchors.nextElementSibling
const anchor3 = anchor2.nextElementSibling
const anchor4 = anchor3.nextElementSibling
const anchor5 = anchor4.nextElementSibling
const anchor6 = anchor5.nextElementSibling

//h1 text and button//
const h1Container = document.getElementsByClassName('.cta-text')
const h1Text = document.getElementsByTagName('h1')
const h1Button = document.getElementByTagName('button')

//mainImg//
const mainImg = document.getElementById('cta-img')

//topContent//

//**main container**//
const topContent = document.getElementsByClassName('.top-content')

//**1st para in top content**/
const paraHeading1 = topContent[0].children[0]
const para1 = topContent[0].children[1]

//**2nd para in top content**//
const paraHeading2 = topContent[1].children[0]
const para2 = topContent[1].children[1]

//middleImg//
const middleImg = document.getElementById('middle-img')

//bottomContent//

//**Main container**//
const bottomContent = document.getElementsByClassName('.bottom-content')

//**1st para in bottom content**//
const bottomParaHeading1 = bottomContent[0].children[0]
const bottomPara1 = bottomContent[0].children[1]

//**2nd para in bottom content**//
const bottomParaHeading2 = bottomContent[1].children[0]
const bottomPara2 = bottomContent[1].children[1]

//**3rd para in bottom content**//
const bottomParaHeading3 = bottomContent[2].children[0]
const bottomPara3 = bottomContent[2].children[1]

//contact//
const contactMain = document.getElementsByClassName('.contact')

const contactHead = contactMain.getElementByTagName('h4')
const contactPara1 = contactMain[1]
const contactPara2 = contactMain[2]
const contactPara3 = contactMain[3]

//Footer//
const Foot = document.getElementsByTagName('footer p')
