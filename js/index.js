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
        "address": "123 Way 456 Street <br> Somewhere, <br> USA",
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


const add = document.querySelectorAll('a')
add[0].style.color = 'green'
add[1].style.color = 'green'
add[2].style.color = 'green'
add[3].style.color = 'green'
add[4].style.color = 'green'
add[5].style.color = 'green'



//________________________________________________________
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
//________________________________________________________

//________________________________________________________
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//________________________________________________________

let newCta = document.getElementsByClassName("cta")[0];

newCta.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"]
newCta.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"]
newCta.getElementsByTagName("img")[0].innerHTML = siteContent["cta"]["img-src"]


let newNav = document.getElementsByTagName("nav")[0];
newNav.getElementsByTagName("a")[0].innerHTML = siteContent["nav"]["nav-item-1"]
newNav.getElementsByTagName("a")[1].innerHTML = siteContent["nav"]["nav-item-2"]
newNav.getElementsByTagName("a")[2].innerHTML = siteContent["nav"]["nav-item-3"]
newNav.getElementsByTagName("a")[3].innerHTML = siteContent["nav"]["nav-item-4"]
newNav.getElementsByTagName("a")[4].innerHTML = siteContent["nav"]["nav-item-5"]
newNav.getElementsByTagName("a")[5].innerHTML = siteContent["nav"]["nav-item-6"]

//newNav.getElementsByTagName("img")[0].innerHTML = siteContent["nav"]['img-src']
//newNav.setAttribute('src', siteContent["nav"]["img-src"]);


let subHeader = document.getElementsByClassName("main-content")[0];
subHeader.getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
subHeader.getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
subHeader.getElementsByTagName('h4')[2].innerHTML = siteContent["main-content"]["services-h4"];
subHeader.getElementsByTagName('h4')[3].innerHTML = siteContent["main-content"]["product-h4"];
subHeader.getElementsByTagName('h4')[4].innerHTML = siteContent["main-content"]["vision-h4"];

let text = document.getElementsByClassName("main-content")[0];
subHeader.getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
subHeader.getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["about-content"];
subHeader.getElementsByTagName('p')[2].innerHTML = siteContent["main-content"]["services-content"];
subHeader.getElementsByTagName('p')[3].innerHTML = siteContent["main-content"]["product-content"];
subHeader.getElementsByTagName('p')[4].innerHTML = siteContent["main-content"]["vision-content"];


let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"]

// const nav = document.getElementsByTagName("nav")
// let newElement = document.createElement('<a href="#"></a>')
// newElement.textContent = OO
// nav.appendChild(newElement)