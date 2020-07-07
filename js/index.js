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

const Links = document.querySelectorAll('a')

Links[0].className = "nav-item-1";
Links[1].className = "nav-item-2";
Links[2].className = "nav-item-3";
Links[3].className = "nav-item-4";
Links[4].className = "nav-item-5";
Links[5].className = "nav-item-6";

Links[0].textContent = siteContent["nav"]["nav-item-1"]
Links[1].textContent = "Product"
Links[2].textContent = "Vision"
Links[3].textContent = "Features"
Links[4].textContent = "About"
Links[5].textContent = "Contact"



const speech = document.querySelector('h1')
speech.textContent = "DOM Is Awesome"

let start = document.querySelector('button')
start.textContent = "Get Started"

let image = document.getElementById('cta-img')
image.setAttribute('src', siteContent["cta"]["img-src"])

let Topics = document.querySelectorAll('h4')
Topics[0].textContent = "Features"
Topics[1].textContent = "About"
Topics[2].textContent = "Services"
Topics[3].textContent = "Product"
Topics[4].textContent = "Vision"
Topics[5].textContent = "Contact"

let text = document.getElementsByTagName('p')
text[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
text[5].textContent = "123 Way 456 Street Somewhere, USA"
text[6].textContent = "1 (888) 888-8888"
text[7].textContent = "sales@greatidea.io"
text[8].textContent = "Copyright Great Idea! 2018"

let imagen = document.getElementById('middle-img')
imagen.setAttribute('src', siteContent["main-content"]["middle-img-src"])

Links.forEach((item) => {
  item.style.color = 'green'
});

let nav = document.querySelector('nav')
let newLink = document.createElement('a')
newLink.textContent = 'Butt1'
newLink.href = '#'
nav.appendChild(newLink)


let newLink1 = document.createElement('a')
newLink1.textContent = 'Butt2'
nav.prepend(newLink1)
newLink.style.color = 'green'
newLink1.style.color = 'green'