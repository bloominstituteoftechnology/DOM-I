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
logo.setAttribute('alt', 'This is the logo for the Great Idea site')

//Update the navigation
let siteNav = document.querySelector('nav')
let siteHead = document.querySelectorAll('a')

//Add the navigation options
siteHead[0].innerHTML = siteContent['nav']['nav-item-1']
siteHead[1].innerHTML = siteContent['nav']['nav-item-2']
siteHead[2].innerHTML = siteContent['nav']['nav-item-3']
siteHead[3].innerHTML = siteContent['nav']['nav-item-4']
siteHead[4].innerHTML = siteContent['nav']['nav-item-5']
siteHead[5].innerHTML = siteContent['nav']['nav-item-6']

//Change Navigation Color to Green
siteHead.forEach((item)=>{item.style.color = 'green'});

//Playing with items individually
siteHead[0].style.color = 'red';
siteHead[1].style.color = 'orange';
siteHead[2].style.color = 'yellow';
siteHead[3].style.color = 'green';
siteHead[4].style.color = 'blue';
siteHead[5].style.color = 'purple';

//Add items to navigation
let lastItem = document.createElement('a');
siteNav.appendChild(lastItem);
lastItem.innerHTML = 'Last Item';

let firstItem = document.createElement('a');
siteNav.prepend(firstItem);
firstItem.innerHTML = 'First Item';

//Add cta header and button
let ctaHead = document.querySelector('h1')
ctaHead.innerHTML = siteContent['cta']['h1']

let ctaButton = document.querySelector('button')
ctaButton.innerHTML = siteContent['cta']['button']

//Add cta image with html id "cta-img"
let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])
ctaImg.setAttribute('alt', "This is an image of some code.")

//Add headings for site content
let textHeading = document.querySelectorAll('h4')
textHeading[0].innerHTML = siteContent['main-content']['features-h4']
textHeading[1].innerHTML = siteContent['main-content']['about-h4']
textHeading[2].innerHTML = siteContent['main-content']['services-h4']
textHeading[3].innerHTML = siteContent['main-content']['product-h4']
textHeading[4].innerHTML = siteContent['main-content']['vision-h4']

//site content Text
let textContent = document.querySelectorAll('p')
textContent[0].innerHTML = siteContent['main-content']['features-content']
textContent[1].innerHTML = siteContent['main-content']['about-content']
textContent[2].innerHTML = siteContent['main-content']['services-content']
textContent[3].innerHTML = siteContent['main-content']['product-content']
textContent[4].innerHTML = siteContent['main-content']['vision-content']

//Add the middle image to the site
let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Add the contact information: header (textHeading[5]) and content (textContent)
textHeading[5].innerHTML = siteContent['contact']['contact-h4']
textContent[5].innerHTML = siteContent['contact']['address']
textContent[6].innerHTML = siteContent['contact']['phone']
textContent[7].innerHTML = siteContent['contact']['email']

//Add the footer information
textContent[8].innerHTML = siteContent['footer']['copyright']