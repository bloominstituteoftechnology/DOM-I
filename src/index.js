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

// Header
const headerImg = document.querySelector('#logo-img')
headerImg.src = siteContent.images['logo-img']

const navLinks = document.querySelectorAll('header nav a')
const navLinkTexts = Object.values(siteContent.nav)
navLinks.forEach((link, idx) => {
  link.textContent = navLinkTexts[idx]
  link.classList.add('italic')
});


// Banner
const bannerImg = document.querySelector('#cta-img')
bannerImg.src = siteContent.images['cta-img']

const bannerContent = document.querySelector('.cta')
const bannerTitle = bannerContent.querySelector('h1')
bannerTitle.textContent = siteContent['cta']['h1']
const bannerButton = bannerContent.querySelector('button')
bannerButton.textContent = siteContent['cta']['button']

// Mid 
const midImg = document.querySelector('#middle-img')
midImg.src = siteContent.images['accent-img']

const midText = document.querySelector('.top-content')
const midHeadings = midText.querySelectorAll('h4')
midHeadings[0].textContent = siteContent['main-content']['features-h4']
midHeadings[1].textContent = siteContent['main-content']['about-h4']
const midParagraphs = midText.querySelectorAll('p')
midParagraphs[0].textContent = siteContent['main-content']['features-content']
midParagraphs[1].textContent = siteContent['main-content']['about-content']

// Bottom
const bottomText = document.querySelector('.bottom-content')
const bottomHeadings = bottomText.querySelectorAll('h4')
bottomHeadings[0].textContent = siteContent['main-content']['services-h4']
bottomHeadings[1].textContent = siteContent['main-content']['product-h4']
bottomHeadings[2].textContent = siteContent['main-content']['vision-h4']
const bottomParagraphs = bottomText.querySelectorAll('p')
bottomParagraphs[0].textContent = siteContent['main-content']['services-content']
bottomParagraphs[1].textContent = siteContent['main-content']['product-content']
bottomParagraphs[2].textContent = siteContent['main-content']['vision-content']

// Contact
const contactInfo = document.querySelector('.contact')
contactInfo.children[0].textContent = siteContent.contact['contact-h4']
contactInfo.children[1].textContent = siteContent.contact['address']
contactInfo.children[2].textContent = siteContent.contact['phone']
contactInfo.children[3].textContent = siteContent.contact['email']

// Footer
const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold')
