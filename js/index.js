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

let navLinks = document.querySelectorAll('a')
console.log(navLinks)
let mainWords = document.querySelector('h1')
console.log(mainWords)
let ctaButton = document.querySelector('button')
console.log(ctaButton)
let ctaImage = document.getElementById('cta-img')
console.log(ctaImage)
let middleImage = document.getElementById('middle-img')
let paragraphs = document.querySelectorAll('.main-content p')
let manyParagraphs = document.querySelectorAll('p')
console.log("paragraphs: ", paragraphs)
console.log("manyParagraphs: ", manyParagraphs)



navLinks.forEach((element, index) => {
  element.text = siteContent["nav"]["nav-item-".concat(index+1)]
})
mainWords.innerHTML = siteContent['cta']['h1']
ctaButton.innerHTML = siteContent['cta']['button']
ctaImage.setAttribute('src', siteContent['cta']['img-src'])
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let paragraphHeadings = document.getElementsByTagName("h4");
paragraphHeadings[0].innerHTML = siteContent["main-content"]["features-h4"]
paragraphHeadings[1].innerHTML = siteContent["main-content"]["about-h4"]
paragraphHeadings[2].innerHTML = siteContent["main-content"]["services-h4"]
paragraphHeadings[3].innerHTML = siteContent["main-content"]["product-h4"]
paragraphHeadings[4].innerHTML = siteContent["main-content"]["vision-h4"]
paragraphHeadings[5].innerHTML = siteContent["contact"]["contact-h4"]

let paragraphText = document.getElementsByTagName("p");
paragraphText[0].innerHTML = siteContent["main-content"]["features-content"]
paragraphText[1].innerHTML = siteContent["main-content"]["about-content"]
paragraphText[2].innerHTML = siteContent["main-content"]["services-content"]
paragraphText[3].innerHTML = siteContent["main-content"]["product-content"]
paragraphText[4].innerHTML = siteContent["main-content"]["vision-content"]
paragraphText[5].innerHTML = siteContent["contact"]["address"]
paragraphText[6].innerHTML = siteContent["contact"]["phone"]
paragraphText[7].innerHTML = siteContent["contact"]["email"]
paragraphText[8].innerHTML = siteContent["footer"]["copyright"]

// Task 3: color of items
// navLinks.forEach((item) => {
//   item.style.color = 'green'
// })
// // other option
// for (let i = 0; i < navLinks.length; i++) {
  //   navLinks[i].style.color = 'blue'
  // }

//Task 3: CreateElement, appendChild(), & prepend()
let newNavItem = document.createElement("a");
let newNavText = document.createTextNode("New Item")

newNavItem.appendChild(newNavText);

let navBar = document.querySelector("nav");
navBar.prepend(newNavItem);
newNavItem.setAttribute('href', '#');
// newNavItem.style.color = 'green';

// Task 3: color of items
document.querySelectorAll('nav a').forEach(function(item) {
  item.style.color = 'green'
})
