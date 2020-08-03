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

let headerLinks = document.querySelectorAll('a')

Array.from(headerLinks).forEach(links => {
  links.style.color = 'green'
})

let nav = document.querySelector('nav')

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

let newLink1 = document.createElement('a')
newLink1.textContent = 'Link 1'
newLink1.href = '#'
newLink1.style.color = 'green'
nav.appendChild(newLink1)

let newLink2 = document.createElement('a')
newLink2.textContent = 'Link 2'
newLink2.href = '#'
newLink2.style.color = 'green'
nav.appendChild(newLink2)

//Section cta
let cta = document.querySelector('.cta')
let ctaText = cta.querySelector('h1')
let ctaButton = cta.querySelector('button')
let ctaImg = cta.querySelector('img')
let br = document.createElement('br')


ctaText.innerHTML = "DOM <br> Is <br> Awesome"
// ctaText.appendChild(br)
ctaButton.textContent = "Get Started"
ctaImg.setAttribute('src', siteContent["cta"]['img-src'])



//Section - main-content
let topCont = document.querySelector('.top-content')

let featureDiv = topCont.querySelector('.text-content:nth-of-type(1)')
let featureHead = featureDiv.querySelector('h4')
let featureP = featureDiv.querySelector('p')

featureHead.textContent = "Features"
featureP.textContent = siteContent['main-content']['features-content']


let aboutDiv = topCont.querySelector('.text-content:nth-of-type(2)')
let aboutHead = aboutDiv.querySelector('h4')
let aboutP = aboutDiv.querySelector('p')

aboutHead.textContent = "About"
aboutP.textContent = siteContent['main-content']['about-content']

let mainContImg = document.querySelector("#middle-img")
mainContImg.setAttribute('src', "img/mid-page-accent.jpg")

let botCont = document.querySelector('.bottom-content')

let serviceDiv = botCont.querySelector('.text-content:nth-of-type(1)')
let serviceHead = serviceDiv.querySelector('h4')
let serviceP = serviceDiv.querySelector('p')
serviceHead.textContent = "Services"
serviceP.textContent = siteContent['main-content']['services-content']


let productDiv = botCont.querySelector('.text-content:nth-of-type(2)')
let productHead = productDiv.querySelector('h4')
let productP = productDiv.querySelector('p')
productHead.textContent = "Product"
productP.textContent = siteContent['main-content']['product-content']

let visionDiv = botCont.querySelector('.text-content:nth-of-type(3)')
let visionHead = visionDiv.querySelector('h4')
let visionP = visionDiv.querySelector('p')
visionHead.textContent = "Vision"
visionP.textContent = siteContent['main-content']['vision-content']

//Section - conact

let contact = document.querySelector('.contact')
let contactHead = contact.querySelector('h4')
let address = contact.querySelector('p:nth-of-type(1)')
let phone = contact.querySelector('p:nth-of-type(2)')
let email = contact.querySelector('p:nth-of-type(3)')

contactHead.textContent = siteContent['contact']['contact-h4']
address.innerHTML = "123 Way 456 Street <br> Somewhere, USA"
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']


//footer

let foot = document.querySelector('footer')
let copyright = foot.querySelector('p')

copyright.textContent = siteContent['footer']['copyright']