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

const navBar = document.querySelectorAll("a")
console.log(navBar)
navBar[0].textContent= "Services"
navBar[1].textContent= "Product"
navBar[2].textContent= "Vision"
navBar[3].textContent= "Features"
navBar[4].textContent= "About"
navBar[5].textContent= "Contact"


navBar.forEach(nav=>{
  nav.style.color = "green"
})

const createNav = document.createElement('p')


const ctaText = document.querySelector('.cta-text h1')
ctaText.textContent = "DOM Is Awesome"




const domButton = document.querySelector('.cta-text button')
domButton.textContent = "Get Started"

const ctaImage = document.querySelector('.cta #cta-img')
ctaImage.setAttribute('src', siteContent.cta['img-src'])  





let navigation = document.querySelector('nav')
let newLink = document.createElement('a')
newLink.textContent = 'Facebook'
navigation.append(newLink)


let newLinkII = document.querySelector('a')
newLinkII.textContent = 'Google'
navigation.prepend(newLinkII)


// main-content


const textH4 = document.querySelectorAll('.text-content h4')
textH4[0].textContent = "FEATURES"
textH4[1].textContent = "ABOUT"
textH4[2].textContent = "SERVICES"
textH4[3].textContent = "PRODUCT"
textH4[4].textContent = "VISION"



const textP = document.querySelectorAll('.text-content p')
textP[0].textContent = "Features content elementum magana eros,ac posuere elevit<br>tempus et.Suspendisse vel tempus sodio,insin interdutm nisi, <br>suspendisse eu orinari nisl.Nullam convallis augue justo,at<br>impoerdiet metus seclear quis."

textP[1].textContent = "Features content elementum magana eros,ac posuere elevit<br>tempus et.Suspendisse vel tempus sodio,insin interdutm nisi, <br>suspendisse eu orinari nisl.Nullam convallis augue justo,at<br>impoerdiet metus seclear quis."
textP[2].textContent = "Features content elementum magana eros,ac posuere elevit<br>tempus et.Suspendisse vel tempus sodio,insin interdutm nisi, <br>suspendisse eu orinari nisl.Nullam convallis augue justo,at<br>impoerdiet metus seclear quis."
textP[3].textContent = "Features content elementum magana eros,ac posuere elevit<br>tempus et.Suspendisse vel tempus sodio,insin interdutm nisi, <br>suspendisse eu orinari nisl.Nullam convallis augue justo,at<br>impoerdiet metus seclear quis."
textP[4].textContent = "Features content elementum magana eros,ac posuere elevit<br>tempus et.Suspendisse vel tempus sodio,insin interdutm nisi, <br>suspendisse eu orinari nisl.Nullam convallis augue justo,at<br>impoerdiet metus seclear quis."



const middleImg = document.getElementById('middle-img')

middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])  



// Contact piont


const contact = document.querySelector('.contact h4')

contact.textContent = "contact"


const cont = document.querySelectorAll('.contact p')
cont[0].textContent = "123 Way 456 Street Somewhere USA"
cont[1].textContent = "(888) 888-8888"
cont[2].textContent = "Sale@greatIdea.io"





// footer

const footer = document.querySelector(' footer')
footer.textContent = "Copyright Greate Idea! 2018"