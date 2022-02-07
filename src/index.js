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
//array of Nav titles
let navArr = [];
for (let value of Object.values(siteContent.nav)) {
    navArr.push(value)
}

//retrieve nav tags
const navTags = document.querySelectorAll('nav')[0].getElementsByTagName('a')
//change anchor titles
Array.from(navTags).forEach(function(item,index) {
  item.innerHTML = navArr[index]
  item.className = 'italic'
})


//change image src
const imgArr = Object.values(siteContent.images)
const imHold = document.querySelectorAll('img')
imHold.forEach(function (item, index) {
  item.setAttribute('src', imgArr[index])
})

//insert H1 text
let divTag = document.querySelector('.cta-text h1')
divTag.textContent = siteContent['cta'].h1

//change button text
const bttnTag = document.getElementsByTagName('button')
bttnTag[0].textContent = siteContent.cta.button

//change h4's tag text
const txtContent = document.querySelectorAll('.main-content h4')
const txtWithin = document.querySelectorAll('.main-content p')

const h4Txt = siteContent['main-content'];
let h4Arr = []
let hTxtArr = []
Object.keys(h4Txt).forEach(key => {
  key.includes('h4') ? h4Arr.push(h4Txt[key]) : hTxtArr.push(h4Txt[key])
})
//change h4
txtContent.forEach(function(item, index) {
  item.innerHTML = h4Arr[index]
})
//change text within div
txtWithin.forEach(function(item, index) {
  item.innerHTML = hTxtArr[index]
})

//change contact h4
let contactHeading = document.querySelectorAll('.contact h4') 
contactHeading[0].innerHTML = siteContent.contact['contact-h4']

//change all section contact items
let contactPTag = document.querySelectorAll('.contact p')
let contactText = siteContent.contact
contactPTag[0].innerHTML = siteContent.contact['address']
contactPTag[1].innerHTML = siteContent.contact['phone']
contactPTag[2].innerHTML = siteContent.contact['email']

//footer
const footerContent = document.querySelector('footer a')
footerContent.textContent = siteContent.footer['copyright']
footerContent.className  = 'bold'
