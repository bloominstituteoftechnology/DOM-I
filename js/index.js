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


// anchor tags

const navList = document.getElementsByTagName('a');

//why doesnt this work?
/* const navListArr = Array.from(navList);

navListArr.forEach(a => {
  a.stlye = "color: green";
}); */

for(let i = 0; i < navList.length; i++){
  navList[i].style = "color:green";
}

for(let i = 0; i < navList.length; i++){
  navList[i].innerHTML = siteContent["nav"]["nav-item-"+(i+1)];
}

//brand img
const brandImg = document.getElementById("logo-img");
brandImg.setAttribute('src', siteContent["nav"]["img-src"]);


//code snippet img

const cdeSnipImg = document.getElementById("cta-img");
cdeSnipImg.setAttribute('src', siteContent["cta"]["img-src"]);
// ---------------------------END OF NAV STUFF -----------------------


// ---------------------------CTA SECTION ----------------------------
//h1 'DOM is Awesome text
const ctaContent = document.querySelector(".cta-text");
ctaContent.style.backgroundColor = "red";

ctaContent.childNodes[1].innerHTML = siteContent["cta"]["h1"];

//cta button
ctaContent.childNodes[3].innerHTML = siteContent["cta"]["button"];
ctaContent.childNodes[3].style.backgroundColor = "black";
ctaContent.childNodes[3].style.color = "white";
// ----------------------------END OF CTA STUFF -----------------------


// ----------------------------MAIN CONTENT----------------------------
//Image of codesnip across screen 
const CdeSnipImgMid = document.getElementById("middle-img");
CdeSnipImgMid.setAttribute('src', siteContent['main-content']['middle-img-src']);


//top content

const topContent = document.querySelector(".top-content");


//features
topContent.childNodes[1].children[0].innerHTML = siteContent['main-content']['features-h4'];
topContent.childNodes[1].children[1].innerHTML = siteContent['main-content']['features-content'];

//about
topContent.childNodes[3].children[0].innerHTML = siteContent['main-content']['about-h4'];
topContent.childNodes[3].children[1].innerHTML = siteContent['main-content']['about-content'];
//------------------------------------END OF TOP CONTENT --------------------

//bottom content

const bottContent = document.querySelector(".bottom-content");


//services
bottContent.childNodes[1].children[0].innerHTML = siteContent['main-content']['services-h4'];
bottContent.childNodes[1].children[1].innerHTML = siteContent['main-content']['services-content'];

//product
bottContent.childNodes[3].children[0].innerHTML = siteContent['main-content']['product-h4'];
bottContent.childNodes[3].children[1].innerHTML = siteContent['main-content']['services-content'];

//vision
bottContent.childNodes[5].children[0].innerHTML = siteContent['main-content']['vision-h4'];
bottContent.childNodes[5].children[1].innerHTML = siteContent['main-content']['vision-content'];
//---------------------------------END OF BOTTOM CONTENT ----------------------

//---------------------------------CONTACT SECTION ----------------------------

const contactSect = document.querySelector(".contact");
contactSect.style.backgroundColor = "red";
contactSect.style.color = "white";

//conact h4
contactSect.childNodes[1].innerHTML = siteContent['contact']['contact-h4'];

//address
contactSect.childNodes[3].innerHTML = siteContent['contact']['address'];

//phone
contactSect.childNodes[5].innerHTML = siteContent['contact']['phone'];

//email
contactSect.childNodes[7].innerHTML = siteContent['contact']['email'];

//---------------------------------END OF CONTACT SECTION ------------------------

//---------------------------------FOOTER ----------------------------------------

const footerSect = document.getElementsByTagName("footer");
footerSect[0].innerHTML = siteContent['footer']['copyright'];

//---------------------------------END OF FOOTER-----------------------------------

