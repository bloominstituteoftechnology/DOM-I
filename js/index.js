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

let nav = document.getElementsByTagName('nav');
// console.log(nav[0].children )

// adding the NAV items
// this might look  complex
// but really all I'm doing is grabbing the parent nav item
// and iterating through its children  with the help of i
// to access the correct keys in the navigation object
for(let i = 1; i <=  nav[0].children.length ;i++){
  nav[0].children[i-1].textContent = siteContent['nav']['nav-item-'+i];
}

//append child to NAV
let aChild=document.createElement('a')
aChild.textContent = 'appended child'
nav[0].appendChild(aChild)

//prepend the child to nav
let preChild= document.createElement('a')
preChild.textContent = 'prepended child'
nav[0].prepend(preChild)

// CTA
// updating  the first header
let h1 = document.getElementsByTagName('h1')[0]
h1.innerHTML = siteContent.cta.h1.split(" ").join("<br>");

// updating the button
let  button= document.getElementsByTagName('button')[0]
button.textContent = siteContent.cta.button;

// updating the the image inside CTA
 let  jumboImage= document.getElementById('cta-img')
 console.log(jumboImage)
 jumboImage.src= siteContent.cta["img-src"];

//main content
let h4s= document.getElementsByTagName('h4');
// console.log(h4s[0].textContent = "test")

// OK this is the coolest thing I've seen all week!
// nowhere on mdns documentation  or anywhere on query selector
// have I seen the ability to use > for child selector
// this seriously needs to be in the training kit
// this is insanely powerful
let pTextContents= document.querySelectorAll(".text-content > p");
console.log(pTextContents)

/*
   main content

  I am iterating through the main content object
  and then checking to see if the key = 
  'content' or 'h4'. when they'd do I am updating
  their content and iterating with i,j to go through the 
  arrays of h4s and text contents
*/
let i = 0, j = 0;
for (item in siteContent["main-content"]){
  let keySuffix= item.toString().split('-')[1]
  if(keySuffix==='h4'){
    h4s[i++].textContent = siteContent["main-content"][item]
    //i++;
  }else if(keySuffix==="content"){
    pTextContents[j++].textContent = siteContent["main-content"][item]
    //j++;
  }
}

//adding the middle image
let  middleImage= document.getElementById('middle-img')
middleImage.src= "img/mid-page-accent.jpg" 


//this is a pretty cool way to access  an object's properties with an index
// however I think it's in a be easier to do this  with the way that I will do a below
// console.log(siteContent["main-content"][Object.keys(siteContent["main-content"])[0]])

let  contactChildren= document.querySelectorAll(".contact > *");
console.log(contactChildren)

//you can chain selectors instead of only usng global

//contact
i = 0;
for(item in siteContent["contact"] ){
  if(item.toString()==='address'){
    let str = siteContent.contact[item]
    let str2 = str.substring(0,str.indexOf("Somewhere"))
    str= str.substring(str.indexOf("Somewhere"))
    str= `${str2} <br> ${str}`
    contactChildren[i++].innerHTML= str
  }else{
    contactChildren[i++].textContent = siteContent.contact[item];
  }
   
}

//what are
let  footerParagraph= document.querySelector("footer > p");
footerParagraph.textContent =  siteContent.footer.copyright;


const obj={
  "info":"thanks for clicking"
}

console.log(button)
button.addEventListener('click',e=>{
  console.log(e)
  console.log(e.target)
  let newP= document.createElement('p')
  newP.textContent = obj.info;
  e.target.parentNode.append(newP)
})