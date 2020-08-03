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
//Header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Nav
let anchor1 = document.querySelector('a:nth-of-type(1)')
anchor1.textContent = 'Services'
let anchor2 =  document.querySelector('a:nth-of-type(2)')
anchor2.textContent = 'Product'
let anchor3 =  document.querySelector('a:nth-of-type(3)')
anchor3.textContent = 'Vision'
let anchor4 =  document.querySelector('a:nth-of-type(4)')
anchor4.textContent = 'Features'
let anchor5 =  document.querySelector('a:nth-of-type(5)')
anchor5.textContent = 'About'
let anchor6 =  document.querySelector('a:nth-of-type(6)')
anchor6.textContent = 'Contact'
//Section cta
let cta = document.querySelector('.cta')
let ctaText = cta.querySelector('h1')
let ctaButton = cta.querySelector('button')
let ctaImg = cta.querySelector('img')


ctaText.textContent = "DOM Is Awesome"
ctaButton.textContent = "Get Started"
ctaImg.setAttribute('src', siteContent["cta"]['img-src'])



//Section - main-content



//Section - conact



//footer
