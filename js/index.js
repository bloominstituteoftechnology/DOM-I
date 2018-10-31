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



// add banner type img to middle of page

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src',siteContent["main-content"]["middle-img-src" ]);

// -----------nav implementation starts here-----------------
// add text content to the a tags in the nav.
document.querySelectorAll('nav a')[0].textContent = siteContent['nav']["nav-item-1"];
document.querySelectorAll('nav a')[1].textContent = siteContent['nav']["nav-item-2"];
document.querySelectorAll('nav a')[2].textContent = siteContent['nav']["nav-item-3"];
document.querySelectorAll('nav a')[3].textContent = siteContent['nav']["nav-item-4"];
document.querySelectorAll('nav a')[4].textContent = siteContent['nav']["nav-item-5"];
document.querySelectorAll('nav a')[5].textContent = siteContent['nav']["nav-item-6"];
// change the text in the nav to green using a foreach to iterate over each nav element.
document.querySelectorAll('nav a').forEach((link,i)=>{link.style.color = "green";})
// ------------------nav implementation ends here ------------------------

//-------------------Cta content begins here -----------------------------
// Add round code img to page
let rndimg = document.getElementById("cta-img");
rndimg.setAttribute('src',siteContent["cta"]["img-src" ]);
// make the large text visible h1 
document.querySelector('h1').innerText = siteContent["cta"]["h1"];
// Add button below the h1 text
document.querySelector('.cta button').innerHTML = siteContent["cta"]['button'];

