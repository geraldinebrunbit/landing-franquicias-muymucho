$(document).ready(function () {
  $(".form-group input[type=text].form-control").attr("placeholder", "Ciudad*");
  $("input#given_name.form-control").attr("placeholder", "Nombre*");
  $("input#family_name.form-control").attr("placeholder", "Apellidos*");
});

$(function () {
  $(".form-group input[type=text].form-control").change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

$(function () {
  $("input#email.form-control").change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

$(function () {
  $("input#phone.form-control").change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

$.validator.addMethod(
  "input#email.form-control",
  function (email, element) {
    var pattern =
      /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return this.optional(element) || pattern.test(email);
  },
  "Formato del email incorrecto"
);

jQuery.validator.addMethod(
  "input[type=tel].form-control",
  function (phone, element) {
    // allow any non-whitespace characters as the host part
    return (
      this.optional(element) ||
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone)
    );
  },
  "Please enter a valid phone."
);

