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
// selectinf nav from the html page
let nav = document.getElementsByTagName("a")
// extracting array of navItems from the nav object
let navObj = Object.values(siteContent.nav)
//looping through the nav array and assigning nav content to navItems
for(let i = 0; i < nav.length; i++){
  nav[i].textContent = navObj[i]
}
let ctaText = document.querySelector("h1")
ctaText.textContent = siteContent.cta.h1;
let cta = ctaText.parentElement
let ctaButton = cta.lastElementChild;
ctaButton.textContent = siteContent.cta.button;
let ctaImage = cta.nextElementSibling;
ctaImage.setAttribute('src',siteContent.cta["img-src"])

let middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainHeading = document.querySelectorAll("h4")
let mainContent = siteContent['main-content']
let mainHeadingArr = [];
let mainContentArr = []
for(let heading in mainContent){
  if(heading.includes('h4')){
    mainHeadingArr.push(mainContent[heading])
  }
  else{
    mainContentArr.push(mainContent[heading])
  }

}

mainContentArr = mainContentArr.filter((e) =>  e !== 'img/mid-page-accent.jpg')


for(let i = 0; i < mainHeadingArr.length; i++){
  mainHeading[i].textContent = mainHeadingArr[i];
  mainHeading[i].nextElementSibling.textContent = mainContentArr[i]
}

let ContactHeading = document.querySelector('.contact h4')
ContactHeading.textContent  = siteContent.contact["contact-h4"];

let contactParagraph = document.querySelectorAll('.contact p')

let contactP = [];
let contactObj = siteContent.contact;

for(let paragraph in contactObj ){
  if(paragraph !== 'contact-h4' ){
    contactP.push(contactObj[paragraph])
  }
}

for(let i = 0; i < contactP.length;i++){
  contactParagraph[i].textContent = contactP[i];
}