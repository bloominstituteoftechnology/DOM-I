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
// Text change for initial commit

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const topContentP = document.querySelectorAll(".top-content p");
topContentP[0].innerHTML = siteContent["main-content"]['features-content'];
topContentP[1].innerHTML = siteContent["main-content"]['about-content'];

const topContentH4 = document.querySelectorAll(".top-content h4");
topContentH4[0].innerHTML = siteContent["main-content"]['features-h4'];
topContentH4[1].innerHTML = siteContent["main-content"]['about-h4'];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const bottomContentP = document.querySelectorAll(".bottom-content p");
bottomContentP[0].innerHTML = siteContent["main-content"]['services-content'];
bottomContentP[1].innerHTML = siteContent["main-content"]['product-content'];
bottomContentP[2].innerHTML = siteContent["main-content"]['vision-content'];

const bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentH4[1].innerHTML = siteContent["main-content"]['product-h4'];
bottomContentH4[2].innerHTML = siteContent["main-content"]['vision-h4'];


const contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];


const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'];
contactP[1].innerHTML = siteContent['contact']['email'];
contactP[2].innerHTML = siteContent['contact']['phone'];

const footer = document.querySelector('footer');
footer.innerHTML = siteContent['footer']['copyright'];

const navigation = document.querySelector("nav")
const navigationA = document.querySelectorAll("nav a")

navigationA[0].innerHTML = siteContent['nav']['nav-item-1'];
navigationA[1].innerHTML = siteContent['nav']['nav-item-2'];
navigationA[2].innerHTML = siteContent['nav']['nav-item-3'];
navigationA[3].innerHTML = siteContent['nav']['nav-item-4'];
navigationA[4].innerHTML = siteContent['nav']['nav-item-5'];
navigationA[5].innerHTML = siteContent['nav']['nav-item-6'];

navigationA.forEach (function(navItem) { 
  navItem.style.color = 'green';
});

const newNavItem1 = document.createElement('a');
newNavItem1.innerHTML = 'Foo';
newNavItem1.style.color = 'green'
navigation.appendChild(newNavItem1);