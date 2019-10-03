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

// Update Logo img
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update Header img
let cta_logo = document.querySelector("#cta-img");
cta_logo.setAttribute("src", siteContent["cta"]["img-src"]);

// Update Middle img
let middle_img = document.querySelector("#middle-img");
middle_img.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
                                                                                                                                                      

// Add a links to navbar
const navLinks = document.querySelectorAll('nav a');

for (let i = 0; i <navLinks.length; i++) {
  navLinks[i].id = `nav-item-${i + 1}`;
  navLinks[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
}

// Add CTA section
let cta_text = document.querySelector('.cta-text h1');
cta_text.innerHTML = siteContent["cta"]["h1"];

// Add CTA button
let cta_button = document.querySelector('.cta-text button');
cta_button.innerHTML = siteContent["cta"]["button"];

// Add h4-content
let featuresContent = document.querySelectorAll('.main-content .text-content h4');
featuresContent[0].textContent = siteContent['main-content']['features-h4'] ;
featuresContent[1].textContent = siteContent['main-content']['about-h4'] ;
featuresContent[2].textContent = siteContent['main-content']['services-h4'] ;
featuresContent[3].textContent = siteContent['main-content']['product-h4'] ;
featuresContent[4].textContent = siteContent['main-content']['vision-h4'] ;

// Add p-content
let featuresContentP = document.querySelectorAll('.main-content .text-content p');
featuresContentP[0].textContent = siteContent['main-content']['features-content'] ;
featuresContentP[1].textContent = siteContent['main-content']['about-content'] ;
featuresContentP[2].textContent = siteContent['main-content']['services-content'] ;
featuresContentP[3].textContent = siteContent['main-content']['product-content'] ;
featuresContentP[4].textContent = siteContent['main-content']['vision-content'] ;

// Add contact
let contactItems = document.querySelector(".contact h4");
contactItems.textContent = siteContent.contact["contact-h4"];

let contactItemsP = document.querySelectorAll(".contact p");
contactItemsP[0].innerHTML = siteContent.contact["address"];
contactItemsP[1].textContent = siteContent.contact["phone"];
contactItemsP[2].textContent = siteContent.contact["email"];

// Add footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"];

//Add extra nav and colors
let navSelect = document.querySelector("nav");

let firstNavA = document.createElement("a");
firstNavA.setAttribute('href', '#');
firstNavA.innerText = "Hello";
navSelect.prepend(firstNavA);

let lastNavA = document.createElement("a");
lastNavA.setAttribute('href', '#');
lastNavA.innerText = "World";
navSelect.append(lastNavA);

let colorChange = navSelect.querySelectorAll("a");
colorChange.forEach(a => a.style.color = "red");