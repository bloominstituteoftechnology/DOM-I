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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Adding the links to the nav bar
let aTags = document.querySelectorAll('a');
for (let x = 0; x < aTags.length; x++) {
    aTags[x].classList.add(`nav-item-${x+1}`);
    aTags[x].textContent = siteContent.nav[`nav-item-${x+1}`];
}
//debuggind things = console.log(aTags);

//Getting all the cta elems
let cta = document.querySelectorAll(".cta");
cta[0].querySelectorAll("h1")[0].textContent = siteContent.cta.h1; //changin title
cta[0].querySelectorAll("button")[0].textContent = siteContent.cta.button; //changing button
let ctaImg = cta[0].querySelectorAll("#cta-img");
ctaImg[0].setAttribute('src', siteContent.cta["img-src"]); // asmdamsd img


ctaImg[0].onclick = () => {
    cta[0].remove();
}


//getting all the sectinos thigns
let mainContent = document.querySelectorAll(".main-content");
let topContent = mainContent[0].querySelectorAll(".top-content");
//features
topContent[0].querySelectorAll(".text-content")[0].querySelectorAll("h4")[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelectorAll(".text-content")[0].querySelectorAll("p")[0].textContent = siteContent["main-content"]["features-content"];
//about
topContent[0].querySelectorAll(".text-content")[1].querySelectorAll("h4")[0].textContent = siteContent["main-content"]["about-h4"];
topContent[0].querySelectorAll(".text-content")[1].querySelectorAll("p")[0].textContent = siteContent["main-content"]["about-content"];


let img = mainContent[0].querySelectorAll("#middle-img")[0];
img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let bottomContent = mainContent[0].querySelectorAll(".bottom-content");
//Services
bottomContent[0].querySelectorAll(".text-content")[0].querySelectorAll("h4")[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelectorAll(".text-content")[0].querySelectorAll("p")[0].textContent = siteContent["main-content"]["services-content"];
//Products
bottomContent[0].querySelectorAll(".text-content")[1].querySelectorAll("h4")[0].textContent = siteContent["main-content"]["products-h4"];
bottomContent[0].querySelectorAll(".text-content")[1].querySelectorAll("p")[0].textContent = siteContent["main-content"]["products-content"];
//Vision
bottomContent[0].querySelectorAll(".text-content")[2].querySelectorAll("h4")[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[0].querySelectorAll(".text-content")[2].querySelectorAll("p")[0].textContent = siteContent["main-content"]["vision-content"];

//contact
let contact = document.querySelectorAll(".contact");
contact[0].querySelectorAll("h4")[0].textContent = siteContent.contact["contact-h4"];
contact[0].querySelectorAll("p")[0].textContent = siteContent.contact.address;
contact[0].querySelectorAll("p")[1].textContent = siteContent.contact.phone;
contact[0].querySelectorAll("p")[2].textContent = siteContent.contact.email;

//footer
let fter = document.querySelectorAll("footer");
fter[0].querySelectorAll("p")[0].textContent = siteContent.footer.copyright;

let header = document.querySelectorAll("header");
header[0].style.backgroundColor = "green";

let nfooter = document.createElement("footer");

nfooter.innerHTML = "This is appended";

nfooter.style.color = "indigo";

document.body.append(nfooter);


//stretch 
let cta_button = cta[0].querySelectorAll("button")[0];

cta_button.onclick = () => {
    header[0].style.backgroundColor = "indigo";
}