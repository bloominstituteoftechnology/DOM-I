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

//nav bar
document.querySelector("a").textContent = 'Services'
document.querySelector("a:nth-of-type(2)").textContent = 'Product'
document.querySelector("a:nth-of-type(3)").textContent = 'Vision'
document.querySelector("a:nth-of-type(4)").textContent = 'Features'
document.querySelector("a:nth-of-type(5)").textContent = 'About'
document.querySelector("a:nth-of-type(6)").textContent = 'Contact'

//button
const button = document.querySelector('button')
button.textContent = 'Get Started!'

//middle text
const headerTexr = document.querySelector('h1')
headerTexr.textContent = 'DOM IS AWESOME'

//Code image is here 
let code_img = document.getElementById("cta-img");
code_img.setAttribute('src', siteContent["cta"]["img-src"]); 
//top content h4

document.getElementsByTagName('h4')[0].textContent ='Features'
document.getElementsByTagName('h4')[1].textContent ='About'
// top content p tag
document.getElementsByTagName('p')[0].textContent ='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.getElementsByTagName('p')[1].textContent ='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// code for middle image
let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom content
document.getElementsByTagName('h4')[2].textContent ='Services'
document.getElementsByTagName('h4')[3].textContent ='Product'
document.getElementsByTagName('h4')[4].textContent ='Vision'
//Bottom Paragraphs 

document.getElementsByTagName('p')[2].textContent ='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.getElementsByTagName('p')[3].textContent ='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.getElementsByTagName('p')[4].textContent ='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
//contact
document.getElementsByTagName('h4')[5].textContent ='Contact'
document.getElementsByTagName('p')[5].textContent = '123 456 Street Somewhere,USA'
document.getElementsByTagName('p')[6].textContent = '1 (888) 888-8888'
document.getElementsByTagName('p')[7].textContent = 'sales@greatIdea.io'
//footer
document.getElementsByTagName('p')[8].textContent ="Copyright Great Idea! 2020"





