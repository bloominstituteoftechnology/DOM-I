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

//NAV//

const navItem0 = document.querySelector('nav a')
navItem0.textContent = 'Services'

const navItem1 = document.getElementsByTagName('a')[1]
navItem1.textContent = 'Product'

const navItem2= document.getElementsByTagName('a')[2]
navItem2.textContent = 'Vision'

const navItem3 = document.getElementsByTagName('a')[3]
navItem3.textContent = 'Features'

const navItem4 = document.getElementsByTagName('a')[4]
navItem4.textContent = 'About'

const navItem5 = document.getElementsByTagName('a')[5]
navItem5.textContent = 'Contact'

//CTA//

const titleName = document.querySelector('h1')
titleName.textContent = 'Dom is Awesome'

const buttonName = document.getElementsByTagName('button')[0]
buttonName.textContent = 'Get Started'

const imageHeader = document.getElementById('cta-img')
imageHeader.src = 'img/header-img.png'

//Main Content//

const subtitle1 = document.getElementsByTagName('h4')[0]
subtitle1.textContent = 'Features'

const paraFeatures = document.getElementsByTagName('p')[0]
paraFeatures.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const subtitle2 = document.getElementsByTagName('h4')[1]
subtitle2.textContent = 'About'

const paraAbout = document.getElementsByTagName('p')[1]
paraAbout.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImage = document.getElementById('middle-img')
middleImage.src = 'img/mid-page-accent.jpg'

const subtitle3 = document.getElementsByTagName('h4')[2]
subtitle3.textContent = 'Services'

const paraServices = document.getElementsByTagName('p')[2]
paraServices.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const subtitle4 = document.getElementsByTagName('h4')[3]
subtitle4.textContent = 'Product'

const paraProduct = document.getElementsByTagName('p')[3]
paraProduct.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const subtitle5 = document.getElementsByTagName('h4')[4]
subtitle5.textContent = 'Vision'

const paraVision = document.getElementsByTagName('p')[4]
paraVision.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//Contact//

const contactH4 = document.getElementsByTagName('h4')[5]
contactH4.textContent = 'Contact'

const paraAddress = document.getElementsByTagName('p')[5]
paraAddress.textContent = '123 Way 456 Street Somewhere, USA'

const paraPhone = document.getElementsByTagName('p')[6]
paraPhone.textContent = '1 (888) 888-8888'

const paraEmail = document.getElementsByTagName('p')[7]
paraEmail.textContent = 'sales@greatidea.io'

//Footer//

const footerCopyright = document.getElementsByTagName('p')[8]
footerCopyright.textContent = 'Copyright Great Idea! 2018'



