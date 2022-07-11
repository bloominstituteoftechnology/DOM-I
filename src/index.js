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
//header nav anchors
const anchor = document.querySelectorAll('nav a');
//nav items in obj siteContent
const navItems = Object.keys(siteContent.nav)

  for(let i = 0; i < anchor.length; i++){
    //adding text content from navItems to every anchor tag
    anchor[i].textContent = siteContent.nav[navItems[i]]
    //adding class italic to every anchor tag
    anchor[i].setAttribute('class', 'italic')
  }

//cta button and header
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
h1.textContent = siteContent.cta.h1;
button.textContent = siteContent.cta.button;

//header img
document.querySelector('header img').setAttribute('src','http://localhost:9000/img/logo.png');

//section img
document.querySelector('section img').setAttribute('src', 'http://localhost:9000/img/cta.png');

//middle img
document.querySelector('.middle-img').setAttribute('src','http://localhost:9000/img/accent.png');

//h4 and the their child ps
const h4 = document.querySelectorAll('h4');
const h4Ps = document.querySelectorAll('p');
//main-contents strings
const h4s = Object.keys(siteContent["main-content"])
//filtering every other index to recieve h4 content
let h4Keys = h4s.filter((elem, i) => {
  return i % 2 === 0;
})
//filtering every other index at index 1 to receive h4Ps content
let h4PKeys = h4s.filter((elem, i) => {
  return i % 2 === 1;
})

for(let i = 0; i < h4Keys.length; i++){
  //looping through h4s to add textContent
  h4[i].textContent = siteContent['main-content'][h4Keys[i]]
  //looping through h4Ps to add textContent
  h4Ps[i].textContent = siteContent['main-content'][h4PKeys[i]]
}

//footer anchor
const footer = document.querySelector('footer a');
//adding text to footer anchor
footer.textContent = siteContent.footer['copyright'];
//adding bold class to footer
footer.setAttribute('class', 'bold')

//contact section
//selecting h4 elem and adding text to h4 
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];
//selecting p elem
const contactPs = document.querySelectorAll('.contact p');
//strings in contact section of siteContent
const contactPsKeys = Object.keys(siteContent.contact)
//filtering out the h4 leaving us with the 3 ps in the contact class
const newContactPsKeys = contactPsKeys.filter((elem,i) => i > 0)
//adding text to p elems;
for(let i = 0; i < newContactPsKeys.length; i++){
  contactPs[i].textContent = siteContent.contact[newContactPsKeys[i]]
}








