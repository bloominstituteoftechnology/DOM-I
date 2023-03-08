const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const anchorTags = document.querySelectorAll("header nav a")
const anchorTagsText = Object.values(siteContent.nav)
anchorTags.forEach((link, index) => {
  link.textContent = anchorTagsText[index]
  link.classList.add("italic")
})

const footerTags = document.querySelectorAll("footer a")
const footerTagsText = Object.values(siteContent.footer)
footerTags.forEach((link, index) => {
  link.textContent = footerTagsText[index]
  link.classList.add("bold")
})

const logoIMG = document.querySelector("#logo-img")
logoIMG.setAttribute("src", siteContent.images["logo-img"])

const ctaIMG = document.querySelector("#cta-img")
ctaIMG.setAttribute("src", siteContent.images["cta-img"])

const accentIMG = document.querySelector("#middle-img")
accentIMG.setAttribute("src", siteContent.images["accent-img"])

const ctaH1 = document.createElement("h1")
const ctaButton = document.createElement("button")
ctaH1.textContent = siteContent.cta["h1"]
ctaButton.textContent = siteContent.cta["button"]
document.querySelector(".cta").appendChild(ctaH1)
document.querySelector(".cta").appendChild(ctaButton)


