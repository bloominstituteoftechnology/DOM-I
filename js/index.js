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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//header
const headerNav = document.querySelector('nav');
      navA = document.querySelectorAll('a');
      appendA = document.createElement('a');
      prependA = document.createElement('a');

navA[0].innerHTML = siteContent['nav']['nav-item-1'];
navA[1].innerHTML = siteContent['nav']['nav-item-2'];
navA[2].innerHTML = siteContent['nav']['nav-item-3'];
navA[3].innerHTML = siteContent['nav']['nav-item-4'];
navA[4].innerHTML = siteContent['nav']['nav-item-5'];
navA[5].innerHTML = siteContent['nav']['nav-item-6'];
navA.forEach(item => {
  item.style.color = 'green'
})

headerNav.appendChild(appendA);
headerNav.prepend(prependA)
appendA.innerHTML = 'Info';
prependA.innerHTML = 'Pricing';
appendA.style.color = 'green';
prependA.style.color = 'green';

//section - CTA
const cta = document.querySelector('cta');
      ctaH1 = document.querySelector('section div h1');
      ctaBtn = document.querySelector('section div button');
      ctaImg = document.querySelector('#cta-img');

ctaH1.innerHTML = siteContent['cta']['h1'];
ctaBtn.innerHTML = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
ctaH1.innerHTML = siteContent["cta"]["h1"].split(" ").join('<br>')

//section - main-content
const mainH4 = document.querySelectorAll('.main-content h4');
const mainP = document.querySelectorAll('.main-content p');
const midImg = document.querySelector('#middle-img');

mainH4[0].innerHTML = siteContent['main-content']['features-h4'];
mainP[0].innerHTML = siteContent['main-content']['features-content'];

mainH4[1].innerHTML = siteContent['main-content']['about-h4'];
mainP[1].innerHTML = siteContent['main-content']['about-content'];

midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

mainH4[2].innerHTML = siteContent['main-content']['services-h4'];
mainP[2].innerHTML = siteContent['main-content']['services-content'];

mainH4[3].innerHTML = siteContent['main-content']['product-h4'];
mainP[3].innerHTML = siteContent['main-content']['product-content'];

mainH4[4].innerHTML = siteContent['main-content']['vision-h4'];
mainP[4].innerHTML = siteContent['main-content']['vision-content'];

//section - contact

const contactH4 = document.querySelector('.contact h4');
      contactP = document.querySelectorAll('.contact p');

contactH4.innerText = siteContent['contact']['contact-h4'];
contactP[0].innerText = siteContent['contact']['address'];
contactP[1].innerText = siteContent['contact']['phone'];
contactP[2].innerText = siteContent['contact']['email'];

//footer
const footerP = document.querySelector('footer p');

footerP.innerText = siteContent['footer']['copyright'];