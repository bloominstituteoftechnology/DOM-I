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
    "h1": "DOM <br> Is <br> Awesome", // added the <br> tags here
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
    "address" : "123 Way 456 Street <br> Somewhere, USA", // added <br> tag here
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

// Navigation here --------------------------------------------------------------------
let navigation = document.querySelectorAll('nav a');
for (let i = 0; i < navigation.length; i++){
  navigation[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
  navigation[i].style.color = 'green';
}

let navbar = document.querySelector('nav');

const link1 = document.createElement('a');
  link1.innerText = 'Pick-Me-Up';
  link1.href = 'http://www.placepuppy.net/1p/400/250';
  link1.style.color = 'green';
  link1.target = "_blank"
navbar.appendChild(link1);

const link2 = document.createElement('a');
  link2.innerText = 'Alter Site';
  link2.href = '#';
  link2.style.color = 'green';
navbar.prepend(link2);
//---------------------------------------------------------------------------------------


// CTA section here ---------------------------------------------------------------------
let ctaText = document.querySelector("h1")
ctaText.innerHTML = siteContent["cta"]['h1'];

let ctaBtn = document.querySelector("button")
ctaBtn.innerText = siteContent["cta"]['button'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
//---------------------------------------------------------------------------------------


// Top Content Here ---------------------------------------------------------------------
// I feel like there must be a way to loop through the below as well as the bottom content section. This feels a bit verbose.
let topContent = document.querySelectorAll(".top-content .text-content");

// top content left box
topContent[0].childNodes[1].innerText = siteContent["main-content"]['features-h4'];
topContent[0].childNodes[3].innerText = siteContent["main-content"]['features-content'];

// top content right box
topContent[1].childNodes[1].innerText = siteContent["main-content"]['about-h4'];
topContent[1].childNodes[3].innerText = siteContent["main-content"]['about-content'];
//---------------------------------------------------------------------------------------


// Middle Image -------------------------------------------------------------------------
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//---------------------------------------------------------------------------------------


// Bottom Content Here ------------------------------------------------------------------
let bottomContent = document.querySelectorAll(".bottom-content .text-content");

// bottom content left box
bottomContent[0].childNodes[1].innerText = siteContent["main-content"]['services-h4'];
bottomContent[0].childNodes[3].innerText = siteContent["main-content"]['services-content'];

// bottom content middle box
bottomContent[1].childNodes[1].innerText = siteContent["main-content"]['product-h4'];
bottomContent[1].childNodes[3].innerText = siteContent["main-content"]['product-content'];

// bottom content right box
bottomContent[2].childNodes[1].innerText = siteContent["main-content"]['vision-h4'];
bottomContent[2].childNodes[3].innerText = siteContent["main-content"]['vision-content'];
//---------------------------------------------------------------------------------------


// Contact Section Here -----------------------------------------------------------------
let contact = document.querySelector(".contact");
contact.childNodes[1].innerText = siteContent["contact"]['contact-h4'];
contact.childNodes[3].innerHTML = siteContent["contact"]['address'];
contact.childNodes[5].innerText = siteContent["contact"]['phone'];
contact.childNodes[7].innerText = siteContent["contact"]['email'];
//---------------------------------------------------------------------------------------


// Footer Here --------------------------------------------------------------------------
let footer = document.querySelector('footer p')
footer.innerText = siteContent["footer"]['copyright'];
//---------------------------------------------------------------------------------------

// Stretch Work Here --------------------------------------------------------------------

const placeholder = `We'll put some happy little leaves here and there. Let's make some happy little clouds in our world. Let's get wild today. We have a fantastic little sky! I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow.`;


link2.addEventListener('click', function() {
  ctaText.innerHTML = 'Bob Ross <br> Takeover';
  link2.innerText = 'Site Changed!';
  link2.style.color = 'red';
  let paragraphs = document.querySelectorAll('.main-content p');
  paragraphs.forEach(x => x.innerHTML = placeholder);
  let headers = document.querySelectorAll('.main-content h4');
  headers.forEach(x => x.innerHTML = 'Bob Ross');
  headers.forEach(x => x.style.fontFamily = 'Georgia, serif');
});

