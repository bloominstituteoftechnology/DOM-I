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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Try working on the nav bar first
const newNav = document.querySelectorAll('a');
newNav[0].textContent = "Services";
newNav[1].textContent = "Product";
newNav[2].textContent = "Vision";
newNav[3].textContent = "Features";
newNav[4].textContent = "About";
newNav[5].textContent = "Contact";

//* [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//* [ ] Using your selectors, update the content to match the example file.
const mainTitle = document.getElementsByTagName('h1');
mainTitle[0].innerHTML = "DOM<br/>IS<br/>AWESOME!";
const mainButton = document.getElementsByTagName('button');
mainButton[0].textContent = 'Get Started';

// All H4 replacements
const titleSet = document.querySelectorAll('h4');
titleSet[0].textContent = siteContent["main-content"]["features-h4"];
titleSet[1].textContent = siteContent["main-content"]["about-h4"];
titleSet[2].textContent = siteContent["main-content"]["services-h4"];
titleSet[3].textContent = siteContent["main-content"]["product-h4"];
titleSet[4].textContent = siteContent["main-content"]["vision-h4"];

//all main content p replacements
const contentStuff = document.querySelectorAll('.text-content p');
contentStuff[0].textContent = siteContent["main-content"]["features-content"];
contentStuff[1].textContent = siteContent["main-content"]["about-content"];
contentStuff[2].textContent = siteContent["main-content"]["services-content"];
contentStuff[3].textContent = siteContent["main-content"]["product-content"];
contentStuff[4].textContent = siteContent["main-content"]["vision-content"];

//style change on navigation to Green
const greenNav2 = document.querySelectorAll('nav');
console.log(greenNav2)

//greenNav2.style.color = "green";
greenNav2.forEach(item => item.style.color = 'green');
//I can't see why this didn't work. The selection is correct. It is reading as undefined.