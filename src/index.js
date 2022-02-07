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


//images here
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images["logo-img"]

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"]

const midImg = document.querySelector("#middle-img");
midImg.src = siteContent.images["accent-img"]

//header content section is here
const navLink = document.querySelectorAll('header nav a')
const navLinkText = Object.values(siteContent.nav)
navLink.forEach((link,idx)=>{
  link.textContent = navLinkText[idx]
  link.classList.add('italic')
})

//cta section is here
document.querySelector('.cta .cta-text h1').textContent = siteContent.cta.h1
document.querySelector('.cta .cta-text button').textContent = siteContent.cta.button

// top content section is here
const topcontent = document.querySelector('.top-content');
const h4Top = topcontent.querySelectorAll('h4');
h4Top[0].textContent = siteContent['main-content']['features-h4']
h4Top[1].textContent = siteContent['main-content']['about-h4']

const pTop = topcontent.querySelectorAll("p")
console.log(pTop);
pTop[0].textContent = siteContent['main-content']['features-content']
pTop[1].textContent = siteContent['main-content']['about-content']

//bottom content section is here
const bottomContent = document.querySelector('.bottom-content')
const h4bottom = bottomContent.querySelectorAll('h4')
h4bottom[0].textContent = siteContent["main-content"]["services-h4"]
h4bottom[1].textContent = siteContent["main-content"]["product-h4"]
h4bottom[2].textContent = siteContent["main-content"]["vision-h4"]

const pBottom = bottomContent.querySelectorAll('p')
pBottom[0].textContent = siteContent["main-content"]["services-content"]
pBottom[1].textContent = siteContent["main-content"]["product-content"]
pBottom[2].textContent = siteContent["main-content"]["vision-content"]

//contact section is here
const contact = document.querySelector("section.contact");
contact.querySelector('h4').textContent = siteContent.contact["contact-h4"]
contact.querySelector("p:nth-of-type(1)").textContent = siteContent.contact['address']
contact.querySelector("p:nth-of-type(2)").textContent = siteContent.contact['phone']
contact.querySelector("p:nth-of-type(3)").textContent = siteContent.contact['email']


//footer section is here
const footLink = document.querySelector('footer a');
footLink.classList.add('bold');
footLink.textContent = siteContent.footer.copyright

