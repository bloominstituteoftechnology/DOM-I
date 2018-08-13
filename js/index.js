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

// *** single selector shorthand with custom function
function $(selector) {
    return document.querySelector(selector);
}

// *** multi element selector shorthand with custom function that converts NodeList to an Array with Array.from giving it access to all the "own" methods built into the Array function (which inherits from Object).
function $A(selector) {
    return Array.from(document.querySelectorAll(selector));
}

// *** single element selectors ***
const logoImg = $('#logo-img');
const ctaImg = $('#cta-img');
const h1 = $('h1');
const button= $('button');
const middleImg = $('#middle-img');

// *** multi element selectors converted from NodeList to Array via Array.from() ***
const aTagsInNav = $A('a');
const h4 = $A('h4');
const p = $A('p');


// *** text arrays ***
const aTagText = ["Services", "Product", "Vision", "Features", "About", "Contact"];
const h4Text = ["Features", "About", "Services", "Product", "Vision", "Contact"];
const pText = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "123 Way 456 Street<br> Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io", "Copyright Great Idea! 2018"];

// *** set inner text of a tags in nav ***
aTagsInNav.map((e, i) => e.innerText = aTagText[i]);

// *** set source of logo-img ***
logoImg.src = "./img/logo.png";

// *** set h1 ***
h1.innerHTML = `DOM<br> is<br> Awesome`;

// *** set cta button ***
button.innerText = "Get Started";

// *** set cta-img ***
ctaImg.src = "img/header-img.png";

// *** set h4 text ***
h4.map((e, i) => e.innerText = h4Text[i]);

// *** set p text ***
p.map((e, i) => e.innerHTML = pText[i]);

// *** set middle-img source ***
middleImg.src = "img/mid-page-accent.jpg";

// *** set nav text to be green ***
aTagsInNav.map(e => e.style.color = "green");

// *** appendChild() and prepend() items to the navigation items. ***
const nav = $('nav');

// *** createElement function for shorthand of creating a node and setting text inside of it.
function createElement(tag, text, parent){
  let newElement = document.createElement(tag);
  if(text){
    newElement.innerText = text;
  }
  const parentElement = $(parent);
  return parentElement.appendChild(newElement);
}

// *** append an element to the nav parent element  using custom function that I made :)***
let newATag = createElement('a', 'Career', 'nav');
newATag.style.cssText = aTagsInNav[0].style.cssText;