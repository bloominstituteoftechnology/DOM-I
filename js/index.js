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

// Site Images
// let logo = document.getElementsByClassName("logo").src = `img/logo.png`;//?
// let logo1 = document.getElementsByClassName("cta-img").src = `img/header-img.png`;//?
// let logo2 = document.getElementsByClassName("middle-img").src = `img/mid-page-accent.jpg`;//?


let logo = document.getElementById("logo-img").src = `img/logo.png`

let roundPhoto = document.getElementById(`cta-img`).src = `img/header-img.png`

let rectanglePhoto = document.getElementById(`middle-img`).src = `img/mid-page-accent.jpg`

// // --------------------------------------------------------------------------------------

// Navigation Styling 
let navItemText = [`Services`, `Products`, `Vision`, `Feature`, `About`, `Contact`]
let navItems = document.getElementsByTagName(`a`);
// Array.from(navItems)
//console.log(navItems)

for (let i = 0; i <= navItems.length; i++){
  for(let i = 0; i < navItemText.length; i++){
    const currentElem = navItemText[i];
    navItems[i].textContent = currentElem;
  }
}



// // --------------------------------------------------------------------------------------

let cta_text = document.querySelector(`.cta-text h1`)
cta_text.textContent = `Dom Is Awesome`

// // --------------------------------------------------------------------------------------

const pageButton = document.getElementsByTagName(`button`);
pageButton[0].textContent = `Get Started`

// const pageButton = document.querySelector(`button`);
// pageButton.textContent = `Get Started`

// // --------------------------------------------------------------------------------------
const allh4elemNames = [`Features`, `About`, `Services`, `Product`, `Vision`, `Contact`]

let allh4Elems = document.getElementsByTagName(`h4`);

for (let i = 0; i <= allh4Elems.length; i++){
  for(let i = 0; i < allh4elemNames.length; i++){
    const currentElement = allh4elemNames[i];
    allh4Elems[i].textContent = currentElement;
  }
}


// --------------------------------------------------------------------------------------

// let featuresText = document.querySelector(`.main-content p`)
// featuresText.classList.add('features')
// featuresText.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`

const allpContent = [`Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`, "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."]

let featAbtSrvProVisContent = document.querySelectorAll(`.text-content p`);
// console.log(featAbtSrvProVisContent)

for (let i = 0; i <= featAbtSrvProVisContent.length; i++){
  for(let i = 0; i < allpContent.length; i++){
    const currentElement = allpContent[i];
    featAbtSrvProVisContent[i].textContent = currentElement;
  }
}

// --------------------------------------------------------------------------------------
const contactListArray = [`123 Way 456 Street Somewhere, USA`, `1 (888) 888-8888`, `sales@greatidea.io`]
const contactSecion = document.querySelectorAll(`.contact p`)
// console.log(contactSecion)

contactSecion[0].textContent = `123 Way 456 Street Somewhere, USA`
contactSecion[1].textContent = `1 (888) 888-8888`
contactSecion[2].textContent = `sales@greatidea.io`

// --------------------------------------------------------------------------------------

const footerInfo = document.querySelectorAll(`footer p`)
console.log(footerInfo)
footerInfo[0].textContent = `Copyright Great Idea! 2018`;
