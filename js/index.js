const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// // Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

//*******************************KIM.BUCK*******************************2020
//nav
Array.from(document.getElementsByTagName('a')).forEach((a,index)=>{
  //add color
  a.style.color = 'green';
  a.innerText = siteContent['nav'][`nav-item-${index+1}`];
});

//nav add 2 elements
//prepend
const home = document.createElement('a');
home.href = '#';
home.innerText = 'Home';
home.style.color = 'red';
const nav = document.querySelector('header nav');
nav.prepend(home);
//appendChild
const kim = document.createElement('a');
kim.href = '#';
kim.innerText = 'Kim';
kim.style.color = 'yellow';
kim.style.textShadow = 'black 1px 1px 2px';
nav.appendChild(kim);

// cta-text
document.querySelector('.cta-text h1').innerText = siteContent['cta']['h1'];

//cta-button
document.querySelector('.cta-text button').innerText = siteContent['cta']['button'];

//cta-image
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);

// main-content
const sections = ['features','about','services','product','vision'];
Array.from(document.getElementsByClassName('text-content')).forEach((text,index)=>{
  const h4 = text.querySelector('h4');
  const p =text.querySelector('p');
  const section = sections[index];
  h4.innerText = siteContent['main-content'][`${section}-h4`];
  p.innerText = siteContent['main-content'][`${section}-content`];
})

//middle-img
document.getElementsByClassName('middle-img')[0].setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact
const cont = document.getElementsByClassName('contact')[0];
cont.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
cont.querySelector('p').style.width = '110px';

const contactFields = ['address','phone','email'];
Array.from(cont.querySelectorAll('p')).forEach((p,index)=>{
  const key = contactFields[index];
  p.innerText = siteContent['contact'][key];
})

//footer
document.querySelector('footer p').innerText = siteContent['footer']['copyright'];

//stretch - style
document.body.style.background = 'linear-gradient(to right, #B8DEF2, white)';
document.getElementsByTagName('button')[0].style.borderRadius ='5px';
// document.getElementsByTagName('button')[0].style.backgroundColor ='#0874C9';
// document.getElementsByTagName('button')[0].style.color ='white';
