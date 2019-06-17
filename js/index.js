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

// Navigation
const header = document.querySelector('header')
header.style.position = 'fixed'
header.style.top = '0'
header.style.background = '#fff'
header.style.paddingBottom = '20px'

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll("nav a")
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

navLinks.forEach(color => color.style.color = 'green')

const allNavs = document.querySelector('nav')

const blog = document.createElement('a')
blog.textContent = "Blog"

const home = document.createElement('a')
home.textContent = "Home"

allNavs.appendChild(blog)
allNavs.prepend(home)

blog.style.color = 'green'
blog.style.cursor = 'pointer'
home.style.color = 'green'
home.style.cursor = 'pointer'


// CTA
let cta = document.querySelector('.cta')
cta.style.marginTop = '112px'

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaTitle = document.querySelector('.cta-text > h1')
ctaTitle.textContent = siteContent['cta']['h1']
ctaTitle.innerHTML = 'DOM <br> IS <br> AWESOME'

let ctaButton = document.querySelector('.cta-text > button')
ctaButton.textContent = siteContent['cta']['button']


// Middle Content
let mainTitle = document.querySelectorAll('.text-content h4')
mainTitle[0].textContent = siteContent['main-content']['features-h4']
mainTitle[1].textContent = siteContent['main-content']['about-h4']
mainTitle[2].textContent = siteContent['main-content']['services-h4']
mainTitle[3].textContent = siteContent['main-content']['product-h4']
mainTitle[4].textContent = siteContent['main-content']['vision-h4']

let para = document.querySelectorAll('.text-content  p')
para[0].textContent = siteContent['main-content']['features-content']
para[1].textContent = siteContent['main-content']['about-content']
para[2].textContent = siteContent['main-content']['services-content']
para[3].textContent = siteContent['main-content']['product-content']
para[4].textContent = siteContent['main-content']['vision-content']


let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]['middle-img-src'])


// Contact
let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

let contactPara = document.querySelectorAll('.contact p')
contactPara[0].textContent = siteContent['contact']['address']
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['email']

contactPara[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'

// footer 
let footer = document.querySelector('footer')
footer.textContent = siteContent['footer']['copyright']
