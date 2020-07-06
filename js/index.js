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

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let navBar = document.querySelectorAll('nav a')
navBar[0].textContent = 'Services'
navBar[1].textContent = 'Product'
navBar[2].textContent = 'Vision'
navBar[3].textContent = 'Features'
navBar[4].textContent = 'About'
navBar[5].textContent = 'Contact'

navBar.forEach(link => {
  link.style.color = 'green'
})

const ctaText = document.querySelector('h1');
ctaText.textContent = 'DOM is Awesome'

const buttonText = document.querySelector('button')
buttonText.textContent = 'Get Started'

buttonText.style.fontWeight = 'bold'

let middleImage = document.querySelector('.middle-img')
middleImage.src = 'img/mid-page-accent.jpg'

let titleNames = document.querySelectorAll('.text-content h4')
titleNames[0].textContent = 'Features'
titleNames[1].textContent = 'About'
titleNames[2].textContent = 'Services'
titleNames[3].textContent = 'Products'
titleNames[4].textContent = 'Vision'

let paraText = document.querySelectorAll('.text-content p')
console.log(paraText)
paraText[0].textContent = 'this is Features'
paraText[1].textContent = 'this is about'
paraText[2].textContent = 'this is services'
paraText[3].textContent = 'this is Products'
paraText[4].textContent = 'this is Vision'

let getInTouch = document.querySelector('.contact h4')
getInTouch.textContent = 'Contact'

let bottomText = document.querySelectorAll('.contact p')
bottomText[0].textContent = '123 Way 456 Street Somewhere, USA'
bottomText[1].textContent = '1(888)888-8888'
bottomText[2].textContent = 'sales@greatidea.io'

let closingRemarks = document.querySelector('footer')
closingRemarks.textContent = 'Copyright Great Idea! 2018'