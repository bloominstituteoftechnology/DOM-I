const list = document.getElementsByTagName('a');
list[0].className = "nav-item-1";list[0].innerHTML = "Services";
list[1].className = "nav-item-2";list[1].innerHTML = "Products";
list[2].className = "nav-item-3";list[2].innerHTML = "Vision";
list[3].className = "nav-item-4";list[3].innerHTML = "Features";
list[4].className = "nav-item-5";list[4].innerHTML = "About";
list[5].className = "nav-item-6";list[5].innerHTML = "Contact";
const logo = document.getElementById('logo-img');
logo.src = "img/logo.png"; logo.alt = "Logo Image";
const cta1 = document.getElementsByTagName('h1')
cta1[0].innerHTML = "DOM Is Awesome";
const cta2 = document.getElementsByTagName('button');
cta2[0].innerHTML = "Get Started";
const headerImage = document.getElementById('cta-img');
headerImage.src = "img/header-img.png";
const mainContentHeaders = document.getElementsByTagName('h4');
const mainContentHeadersP = document.getElementsByTagName('p');
mainContentHeaders[0].className = "features-h4";mainContentHeaders[0].innerHTML = "Features";mainContentHeadersP[0].innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentHeaders[1].className = "about-h4";mainContentHeaders[1].innerHTML = "About";mainContentHeadersP[1].innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentHeaders[2].className = "services-h4";mainContentHeaders[2].innerHTML = "Services";mainContentHeadersP[2].innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentHeaders[3].className = "products-h4";mainContentHeaders[3].innerHTML = "Products";mainContentHeadersP[3].innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentHeaders[4].className = "vision-h4";mainContentHeaders[4].innerHTML = "Vision";mainContentHeadersP[4].innerHTML="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentHeaders[5].className = "contact-h4";mainContentHeaders[5].innerHTML = "Contact";mainContentHeadersP[5].className = "Address";mainContentHeadersP[5].innerHTML = "123 Way 456 Street Somewhere, USA";
mainContentHeadersP[5].className = "Phone";mainContentHeadersP[6].innerHTML = "1 (888) 888-8888";
mainContentHeadersP[7].className = "email";mainContentHeadersP[7].innerHTML = "sales@greatidea.io";
mainContentHeadersP[8].className = "copyright";mainContentHeadersP[8].innerHTML = "Copyright Great Idea 2018!";
const midImg = document.getElementById('middle-img');
midImg.src = "img/mid-page-accent.jpg" 

// cta[1].innerText = "Get Started";
// const siteContent = {
//   "nav": {
//     z"nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//     "img-src": "img/logo.png"
//   },
//   "cta": {
//     "h1": "DOM Is Awesome",
//     "button": "Get Started",
//     "img-src": "img/header-img.png"
//   },
//   "main-content": {
//     "features-h4":"Features",
//     "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "about-h4":"About",
//     "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "middle-img-src": "img/mid-page-accent.jpg",
//     "services-h4":"Services",
//     "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "product-h4":"Product",
//     "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "vision-h4":"Vision",
//     "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   },
//   "contact": {
//     "contact-h4" : "Contact",
//     "address" : "123 Way 456 Street Somewhere, USA",
//     "phone" : "1 (888) 888-8888",
//     "email" : "sales@greatidea.io",
//   },
//   "footer": {
//     "copyright" : "Copyright Great Idea! 2018"
//   },
// };

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
