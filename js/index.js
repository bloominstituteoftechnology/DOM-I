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

// showing nav
let nav = document.querySelectorAll('nav a')
//console.log(nav);
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];
nav.forEach(element =>{
  element.style.color = 'blue';
})

//showing H1
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];


//showing button
let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// showing circled image
let headerIMG = document.getElementById('cta-img');
headerIMG.setAttribute('src' , siteContent['cta']['img-src']);







//showing h4 features
let features = document.querySelectorAll('h4')[0];
//console.log(features);
features.textContent = siteContent['main-content']['features-h4']


//showing feature content
let featureContent = document.querySelectorAll('p');
//console.log(featureContent);
featureContent[0].textContent = siteContent['main-content']['features-content']



//showing h4 about
let about = document.querySelectorAll('h4')[1];
//console.log(about);
about.textContent = siteContent['main-content']['about-h4']

//showing feature content
let aboutContent = document.querySelectorAll('p');
//console.log(aboutContent);
aboutContent[1].textContent = siteContent['main-content']['about-content']




// showing middle image
let middleIMG = document.getElementById('middle-img');
middleIMG.setAttribute('src' , siteContent['main-content']['middle-img-src']);




//showing h4 services
let services = document.querySelectorAll('h4')[2];
services.textContent = siteContent['main-content']['services-h4'];

//showing services content
let servicesContent = document.querySelectorAll('p');
servicesContent[2].textContent = siteContent['main-content']['services-content']



//showing h4 product
let product = document.querySelectorAll('h4')[3];
product.textContent = siteContent['main-content']['product-h4']

//showing product content
let productContent = document.querySelectorAll('p');
productContent[3].textContent = siteContent['main-content']['product-content']



//showing h4 vision
let vision = document.querySelectorAll('h4')[4];
vision.textContent = siteContent['main-content']['vision-h4']

//showing vision content
let visContent = document.querySelectorAll('p');
visContent[4].textContent = siteContent['main-content']['vision-content']


//showing contact h4
let contact = document.querySelectorAll('h4')[5];
//console.log(contact);
contact.textContent = siteContent['contact']['contact-h4'];


//showing address in contact
let address = document.querySelectorAll('p');
//console.log(address);
address[5].textContent = siteContent['contact']['address'];


//showing phone number 
let phone = document.querySelectorAll('p');
phone[6].textContent = siteContent['contact']['phone'];

let email = document.querySelectorAll('p');
email[7].textContent = siteContent['contact']['email'];





let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
