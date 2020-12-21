import { getData, setData, removeData } from './localStorage';
import { validate } from './validate';
import API from '../api/agent';

const $main = $('.main-section');
const $register = $('.registry-section');
const $register2 = $('.registry-section-2');
const $body = $('body');

//main.html page
const sendMainForm = () => {
  if (!$main) return;

  const form = $('.main-form');

  form.on('submit', e => {
    e.preventDefault();

    const name = e.currentTarget.firstname.value;
    const email = e.currentTarget.email.value;

    setData('form', { name, email });

    $body.addClass('unavailable');
    document.location.replace('https://simabui.github.io/quantum/dist/send.html');
  });
};

// send.html page
const sendRegForm = () => {
  if (!$register && !$register2) return;
  const { name = '', email = '' } = getData('form');

  const $forms = $('.reg-form');

  $forms.each(function () {
    $(this)[0].firstname.value = name;
    $(this)[0].email.value = email;
  });

  // submit listener
  $forms.each(function () {
    $(this).on('submit', e => {
      e.preventDefault();

      const isValidated = validate(e.target);

      if (isValidated) {
        const inputs = $(e.target).find('inputs');

        const { firstname, lastname, email, phoneNumber } = inputs.context;
        const payload = {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          phone: phoneNumber.value,
        };

        $body.addClass('unavailable');

        API.Subscribe.subscribeUser(payload)
          .then(() => {
            removeData('form');
            document.location.replace('https://simabui.github.io/quantum/dist/thanks.html');
          })
          .catch(e => console.log(e))
          .finally(() => {
            $body.removeClass('unavailable');
          });
      }
    });
  });
};

sendMainForm();
sendRegForm();
