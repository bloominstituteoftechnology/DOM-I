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

let navigation = document.querySelectorAll('header nav a');
navigation.forEach((element, index) => {
  element.innerText = siteContent["nav"][`nav-item-${index+1}`];
  element.style.color = 'green';
});

// navigation[0].textContent = 'Services';
// navigation[0].style.color = 'green';
// navigation[1].textContent = 'Product';
// navigation[1].style.color = 'green';
// navigation[2].textContent = 'Vision';
// navigation[2].style.color = 'green';
// navigation[3].textContent = 'Features';
// navigation[3].style.color = 'green';
// navigation[4].textContent = 'About';
// navigation[4].style.color = 'green';
// navigation[5].textContent = 'Contact';
// navigation[5].style.color = 'green';

let navChild = document.querySelector('nav');
let start = document.createElement('a');
let end = document.createElement('a');
start.innerText = 'Home';
start.href = '#';
navChild.prepend(start);
end.innerText = 'End';
end.href = '#';
navChild.appendChild(end);
start.style.color = 'green';
end.style.color = 'green';

let circlePic = document.getElementById("cta-img");
circlePic.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.querySelector('h1');
ctaText.innerHTML = '<h1>DOM<br> Is<br> Awesome</h1>';

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let headers = document.querySelectorAll('h4');
headers[0].textContent = 'Features';
headers[1].textContent = 'About';
headers[2].textContent = 'Services';
headers[3].textContent = 'Product';
headers[4].textContent = 'Vision';
headers[5].textContent = 'Contact';

let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].textContent = siteContent.contact.address;
paragraphs[6].textContent = siteContent.contact.phone;
paragraphs[7].textContent = siteContent.contact.email;
paragraphs[8].textContent = siteContent.footer.copyright;


let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
