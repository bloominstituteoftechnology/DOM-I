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


let header = document.querySelector('h1')

header.innerHTML = "DOM <br> IS <br> AWESOME"


let titleImg = document.getElementById("cta-img");

titleImg.setAttribute('src', "img/header-img.png")

let button = document.querySelector('button')

button.textContent = "Get Started"

 let sectionImg = document.getElementById("middle-img");

 sectionImg.setAttribute('src', "img/mid-page-accent.jpg")

 let bodyTitles = document.querySelectorAll('h4');

 bodyTitles[0].textContent = "Features"
 bodyTitles[1].textContent = "About";
 bodyTitles[2].textContent = "Services";
 bodyTitles[3].textContent = "Product";
 bodyTitles[4].textContent = "Vision";
 bodyTitles[5].textContent = "Contact";

 let bodyText = document.querySelectorAll('p');

bodyText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bodyText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bodyText[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bodyText[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bodyText[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bodyText[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA"

bodyText[6].textContent = "1 (888) 888-8888"

bodyText[7].textContent = "sales@greatidea.io"

bodyText[8].textContent = "Copyright Great Idea! 2018"

const blogLink = document.createElement('a')
blogLink.textContent = "Blog"
blogLink.href = "#"

document.querySelector('nav').appendChild(blogLink)

const heyLink = document.createElement('a')
heyLink.textContent = "Hey!"
heyLink.href = "#"

document.querySelector('nav').appendChild(heyLink)

let navbar = document.querySelectorAll('nav a')

navbar[0].textContent = "Services"
navbar[1].textContent = "Product"
navbar[2].textContent = "Vision"
navbar[3].textContent = "About"
navbar[4].textContent = "Contact"

for (i = 0; i < navbar.length; i++){
navbar[i].style.color = 'green'
}

  
  
