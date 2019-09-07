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

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navbar = document.querySelectorAll('a');
navbar[0].innerHTML = siteContent["nav"]['nav-item-1'];
navbar[1].innerHTML = siteContent["nav"]['nav-item-2'];
navbar[2].innerHTML = siteContent["nav"]['nav-item-3'];
navbar[3].innerHTML = siteContent["nav"]['nav-item-4'];
navbar[4].innerHTML = siteContent["nav"]['nav-item-5'];
navbar[5].innerHTML = siteContent["nav"]['nav-item-6'];


let ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent["cta"]['h1'];
let button = document.querySelector('button');
button.innerHTML = siteContent["cta"]['button'];

let h4 = document.querySelectorAll('h4');
h4[0].innerHTML = siteContent["main-content"]['features-h4'];
h4[1].innerHTML = siteContent["main-content"]['about-h4'];
h4[2].innerHTML = siteContent["main-content"]['services-h4'];
h4[3].innerHTML = siteContent["main-content"]['product-h4'];
h4[4].innerHTML = siteContent["main-content"]['vision-h4'];
h4[5].innerHTML = siteContent["contact"]['contact-h4'];

//THIS WORKS TOO----->
//--// const arttitle = document.querySelectorAll('.text-content h4');
// arttitle[0].textContent ="Features"
// arttitle[1].textContent ="About"
// arttitle[2].textContent ="Services"
// arttitle[3].textContent ="Product"
// arttitle[4].textContent ="Vision"

let p = document.querySelectorAll('p');
p[0].innerHTML = siteContent['main-content']['features-content'];
p[1].innerHTML = siteContent['main-content']['about-content'];
p[2].innerHTML = siteContent['main-content']['services-content'];
p[3].innerHTML = siteContent['main-content']['product-content'];
p[4].innerHTML = siteContent['main-content']['vision-content'];
p[5].innerHTML = siteContent['contact']['address'];
p[6].innerHTML = siteContent['contact']['phone'];
p[7].innerHTML = siteContent['contact']['email'];

//THIS WORKS TOO----->
// const arttext = document.querySelectorAll('.text-content p');
// arttext[0].textContent ="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// arttext[1].textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// arttext[2].textContent ="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// arttext[3].textContent ="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// arttext[4].textContent ="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


let footer = document.querySelector('footer');
footer.innerHTML = siteContent['footer']['copyright'];


