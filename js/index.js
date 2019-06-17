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
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Display the nav text

const E1 = document.querySelectorAll("a");
E1[0].innerText = siteContent['nav']['nav-item-1'];
E1[1].innerText = siteContent['nav']['nav-item-2'];
E1[2].innerText = siteContent['nav']['nav-item-3'];
E1[3].innerText = siteContent['nav']['nav-item-4'];
E1[4].innerText = siteContent['nav']['nav-item-5'];
E1[5].innerText = siteContent['nav']['nav-item-6'];

// Display the main header, button, and cta-img

let H1 = document.querySelector("h1");
H1.innerHTML = siteContent['cta']['h1'];

let but = document.querySelector("button");
but.innerText = siteContent['cta']['button'];

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

// Display the top content and mid-img

let topLeft = document.getElementsByTagName('h4')[0];
topLeft.innerText = siteContent['main-content']['features-h4'];

let topLeft2 = document.getElementsByTagName('p')[0];
topLeft2.innerText = siteContent['main-content']['features-content'];

let topRight = document.getElementsByTagName('h4')[1];
topRight.innerText = siteContent['main-content']['about-h4'];

let topRight2 = document.getElementsByTagName('p')[1];
topRight2.innerText = siteContent['main-content']['about-content'];

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Display the bottom content

let botLeft = document.getElementsByTagName('h4')[2];
botLeft.innerText = siteContent['main-content']['services-h4'];

let botLeft2 = document.getElementsByTagName('p')[2];
botLeft2.innerText = siteContent['main-content']['services-content'];

let botMid = document.getElementsByTagName('h4')[3];
botMid.innerText = siteContent['main-content']['product-h4'];

let botMid2 = document.getElementsByTagName('p')[3];
botMid2.innerText = siteContent['main-content']['product-content'];

let botRight = document.getElementsByTagName('h4')[4];
botRight.innerText = siteContent['main-content']['vision-h4'];

let botRight2 = document.getElementsByTagName('p')[4];
botRight2.innerText = siteContent['main-content']['vision-content'];

// Contact

let contact = document.getElementsByTagName('h4')[5];
contact.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let number = document.getElementsByTagName('p')[6];
number.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

// Footer

let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];