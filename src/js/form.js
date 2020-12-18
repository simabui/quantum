const $main = $('.main-section');
const $register = $('.registry-section');
const $register2 = $('.registry-section-2');

const sendMainForm = () => {
  if (!$main) return;

  const form = $('.main-form');

  form.on('submit', e => {
    e.preventDefault();
    const name = e.currentTarget.firstname.value;
    const email = e.currentTarget.email.value;

    setData('form', { name, email });
    document.location.replace('/registration.html');
  });
};

sendMainForm();

const sendRegForm = () => {
  if (!$register && !$register2) return;

  const form = $('.reg-form');
  const { name = '', email = '' } = getData('form');

  form.each(function () {
    $(this)[0].firstname.value = name;
    $(this)[0].email.value = email;
  });

  form.on('submit', e => {
    e.preventDefault();
    document.location.replace('/thanks.html');
  });
};

sendRegForm();

function getData(name) {
  const data = localStorage.getItem(name);
  return JSON.parse(data) || '';
}

function setData(name, data) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(name, dataJSON);
}
