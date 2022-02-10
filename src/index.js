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


let navLinks = document.querySelectorAll('nav a'); 
navLinks.forEach((val,i)=>{val.innerText = siteContent['nav'][`nav-item-${i+1}`];val.classList.add('italic')})

let cta_text = document.querySelector('.cta-text h1'); 
let cta_button = document.querySelector('.cta-text button'); 
cta_text.innerText = siteContent['cta']['h1']
cta_button.innerText = siteContent['cta']['button']

let h4s = document.querySelectorAll('h4'); 
let ps = document.querySelectorAll('p'); 
h4s.forEach((val,i)=>val.innerText = siteContent['main-content'][Object.keys(siteContent['main-content'])[i*2]])
ps.forEach((val,i)=>val.innerText = siteContent['main-content'][Object.keys(siteContent['main-content'])[(i*2)+1]])

let contactH4 = document.querySelector('.contact h4'); 
let contactPs = document.querySelectorAll('.contact p'); 
contactH4.innerText = siteContent['contact']['contact-h4']; 
contactPs.forEach((val,i)=>{
  val.innerText = siteContent['contact'][Object.keys(siteContent['contact'])[i+1]]
})

let footer = document.querySelector('footer a'); 
footer.innerText = siteContent['footer']['copyright']
footer.classList.add('bold')


let imgs = document.querySelectorAll('img'); 
imgs.forEach((val,i)=>val.setAttribute('src',siteContent['images'][Object.keys(siteContent['images'])[i]]))