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

//Selected all a's in nav and added text required 
const navElements = document.querySelectorAll('a');
for(let i = 0; i < navElements.length ; i++) {
  navElements[0].innerHTML = 'Services';
  navElements[1].innerHTML = 'Product';
  navElements[2].innerHTML = 'Vision';
  navElements[3].innerHTML = 'Feature';
  navElements[4].innerHTML = 'About';
  navElements[5].innerHTML = 'Contact';
  
}

//Added h1 text 'DOM IS AWESOME'
const ctaFirstHeading = document.querySelector('h1');
//ctaFirstHeading.innerHTML = 'DOM <br> IS <br> AWESOME';
ctaFirstHeading.innerHTML = siteContent['cta']['h1'] //Not Centered

//Added button text 'Get Started'
const btnText = document.querySelector('button');
//btnText.innerHTML = 'Get Started';
btnText.innerHTML = siteContent['cta']['button']

//Added header-img.png in #cta-img
let ctaImg = document.getElementById('cta-img');
// ctaImg.setAttribute('src', 'img/header-img.png')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


let textContentList = document.querySelectorAll('.text-content');
//console.log(textContentList);
textContentList[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
textContentList[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];
textContentList[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];
textContentList[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];
textContentList[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
textContentList[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];
textContentList[3].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
textContentList[3].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];
textContentList[4].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
textContentList[4].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];

//Added mid-page-accent.jpg in #middle-img
let middleImg = document.getElementById('middle-img');
//middleImg.setAttribute('src', 'img/mid-page-accent.jpg')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])






