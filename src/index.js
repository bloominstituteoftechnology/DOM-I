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

for(let i = 1; i<7; i++){
  document.querySelector(`a:nth-of-type(${i})`).className = 'italic'
  document.querySelector(`a:nth-of-type(${i})`).textContent = siteContent.nav[`nav-item-${i}`]
}
document.getElementById('logo-img').src = siteContent.images['logo-img']
document.querySelector('h1').innerHTML = siteContent.cta.h1
document.querySelector('.cta-text button').innerHTML = siteContent.cta.button
document.querySelector('#cta-img').src = siteContent.images['cta-img']
document.querySelector('.text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['features-h4']
document.querySelector('.text-content:nth-of-type(1) p').textContent = siteContent['main-content']['features-content']
document.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4']
document.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content']
document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['services-h4']
document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['services-content']
document.querySelector('#middle-img').src = siteContent.images['accent-img']

document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4']

document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content']

document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4']

document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content']

document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']

document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent.contact.address

document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent.contact.phone

document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent.contact.email

document.querySelector('footer a').className = 'bold'
document.querySelector('footer a').textContent = siteContent.footer.copyright


