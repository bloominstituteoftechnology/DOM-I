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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
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

//nav
const navBar = document.querySelector('nav')
const navLink1 = navBar.querySelector('a')
const navLink2 = navLink1.nextElementSibling
const navLink3 = navLink2.nextElementSibling
const navLink4 = navLink3.nextElementSibling
const navLink5 = navLink4.nextElementSibling
const navLink6 = navLink5.nextElementSibling

navLink1.textContent = siteContent['nav']['nav-item-1']
navLink2.textContent = siteContent['nav']['nav-item-2']
navLink3.textContent = siteContent['nav']['nav-item-3']
navLink4.textContent = siteContent['nav']['nav-item-4']
navLink5.textContent = siteContent['nav']['nav-item-5']
navLink6.textContent = siteContent['nav']['nav-item-6']

//top section
const h1 = document.querySelector('h1')
const topSection = document.querySelector('.cta')
const topImage = topSection.querySelector('#cta-img')
const button = document.querySelector('button')

const addBR = (string) => string.split(" ").join("<br> "); //splits the string & adds line break after each word. (Borrowed idea from Krista Verleger as I saw her explaining it in the help channel. Seemed like a fantastic fix for the line breaks not being in place)
h1.innerHTML = addBR(siteContent["cta"]["h1"]) 

topImage.src = siteContent['cta']['img-src']
button.textContent = siteContent['cta']['button']

//main content

const midImg = document.getElementById('middle-img')
midImg.src = siteContent['main-content']['middle-img-src']

const h4 = document.getElementsByTagName("h4")
h4[0].textContent = siteContent['main-content']['features-h4']
h4[1].textContent = siteContent['main-content']['about-h4']
h4[2].textContent = siteContent['main-content']['services-h4']
h4[3].textContent = siteContent['main-content']['product-h4']
h4[4].textContent = siteContent['main-content']['vision-h4']

const p = document.getElementsByTagName('p')
p[0].textContent = siteContent['main-content']['features-content']
p[1].textContent = siteContent['main-content']['about-content']
p[2].textContent = siteContent['main-content']['services-content']
p[3].textContent = siteContent['main-content']['product-content']
p[4].textContent = siteContent['main-content']['vision-content']

//contact
h4[5].textContent = siteContent['contact']['contact-h4']
p[5].innerHTML = siteContent['contact']['address']
p[6].textContent = siteContent['contact']['phone']
p[7].textContent = siteContent['contact']['email']

//footer
p[8].textContent = siteContent['footer']['copyright']

//change nav text to green
navLink1.style.color = 'green'
navLink2.style.color = 'green'
navLink3.style.color = 'green'
navLink4.style.color = 'green'
navLink5.style.color = 'green'
navLink6.style.color = 'green'
//looking back I feel that using .getElementsByTagName would be well used here as well, and would save me several lines of code in changing the link colors. Annotating instead of rewriting code because I am late turning in my project.

//.prepend
const addNav1 = document.createElement('a')
addNav1.textContent = 'Home'
addNav1.href = '#'
addNav1.style.color = 'green'
navBar.prepend(addNav1)

//.appendChild
const addNav2 = document.createElement('a')
addNav2.textContent = 'Blog'
addNav2.href = '#'
addNav2.style.color = 'green'
navBar.appendChild(addNav2)

