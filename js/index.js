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

let nav = document.getElementsByTagName("nav")[0];




nav.getElementsByTagName('a')[0].textContent=siteContent['nav']['nav-item-1']

nav.getElementsByTagName('a')[1].textContent=siteContent['nav']
['nav-item-2']

nav.getElementsByTagName('a')[2].textContent=siteContent['nav']
['nav-item-3']

nav.getElementsByTagName('a')[3].textContent=siteContent['nav']
['nav-item-4']

nav.getElementsByTagName('a')[4].textContent=siteContent['nav']
['nav-item-5']

nav.getElementsByTagName('a')[5].textContent=siteContent['nav']
['nav-item-6']

var home = document.createElement('a')
home.setAttribute('href', '#')
home.textContent='Home'
nav.prepend(home)

var blog = document.createElement('a')
blog.setAttribute('href', '#')
blog.textContent='Blog'
nav.appendChild(blog)

nav.querySelectorAll('a').forEach(link => link.setAttribute('style','color: green'));

let cta=document.querySelector('.cta');
cta.getElementsByTagName('h1')[0].textContent=siteContent['cta']['h1']

cta.getElementsByTagName('button')[0].textContent=siteContent['cta']['button']

document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src'])

let mainContent=document.querySelector('.main-content');
mainContent.getElementsByTagName('h4')[0].textContent=siteContent['main-content']['features-h4']

mainContent.getElementsByTagName('p')[0].textContent=siteContent['main-content']['features-content']

mainContent.getElementsByTagName('h4')[1].textContent=siteContent['main-content']['about-h4']

mainContent.getElementsByTagName('p')[1].textContent=siteContent['main-content']['about-content']

mainContent.getElementsByClassName('middle-img')[0].setAttribute('src', siteContent['main-content']['middle-img-src'])

mainContent.getElementsByTagName('h4')[2].textContent=siteContent['main-content']['services-h4']

mainContent.getElementsByTagName('p')[2].textContent=siteContent['main-content']['services-content']

mainContent.getElementsByTagName('h4')[3].textContent=siteContent['main-content']['product-h4']

mainContent.getElementsByTagName('p')[3].textContent=siteContent['main-content']['product-content']

mainContent.getElementsByTagName('h4')[4].textContent=siteContent['main-content']['vision-h4']

mainContent.getElementsByTagName('p')[4].textContent=siteContent['main-content']['vision-content']

let contact=document.querySelector('.contact')
contact.getElementsByTagName('h4')[0]
.textContent=siteContent['contact']['contact-h4']

contact.getElementsByTagName('p')[0]
.textContent=siteContent['contact']['address']

contact.getElementsByTagName('p')[1]
.textContent=siteContent['contact']['phone']

contact.getElementsByTagName('p')[2]
.textContent=siteContent['contact']['email']

let footer=document.querySelector('footer')
footer.querySelector('p')
.textContent=siteContent['footer']['copyright']


