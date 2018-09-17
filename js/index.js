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

document.querySelector('header nav').style.justifyContent = 'space-around'

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"]);

//nav links
let navLinks = document.querySelectorAll('a');
navLinks[0].innerText = siteContent.nav["nav-item-1"]

navLinks[1].innerText = siteContent.nav["nav-item-2"]

navLinks[2].innerText = siteContent.nav["nav-item-3"]

navLinks[3].innerText = siteContent.nav["nav-item-4"]

navLinks[4].innerText = siteContent.nav["nav-item-5"]

navLinks[5].innerText = siteContent.nav["nav-item-6"]

//navLinks styling


//cta
const ctaLogo = document.getElementById("cta-img")
ctaLogo.setAttribute('src', siteContent.cta["img-src"])

const ctaText = document.querySelector(".cta-text h1")
ctaText.innerText = siteContent.cta['h1'];

const ctaButton = document.querySelector(".cta-text button")
ctaButton.innerText = siteContent.cta['button']

//main-content
const textContent = document.querySelectorAll('.text-content p')
const textTitle = document.querySelectorAll('.text-content h4')

textTitle[0].innerText = siteContent["main-content"]['features-h4']
textContent[0].innerText = siteContent["main-content"]['features-content']

textTitle[1].innerText = siteContent["main-content"]['about-h4']
textContent[1].innerText = siteContent["main-content"]['about-content']

const midImage = document.querySelector('.middle-img')
midImage.setAttribute('src', siteContent['main-content']["middle-img-src"])

textTitle[2].innerText = siteContent["main-content"]['services-h4']
textContent[2].innerText = siteContent["main-content"]['services-content']

textTitle[3].innerText = siteContent["main-content"]['product-h4']
textContent[3].innerText = siteContent["main-content"]['product-content']

textTitle[4].innerText = siteContent["main-content"]['vision-h4']
textContent[4].innerText = siteContent["main-content"]['vision-content']

//contact
const contactTitle = document.querySelector(".contact h4")
const contactInfo = document.querySelectorAll(".contact p")

contactTitle.innerText = siteContent["contact"]["contact-h4"]
contactInfo[0].innerText = siteContent["contact"]["address"]
contactInfo[1].innerText = siteContent["contact"]["phone"]
contactInfo[2].innerText = siteContent["contact"]["email"]

//footer
const footerText = document.querySelector("footer p")
footerText.innerHTML = siteContent.footer.copyright

//TASK 4
navLinks.forEach( a => {
  a.style.color = 'green'
});

const newLink1 = document.createElement('a');
const theNav = document.querySelector('nav')
newLink1.innerText = 'Link 1'
newLink1.href = 'https://lambdaschool.com'
newLink1.style.color = 'green'
theNav.prepend(newLink1)

const newLink2 = document.createElement('a');
// const theNav = document.querySelector('nav')
newLink2.innerText = 'Link 2'
newLink2.href = 'https://lambdaschool.com'
newLink2.style.color = 'green'
theNav.append(newLink2)

