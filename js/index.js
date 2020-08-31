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

// Nav Section
let navItems = document.querySelectorAll('a').forEach((item, i)=>item.textContent = siteContent['nav'][`nav-item-${i}`])

// Call To Action Section
let ctaText = document.querySelector('.cta-text')
ctaText.children[0].textContent = siteContent['cta']['h1']
ctaText.children[1].textContent = siteContent['cta']['button']

let ctaImg = document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src'])

// Main Content Section
let mainH4 = document.querySelectorAll('.main-content h4')
let mainP = document.querySelectorAll('.main-content p')
let middleImg = document.querySelector('.middle-img')

const mainText = (index, item)=>{
  let newH4=mainH4[index].textContent = siteContent['main-content'][`${item}-h4`]
  let newP=mainP[index].textContent = siteContent['main-content'][`${item}-content`]
  return {newH4, newP}
}

// Top Content
mainText(0, 'features')
mainText(1, 'about')

// Middle Image
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


// Bottom Content
mainText(2, 'services')
mainText(3, 'product')
mainText(4, 'vision')

// Contacts Section
let contacts = document.querySelector('.contact').children

contacts[0].textContent = siteContent['contact']['contact-h4']
contacts[1].textContent = siteContent['contact']['address']
contacts[2].textContent = siteContent['contact']['phone']
contacts[3].textContent = siteContent['contact']['email']

// Footer Section
let footer = document.querySelector('footer p').textContent = siteContent['footer']['copyright']