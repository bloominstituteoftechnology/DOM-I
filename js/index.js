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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll("nav a")
nav[0].textContent = "Services"
nav[1].textContent = "Product"
nav[2].textContent = "Vision"
nav[3].textContent = "Features"
nav[4].textContent = "About"
nav[5].textContent = "Contact"

nav[0].style.color = "green"
nav[1].style.color = "green"
nav[2].style.color = "green"
nav[3].style.color = "green"
nav[4].style.color = "green"
nav[5].style.color = "green"

// Add new item in nav bar
const navAdd = document.querySelector("nav");
const newNav = document.createElement("a");
newNav.href = "#"
newNav.textContent = "Company"
newNav.style.color = "green"
navAdd.appendChild(newNav);

const secondNav = document.createElement("a")
secondNav.href = "#"
secondNav.textContent = "Testing"
secondNav.style.color = "green"
navAdd.prepend(secondNav)

const headline = document.querySelector(".cta-text h1")
headline.innerText = "DOM is Awesome"

const button = document.querySelector(".cta-text button")
button.textContent = "Get Started"

const mainHeadlines = document.querySelectorAll(".main-content h4")


mainHeadlines[0].textContent = "Features"
mainHeadlines[1].textContent = "About"
mainHeadlines[2].textContent = "Services"
mainHeadlines[3].textContent = "Product"
mainHeadlines[4].textContent = "Vision"

const mainPs = document.querySelectorAll(".main-content p")
console.log(mainPs)
mainPs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const middleImage = document.querySelector("#middle-img")
middleImage.setAttribute("src", "img/mid-page-accent.jpg")

const contactH4 = document.querySelector('.contact h4')

contactH4.textContent = "Contact"

const contactP = document.querySelectorAll('.contact p')

contactP[0].textContent = "123 Way 456 Street Anywhere, USA"
contactP[1].textContent = "1 (888) 888-8888"
contactP[2].textContent = "sales@greatidea.io"

const footer = document.querySelector('footer')
footer.textContent = 'Copyright Great Idea! 2020'