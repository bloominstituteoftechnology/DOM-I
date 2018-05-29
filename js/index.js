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
//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let navSections = document.querySelectorAll('nav a');
navSections[0].innerHTML = siteContent["nav"]["nav-item-1"];
navSections[1].innerHTML = siteContent["nav"]["nav-item-2"];
navSections[2].innerHTML = siteContent["nav"]["nav-item-3"];
navSections[3].innerHTML = siteContent["nav"]["nav-item-4"];
navSections[4].innerHTML = siteContent["nav"]["nav-item-5"];
navSections[5].innerHTML = siteContent["nav"]["nav-item-6"];
//Task 3  
navSections.forEach((item) => item.style.color = 'green');
let nav = document.querySelector("nav");
let newA = document.createElement('newA');
newA.innerHTML = 'Meet and Greet';
nav.appendChild(newA);
let newA2 = document.createElement('newA2');
newA2.innerHTML = 'Ideas';
nav.prepend(newA2);
newA2.style.color = 'green';
newA.style.color = 'green';



//CTA
let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent["cta"]['h1'];
let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];
let ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content
let topContentTextHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentTextHeaders[0].innerHTML = siteContent['main-content']['features-h4'];
topContentTextHeaders[1].innerHTML = siteContent['main-content']['about-h4'];
let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerHTML = siteContent['main-content']['features-content'];
topContentText[1].innerHTML = siteContent['main-content']['about-content'];

let midLogo = document.getElementById('middle-img');
midLogo.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let bottomContentTextHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentTextHeaders[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentTextHeaders[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentTextHeaders[2].innerHTML = siteContent['main-content']['vision-h4'];
let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].innerHTML = siteContent['main-content']['services-content'];
bottomContentText[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentText[2].innerHTML = siteContent['main-content']['vision-content'];

//Contact
let contactTextHeader = document.querySelector('.contact h4');
contactTextHeader.innerHTML = siteContent['contact']['contact-h4'];
let contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = siteContent['contact']['address'];
contactText[1].innerHTML = siteContent['contact']['phone'];
contactText[2].innerHTML = siteContent['contact']['email'];

//Footer
let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];

//EventListeners
navSections.forEach((item) => 
  {item.addEventListener('click', () => 
    {if(item.style.color === 'green')
      item.style.color = 'yellow';
  }); 
});

let body = document.querySelector('body');
ctaButton.addEventListener('mouseenter', () => 
{
  body.style.backgroundColor = 'black'
});
ctaButton.addEventListener('mouseleave', () =>
{
  body.style.backgroundColor = '';
});