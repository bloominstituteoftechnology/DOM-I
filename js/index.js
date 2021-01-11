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
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let doc = document
let logo = doc.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
let nav = doc.querySelectorAll('nav a');
nav[0].textContent = siteContent["nav"]["nav-item-1"]
nav[1].textContent = siteContent["nav"]["nav-item-2"]
nav[2].textContent = siteContent["nav"]["nav-item-3"]
nav[3].textContent = siteContent["nav"]["nav-item-4"]
nav[4].textContent = siteContent["nav"]["nav-item-5"]
nav[5].textContent = siteContent["nav"]["nav-item-6"]

nav.forEach(ele => (ele.style.color = "green"));
let nav1 = doc.createElement('a');
let nav2 = doc.createElement('a');
nav1.href = '#';
nav2.href = '#';
nav1.textContent = 'Blog';
nav2.textContent = 'People';
nav1.style.color = 'green';
nav2.style.color = 'green';
doc.querySelector('nav').appendChild(nav1);
doc.querySelector('nav').appendChild(nav2);

//Cta
let cta = doc.querySelector('.cta');
let ctaH1 = cta.querySelector('h1');
let ctaButton = cta.querySelector('button');
ctaH1.textContent = siteContent["cta"]['h1'];
ctaButton.textContent = siteContent["cta"]['button'];
let ctaImg = doc.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//Headers
let section = doc.querySelector('.main-content');
let sectionHeader = section.querySelectorAll('h4');
sectionHeader[0].textContent = siteContent["main-content"]["features-h4"];
sectionHeader[1].textContent = siteContent["main-content"]["about-h4"];
sectionHeader[2].textContent = siteContent["main-content"]["services-h4"];
sectionHeader[3].textContent = siteContent["main-content"]["product-h4"];
sectionHeader[4].textContent = siteContent["main-content"]["vision-h4"];

let sectionContent = section.querySelectorAll('p');
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

let sectionImg = doc.querySelector("#middle-img");
sectionImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact
let contact = doc.querySelector('.contact');
let contactHeader = contact.querySelectorAll('h4');
contactHeader[0].textContent = siteContent["contact"]["contact-h4"];
let contactP = contact.querySelectorAll('p');
contactP[0].innerHTML = siteContent["contact"]["address"].replace(/\n/g, '<br>');
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

//Footer
let footer = doc.querySelector('footer');
footer.querySelector('p').textContent = siteContent.footer.copyright;