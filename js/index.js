const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Navigation Classes
const navLinkOne = document.querySelector('nav > a');
navLinkOne.classList.add('nav-item-1');
const navLinkTwo = document.getElementsByTagName('a')[1];
navLinkTwo.className = 'nav-item-2';
const navLinkThree = document.getElementsByTagName('a')[2];
navLinkThree.className = 'nav-item-3';
const navLinkFour = document.getElementsByTagName('a')[3];
navLinkFour.className = 'nav-item-4';
const navLinkFive = document.getElementsByTagName('a')[4];
navLinkFive.className = 'nav-item-5';
const navLinkSix = document.getElementsByTagName('a')[5];
navLinkSix.className = 'nav-item-6';

// Navigation Links
const linkOne = (document.querySelector('.nav-item-1').innerText = 'Services');
const linkTwo = (document.querySelector('.nav-item-2').innerText = 'Product');
const linkThree = (document.querySelector('.nav-item-3').innerText = 'Vision');
const linkFour = (document.querySelector('.nav-item-4').innerText = 'Features');
const linkFive = (document.querySelector('.nav-item-5').innerText = 'About');
const linkSix = (document.querySelector('.nav-item-6').innerText = 'Contact');

// CTA TEXT, IMAGE, & BUTTON
const ctaHeader = document.querySelector('.cta .cta-text h1');
ctaHeader.classList.add('.header-cta');
ctaHeader.innerText = 'DOM Is Awesome';

// BUTTON
const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = 'Get Started';

// HEADER IMAGE
const headerImg = document.getElementById('cta-img');
headerImg.src = 'img/header-img.png';
