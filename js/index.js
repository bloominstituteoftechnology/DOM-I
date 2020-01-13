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

let headerSmImg = document.createElement('img');
/** Sets Properties of Created Element **/
headerSmImg.src="../img/headerSmImg.jpg"
headerSmImg.alt="Developer Image"

/** Sets Style of Element ie. size position color */
headerSmImg.style.width=("86px")
headerSmImg.style.height=("86px")
headerSmImg.style.margin= ("18px")

/*Create H1 Company Name append to header */
let companyNameTxt = document.createElement('h1')
companyNameTxt.textContent = ('Guin Production Unlimited')
companyNameTxt.style.color = ('grey')
companyNameTxt.style.justifyContent('center')


/** Defining Parent Element to Variable To Replace Newly Created Element **/
//ie. header section footer
const header = document.querySelector('header')

header.style.alignContent= "center"
header.style.justifyItems = "center"
/** Adds created Img to end of parent Tag **/
header.prepend(headerSmImg);

let logoImg = document.querySelector('#logo-img')
logoImg.style.padding = ('32px')
logoImg.style.margin = ('10px')


/** Returns Array list of all Elements of specified Tag Name */
let idArrList = document.getElementsByTagName('img')
/* Assign var to  img id */
let ctaImg = document.querySelector("#cta-img")
/* Assigns src to newly defined var */
ctaImg.src = "../img/mid-page-accent.jpg"
ctaImg.style.margin = ('12px')


