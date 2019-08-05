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
//Pictures
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])

document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"])

document.getElementById('middle-img').setAttribute('src',siteContent['main-content']['middle-img-src'])

//H1 and button

document.getElementsByTagName('button')[0].textContent = "Get Started";

document.querySelector('h1').textContent = 'DOM IS AWESOME!';

// NAV BAR

const navItem1 = document.getElementsByTagName('a')[0].textContent = siteContent.nav["nav-item-1"];

const navItem2 = document.getElementsByTagName('a')[1].textContent = siteContent.nav["nav-item-2"];

const navItem3 = document.getElementsByTagName('a')[2].textContent = siteContent.nav["nav-item-3"];

const navItem4 = document.getElementsByTagName('a')[3].textContent = siteContent.nav["nav-item-4"];

const navItem5 = document.getElementsByTagName('a')[4].textContent = siteContent.nav["nav-item-5"];


//Main Content//
//H4's

const title1 = document.getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"];

const title2 = document.getElementsByTagName('h4')[1].textContent = siteContent["main-content"]["about-h4"];

const title3 = document.getElementsByTagName('h4')[2].textContent = siteContent["main-content"]["services-h4"];

const title4 = document.getElementsByTagName('h4')[3].textContent = siteContent["main-content"]["product-h4"];

const title5 = document.getElementsByTagName('h4')[4].textContent = siteContent["main-content"]["vision-h4"];


//Paragraphs//

const p1 = document.getElementsByTagName('p')[0].textContent = siteContent["main-content"]["features-content"];

const p2 = document.getElementsByTagName('p')[1].textContent = siteContent["main-content"]["about-content"];

const p3 = document.getElementsByTagName('p')[2].textContent =  siteContent["main-content"]["services-content"];

const p4 = document.getElementsByTagName('p')[3].textContent =  siteContent["main-content"]["product-content"];

const p5 = document.getElementsByTagName('p')[4].textContent =  siteContent["main-content"]["vision-content"];


//Contact

const contact1 = document.getElementsByTagName('p')[5].textContent = siteContent.contact.address;

const contact2 = document.getElementsByTagName('p')[6].textContent = siteContent.contact.phone;

const contact3 = document.getElementsByTagName('p')[7].textContent = siteContent.contact.email;

const contact4 = document.getElementsByTagName('p')[8].textContent = siteContent.footer.copyright;

//## Task 3: Add new content


let newColor = document.querySelectorAll("a");

newColor.forEach(link => {
  link.style.color = "green";
});

var newChild1 = document.createElement('a');
newChild1.textContent = 'link1';
document.querySelector('nav').appendChild(newChild1);

var newChild2 = document.createElement('a')
newChild2.textContent = 'link2'
document.querySelector('nav').prepend(newChild2);
  
//boya