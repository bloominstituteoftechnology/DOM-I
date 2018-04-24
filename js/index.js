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
// selectinf nav from the html page
let navItems = document.getElementsByTagName("a")
// extracting array of navItems from the nav object
let navObj = Object.values(siteContent.nav)
//looping through the nav array and assigning nav content to navItems
for(let i = 0; i < navItems.length; i++){
  navItems[i].textContent = navObj[i]
  navItems[i].style.color = 'green'
}

// Strech challenge

let newNavItems = document.createElement('a');
newNavItems.textContent = 'Impact';
newNavItems.setAttribute('href','#')
navItems[0].parentElement.appendChild(newNavItems)


//selecting the cta h1 element
let ctaText = document.querySelector("h1")
ctaText.textContent = siteContent.cta.h1;
// transversing to the parent of cta-text
let cta = ctaText.parentElement
//transversing to the button
let ctaButton = cta.lastElementChild;
//setting the button text
ctaButton.textContent = siteContent.cta.button;
// transversing to the cta image
let ctaImage = cta.nextElementSibling;
// setting the attribute of the cta image
ctaImage.setAttribute('src',siteContent.cta["img-src"])

//sellecting the middle image
let middleImage = document.querySelector('#middle-img')
// setting the attr of the middle image
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// selecting the mainheading H4
let mainHeading = document.querySelectorAll("h4")

let mainContentObj = siteContent['main-content']
let mainHeadingArr = [];
let mainContentArr = []
for(let heading in mainContentObj){
  if(heading.includes('h4')){
    mainHeadingArr.push(mainContentObj[heading])
  }
  else{
    mainContentArr.push(mainContentObj[heading])
  }

}

mainContentArr = mainContentArr.filter((e) =>  e !== 'img/mid-page-accent.jpg')


for(let i = 0; i < mainHeadingArr.length; i++){
  mainHeading[i].textContent = mainHeadingArr[i];
  mainHeading[i].nextElementSibling.textContent = mainContentArr[i];
}

let ContactHeading = document.querySelector('.contact h4')
ContactHeading.textContent  = siteContent.contact["contact-h4"];

let contactParagraph = document.querySelectorAll('.contact p')

let contactP = [];
let contactObj = siteContent.contact;

for(let paragraph in contactObj ){
  if(paragraph !== 'contact-h4' ){
    contactP.push(contactObj[paragraph])
  }
}

for(let i = 0; i < contactP.length;i++){
  contactParagraph[i].textContent = contactP[i];
}

let footerParagraph = document.querySelector('footer p')
footerParagraph.textContent = siteContent.footer.copyright;

//strech chanlenge

let addText = document.createElement('button');
let inputText = document.createElement('input')

addText.textContent = 'Change Text'
ctaText.parentElement.appendChild(addText)
ctaText.parentElement.appendChild(inputText)
inputText.style.marginTop = '10px';
inputText.style.width ='200px'

addText.addEventListener('click', () =>{
  ctaText.textContent = inputText.value;
  inputText.value = '';
})