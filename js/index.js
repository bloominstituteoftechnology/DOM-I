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


let navHeader = document.querySelector('nav')
let aHeader = navHeader.querySelectorAll('a')

aHeader[0].textContent = (siteContent['nav']['nav-item-1'])
aHeader[1].textContent = (siteContent['nav']['nav-item-2'])
aHeader[2].textContent = (siteContent['nav']['nav-item-3'])
aHeader[3].textContent = (siteContent['nav']['nav-item-4'])
aHeader[4].textContent = (siteContent['nav']['nav-item-5'])
aHeader[5].textContent = (siteContent['nav']['nav-item-6'])


let header1 = document.querySelector('h1')
header1.textContent = (siteContent['cta']['h1'])
header1.style.marginRight = ('50px')
header1.style.paddingLeft = ("35px")
header1.style.width = ('200px')
// header.style.border = ('1px solid red')

let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src',siteContent['cta']['img-src'])

let btnHeader = document.querySelector('button')
btnHeader.textContent = (siteContent['cta']['button'])
btnHeader.style.fontWeight = ('600')
btnHeader.style.fontFamily = ('Titillium Web, sans-serif')

btnHeader.style.fontSize = ('18px')

btnHeader.style.marginBottom = ('15px')


let mainCtaHeader = document.getElementsByTagName('h4')

let mainCtaTxt = document.getElementsByTagName('p')

  mainCtaHeader[0].textContent = (siteContent['main-content']['features-h4'])
  mainCtaHeader[1].textContent = (siteContent['main-content']['about-h4'])
  mainCtaHeader[2].textContent = (siteContent['main-content']['services-h4'])
  mainCtaHeader[3].textContent = (siteContent['main-content']['product-h4'])
  mainCtaHeader[4].textContent = (siteContent['main-content']['vision-h4'])

  mainCtaTxt[0].textContent = (siteContent['main-content']['features-content'])
  mainCtaTxt[1].textContent = (siteContent['main-content']['about-content'])
  mainCtaTxt[2].textContent = (siteContent['main-content']['services-content'])
  mainCtaTxt[3].textContent = (siteContent['main-content']['product-content'])
  mainCtaTxt[4].textContent = (siteContent['main-content']['vision-content'])



let mainCtaImg = document.getElementById('middle-img')
mainCtaImg.setAttribute ('src', siteContent['main-content']['middle-img-src'])


let contactClass = document.querySelector('.contact')
contactClass.style.height = ('200px')

let contactH4 = contactClass.querySelector('h4')
contactH4.textContent = (siteContent['contact']['contact-h4'])

let contactP = contactClass.getElementsByTagName('p')

Array.from(contactP).forEach((styleP) => {

  styleP.style.fontWeight = '900'

})

let contactAdd = contactP[0]

// contactAdd.style.fontWeight = ('bold')
contactAdd.style.width = ('150px')

contactP[0].textContent = (siteContent['contact']['address'])
contactP[1].textContent = (siteContent['contact']['phone'])
contactP[2].textContent = (siteContent['contact']['email'])

// HEADER CREATED IN CONTACT
let contactH1 = document.createElement('h1')
contactH1.textContent = ('Let Us Know Your Thoughts')
contactH1.style.fontSize = ('32px')
contactH1.style.textAlign = ('center')

//PREPEND CONTACT NEW HEADER
contactClass.prepend(contactH1)


let footerTag = document.querySelector('footer')

footerTag.style.display = ('flex')
footerTag.style.justifyContent = ('space-between')
footerTag.style.alignItems = ('center')


//FOOTER IMG CREATED
let footerImg = document.createElement('img')

footerImg.style.height = ("52px")
footerImg.style.width = ("52px")

footerImg.style.justifySelf = ('right')
footerImg.style.margin = ('32px')
footerImg.setAttribute('src', '/img/headerSmImg.jpg')
footerImg.setAttribute('alt', 'Footer Append Img')


let copyrightTxt = footerTag.querySelector('p')
copyrightTxt.textContent = (siteContent['footer']['copyright'])
copyrightTxt.style.position = ('relative')
copyrightTxt.style.marginTop = ('54px')




footerTag.append(footerImg)



