const registry = document.querySelector('.registry-section');
const registry2 = document.querySelector('.registry-section-2');

function input() {
  if (!registry && !registry) return;

  $('.input-tel').intlTelInput({
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js',
    initialCountry: 'ua',
    nationalMode: false,
  });
}

input();
