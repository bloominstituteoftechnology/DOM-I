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
console.log(siteContent)

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header//

// let nav = document.querySelector('nav');
// let navBar = document.querySelectorAll('a')
// navBar.forEach((item, index) => {
//   item.textContent = siteContent.nav[`nav-item-${index+1}`]
//   item.style.color = 'green'
// })

let newNavItem = document.createElement('a');
newNavItem.textContent='New Tab'
newNavItem.href = '#'

let newNavItem2 = document.createElement('a');
newNavItem2.textContent='New Tab 2'
newNavItem2.href = '#'

let navBar = document.querySelectorAll('a')
// let newNavBar = Array.from(navBar) 
document.querySelector('nav').appendChild(newNavItem2)
document.querySelector('nav').prepend(newNavItem)


navBar.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index+1}`]
  item.style.color = 'green'
})

//top section
// document.querySelector('.cta h1').textContent = siteContent.cta.h1

let header = document.getElementsByTagName('h1')[0];
header.innerHTML = siteContent['cta']['h1']

let topImage = document.querySelector('#cta-img')


topImage.src = siteContent.cta['img-src']

let topButton = document.querySelector('button')
topButton.textContent= 'Get Started'

//Middle Section//
let middle = document.querySelector('.main-content')
let middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src', "/img/mid-page-accent.jpg")

let titles = document.querySelectorAll(".main-content h4")
let info = document.querySelectorAll(".main-content p")

titles[0].textContent ='Features'
info[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

titles[1].textContent ='About'
info[1].textContent ='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

titles[2].textContent ='Services'
info[2].textContent ='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

titles[3].textContent ='Product'
info[3].textContent ='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

titles[4].textContent ='Vision'
info[4].textContent ='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//bottom section

let bottomHeader = document.querySelector('.contact h4')
bottomHeader.textContent ="Contact"

let bottomInfo = document.querySelectorAll('.contact p')

bottomInfo[0].textContent = '123 Way 456 Street Somewhere, USA'

bottomInfo[1].textContent = '1 (888) 888-8888'

bottomInfo[2].textContent = 'sales@greatidea.io'


//Footer//

let footer = document.querySelector('footer')
footer.textContent = 'Copyright Great Idea! 2018'