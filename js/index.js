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
let navItem = document.querySelectorAll("a");
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"]
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"]
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"]
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"]
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"]
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"]
for (i = 0; i < navItem.length; i++) {
  navItem[i].style.color = "green";
}
let newA = document.createElement('a');
newA.innerHTML = "History";
let nav = document.querySelector("nav");
nav.appendChild(newA);

let newB = document.createElement('a');
newB.innerHTML = "Advice";
let nav2 = document.querySelector("nav");
nav2.prepend(newB);

let h1 = document.querySelector("h1");
h1.innerHTML = siteContent["cta"]["h1"]

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"]

let ctaImage =  document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let h4 = document.querySelectorAll("h4");
h4[0].innerHTML = siteContent["main-content"]["features-h4"]
h4[1].innerHTML = siteContent["main-content"]["about-h4"]
h4[2].innerHTML = siteContent["main-content"]["services-h4"]
h4[3].innerHTML = siteContent["main-content"]["product-h4"]
h4[4].innerHTML = siteContent["main-content"]["vision-h4"]
h4[5].innerHTML = siteContent["contact"]["contact-h4"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let p = document.querySelectorAll("p");
p[0].innerHTML = siteContent["main-content"]["features-content"]
p[1].innerHTML = siteContent["main-content"]["about-content"]
p[2].innerHTML = siteContent["main-content"]["services-content"]
p[3].innerHTML = siteContent["main-content"]["product-content"]
p[4].innerHTML = siteContent["main-content"]["vision-content"]
p[5].innerHTML = siteContent["contact"]["address"]
p[6].innerHTML = siteContent["contact"]["phone"]
p[7].innerHTML = siteContent["contact"]["email"]
p[8].innerHTML = siteContent["footer"]["copyright"]

//********STRETCH EXERCISE*************/
function updateContent() {
  if (btn.innerHTML === "add Content") {
    btn.innerHTML = "Look, new text"
  } else {
    btn.innerHTML = "add Content";
  }
}

function updateContent2() {
  if (btn2.innerHTML === "Cool Content") {
    btn2.innerHTML = "Not Cool Content"
  } else {
    btn2.innerHTML = "Cool Content";
  }
}

let btn = document.createElement('button');
btn.className = "content-btn";
btn.innerHTML = "add Content";
btn.addEventListener("click", updateContent);

let footer = document.querySelector("footer");
footer.appendChild(btn);

let btn2 = document.createElement('button');
btn2.className = "content-btn2";
btn2.innerHTML = "Cool Content";
btn2.addEventListener("click", updateContent2);
let contact = document.querySelector("section");
contact.prepend(btn2);


