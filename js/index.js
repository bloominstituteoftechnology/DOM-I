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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const title = document.querySelector.textContent = 'Great Idea!'
    // console.log(title)

const newLink = document.createElement('a')
newLink.textContent = 'Services'
newLink.href = '#'
document.querySelector('.container').appendChild(newLink)

const nextLink = document.createElement('a')
nextLink.textContent = 'Products'
nextLink.href = '#'
document.querySelector('.container').appendChild(nextLink)

const thirdLink = document.createElement('a')
thirdLink.textContent = 'Vision'
thirdLink.href = '#'
document.querySelector('.container').appendChild(thirdLink)

const fourthLink = document.createElement('a')
fourthLink.textContent = 'Featuers'
fourthLink.href = '#'
document.querySelector('.container').appendChild(fourthLink)

const fifthLink = document.createElement('a')
fifthLink.textContent = 'About'
fifthLink.href = '#'
document.querySelector('.container').appendChild(fifthLink)

const sixthLink = document.createElement('a')
sixthLink.textContent = 'Contact'
sixthLink.href = '#'
document.querySelector('.container').appendChild(sixthLink)

// console.log(newLink)
// console.log(nextLink)
// console.log(thirdLink)
// console.log(fourthLink)
// console.log(fifthLink)
// console.log(sixthLink)

let heading = document.querySelector('.cta-text', 'h1');
heading.textContent = 'Dom is Awesome'
    // console.log(heading)

let featuresH4 = document.querySelector('.top-content', '.text-content', 'h4');
featuresH4.textContent = 'Features'

let featuresP = document.querySelector('.top-content', '.text-content', 'p');
featuresP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


let aboutH4 = document.querySelector('.top-content', '.text-content', 'h4');
aboutH4.textContent = 'About'

let aboutP = document.querySelector('.top-content', '.text-content', 'p')
aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'

let servicesH4 = document.querySelector('.bottom-content', '.text-content', 'h4');
servicesH4.textContent = 'Services'

let servicesP = document.querySelector('.bottom-content', '.text-content', 'p');
servicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

let productH4 = document.querySelector('.bottom-content', '.text-content', 'h4');
productH4.textContent = 'Product'

let productP = document.querySelector('.bottom-content', '.text-content', 'p');
productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

let visionH4 = document.querySelector('.bottom-content', '.text-content', 'h4');
visionH4.textContent = 'Vision'

let visionP = document.querySelector('.bottom-content', '.text-content', 'p');
visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

let cont = document.querySelector('.contact', 'h4')
cont.textContent = 'Contact'

let contP = document.querySelector('.contact', 'p')
contP.textContent = ' 123 Way 456 Street, Somewhere, USA'

let contPhone = document.querySelector('.contact', 'p')
contPhone.textContent = '1(888) 888-8888'

let contEmailAdrs = document.querySelector('.contact', 'p')
contEmailAdrs.textContent = 'sales@greatidea.io'

let bottom = document.querySelector('footer', 'p')
bottom.textContent = 'Copyright Great Idea! 2020'