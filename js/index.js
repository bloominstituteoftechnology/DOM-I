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

//* THIS IS WHERE I CHANGED THE COLOR OF THE BACKGROUND *//

document.body.style.backgroundColor = "linen";




//* THIS IS WHERE I WILL STYLE THE NAVIGATION *//

const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const navArray = Array.from(navLinks);

//* THIS IS WHERE I CALL THE EXISTING NAVIGATION BAR *//

navLinks.forEach((a, i) => a.textContent = siteContent.nav[`nav-item-${i + 1}`]);
navLinks.forEach(element => element.style.color = 'green');

//* THIS IS WHERE I WILL ADD TO THE FRONT OF THE NAVIGATION *//

const home = document.createElement('a');
home.href = "index.html";
home.textContent = "Home";
home.style.color = "red";
navBar.prepend(home);

//* THIS IS WHERE I WILL ADD TO THE BACK OF THE NAVIGATION *//

const blog = document.createElement('a');
blog.href = "index.html";
blog.textContent = "Blog";
blog.style.color = "red";
navBar.append(blog);

//* THE IMAGES WILL BE CALLED HERE *//

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//* H1 AND THE BUTTON *//

let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;
button.style.background = "red";
button.style.color = "black";


//* THIS IS WHERE I WILL CALL THE TITLES *//

let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["main-content"]["contact-h4"];

//* THIS IS WHERE I CHANGED THE COLOR OF THE TITLES *//

h4.forEach(element => element.style.color = 'red');

//* THIS IS WHERE I AM GOING TO CALL THE TEXT CONTENT *//



let p = document.querySelectorAll("p")
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

//* THIS IS WHERE THE CONTACT INFORMATION STARTS *//

p[5].textContent = siteContent.contact.address;
p[6].textContent = siteContent.contact.phone;
p[7].textContent = siteContent.contact.email;

//* THIS IS WHERE THE COPYRIGHT STARTS *//

p[8].textContent = siteContent.footer.copyright;

//* THIS IS WHERE I CHANGED THE COLOR OF THE TEXT *//
p.forEach(element => element.style.color = 'dodgerblue');