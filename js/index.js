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



//STEP ONE: CREATE ALL SELECTORS
//nav
const nav = document.querySelector("nav")
const navItems = document.querySelectorAll('nav a')

//cta
const ctaH1 = document.querySelector('h1')
const ctaButton = document.querySelector('button')
const ctaImg = document.getElementById('cta-img')

//main content
const mcHeading = document.querySelectorAll('.main-content h4')
const mcParagraph = document.querySelectorAll('.main-content p')
const mcImg = document.getElementById('middle-img')

//contact
const contactH4 = document.querySelector('.contact h4')
const contactParagraph = document.querySelectorAll('.contact p')

//footer
const footer = document.querySelector('footer p')


//STEP TWO: UPDATE HTML WITH JSON DATA
//nav
navItems.forEach((item, index) => {
  //console.log(item)
  item.textContent = siteContent.nav[`nav-item-${index + 1}`]
})

//cta 
const br = document.createElement("br")

const h1String = siteContent.cta.h1.split(" ")
ctaH1.setAttribute("style", "white-space: pre")
ctaH1.textContent = h1String[0] + "\n"
ctaH1.textContent += h1String[1] + "\n"
ctaH1.textContent += h1String[2] + "\n"



ctaButton.textContent = siteContent.cta.button
ctaImg.setAttribute('src', siteContent.cta["img-src"])

//main content - heading
mcHeading[0].textContent = siteContent["main-content"]['features-h4']
mcHeading[1].textContent = siteContent["main-content"]['about-h4']
mcHeading[2].textContent = siteContent["main-content"]['services-h4']
mcHeading[3].textContent = siteContent["main-content"]['product-h4']
mcHeading[4].textContent = siteContent["main-content"]['vision-h4']

//main content - paragraph content
mcParagraph[0].textContent = siteContent["main-content"]['features-content']
mcParagraph[1].textContent = siteContent["main-content"]['about-content']
mcParagraph[2].textContent = siteContent["main-content"]['services-content']
mcParagraph[3].textContent = siteContent["main-content"]['product-content']
mcParagraph[4].textContent = siteContent["main-content"]['vision-content']

//main content - img
mcImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//contact
contactH4.textContent = siteContent.contact["contact-h4"]
contactParagraph[0].textContent = siteContent.contact.address
contactParagraph[1].textContent = siteContent.contact.phone
contactParagraph[2].textContent = siteContent.contact.email

//footer
footer.textContent = siteContent.footer.copyright



//STEP THREE: ADD NEW CONTENT
//change nav items color to green
navItems.forEach((item) => {
  item.style.color = "green"
})

//add new nav items with both prepend and append
const blog = document.createElement("a")
blog.setAttribute("href", "#")
blog.style.color = "green"
blog.textContent = "Blog"
nav.prepend(blog)

const help = document.createElement("a")
help.setAttribute("href", "#")
help.style.color = "green"
help.textContent = "Help"
nav.appendChild(help)
