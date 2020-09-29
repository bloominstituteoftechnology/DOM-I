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
    "h1": ("DOM<br>Is<br>Awesome"),
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//nav bar

const firstNav = document.createElement('a');
firstNav.href = '#';
firstNav.textContent = 'Item1';
document.querySelector('nav').appendChild(firstNav);

const lastNav = document.createElement('a');
lastNav.href = '#';
lastNav.textContent = 'Item2';
document.querySelector('nav').prepend(lastNav);

let navGreen = document.querySelectorAll('nav a');

let nav1 = document.querySelectorAll('nav a');
nav1[0].innerHTML = siteContent['nav']['nav-item-1'];
navGreen[0].style.color = "green";

let nav2 = document.querySelectorAll('nav a');
nav2[1].innerHTML = siteContent['nav']['nav-item-2'];
navGreen[1].style.color = "green";

let nav3 = document.querySelectorAll('nav a');
nav3[2].innerHTML = siteContent['nav']['nav-item-3'];
navGreen[2].style.color = "green";

let nav4 = document.querySelectorAll('nav a');
nav4[3].innerHTML = siteContent['nav']['nav-item-4'];
navGreen[3].style.color = "green";

let nav5 = document.querySelectorAll('nav a');
nav5[4].innerHTML = siteContent['nav']['nav-item-5'];
navGreen[4].style.color = "green";

let nav6 = document.querySelectorAll('nav a');
nav6[5].innerHTML = siteContent['nav']['nav-item-6'];
navGreen[5].style.color = "green";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//cta

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//main content

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let mainFeatureTitle = document.querySelectorAll(".text-content h4");
mainFeatureTitle[0].innerText = siteContent["main-content"]["features-h4"];

let mainFeatureText = document.querySelectorAll(".text-content p");
mainFeatureText[0].innerText = siteContent["main-content"]["features-content"];

let mainAboutTitle = document.querySelectorAll(".text-content h4");
mainAboutTitle[1].innerText = siteContent["main-content"]["about-h4"];

let mainAboutText = document.querySelectorAll(".text-content p");
mainAboutText[1].innerText = siteContent["main-content"]["about-content"];

let mainServiceTitle = document.querySelectorAll(".text-content h4");
mainServiceTitle[2].innerText = siteContent["main-content"]["services-h4"];

let mainServiceText = document.querySelectorAll(".text-content p");
mainServiceText[2].innerText = siteContent["main-content"]["services-content"];

let mainProductTitle = document.querySelectorAll(".text-content h4");
mainProductTitle[3].innerText = siteContent["main-content"]["product-h4"];

let mainProductText = document.querySelectorAll(".text-content p");
mainProductText[3].innerText = siteContent["main-content"]["product-content"];

let mainVisionTitle = document.querySelectorAll(".text-content h4");
mainVisionTitle[4].innerText = siteContent["main-content"]["vision-h4"];

let mainVisionText = document.querySelectorAll(".text-content p");
mainVisionText[4].innerText = siteContent["main-content"]["vision-content"];

//contact

let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].innerHTML = siteContent['contact']['address'];

let contactPhone = document.querySelectorAll('.contact p');
contactPhone[1].innerText = siteContent['contact']['phone'];

let contactEmail = document.querySelectorAll('.contact p');
contactEmail[2].innerText = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];