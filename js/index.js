const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const headimg = document.getElementById("cta-img");
const head = document.querySelector("h1");
const but = document.querySelector("button");
const hfour = document.querySelectorAll("h4");
const para = document.querySelectorAll("p");
const links = document.querySelectorAll("a");
const midimg = document.getElementById("middle-img");

// nav

links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

// cta h1 button
head.textContent = siteContent["cta"]["h1"];
head.innerHTML = "DOM<br> Is<br> Awesome";
headimg.setAttribute("src", siteContent["cta"]["img-src"]);
but.textContent = siteContent["cta"]["button"];

//* change color of nav to green
const nav = document.querySelectorAll("nav");
nav.forEach((element) => (element.style.color = "green"));

//h4
hfour[0].textContent = siteContent["main-content"]["features-h4"];
hfour[1].textContent = siteContent["main-content"]["about-h4"];
hfour[2].textContent = siteContent["main-content"]["services-h4"];
hfour[3].textContent = siteContent["main-content"]["product-h4"];
hfour[4].textContent = siteContent["main-content"]["vision-h4"];
hfour[5].textContent = siteContent["content"]["content-h4"];

//img mid
midimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//paragraphs
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];
para[5].innerHTML = "123 Way 456 Street Somewhere, USA";
para[6].textContent = siteContent["contact"]["phone"];
para[7].textContent = siteContent["contact"]["email"];
para[8].textContent = siteContent["footer"]["copyright"];

//color change
links.forEach(function (variable) {
  variable.style.color = "green";
});

let anchor2 = document.createElement("a");
anchor2.style.color = "green";

let navbar = document.querySelector("nav");
anchor.textContent = "newelement";

anchor2.textContent = "newelement2";

navbar.append(anchor);

navbar.prepend(anchor2);

//footer
let footer = document.querySelector('footer')

footer.innerText = "Copyright Great Idea 2019"
