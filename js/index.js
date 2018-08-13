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


const navElements = document.querySelectorAll('a');

for(let i = 0; i < navElements.length ; i++) {
  navElements[0].innerHTML = 'Services';
  navElements[1].innerHTML = 'Product';
  navElements[2].innerHTML = 'Vision';
  navElements[3].innerHTML = 'Feature';
  navElements[4].innerHTML = 'About';
  navElements[5].innerHTML = 'Contact';
  
}

// console.log(navElements);


//Add h1 text 'DOM IS AWESOME'
const ctaFirstHeading = document.querySelector('h1');
ctaFirstHeading.innerHTML = 'DOM IS AWESOME';


//Add button text 'Get Started'
const btnText = document.querySelector('button');
btnText.innerHTML = 'Get Started';


// ctaFirstHeading.style.color = "black";
// ctaFirstHeading.style.font-size = "72px";
//  ctaFirstHeading.style.text-align = "center";

// font-size: 72px;
//     text-align: center;
//     letter-spacing: 5px;
//     display: flex;
//     justify-content: center;
//     flex-flow: column;
//     align-items: center;
//     margin: 0 82px 0 0;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', 'img/header-img.png')



let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', 'img/mid-page-accent.jpg')




