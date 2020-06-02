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
// nav section
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// console.log(logo)
let nav = document.querySelector('nav')
let navItems = document.getElementsByTagName('a');
navItems[0].textContent = 'Services'
navItems[0].setAttribute('style', 'color:green;')
navItems[1].textContent = 'Products'
navItems[1].setAttribute('style', 'color:green;')
navItems[2].textContent = 'Vision'
navItems[2].setAttribute('style', 'color:green;')
navItems[3].textContent = 'Features'
navItems[3].setAttribute('style', 'color:green;')
navItems[4].textContent = 'About'
navItems[4].setAttribute('style', 'color:green;')
navItems[5].textContent = 'Contact'
navItems[5].setAttribute('style', 'color:green;')




let newLinkProps = {
  href: '#',
  textContent: 'One Thing'
}
let newlink1 = document.createElement('a')

newlink1.href = newLinkProps.href
newlink1.textContent = newLinkProps.textContent

nav.appendChild(newlink1)

let newLink2Props = {
  href: '#',
  textContent: 'Other Thing'
}
let newlink2 = document.createElement('a')

newlink2.href = newLink2Props.href
newlink2.textContent = newLink2Props.textContent

nav.prepend(newlink2)

navItems[7].setAttribute('style', 'color:green;')
navItems[0].setAttribute('style', 'color:green;')


// landing section
let cta = document.querySelector('H1');
// console.log(cta)
cta.innerHTML = 'DOM <br> Is <br> Awesome'
cta.setAttribute('style', ' text-align: center;')

let button = document.querySelector('button')
button.textContent = 'Get Started'

let codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent['cta']['img-src'])
// console.log(codeImg)
// landing section

// content section
thistitle = document.getElementsByTagName('h4'); 
thistitle[0].textContent = "Features"

thistitle[1].textContent = "About"

thistitle[2].textContent = "Services"

thistitle[3].textContent = "Product"

thistitle[4].textContent = "Vision"

thisp = document.getElementsByTagName('p');
thisp[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

thisp[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

thisp[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

thisp[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

thisp[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let codeImg2 = document.getElementById('middle-img');
codeImg2.setAttribute('src', 'img/mid-page-accent.jpg')
// content section
// footer section
thistitle[5].textContent = 'Contact'

thisp[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA'

thisp[6].textContent = '1 (888) 888-8888'

thisp[7].textContent = 'sales@greatidea.io'

thisp[8].textContent = 'Copyright Great Idea! 2018'






// footer section