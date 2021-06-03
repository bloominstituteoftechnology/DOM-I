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



//Nav

let links = document.querySelectorAll('a')

links[0].textContent = siteContent['nav']['nav-item-1']

links[1].textContent = siteContent['nav']['nav-item-2']

links[2].textContent = siteContent['nav']['nav-item-3']

links[3].textContent = siteContent['nav']['nav-item-4']

links[4].textContent = siteContent['nav']['nav-item-5']

links[5].textContent = siteContent['nav']['nav-item-6']


//CTA

let h1 = document.querySelector('h1')

h1.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button')

ctaButton.textContent = siteContent['cta']['button']

let headerImg = document.getElementById('cta-img')

headerImg.setAttribute('src', siteContent['cta']['img-src'])


//Main Content

let subtitles = document.querySelectorAll('h4')

subtitles[0].textContent = siteContent['main-content']['features-h4']
subtitles[1].textContent = siteContent['main-content']['about-h4']
subtitles[2].textContent = siteContent['main-content']['services-h4']
subtitles[3].textContent = siteContent['main-content']['product-h4']
subtitles[4].textContent = siteContent['main-content']['vision-h4']

let paragraphs = document.querySelectorAll('p')

paragraphs[0].textContent = siteContent['main-content']['features-content']
paragraphs[1].textContent = siteContent['main-content']['about-content']
paragraphs[2].textContent = siteContent['main-content']['services-content']
paragraphs[3].textContent = siteContent['main-content']['product-content']
paragraphs[4].textContent = siteContent['main-content']['vision-content']

let middleImg = document.getElementById('middle-img')

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact

let contact = document.querySelector('.contact h4')

contact.textContent = siteContent['contact']['contact-h4']

let address = contact.nextElementSibling

address.textContent = siteContent['contact']['address']

let phoneNum = address.nextElementSibling

phoneNum.textContent = siteContent['contact']['phone']

let email = phoneNum.nextElementSibling

email.textContent = siteContent['contact']['email']


//Footer

let footer = document.querySelector('footer p')

footer.textContent = siteContent['footer']['copyright']

//make nav links green

links.forEach(a => a.style.color = 'green')

//add 2 links

let prependLink = document.createElement('a')
let appendLink = document.createElement('a')
let navBar = document.querySelector('header nav')

prependLink.textContent = 'Prepend'
appendLink.textContent = 'Append'

navBar.prepend(prependLink)
navBar.append(appendLink)