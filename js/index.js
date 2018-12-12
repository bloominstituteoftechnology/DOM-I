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
    "h1": "DOM <br> Is <br> Awesome",
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
 
// nav

// const nav = document.querySelectorAll('a');
// nav[0].textContent = siteContent['nav']['nav-item-1'];
// nav[1].textContent = siteContent['nav']['nav-item-2'];
// nav[2].textContent = siteContent['nav']['nav-item-3'];

// nav[3].textContent = siteContent['nav']['nav-item-4'];
// nav[4].textContent = siteContent['nav']['nav-item-5'];
// nav[5].textContent = siteContent['nav']['nav-item-6'];

let navItems = siteContent.nav //object with 7 children
let navItemsKeys = Object.keys(navItems)
let navItemsValues = Object.values(navItems)

for(let i=0; i<navItemsKeys.length; i++) {
  if(navItemsKeys[i]!== "img-src") {
    document.getElementsByTagName("nav")[0].children[i].textContent = navItemsValues[i]
  }
  // console.log(document.getElementsByTagName("nav")) It gives you one item, which is a key/value pair : 0:nav 
}
//------------------------------------------------------

//main-content

let mainContentKeys = Object.keys(siteContent["main-content"])
let h4Keys = mainContentKeys.filter(item => item.includes("h4"))
let mainContentPs = mainContentKeys.filter(item => item.includes("content"))
let textContentDivs = document.getElementsByClassName("text-content")

for(let i=0; i<h4Keys.length; i++) { 
  textContentDivs[i].getElementsByTagName("h4")[0].textContent = siteContent["main-content"][h4Keys[i]]
  textContentDivs[i].getElementsByTagName("p")[0].textContent = siteContent["main-content"][mainContentPs[i]]

}












//cta

const ctaText = document.querySelector('h1');
ctaText.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
//--------------------------------------------------------

//main-content

const featureH4 = document.getElementsByTagName("h4")[0];
featureH4.innerHTML = "Features";
const featuresContent = document.getElementsByTagName("p")[0]


// const contactH4 = document.querySelector('contact');
// contactH4.textContent = "Contact";

const address = document.querySelector('contact');

// const phone = document.querySelector('contact');
// phone.textContent = siteContent['contact']['phone'];

// const email = document.querySelector('contact');
// email.textContent = siteContent['contact']['email'];
// //---------------------------------------------------

// //footer


// const footer = document.querySelector('copyright');
// copyright.textContent = siteContent['footer']["copyright"];
