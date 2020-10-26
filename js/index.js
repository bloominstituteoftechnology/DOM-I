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

const headerIMG = document.querySelector('#cta-img')
headerIMG.setAttribute('src', siteContent['cta']['img-src'])

let nav = document.querySelector('nav')
nav.children[0].textContent = 'Services'
nav.children[1].textContent = 'Product'
nav.children[2].textContent = 'Vision'
nav.children[3].textContent = 'Features'
nav.children[4].textContent = 'About'
nav.children[5].textContent = 'Contract'

const ctaHeader = document.querySelector('cta, h1')
ctaHeader.textContent = 'DOM IS AWESOME'

const ctaButton = document.querySelector('cta, button')
ctaButton.textContent = 'Get Started'

const featuresHeader =  document.querySelector('div .top-content .text-content:nth-of-type(1) h4')

const featuresContent = document.querySelector('div .top-content .text-content:nth-of-type(1) p')

featuresHeader.textContent = 'Features'

featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const aboutHeader = document.querySelector('div .top-content .text-content:nth-of-type(2) h4')

const aboutContent = document.querySelector('div .top-content .text-content:nth-of-type(2) p')

aboutHeader.textContent = 'About'

aboutContent.textContent = 'Aout content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const MainImg = document.querySelector('.middle-img')
MainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const servicesHeader = document.querySelector('div .bottom-content .text-content:nth-of-type(1) h4')

const servicesContent = document.querySelector('div .bottom-content .text-content:nth-of-type(1) p')

servicesHeader.textContent = 'Services'

servicesContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const productHeader = document.querySelector('div .bottom-content .text-content:nth-of-type(2) h4')

const productContent = document.querySelector('div .bottom-content .text-content:nth-of-type(2) p')

productHeader.textContent = 'Product'

productContent.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const visionHeader = document.querySelector('div .bottom-content .text-content:nth-of-type(3) h4')

const visionContent = document.querySelector('div .bottom-content .text-content:nth-of-type(3) p')

visionHeader.textContent = 'Vision'

visionContent.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contactHeader = document.querySelector('.contact h4')

contactHeader.textContent = 'Contact'

const contactContent = document.querySelectorAll('.contact p')

const contactContent0 = contactContent[0]

contactContent0.textContent = '123 Way 456 Street'



console.log(contactContent.innerText)

// contactContent.innerText = siteContent.contact.phone.split('123 Way 456 Street Somewhere, USA' '1 (888) 888-8888' 'sales@greatidea.io').join('/n')


// contactContent1.textContent = '123 Way 456 Street Somewhere, USA'
// contactContent2.textContent = '1 (888) 888-8888'
// contactContent3.textContent = 'sales@greatidea.io'

const footer = document.querySelector('footer p')

footer.textContent = 'Copyright Great Idea! 2018'

