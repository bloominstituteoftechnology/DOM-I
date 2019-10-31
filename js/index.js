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

//header
const navBar = document.querySelectorAll('a');

//green *stretch* font size change
navBar.forEach(element => { element.style.color = 'green', element.style.fontSize = '20px'; })

navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

//new elements - prepend and append
const newNavItem = document.querySelector("nav");

const newLink = document.createElement('a'); {
    newLink.textContent = "Search";
    newLink.href = "#";
    newLink.style.color = "green";
    newLink.style.fontSize = '20px';
    newNavItem.prepend(newLink);

}

const endLink = document.createElement('a'); {
    endLink.textContent = "Careers";
    endLink.href = "#";
    endLink.style.color = "green";
    endLink.style.fontSize = '20px';
    newNavItem.appendChild(endLink);
}


//Call To Action
const ctaText = document.querySelector('.cta .cta-text h1').innerHTML = 'DOM<br/>Is</br>Awesome';
const ctaBtn = document.querySelector('.cta .cta-text button');
const headerImage = document.getElementById("cta-img");
ctaText.textContent = siteContent['cta']['h1'];
ctaBtn.textContent = siteContent['cta']['button'];
headerImage.src = "img/header-img.png";

//Mid-Section 
const headerText = document.querySelectorAll(".main-content h4");

//styling changes
headerText.forEach(element => { element.style.color = 'green', element.style.fontSize = '35px'; })

//titles
headerText[0].textContent = siteContent["main-content"]["features-h4"];
headerText[1].textContent = siteContent["main-content"]["about-h4"];
headerText[2].textContent = siteContent["main-content"]["services-h4"];
headerText[3].textContent = siteContent["main-content"]["product-h4"];
headerText[4].textContent = siteContent["main-content"]["vision-h4"];


//paragraphs
const textP = document.querySelectorAll(".main-content p");

textP[0].textContent = siteContent["main-content"]["features-content"];
textP[1].textContent = siteContent["main-content"]["about-content"];
textP[2].textContent = siteContent["main-content"]["services-content"];
textP[3].textContent = siteContent["main-content"]["product-content"];
textP[4].textContent = siteContent["main-content"]["vision-content"];

//banner
const midImg = document.getElementById("middle-img");
midImg.src = "/img/mid-page-accent.jpg";

//contact w/style changes
const contactBox = document.querySelector('.contact h4');
contactBox.style.color = "green";
contactBox.style.fontSize = '25px';

contactBox.textContent = siteContent['contact']['contact-h4'];


const contactInfo = document.querySelectorAll('.contact p');

contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

//footer
const footy = document.querySelector('footer');
footy.textContent = siteContent['footer']['copyright'];