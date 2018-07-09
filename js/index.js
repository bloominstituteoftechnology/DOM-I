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

// ===== STRETCH GOAL STYLES ======= 

let body = document.querySelector('body');
body.style.backgroundColor = "lightgrey";
body.style.fontSize = "1.2rem"
body.style.fontWeight = "bold"



// appendChild method 
let nav = document.querySelector('nav')
let navBar = document.querySelectorAll('nav a');

let navSection1 = document.createElement("a")
navSection1.innerHTML = "Random"
nav.appendChild(navSection1); 

//prependChild method 
let navSection2 = document.createElement("a"); 
navSection2.innerHTML = "Random2"
nav.prepend(navSection2);

navBar[0].innerHTML = siteContent['nav']['nav-item-1'];
navBar[1].innerHTML = siteContent['nav']['nav-item-2'];
navBar[2].innerHTML = siteContent['nav']['nav-item-3'];
navBar[3].innerHTML = siteContent['nav']['nav-item-4'];
navBar[4].innerHTML = siteContent['nav']['nav-item-5'];
navBar[5].innerHTML = siteContent['nav']['nav-item-6'];

for(let i = 0; i < navBar.length; i++){
  navBar[i].style = "color:green"
}



let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

// ========== CTA ========== 

let ctaHeading = document.querySelector('.cta h1');
ctaHeading.innerHTML = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = siteContent['cta']['button']

let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// ============ Main Content ============= 

let mainHeadings = document.querySelectorAll('.text-content h4');
mainHeadings[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeadings[1].innerHTML = siteContent["main-content"]["about-h4"]
mainHeadings[2].innerHTML = siteContent["main-content"]["services-h4"]
mainHeadings[3].innerHTML = siteContent["main-content"]["product-h4"]
mainHeadings[4].innerHTML = siteContent["main-content"]["vision-h4"]

let mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


let mainParagraphs = document.querySelectorAll('.text-content p');
mainParagraphs[0].innerHTML = siteContent['main-content']['features-content'];
mainParagraphs[1].innerHTML = siteContent['main-content']['about-content'];
mainParagraphs[2].innerHTML = siteContent['main-content']['services-content'];
mainParagraphs[3].innerHTML = siteContent['main-content']['product-content'];
mainParagraphs[4].innerHTML = siteContent['main-content']['vision-content'];


// ===== Contact ===== 

let contactHeading = document.querySelector('.contact h4');
contactHeading.innerHTML = siteContent['contact']['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];


// ======== footer ========

let footer = document.querySelector('footer p')
footer.innerHTML = siteContent['footer']['copyright']
