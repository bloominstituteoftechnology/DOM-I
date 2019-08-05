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
//Pictures
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])

document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"])

document.getElementById('middle-img').setAttribute('src',siteContent['main-content']['middle-img-src'])

//H1 and button

document.getElementsByTagName('button')[0].textContent = "Get Started";

document.querySelector('h1').textContent = 'DOM IS AWESOME!';

// NAV BAR

const navItem1 = document.getElementsByTagName('a')[0].textContent = siteContent.nav["nav-item-1"];

const navItem2 = document.getElementsByTagName('a')[1].textContent = siteContent.nav["nav-item-2"];

const navItem3 = document.getElementsByTagName('a')[2].textContent = siteContent.nav["nav-item-3"];

const navItem4 = document.getElementsByTagName('a')[3].textContent = siteContent.nav["nav-item-4"];

const navItem5 = document.getElementsByTagName('a')[4].textContent = siteContent.nav["nav-item-5"];

const navItem6 = document.getElementsByTagName('a')[5].textContent = siteContent.nav["nav-item-6"];

//Main Content//
//H4's

const title1 = document.getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"];

const title2 = document.getElementsByTagName('h4')[1].textContent = siteContent["main-content"]["about-h4"];

const title3 = document.getElementsByTagName('h4')[2].textContent = siteContent["main-content"]["services-h4"];

const title4 = document.getElementsByTagName('h4')[3].textContent = siteContent["main-content"]["product-h4"];

const title5 = document.getElementsByTagName('h4')[4].textContent = siteContent["main-content"]["vision-h4"];

const title6 = document.getElementsByTagName('h4')[5].textContent = siteContent["main-content"]["vision-h4"];

//Paragraphs//

document.getElementsByTagName('p')[0].textContent = 'Features Reprehenderit laborum est cillum occaecat do amet anim. Irure est labore nisi elit velit consectetur incididunt commodo. Fugiat commodo cupidatat mollit magna nostrud elit enim id elit consectetur et.';

document.getElementsByTagName('p')[1].textContent = 'About Labore id cillum est ipsum sint qui non qui dolore eiusmod tempor. Et aliquipe mollit officia pariatur minim consequat Lorem sint. Mollit consectetur incididunt fugiat et. Occaecat enim eu esse irure pariatur Lorem labore labore et. Lorem laboris exercitation non ipsum nulla duis pariatur irur';

document.getElementsByTagName('p')[2].textContent = 'Services Eu elit mollit laboris elit id irure. Occaecat cupidatat minim commodo pariatur reprehenderit ex veniam pariatur nulla ut magna dolor nulla. Aliqua adipisicing esse non labore Lorem labore duis est cupidatat voluptate. Cillum exercitation deserunt adipisicing nisi. Nisi cupidatatt tempor amet fugiat enim ea irure.';

document.getElementsByTagName('p')[3].textContent = 'Product Eiusmod quis ullamco adipisicing quis esse velit quis. Ut cillum eu exercitation excepteur proident consequat aliqua cupidatat pariatur deserunt deserunt eu Lorem. Quis quis laboris aute id veniam occaecat nostrud cupidatat exercitation sint minim esse nostrud voluptate. Dolor duis aliquip pariatur exercitation. Incididunt occaecat laborum culpa cupidatat id enim dolore mollit ex aliqua anim tempor.';

document.getElementsByTagName('p')[4].textContent = 'Vision Quis qui nostrud reprehenderit est dolore sint laboris excepteur tempor ipsum velit consectetur incididunt Lorem. Anim quis esse nisi ex magna officia nostrud. Exercitation qui pariatur dolor ipsum cillum ullamco qui est labore consectetur. Voluptate excepteur exercitation consequat nisi mollit ut exercitation cupidatat officia. Officia cupidatat adipisicing labore sint ad commodo.';

//Contact

document.getElementsByTagName('p')[5].textContent = "123 Way 456 Street Somewhere, USA";

document.getElementsByTagName('p')[6].textContent = "1-888-888-8888";

document.getElementsByTagName('p')[7].textContent = "Sales@bigtimeballas.gmail.com";

document.getElementsByTagName('p')[8].textContent = "Copyright 2019 DM Enterpises";

//## Task 3: Add new content
let newColor = document.querySelectorAll("a");
newColor.forEach(link => {
  link.style.color = "green";
});
  
