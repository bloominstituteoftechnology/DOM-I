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

let aTags = document.querySelectorAll('a');
aTags[0].setAttribute('src', siteContent["nav"]["nav-item-1"])
aTags[0].innerText = "Services"
aTags[1].setAttribute('src', siteContent["nav"]["nav-item-2"])
aTags[1].innerText = "Product"
aTags[2].setAttribute('src', siteContent["nav"]["nav-item-3"])
aTags[2].innerText = "Vision"
aTags[3].setAttribute('src', siteContent["nav"]["nav-item-4"])
aTags[3].innerText = "Features"
aTags[4].setAttribute('src', siteContent["nav"]["nav-item-5"])
aTags[4].innerText = "About"
aTags[5].setAttribute('src', siteContent["nav"]["nav-item-6"])
aTags[5].innerText = "Contact"

const nav = document.querySelectorAll('a');
nav.forEach(element =>{
  element.style.color = 'green';
})

let newElement1 = document.createElement('nav-item-7');
newElement1.textContent = "Home";
newElement1.href = "#";
newElement1.style.color = "green";

const extraNav1 = document.querySelector('a');
extraNav1.append(newElement1);

const newElement2 = document.createElement('nav-item-8');
newElement2.textContent = "Media";
newElement2.href = "#";
newElement2.style.color = "green";

const extraNav2 = document.querySelector('a');
extraNav2.appendChild(newElement2);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainHeading = document.querySelector('.cta .cta-text h1');
mainHeading.innerHTML = "DOM IS Awesome"

let mainButton = document.querySelector('.cta .cta-text button');
mainButton.innerText = "Get Started"

let mainHeaders = document.querySelectorAll('.main-content h4');
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"]
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"]
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"]
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"]
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

let mainContent = document.querySelectorAll('.main-content p');
mainContent[0].textContent = siteContent["main-content"]["features-content"]
mainContent[1].textContent = siteContent["main-content"]["about-content"]
mainContent[2].textContent = siteContent["main-content"]["services-content"]
mainContent[3].textContent = siteContent["main-content"]["product-content"]
mainContent[4].textContent = siteContent["main-content"]["vision-content"]



let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let headerContact = document.querySelector(".contact h4");
headerContact.innerHTML = "Contact"

let addressContact = document.querySelector(".contact p");
addressContact.innerHTML = "123 Way 456 Street<br> Somewhere, USA<br> <br>1 (888) 888-8888<br> <br>sales@greatidea.io"

let footer = document.querySelector("footer")
footer.innerHTML = "Copyright Great Idea! 2018"






