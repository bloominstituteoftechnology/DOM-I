const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
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
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
	navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
	navItems[i].style.color = 'green';
}

// Add 2 elements to nav
const nav = document.getElementsByTagName('nav')[0];

const navItem1 = document.createElement('a');
navItem1.textContent = 'Manipulate';
navItem1.style.color = 'green';

const navItem2 = document.createElement('a');
navItem2.textContent = 'Dom';
navItem2.style.color = 'green';

nav.prepend(navItem1);
nav.append(navItem2);

// CTA Section
const CtaH1 = (document.querySelector('.cta .cta-text h1').textContent = siteContent.cta['h1']);
const CtaButton = (document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button']);
const ctaImg = (document.querySelector('#cta-img').src = siteContent.cta['img-src']);

// Main Content Section
const topContent = document.querySelectorAll('.top-content .text-content');

topContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];

topContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

// Middle Image Section
const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Bottom Main Section
const bottomContent = document.querySelectorAll('.bottom-content .text-content');

bottomContent[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContent[0].querySelector('p').textContent = siteContent['main-content']['services-content'];

bottomContent[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContent[1].querySelector('p').textContent = siteContent['main-content']['product-content'];

bottomContent[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContent[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

// Contact Section
const contactSection = document.querySelectorAll('.contact');
const contactSectionP = document.querySelectorAll('.contact p');

contactSection[0].querySelector('h4').textContent = siteContent.contact['contact-h4'];
contactSectionP[0].textContent = siteContent.contact['address'];
contactSectionP[1].textContent = siteContent.contact['phone'];
contactSectionP[2].textContent = siteContent.contact['email'];

// Footer Section
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer['copyright'];

TweenMax.from('nav a', 2, { x: -600, y: -50, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.6, 0.8, false) });
TweenMax.to('nav a', { x: 0, y: 0 });
