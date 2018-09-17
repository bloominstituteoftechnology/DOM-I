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
    "h1": "DOM\nIs\nAwesome",
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
    "address" : "123 Way 456 Street \nSomewhere, USA",
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

let navItems = document.querySelectorAll('.container header nav a')

//nav items
for (let i = 0; i < navItems.length; i++){
  let curKey = 'nav-item-' + (i +1);
  navItems[i].innerText = siteContent.nav[curKey];
}


//cta
let ctaH = document.querySelector('.container .cta h1');
ctaH.innerText = siteContent.cta.h1;

let ctaButton = document.querySelector('.container .cta button');
ctaButton.innerText = siteContent.cta.button;

let codeSnipImg = document.querySelector('.container .cta img');
codeSnipImg.src = siteContent.cta["img-src"]

//main content

let topContH = document.querySelectorAll('.container .main-content .top-content .text-content h4');
topContH[0].innerText = siteContent["main-content"]["features-h4"] ;
topContH[1].innerText = siteContent["main-content"]["about-h4"];

let topContTXT = document.querySelectorAll('.container .main-content .top-content .text-content p');
topContTXT[0].innerText = siteContent["main-content"]["features-content"] ;
topContTXT[1].innerText = siteContent["main-content"]["about-content"];

let botContH = document.querySelectorAll('.container .main-content .bottom-content .text-content h4');
botContH[0].innerText = siteContent["main-content"]["services-h4"] ;
botContH[1].innerText = siteContent["main-content"]["product-h4"];
botContH[2].innerText = siteContent["main-content"]["vision-h4"];

let botContTXT = document.querySelectorAll('.container .main-content .bottom-content .text-content p');
botContTXT[0].innerText = siteContent["main-content"]["services-content"] ;
botContTXT[1].innerText = siteContent["main-content"]["product-content"];
botContTXT[2].innerText = siteContent["main-content"]["vision-content"];

let midIMG = document.querySelector('.container .main-content .middle-img' )

midIMG.src = siteContent["main-content"]["middle-img-src"];

//contact
let contactH = document.querySelector('.container .contact h4')
contactH.innerText = siteContent.contact["contact-h4"]

let contactP = document.querySelectorAll('.container .contact p')

contactP[0].innerText = siteContent.contact.address
contactP[1].innerText = siteContent.contact.phone
contactP[2].innerText = siteContent.contact.email

//footer 
let footerP = document.querySelector('.container footer p')

footerP.innerText = siteContent.footer.copyright