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
        'h1': 'DOM Is Awesome',
        'button': 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    },
    'contact': {
        'contact-h4': 'Contact',
        'address': '123 Way 456 Street Somewhere, USA',
        'phone': '1 (888) 888-8888',
        'email': 'sales@greatidea.io',
    },
    'footer': {
        'copyright': 'Copyright Great Idea! 2018'
    },
};

// nav
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItem = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');

for (i = 0; i < navItem.length; i++) {
    navItem[i].innerText = siteContent['nav'][Object.keys(siteContent['nav'])[i]];
}

// cta
let cta = siteContent['cta'];
let ctaH1 = document.querySelector('.cta-text h1');
let ctaImage = document.querySelector('#cta-img');
let ctaButton = document.querySelector('.cta-text button');

ctaH1.innerHTML = cta['hl'].split(' ').join('<br>');
ctaImage.src = cta['img-src'];
ctaButton.innerText = cta['button'];

// main
let mainContent = siteContent['main-content'];
let mainContentH4 = document.querySelectorAll('.main-content h4');
let mainContentImg = document.querySelector('#middle-img');
let mainContentP = document.querySelectorAll('.main-content p');

mainH4Keys = Object.keys(mainContent).filter(key => key.includes('-h4'));
mainPKeys = Object.keys(mainContent).filter(key => key.includes('-content'));

for (i = 0; i < mainContentH4.length; i++) {
    mainContentH4[i].innerText = mainContent[mainH4Keys[i]];
}

mainContentImg.src = mainContent['middle-img-src'];

for (i = 0; i < mainContentP.length; i++) {
    mainContentP[i].innerText = mainContent[mainPKeys[i]];
}

// contact
let contact = siteContent['content'];
let contactH4 = document.querySelector('.contact h4');
let address = document.querySelector('.contact p:nth-of-type(1)');
let phone = document.querySelector('.contact p:nth-of-type(2)');
let email = document.querySelector('.contact p:nth-of-type(3)');
let addressIndex = contact['address'].slice(0, contact['address'].lastIndexOf(' ')).lastIndexOf(' ');

contactH4.innerText = contact['contact-h4'];
address.innerHTML = contact['address'].slice(0, addressIndex) + '<br>' + contact['address'].slice(addressIndex);
phone.innerText = contact['phone'];
email.innerText = contact['email'];

// footer
let copyright = document.querySelector('footer p');

copyright.innerText = siteContent['footer']['copyright'];

