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

// anchor tag manipulation
let a = document.querySelectorAll('a')
a[0].textContent = "Services"
a[1].textContent = "Product"
a[2].textContent = "Vision"
a[3].textContent = "Features"
a[4].textContent = "About"
a[5].textContent = "Contact"

// h1 manipulation

let h1 = document.querySelector('h1')
h1.innerHTML = "DOM <br>Is<br> Awesome"

// image manipulation

let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src','/img/header-img.png')

// button manipulation

let button = document.querySelector('button')
button.textContent = "Get Started"

// text snippet manipulation

let h4 = document.querySelectorAll('h4')
h4[0].textContent = "FEATURES"
h4[1].textContent = "About"
h4[2].textContent = "Services"
h4[3].textContent = "Product"
h4[4].textContent = "Vision"

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src','/img/mid-page-accent.jpg')

let p = document.querySelectorAll('p')
p[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
p[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
p[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
p[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
p[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// contact manipulation

h4[5].textContent = "Contact"

p[5].innerHTML = "123 Way 456 Street <br>Somewhere, USA</br>"
p[6].textContent = "1 (888) 888-8888"
p[7].textContent = "sales@greatidea.io"

// footer

p[8].textContent ="Copyright Great Idea! 2018"

// style manipulation

let anchor = document.querySelectorAll('a')
anchor[0].style.color = "green"
anchor[1].style.color = "green"
anchor[2].style.color = "green"
anchor[3].style.color = "green"
anchor[4].style.color = "green"
anchor[5].style.color = "green"
// anchor[6].style.color = "green"
// anchor[7].style.color = "green"

// order manipulation

let node = document.createElement('a')
let secNode = document.createElement('a')

let navNode = document.createTextNode('Sponsors')
let secNavNode = document.createTextNode('Profile')

document.querySelector('nav').appendChild(node);
document.querySelector('nav').prepend(secNode);
node.appendChild(navNode)
secNode.prepend(secNavNode)

node.style.color = "green"
secNode.style.color = "green"