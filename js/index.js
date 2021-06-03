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


const a = document.querySelectorAll('a')
  a[0].textContent = "Services"
  a[1].textContent = "Product"
  a[2].textContent = "Vision"
  a[3].textContent = "Features"
  a[4].textContent = "About"
  a[5].textContent = "Contact"

  
const h1 = document.querySelector('h1')
h1.textContent = "DOM is awesome"

const button = document.querySelector('button')
button.textContent = "Get Started"

const ctaImg = document.querySelector('#cta-img')
  ctaImg.src = 'img/header-img.png'

const features = document.querySelectorAll('.text-content')[0]
  features.children[0].textContent = "Features"
  features.children[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const about = document.querySelectorAll('.text-content')[1]
  about.children[0].textContent = "About"
  about.children[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.querySelector('.middle-img')
  midImg.src = 'img/mid-page-accent.jpg'

const services = document.querySelectorAll('.text-content')[2]
  services.children[0].textContent = "Services"
  services.children[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const product = document.querySelectorAll('.text-content')[3]
  product.children[0].textContent = "Product"
  product.children[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const vision = document.querySelectorAll('.text-content')[4]
  vision.children[0].textContent = "Vision"
  vision.children[1].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contact = document.querySelector('.contact')

  const contactHeader = contact.children[0].textContent = "Contact"
  const contactP = contact.children[1].textContent = "123 Way 456 Street Somewhere, USA"
  const contactP2 = contact.children[2].textContent = "1 (888) 888-8888"
  const contactP3 = contact.children[3].textContent = "sales@greatidea.io"

const footer = document.querySelector('footer')
  footer.textContent = "Copyright Great Idea! 2018"





