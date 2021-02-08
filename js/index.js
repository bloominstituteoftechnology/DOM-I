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
//Stretch updating css styling on page
document.querySelector('body').style.backgroundColor = "gray"

// Updating Navigation elements
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navAnchors = document.querySelectorAll('nav a')
for (let i=0;i<navAnchors.length;i++){
  navAnchors[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
}
let navBar = document.querySelector("nav")
let newAnchorOne = document.createElement('a')
let newAnchorTwo = document.createElement('a')
newAnchorOne.setAttribute('href','original.html')
newAnchorTwo.setAttribute('href','index.html')
newAnchorOne.textContent = "Original"
newAnchorTwo.textContent = "Home"
navBar.appendChild(newAnchorOne)
navBar.prepend(newAnchorTwo)

let middleImg = document.querySelector("#middle-img").setAttribute('src', siteContent['main-content']['middle-img-src'])

//Updating CTA HTML elements.
let ctaText = document.querySelector('.cta-text')
console.log(ctaText)
ctaText.children[0].textContent = siteContent['cta']['h1']
ctaText.children[1].textContent = siteContent['cta']['button']
let ctaImage = document.querySelector("#cta-img").setAttribute('src', siteContent['cta']['img-src'])

//Stretch button click switching text on screen
let ctaButton = document.querySelector(".cta-text button")
ctaButton.setAttribute('onClick','buttonAction()')
let isSwitched = false
let buttonAction = function(){
  if (isSwitched){
    ctaText.children[0].textContent = "DOM is awesome"
    isSwitched = false
  } else {
    ctaText.children[0].textContent = "DOM not so awesome"
    isSwitched = true
  }
  
}

//Main content elements
//Updating top content elements
let topContent = document.querySelectorAll(".top-content .text-content")
topContent[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent[0].children[1].textContent = siteContent['main-content']['features-content']
topContent[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent[1].children[1].textContent = siteContent['main-content']['about-content']

//Updating bottom content elements
let bottomContent = document.querySelectorAll(".bottom-content .text-content")
bottomContent[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomContent[0].children[1].textContent = siteContent['main-content']['services-content']
bottomContent[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomContent[1].children[1].textContent = siteContent['main-content']['product-content']
bottomContent[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomContent[2].children[1].textContent = siteContent['main-content']['vision-content']

//Updating contact and footer
let contact = document.querySelector(".contact")
let footer = document.querySelector("footer")
contact.children[0].textContent = siteContent['contact']['contact-h4']
contact.children[1].textContent = siteContent['contact']['address']
contact.children[2].textContent = siteContent['contact']['phone']
contact.children[3].textContent = siteContent['contact']['email']
footer.children[0].textContent = siteContent['footer']['copyright']