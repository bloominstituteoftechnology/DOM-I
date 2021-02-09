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
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg"
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

let strings = Object.values(siteContent["nav"]);
let navigation = document.getElementsByTagName("a");
navigation[0].textContent = strings[0];
navigation[1].textContent = strings[1];
navigation[2].textContent = strings[2];
navigation[3].textContent = strings[3];
navigation[4].textContent = strings[4];
navigation[5].textContent = strings[5];

let ctaTxt = document.getElementsByClassName("cta");
ctaTxt = ctaTxt[0].childNodes;
ctaTxt[1].children[0].textContent = siteContent.cta['h1'];
ctaTxt[1].children[1].textContent = siteContent.cta['button'];
ctaTxt[3].setAttribute('src', siteContent["cta"]["img-src"]);


let content = document.getElementsByClassName("text-content");
strings = Object.values(siteContent["main-content"]);
console.log(strings);
for(let i = 0; i< content.length; i++)
{
  content[i].children[0].textContent = strings[i*2];
  content[i].children[1].textContent = strings[i*2 + 1];
}
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


strings = Object.values(siteContent["contact"]);
let contact = document.getElementsByClassName("contact")[0].children;
for(let i = 0; i < contact.length; i++)
{
  contact[i].textContent = strings[i];
}

let footer = document.getElementsByTagName("footer")[0].children[0];
footer.textContent = siteContent.footer["copyright"];

for(let i = 0; i < navigation.length; i++)
{
  navigation[i].style.color = "green";
}


navigation = document.getElementsByTagName("nav")[0];
let element1 = document.createElement("a");
element1.href = "#";
element1.textContent = "test Element1";
console.log(element1);
navigation.appendChild(element1);

let element2 = document.createElement("a");
element2.href = "#";
element2.textContent = "test Element2";
console.log(element2);
navigation.prepend(element2);




