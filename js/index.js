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


let navBtns = document.querySelectorAll('a');
navBtns[0].textContent = siteContent.nav["nav-item-1"];
navBtns[1].textContent = siteContent.nav["nav-item-2"];
navBtns[2].textContent = siteContent.nav["nav-item-3"];
navBtns[3].textContent = siteContent.nav["nav-item-4"];
navBtns[4].textContent = siteContent.nav["nav-item-5"];
navBtns[5].textContent = siteContent.nav["nav-item-6"];

document.querySelector('h1').textContent = siteContent.cta['h1'];
document.querySelector('button').textContent = siteContent.cta['button'];
document.querySelector("#cta-img").src = siteContent.cta['img-src'];

document.querySelectorAll('.top-content .text-content h4')[0].textContent = siteContent['main-content']['features-h4'];
document.querySelectorAll('.top-content .text-content p')[0].textContent = siteContent['main-content']['features-content'];
document.querySelectorAll('.top-content .text-content h4')[1].textContent = siteContent['main-content']['about-h4'];
document.querySelectorAll('.top-content .text-content p')[1].textContent = siteContent['main-content']['about-content'];

document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];

document.querySelectorAll('.bottom-content .text-content h4')[0].textContent = siteContent['main-content']['services-h4'];
document.querySelectorAll('.bottom-content .text-content p')[0].textContent = siteContent['main-content']['services-content'];
document.querySelectorAll('.bottom-content .text-content h4')[1].textContent = siteContent['main-content']['product-h4'];
document.querySelectorAll('.bottom-content .text-content p')[1].textContent = siteContent['main-content']['product-content'];
document.querySelectorAll('.bottom-content .text-content h4')[2].textContent = siteContent['main-content']['vision-h4'];
document.querySelectorAll('.bottom-content .text-content p')[2].textContent = siteContent['main-content']['vision-content'];


document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];

document.querySelectorAll('.contact p')[0].textContent = siteContent.contact['address'];
document.querySelectorAll('.contact p')[1].textContent = siteContent.contact['phone'];
document.querySelectorAll('.contact p')[2].textContent = siteContent.contact['email'];


document.querySelector('footer p').textContent = siteContent.footer.copyright;


let newAnchorFirst = document.createElement('a');
newAnchorFirst.textContent = 'Team';
let newAnchorLast = document.createElement('a');
newAnchorLast.textContent = 'Sign In';
document.querySelector('nav').appendChild(newAnchorFirst);
document.querySelector('nav').prepend(newAnchorLast);

document.querySelectorAll('nav a').forEach(el => el.style.color = 'green');