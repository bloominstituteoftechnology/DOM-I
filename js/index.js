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

const header = document.getElementsByTagName("header")[0];

Array.from(header.children[0].children).forEach((item, idx) => {
    item.textContent = siteContent.nav['nav-item-' + (idx + 1)]
});

const cta = document.querySelector(".cta");
cta.children[0].children[0].textContent = siteContent.cta["h1"];
cta.children[0].children[1].textContent = siteContent.cta["button"];

cta.children[1].src = siteContent.cta["img-src"];

const mainContent = document.querySelector(".main-content");
mainContent.children[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
mainContent.children[0].children[0].children[1].textContent = siteContent["main-content"]["features-content"];
mainContent.children[0].children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
mainContent.children[0].children[1].children[1].textContent = siteContent["main-content"]["about-content"];

mainContent.children[1].src = siteContent["main-content"]["middle-img-src"];

mainContent.children[2].children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
mainContent.children[2].children[0].children[1].textContent = siteContent["main-content"]["services-content"];
mainContent.children[2].children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
mainContent.children[2].children[1].children[1].textContent = siteContent["main-content"]["product-content"];
mainContent.children[2].children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
mainContent.children[2].children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact");
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact["address"];
contact.children[2].textContent = siteContent.contact["phone"];
contact.children[3].textContent = siteContent.contact["email"];

const footer = document.getElementsByTagName("footer")[0];
footer.children[0].textContent = siteContent.footer["copyright"];

const anchors = document.getElementsByTagName("a")
Array.from(anchors).forEach(item => {
    item.style.color = "green";
});

const arr1 = [
    { "a1": "dumb" },
    { "a2": "dumber" }
]

function imBored(arr, parent) {
    for (let i = 0; i < arr.length / 2; i += 2) {
        const i1 = document.createElement("a");
        const i2 = document.createElement("a");
        i1.textContent = arr[i]["a1"];
        i2.textContent = arr[i + 1]["a2"];
        i1.style.color = "green";
        i2.style.color = "green";
        parent.appendChild(i1);
        parent.prepend(i2);
    }
}

const nav = document.getElementsByTagName("nav")[0];
imBored(arr1, nav);