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
    "h1": "DOM <br>Is<br> Awesome",
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

// let nav = document.querySelectorAll("nav a")[0];
// nav.innerHTML = siteContent.nav['nav-item-1'];
// let nav1 = document.querySelectorAll("nav a")[1];
// nav1.innerHTML = siteContent.nav['nav-item-2'];
// let nav2 = document.querySelectorAll("nav a")[2];
// nav2.innerHTML = siteContent.nav['nav-item-3'];
// let nav3 = document.querySelectorAll("nav a")[3];
// nav3.innerHTML = siteContent.nav['nav-item-4'];
// let nav4 = document.querySelectorAll("nav a")[4];
// nav4.innerHTML = siteContent.nav['nav-item-5'];
// let nav5 = document.querySelectorAll("nav a")[5];
// nav5.innerHTML = siteContent.nav['nav-item-6'];

const nav = Array.from(document.querySelectorAll('nav a'));
const navigation = nav.map((element => element.textContent {
  navigation.push(siteContent.nav);
})
);
console.log(navigation);



// CTA Content 
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
//Middle Content
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// CTA Content 

let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta['h1'];
ctaH1.style.fontSize= '80px'
ctaH1.setAttribute('h1', siteContent['cta']['h1']);

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = "Get Started";
cta.setAttribute('button', siteContent['cta']['button'])



//main-content

let text1 = document.getElementsByClassName("text-content");
console.log(text1);
