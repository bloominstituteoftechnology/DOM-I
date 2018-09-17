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

const nav = document.querySelector('nav')
const a = document.querySelectorAll('a')

const end = document.createElement('a');
const start = document.createElement('a');

end.innerText = 'End';
end.style.color = "green"
nav.append(end);

start.innerText = 'Start';
start.style.color = "green"
nav.prepend(start);

a[0].innerText = "Services"
a[1].innerText = "Product"
a[2].innerText = "Vision"
a[3].innerText = "Features"
a[4].innerText = "About"
a[5].innerText = "Contact"

for (i = 0; i<a.length; i++) {
  a[i].style.color = "green";
}



const headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent['cta']['img-src'])

const title = document.querySelector('.cta h1')
const button = document.querySelector('.cta button')
title.innerHTML = "DOM<br> Is<br> Awesome"
button.innerText = "Get Started"


const topContentH = document.querySelectorAll(".text-content h4")
const topContentP = document.querySelectorAll(".text-content p" )
topContentH[0].innerText = "Features"
topContentH[1].innerText = "About"

topContentP[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContentP[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.querySelector('.middle-img');
midImg.src = 'img/mid-page-accent.jpg';

topContentH[2].innerText = "Services"
topContentP[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

topContentH[3].innerText = "Product"
topContentP[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

topContentH[4].innerText = "Vision"
topContentP[4].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const contactH = document.querySelector(".contact h4")
contactH.innerText = "Contact"


const contactP = document.querySelectorAll(".contact p" )
contactP[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA"
contactP[1].innerText = "1 (888) 888-8888"
contactP[2].innerText = "sales@greatidea.io"

const copyright = document.querySelector("footer")
copyright.innerText = "Copyright Great Idea! 2018"

