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

let navItems = document.querySelectorAll('a');
for (let i = 0; i < navItems.length; i++) {
	navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// CTA Section
const CtaH1 = (document.querySelector('.cta .cta-text h1').textContent = siteContent.cta['h1']);
const CtaButton = (document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button']);
const ctaImg = (document.querySelector('#cta-img').src = siteContent.cta['img-src']);

// Main Content Section

const mainContent = document.querySelector('.main-content');

const topContent = document.querySelector('.top-content').children;
const fisrstTopContent = topContent[0].children;
const secondTopContent = topContent[1].children;

const features = fisrstTopContent[0];
const featuresContent = fisrstTopContent[1];
features.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = secondTopContent[0];
const aboutContent = secondTopContent[1];
about.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const bottomContent = document.querySelector('.bottom-content').children;

const topBottom = bottomContent[0];
const middleBottom = bottomContent[1];
const lastBottom = bottomContent[2];

// Contact Section
const contactSection = document.querySelector('.contact');

console.log(contactSection);
