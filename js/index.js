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

let anchor = siteContent["nav"]
let navbar = document.querySelectorAll('a')




  navbar.forEach(function(item, i){
    item.textContent = anchor[`nav-item-${i+1}`]
   
  });

  
//  ======================= Header ==================

  let ctaText = document.getElementsByClassName("cta-text")[0];
  ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
  ctaText.getElementsByTagName("button")[0].innerHTML = siteContent['cta']['button']

  // cta imag
   let ctaimg = document.getElementById("cta-img")
   ctaimg.setAttribute('src',siteContent['cta']['img-src'])

  //  ================= Main Content ==================
  let firstContent = document.getElementsByClassName('text-content')[0]
  firstContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4']
  firstContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["features-content"]

  let secondContent = document.getElementsByClassName('text-content')[1]
 
  secondContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4']
  secondContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["features-content"]

  let nextLogo = document.getElementById('middle-img')
  nextLogo.setAttribute('src',siteContent['main-content']['middle-img-src'])

  let thirdContent = document.getElementsByClassName('text-content')[2]
  
  thirdContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4']
  thirdContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["services-content"]


  let forthContent = document.getElementsByClassName('text-content')[3]
  
  forthContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4']
  forthContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["product-content"]

  let fifthContent = document.getElementsByClassName('text-content')[4]
  
  fifthContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4']
  fifthContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["vision-content"]
// ======================= Contact Info ========================
  const contactH4 = document.querySelectorAll("h4")[5];
  contactH4.innerText = siteContent["contact"]["contact-h4"];
  // Address
  const address = document.querySelectorAll("p")[5];
  address.innerText = siteContent["contact"]["address"];
  // Phone
  const phone = document.querySelectorAll("p")[6];
  phone.innerText = siteContent["contact"]["phone"];
  // E-mail
  const email = document.querySelectorAll("p")[7];
  email.innerText = siteContent["contact"]["email"];
// =========================== Footer ==========================
const copyright = document.getElementsByTagName("p")[8];
copyright.innerText = siteContent['footer']['copyright']

// ======================= adding elements to nav & changing color ==================
const navigation = document.querySelector('nav')
const newanchor = document.createElement('a')
newanchor.innerText= "Hello"

const newanchor1 = document.createElement('a')
newanchor1.innerText= "GoodBye"

console.log(navigation.prepend(newanchor))

console.log(navigation.appendChild(newanchor1))
navbar.forEach(function (item){
  item.style.color = "green"
  
 
})



// newAnchor.innerText = "Hello"

 
// const newAnchor2 = document.createElement('a')

