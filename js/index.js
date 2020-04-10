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
  copyright.textContent = 'Copyright Great Idea! 2018'

