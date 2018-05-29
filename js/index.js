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

//MY CODE BELOW
//above is shortened below, using no VAR
// document.getElementById('logo-img').setAttribute('src', siteContent["nav"]["img-src"]) ;

let myNavItems = document.getElementsByTagName('a') ;
// console.log(myNavItems);
myNavItems[0].innerHTML = (siteContent['nav']['nav-item-1']) ;
myNavItems[1].innerHTML = (siteContent['nav']['nav-item-2']) ;
myNavItems[2].innerHTML = (siteContent['nav']['nav-item-3']) ;
myNavItems[3].innerHTML = (siteContent['nav']['nav-item-4']) ;
myNavItems[4].innerHTML = (siteContent['nav']['nav-item-5']) ;

document.querySelector('.cta-text h1').innerHTML = (siteContent['cta']['h1'])

let myCtaClassButton = document.querySelector('.cta-text button') ;
// console.log(myCtaClassButton);
myCtaClassButton.innerHTML = (siteContent['cta']['button']) ;

document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']) ;


let myTopContent = document.querySelectorAll('.top-content') ;
// console.log(myTopContent[0].children[0].children[0]);
myTopContent[0].children[0].children[0].innerHTML = (siteContent['main-content']['features-h4']) ;
myTopContent[0].children[0].children[1].innerHTML = (siteContent['main-content']['features-content']) ;
myTopContent[0].children[1].children[0].innerHTML = (siteContent['main-content']['about-h4']) ;
myTopContent[0].children[1].children[1].innerHTML = (siteContent['main-content']['about-content']) ;

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let myBottomContent = document.querySelector('.bottom-content') ;
myBottomContent.children[0].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['services-h4']) ;
