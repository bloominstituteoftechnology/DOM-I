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


//Updating a elements in nav
const navArray = document.getElementsByTagName('a');

//nav text update
navArray[0].innerText = "Services";
navArray[1].innerText = "Product";
navArray[2].innerText = "Vision";
navArray[3].innerText = "Features";
navArray[4].innerText = "About";
navArray[5].innerText = "Contact";

//nav text color update
navArray[0].style.color = "green";
navArray[1].style.color = "green";
navArray[2].style.color = "green";
navArray[3].style.color = "green";
navArray[4].style.color = "green";
navArray[5].style.color = "green";

//adding items to the nav
const blog = document.createElement('a');
const navElement = document.querySelector('nav');
navElement.appendChild(blog);
blog.innerText = "Blog";
blog.style.color = "green";

const signUp = document.createElement('a');
navElement.prepend(signUp);
signUp.innerText = "Sign Up";
signUp.style.color = "green";




//updating cta text
const ctaText = document.getElementsByTagName('h1');
ctaText[0].innerHTML = "Dom <br> is <br> Awesome";

const button = document.getElementsByTagName('button');
button[0].innerText = "Get Started";

const ctaImg = document.getElementById('cta-img');
ctaImg.src = "img/header-img.png";



//main-content headings
const hFours = document.getElementsByTagName('h4');
hFours[0].innerText = "Features";
hFours[1].innerText = "About";
hFours[2].innerText = "Services";
hFours[3].innerText = "Products";
hFours[4].innerText = "Vision";

//contact info h4
hFours[5].innerText = "Contact";

//main-content paragraphs
const pText = document.getElementsByTagName('p');

pText[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact paragraph
pText[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
pText[6].innerText = "1 (888) 888-8888"
pText[7].innerText = "sales@greatidea.io"

//footer paragraph
pText[8].innerText = "Copyright Great Idea! 2018"


//updating middle image src
const midImage = document.querySelector('.middle-img');
midImage.src = "img/mid-page-accent.jpg"


