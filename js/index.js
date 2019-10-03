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
    "h1": "DOM <br> Is <br> Awesome",
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
//navigation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav1 = document.querySelectorAll('nav a');

nav1.forEach((value, index) => {
  value.innerHTML = siteContent.nav[`nav-item-${index + 1}`]
});
nav1.forEach(param => param.style.color = 'green');

const newLink = document.createElement('a');
const addNav = document.querySelector('nav');

addNav.prepend(newLink.setAttribute('href', 'Welcome'));
addNav.append(newLink.innerText = "Goodbye")
newLink.style.color = "green";



//CTA
const shout = document.querySelector('h1');
shout.innerHTML = siteContent['cta']['h1'] 

const ctaBut = document.querySelector('button');
ctaBut.innerHTML = siteContent['cta']['button'] 

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

//Main Content

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// const headers = document.querySelectorAll('h4');
// headers[0].innerText = siteContent["main-content"]["features-h4"];
// headers[1].innerText = siteContent["main-content"]["about-h4"];
// headers[2].innerText = siteContent["main-content"]["services-h4"];
// headers[3].innerText = siteContent["main-content"]["product-h4"];
// headers[4].innerText = siteContent["main-content"]["vision-h4"];

const contents = document.querySelectorAll('p');
contents[0].innerText = siteContent["main-content"]["features-content"];
contents[1].innerText = siteContent["main-content"]["about-content"];
contents[2].innerText = siteContent["main-content"]["services-content"];
contents[3].innerText = siteContent["main-content"]["product-content"];
contents[4].innerText = siteContent["main-content"]["vision-content"];

//contact 
headers[5].innerText = siteContent.contact["contact-h4"];

contents[5].innerText = siteContent.contact.address;
contents[6].innerText = siteContent.contact.phone;
contents[7].innerText = siteContent.contact.email;

//Footer
contents[8].innerText = siteContent.footer.copyright;




const mainH4 = document.querySelectorAll('h4');
mainH4.forEach((value, index) => {
  value.textContent = siteContent.main-content[`${index + 1}-h4`]
});


