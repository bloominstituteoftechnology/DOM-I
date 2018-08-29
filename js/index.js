const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//MAIN-CONTENT

const h4TopContent    = document.querySelectorAll('.main-content .top-content .text-content h4'),
pTopContent     = document.querySelectorAll('.main-content .top-content .text-content p'),
h4BottomContent = document.querySelectorAll('.main-content .bottom-content .text-content h4'),
pBottomContent  = document.querySelectorAll('.main-content .bottom-content .text-content p');
h4TopContent[0].innerHTML     = siteContent['main-content']['features-h4'];
pTopContent[0].innerHTML      = siteContent['main-content']['features-content'];
h4TopContent[1].innerHTML     = siteContent['main-content']['about-h4'];
pTopContent[1].innerHTML      = siteContent['main-content']['about-content'];
h4BottomContent[0].innerHTML      = siteContent['main-content']['services-h4'];
pBottomContent [0].innerHTML      = siteContent['main-content']['services-content'];
h4BottomContent [1].innerHTML     = siteContent['main-content']['product-h4'];
pBottomContent [1].innerHTML      = siteContent['main-content']['product-content'];
h4BottomContent [2].innerHTML     = siteContent['main-content']['vision-h4'];
pBottomContent [2].innerHTML      = siteContent['main-content']['vision-content'];

            // IMAGES
const logo = document.getElementById("logo-img"); //selects logo in HTML
logo.setAttribute("src", siteContent["nav"]["img-src"]); //sets new logo

const headerImg = document.getElementById("cta-img"); //selects logo in HTML
headerImg.setAttribute("src", siteContent["cta"]["img-src"]); //sets new logo

const midImg = document.getElementById("middle-img"); //selects logo in HTML
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]); //sets new logo

// CONTACT
const contact0 = document.querySelectorAll(".contact h4")[0];
contact0.innerText = siteContent["contact"]["contact-h4"];

const contact1 = document.querySelectorAll(".contact p")[1];
contact1.innerHTML = siteContent["contact"]["address"];

const contact2 = document.querySelectorAll(".contact p")[2];
contact2.innerHTML = siteContent["contact"]["phone"];

//const contact3 = document.querySelectorAll(".contact p")[3]; 
// contact3.innerHTML = siteContent["contact"]["email"];

// FOOTER

const footerContent = document.querySelector("footer");
footerContent.innerText = siteContent["footer"]["copyright"];
