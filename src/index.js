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
//Ask how to make more efficient
anchor[0].textContent = siteContent.nav['nav-item-1']
anchor[1].textContent = siteContent.nav['nav-item-2']
anchor[2].textContent = siteContent.nav['nav-item-3']
anchor[3].textContent = siteContent.nav['nav-item-4']
anchor[4].textContent = siteContent.nav['nav-item-5']
anchor[5].textContent = siteContent.nav['nav-item-6']
// function loop(ele){
//   for(let i = 0; i < anchor.length; i++){
//      var inc = anchor[i]
//      inc.textContent = siteContent.nav[ele]
//      }
// }

// loop('nav-item-1')
// loop('nav-item-2')
// loop('nav-item-3')
// loop('nav-item-4')
// loop('nav-item-5')
// loop('nav-item-6')

//italic anchors in header
  for(let i = 0; i < anchor.length; i++){
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
//adding h4s
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
//adding text to h4 ps
h4Ps[0].textContent = siteContent['main-content']['features-content'];
h4Ps[1].textContent = siteContent['main-content']['about-content'];
h4Ps[2].textContent = siteContent['main-content']['services-content'];
h4Ps[3].textContent = siteContent['main-content']['product-content'];
h4Ps[4].textContent = siteContent['main-content']['vision-content'];

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
//adding text to p elem;
contactPs[0].textContent = siteContent.contact['address'];
contactPs[1].textContent = siteContent.contact['email'];
contactPs[2].textContent = siteContent.contact['phone'];







