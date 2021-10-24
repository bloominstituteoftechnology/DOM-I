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

//NOTES ON NEEDFUL:: TEXT CONTENT OF <a> nav tags!
//ServicesX ProductX VisionX FeaturesX AboutX ContactX

let navItem1 = document.querySelector('a:nth-of-type(1)');
navItem1.textContent=(siteContent['nav']['nav-item-1']);

let navItem2 = document.querySelector('a:nth-of-type(2)');
navItem2.textContent=(siteContent['nav']['nav-item-2']);

let navItem3 = document.querySelector('a:nth-of-type(3)');
navItem3.textContent=(siteContent['nav']['nav-item-3']);

let navItem4 = document.querySelector('a:nth-of-type(4)');
navItem4.textContent=(siteContent['nav']['nav-item-4']);

let navItem5 = document.querySelector('a:nth-of-type(5)');
navItem5.textContent=(siteContent['nav']['nav-item-5']);

let navItem6 = document.querySelector('a:nth-of-type(6)');
navItem6.textContent=(siteContent['nav']['nav-item-6']);

//cta section
//cta text content needed for div class 'cta-text'
//<h1> DOM <br> Is <br> Awesome </h1>
//button text content 'Get Started'
//// img id #cta-img src needed:: img/header-img.png

//main content sectionr
//class top-content 
//// class text-content
//////// features-h4
//////// features-content (<p>)
//////// about-h4
//////// about-content (<p>)

//middle-img id src needs updated to
// middle-img-src

//bottom content sectionr
//class bottom-content
//// class text-content
//////// services-h4
//////// services-content
//////// product-h4
//////// product-content
//////// vision-h4
//////// vision-content

//contact sectionr
//class contact
//// contact-h4
//////// address (<br> between 'Street' and 'Somewhere')
//////// phone
//////// email ((alle* <p>))

//footer 
//copyright <p>