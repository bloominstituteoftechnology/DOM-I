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
    "h1": "DOM \r\nIs \r\nAwesome",
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
    "address" : "123 Way 456 Street \r\nSomewhere, USA",
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

//=============================================== Header 

const mainNav = document.querySelectorAll("a");

//For loop used to add each object from the array into the new array like dom object for the Nav bar
for (let i = 0; i < mainNav.length; i++) {
  mainNav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

const newNav1 = document.createElement('a');
  newNav1.href = "#";
  newNav1.textContent = "test1";

const newNav2 = document.createElement('a');
  newNav2.href = "#";
  newNav2.textContent = "test2";

const nav = document.querySelector('nav');

nav.appendChild(newNav1);
nav.appendChild(newNav2);

const navColor = document.querySelectorAll('a');

for(let i = 0; i < navColor.length; i ++){
  navColor[i].style.color = "green";
}

//=============================================== CTA

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta["button"];

const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent.cta["img-src"]);

//=============================================== Main Content

const mainTitles = document.querySelectorAll('.main-content h4');
mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];


const mainPara = document.querySelectorAll('.main-content p');
mainPara[0].textContent = siteContent["main-content"]["features-content"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];

const middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//=============================================== Contact

const contTitle = document.querySelector('.contact h4');
contTitle.textContent = siteContent.contact["contact-h4"];

const contPara = document.querySelectorAll('.contact p');
contPara[0].textContent = siteContent.contact["address"];
contPara[1].textContent = siteContent.contact["phone"];
contPara[2].textContent = siteContent.contact["email"];


//=============================================== footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer["copyright"];


//=============================================== Event listener stretch goal

const eventHandler = () => {
  const newButton = document.createElement('button');
  newButton.textContent = "Wow!";

  const cta = document.querySelector('.cta-text');
  cta.appendChild(newButton);
};
ctaButton.addEventListener('click', eventHandler);