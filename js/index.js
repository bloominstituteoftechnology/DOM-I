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
"img-src": "img/mid-page-accent.jpg",
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

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

let middleimg = document.getElementById("middle-img")
middleimg.setAttribute('src', siteContent["main-content"]["img-src"])

const headline = document.querySelector('h1')
headline.textContent =  'DOM Is Awesome'

const buttn = document.querySelector('button')
buttn.textContent = 'Get Started'

let navItem1 = document.querySelectorAll('a')
for (let i = 0; i < navItem1.length - 5; i++){
navItem1[i].textContent = 'Services';

}

let navItem2 = document.querySelectorAll('a')
for (let i = 1; i < navItem2.length - 4; i++){
navItem2[i].textContent = 'Product';

}
let navItem3 = document.querySelectorAll('a')
for (let i = 2; i < navItem3.length - 3; i++){
navItem3[i].textContent = 'Vision';

}
let navItem4 = document.querySelectorAll('a')
for (let i = 3; i < navItem4.length - 2; i++){
navItem4[i].textContent = 'Features';

}
let navItem5 = document.querySelectorAll('a')
for (let i = 4; i < navItem5.length - 1; i++){
navItem5[i].textContent = 'About';

}
let navItem6 = document.querySelectorAll('a')
for (let i = 5; i < navItem6.length; i++){
navItem6[i].textContent = 'Contact';

}
let features = document.querySelectorAll('.text-content h4')
for (let i = 0; i < features.length - 4; i++){
features[i].textContent ='Features';

}

let featpara = document.querySelectorAll('.text-content p')
for (let i = 0; i < featpara.length - 4; i++){
  featpara[i].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.' ;

}

let about = document.querySelectorAll('.text-content h4')
for (let i = 1; i < about.length - 3; i++){
about[i].textContent ='About';

}

let aboutpara = document.querySelectorAll('.text-content p')
for (let i = 1; i < aboutpara.length - 3; i++){
  aboutpara[i].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.' ;

}

let services = document.querySelectorAll('.text-content h4')
for (let i = 2; i < services.length - 2; i++){
services[i].textContent ='Services';

}

let servpara = document.querySelectorAll('.text-content p')
for (let i = 2; i < servpara.length - 2; i++){
  servpara[i].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.' ;

}

let product = document.querySelectorAll('.text-content h4')
for (let i = 3; i < product.length - 1; i++){
product[i].textContent ='Product';

}

let prodpara = document.querySelectorAll('.text-content p')
for (let i = 3; i < prodpara.length - 1; i++){
  prodpara[i].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

}

let vision = document.querySelectorAll('.text-content h4')
for (let i = 4; i < vision.length; i++){
vision[i].textContent ='Vision';

}

let vispara = document.querySelectorAll('.text-content p')
for (let i = 4; i < vispara.length; i++){
  vispara[i].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

}

let contact = document.querySelector('.contact h4')
contact.textContent = 'Contact'

let address = document.querySelector('.contact p')
address.textContent = '123 Way 456 Street Somewhere, USA'

let phone = document.querySelectorAll('.contact p')
for (let i = 1; i < phone.length - 1; i++){
  phone[i].textContent = '1 (888) 888-8888';
}

let email = document.querySelectorAll('.contact p')
for (let i = 2; i < email.length; i++){
  email[i].textContent = 'sales@greatidea.io';
}

let copyright = document.querySelector('footer p')
copyright.textContent = 'Copyright Great Idea! 2018';


const navLinks = document.getElementsByTagName('a')
for (let i = 0; i < navLinks.length; i++){
  navLinks[i].style.color = 'green'
} 


const newImg = document.createElement('img');
newImg.src = 'data:image/jpeg;base64,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'

const parentElement = document.querySelector('.cta-text');
parentElement.prepend(newImg)


const newLink = document.createElement('a');
  newLink.textContent = 'Careers'
  newLink.style.color = 'green'
const parent = document.querySelector('nav');
parent.append(newLink);