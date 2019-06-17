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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

let page = document.querySelector('html')

let navHome = document.createElement('a')
navHome.href = '#'

let navSignUp = document.createElement('a')
navSignUp.href = '#'

let newNav = document.querySelector('nav')
newNav.prepend(navHome)
newNav.append(navSignUp)

let nav = document.querySelectorAll('a')
nav[0].innerHTML = 'Home'
nav[1].innerHTML = siteContent['nav']['nav-item-1']
nav[2].innerHTML = siteContent['nav']['nav-item-2']
nav[3].innerHTML = siteContent['nav']['nav-item-3']
nav[4].innerHTML = siteContent['nav']['nav-item-4']
nav[5].innerHTML = siteContent['nav']['nav-item-5']
nav[6].innerHTML = siteContent['nav']['nav-item-6']
nav[7].innerHTML = 'Sign Up'
for (let i = 0; i < nav.length; i++) {
    nav[i].style.color = 'green'
}

let ctaH1 = document.querySelector('.cta .cta-text h1')
ctaH1.innerHTML = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.innerHTML = siteContent['cta']['button']
ctaButton.addEventListener("click", newColor)

function newColor() {
    page.style.backgroundColor = 'gray'
    ctaButton.textContent = "What did you do?"
}
let ctaImage = document.getElementById('cta-img')
ctaImage.src = 'img/header-img.png'

let titles = document.querySelectorAll("h4");
titles[0].innerHTML = siteContent['main-content']['features-h4'];
titles[1].innerHTML = siteContent['main-content']['about-h4'];
titles[2].innerHTML = siteContent['main-content']['services-h4'];
titles[3].innerHTML = siteContent['main-content']['product-h4'];
titles[4].innerHTML = siteContent['main-content']['vision-h4'];

let middleImage = document.getElementById('middle-img')
middleImage.src = 'img/mid-page-accent.jpg'

let textContent = document.querySelectorAll('.text-content p');
textContent[0].innerHTML = siteContent['main-content']['features-content'];
textContent[1].innerHTML = siteContent['main-content']['about-content'];
textContent[2].innerHTML = siteContent['main-content']['services-content'];
textContent[3].innerHTML = siteContent['main-content']['product-content'];
textContent[4].innerHTML = siteContent['main-content']['vision-content'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent["contact"]['address']
contactInfo[1].innerHTML = siteContent["contact"]['phone']
contactInfo[2].innerHTML = siteContent['contact']['email']

let footer = document.querySelector('footer p')
footer.innerHTML = siteContent['footer']['copyright']
