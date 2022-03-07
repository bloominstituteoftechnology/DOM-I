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

//nav
const headerNav = document.querySelector('header nav');

const servicesNav = headerNav.querySelector('a:nth-of-type(1)');
servicesNav.textContent = siteContent['nav']['nav-item-1'];
servicesNav.classList.add('italic');

const productNav = headerNav.querySelector('a:nth-of-type(2)')
productNav.textContent = siteContent['nav']['nav-item-2']
productNav.classList.add('italic')

const visionNav = headerNav.querySelector('a:nth-of-type(3)')
visionNav.textContent = siteContent['nav']['nav-item-3']
visionNav.classList.add('italic')

const featuresNav = headerNav.querySelector('a:nth-of-type(4)')
featuresNav.textContent = siteContent['nav']['nav-item-4']
featuresNav.classList.add('italic')

const aboutNav = headerNav.querySelector('a:nth-of-type(5)')
aboutNav.textContent = siteContent['nav']['nav-item-5']
aboutNav.classList.add('italic')

const contactNav = headerNav.querySelector('a:nth-of-type(6)')
contactNav.textContent = siteContent['nav']['nav-item-6']
contactNav.classList.add('italic')


//cta
const cta = document.querySelector('.cta-text')

const ctaHeader = cta.querySelector('h1')
ctaHeader.textContent = siteContent['cta']['h1']

const ctaButton = cta.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']


//upper content
const mainContent = document.querySelector('.main-content')
const upperContent = mainContent.children[0]

//features
const features = upperContent.children[0]

const featuresH4 = features.querySelector('h4')
featuresH4.textContent = siteContent['main-content']['features-h4']

const featuresText = features.querySelector('p')
featuresText.textContent = siteContent['main-content']['features-content']

//about
const about = upperContent.children[1]

const aboutH4 = about.querySelector('h4')
aboutH4.textContent = siteContent['main-content']['about-h4']

const aboutText = about.querySelector('p')
aboutText.textContent = siteContent['main-content']['about-content']


//lower content
const lowerContent = mainContent.children[2]

//services
const services = lowerContent.children[0]

const servicesH4 = services.querySelector('h4')
servicesH4.textContent = siteContent['main-content']['services-h4']

const servicesText = services.querySelector('p')
servicesText.textContent = siteContent['main-content']['services-content']

//product
const product = lowerContent.children[1]

const productH4 = product.querySelector('h4')
productH4.textContent = siteContent['main-content']['product-h4']

const productText = product.querySelector('p')
productText.textContent = siteContent['main-content']['product-content']

//vision
const vision = lowerContent.children[2]

const visionH4 = vision.querySelector('h4')
visionH4.textContent = siteContent['main-content']['vision-h4']

const visionText = vision.querySelector('p')
visionText.textContent = siteContent['main-content']['vision-content']


//contact
const contact = document.querySelector('.contact')

const contactHeader = contact.querySelector('h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const address = contact.querySelector('p:nth-of-type(1)')
address.textContent = siteContent['contact']['address'];

const phone = contact.querySelector('p:nth-of-type(2)')
phone.textContent = siteContent['contact']['phone']

const email = contact.querySelector('p:nth-of-type(3)')
email.textContent = siteContent['contact']['email']


//footer
const footer = document.querySelector('footer')

const footerLink = footer.querySelector('a')
footerLink.textContent = siteContent['footer']['copyright']
footerLink.classList.add('bold')


//images
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent['images']['logo-img'];

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent['images']['cta-img']

const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent['images']['accent-img'];

