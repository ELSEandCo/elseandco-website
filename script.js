const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const dropdown = document.querySelector('[data-dropdown]');
const dropdownButton = document.querySelector('[data-dropdown-toggle]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

dropdownButton?.addEventListener('click', () => {
  const open = dropdownButton.getAttribute('aria-expanded') === 'true';
  dropdownButton.setAttribute('aria-expanded', String(!open));
  dropdown?.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  dropdownButton?.setAttribute('aria-expanded', 'false');
  dropdown?.classList.remove('open');
  document.body.style.overflow = '';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const inquiryForm = document.querySelector('[data-inquiry-form]');
if (inquiryForm) {
  const selectedService = new URLSearchParams(window.location.search).get('service');
  const serviceField = inquiryForm.querySelector('[name="service"]');
  if (selectedService && serviceField) serviceField.value = selectedService;

  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const subject = `ELSE & CO. inquiry: ${data.get('service') || 'General'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Service: ${data.get('service') || ''}`,
      '',
      'How can we help?',
      data.get('message') || ''
    ].join('\n');
    window.location.href = `mailto:hello@elseand.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
