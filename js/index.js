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




//-----------------------NAVBAR LINKS---------------------------

let myNav1 = document.querySelectorAll('nav a');

myNav1[0].textContent = siteContent.nav["nav-item-1"];
myNav1[1].textContent = siteContent.nav["nav-item-2"];
myNav1[2].textContent = siteContent.nav["nav-item-3"];
myNav1[3].textContent = siteContent.nav["nav-item-4"];
myNav1[4].textContent = siteContent.nav["nav-item-5"];
myNav1[5].textContent = siteContent.nav["nav-item-6"];

//--------------------------TASK 3-------------------------

// CHANGE NAV LINKS TO GREEN
Array.from(myNav1).forEach((item) => {
  return item.style.color = 'green';
});


//APPEND TO NAVBAR

// new var that selects nav because myNav1 is htmlcollection
let navAnchor = document.querySelector('nav');

//appendChild() to navbar
let newAnchor = document.createElement('a');
newAnchor.textContent = 'pepen';
navAnchor.appendChild(newAnchor);

//prepend() to navbar
let newAnchor2 = document.createElement('a');
newAnchor2.textContent = 'luis';
navAnchor.prepend(newAnchor2);

//-----------------STRECHT GOAL EVEN LISTENER--------------
let ctaSelect = document.querySelector('.cta');
let actionBtn = document.createElement('button');
actionBtn.textContent = 'Turn BG Red';
ctaSelect.appendChild(actionBtn);

actionBtn.addEventListener('click', function(){
  return ctaSelect.style = 'background-color:red';
});





//---------------------------SECTION CTA-------------------------

//cta-h1
let myCtaH1 = document.querySelectorAll('.cta-text h1');
myCtaH1[0].textContent = siteContent.cta['h1'];

//cta-Button
let myCtaButton = document.querySelectorAll('.cta-text button');
myCtaButton[0].textContent = siteContent.cta['button'];

//cta-img
let myCtaImg = document.getElementById('cta-img');
myCtaImg.setAttribute('src', siteContent.cta["img-src"]);


//---------------------------MAIN CONTENT-----------------------------

//features h4
let mainFeaturesH4 = document.querySelector('.top-content div:nth-child(1) h4');
mainFeaturesH4.innerText = siteContent["main-content"]['features-h4'];

//features P text
let mainFeaturesP = document.querySelector('.top-content div:nth-child(1) p');
mainFeaturesP.innerText = siteContent["main-content"]['features-content'];

//about h4
let mainAboutH4 = document.querySelector('.top-content div:nth-child(2) h4');
mainAboutH4.innerText = siteContent['main-content']['about-h4'];

//about P text
let mainAboutP = document.querySelector('.top-content div:nth-child(2) p');
mainAboutP.innerText = siteContent['main-content']['about-content'];


//MIDDLE IMG
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//---------------------BOTTOM CONTENT-------------------------------------

//services
let bottomServicesH4 = document.querySelector('.bottom-content div:nth-child(1) h4');
bottomServicesH4.innerText = siteContent['main-content']['services-h4'];

let bottomServicesP = document.querySelector('.bottom-content div:nth-child(1) p');
bottomServicesP.innerText = siteContent['main-content']['services-content'];

//product
let bottomProductH4 = document.querySelector('.bottom-content div:nth-child(2) h4');
bottomProductH4.innerText = siteContent['main-content']['product-h4'];

let bottomProductP = document.querySelector('.bottom-content div:nth-child(2) p');
bottomProductP.innerText = siteContent['main-content']['product-content'];

//vision
let bottomVisionH4 = document.querySelector('.bottom-content div:nth-child(3) h4');
bottomVisionH4.innerText = siteContent['main-content']['vision-h4'];

let bottomVisionP = document.querySelector('.bottom-content div:nth-child(3) p');
bottomVisionP.innerText = siteContent['main-content']['vision-content'];



// ----------------CONTACT  section------------------------------


let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]['contact-h4'];

let contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.innerText = siteContent["contact"]['address'];

let contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.innerText = siteContent["contact"]['phone'];

let contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.innerText = siteContent["contact"]['email'];



//----------------FOOTER-----------------------------

let myFooter = document.querySelector('footer p');
myFooter.innerText = siteContent['footer']['copyright'];