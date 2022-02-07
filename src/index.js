const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


//HEADER NAV BAR
const navigation = document.querySelector("header nav")
navigation.children[0].textContent = siteContent["nav"]["nav-item-1"]
navigation.children[1].textContent = siteContent["nav"]["nav-item-2"]
navigation.children[2].textContent = siteContent["nav"]["nav-item-3"]
navigation.children[3].textContent = siteContent["nav"]["nav-item-4"]
navigation.children[4].textContent = siteContent["nav"]["nav-item-5"]
navigation.children[5].textContent = siteContent["nav"]["nav-item-6"]
navigation.children[0].classList.add('italic')
navigation.children[1].classList.add('italic')
navigation.children[2].classList.add('italic')
navigation.children[3].classList.add('italic')
navigation.children[4].classList.add('italic')
navigation.children[5].classList.add('italic')

// const navLinks = document.querySelectorAll("header nav a"); 
// const navLinkText = Object.values(siteContent.nav)
// navLinks.forEach((link,index)=> {
//   link.textContent = navLinkText[index]
//   link.classList.add('italic')
// }); 

//took this function from solution video just to see how it worked, i personally prefer the longer way for now since i can actually see what is going on and where i am adding the nav content. However, I did not know how to add the class list to each one so will have to use the function so it adds the classlist to each nav link


//IMAGES BELOW

const logoImage = document.querySelector("#logo-img")
//here i am calling the logo id in the img tag to be able to edit later

logoImage.src = siteContent["images"]["logo-img"]

const ctaImage = document.querySelector("#cta-img"); 

ctaImage.src = siteContent["images"]["cta-img"]

const middleImage = document.querySelector("#middle-img"); 
middleImage.src = siteContent["images"]["accent-img"]; 
// IMAGES END

//FOOTER 

const footerLink = document.querySelector("footer a"); 
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add("bold")

//END FOOTER

//CONTACT 

const contact = document.querySelector("section.contact")
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"]; 
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"]; 


//END CONTACT 

// TOP CONTENT 
//features content
const topContent = document.querySelector(".top-content")
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"]

//about content
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"]

//END TOP CONTENT

//BOTTOM CONTENT 

//services content 

const bottomContent = document.querySelector(".bottom-content"); 
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"]
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"]

//product content 
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"]

//vision content 
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"]

//END BOTTOM CONTENT

//CTA SECTION 

const ctaSection = document.querySelector('.cta'); 

ctaSection.children[0].children[0].textContent = siteContent["cta"]["h1"];
ctaSection.children[0].children[1].textContent = siteContent["cta"]["button"]




