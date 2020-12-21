export function validate(elem) {
  const inputs = $(elem).find(`input[aria-required='true']`);
  let isValid = false;
  const errors = [];

  inputs.each(function () {
    const { valLength, valLengthMin, valLengthMax, valRequired } = $(this)[0].dataset;
    const inputLength = $(this).val().length;

    if (inputLength <= 0) {
      errors.push(valRequired);
    } else if (inputLength <= valLengthMin || inputLength >= valLengthMax) {
      errors.push(valLength);
    }
  });

  displayErrorMessage(elem, errors);

  if (errors.length < 1) {
    isValid = true;
    hideError(elem);

    return isValid;
  }

  return isValid;
}

function displayErrorMessage(form, messages) {
  $(form).find('.validation-summary-valid').attr('class', 'validation-summary-errors');
  const $errorsList = $(form).find('.validation-summary-errors');

  const list = document.createElement('ul');

  $(messages).each((i, val) => {
    const item = document.createElement('li');
    $(item).prepend(val);

    list.appendChild(item);
  });

  $errorsList.html(list);
}

function hideError(form) {
  $(form).find('.validation-summary-errors').attr('class', 'validation-summary-valid');
  const $list = $(form).find('.validation-summary-valid ul');
  $list.html('');
}
