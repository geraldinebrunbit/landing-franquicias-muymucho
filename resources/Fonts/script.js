$(document).ready(function () {
  $(".form-group input[type=text].form-control").attr("placeholder", "Ciudad*");
  $("input#given_name.form-control").attr("placeholder", "Nombre*");
  $("input#family_name.form-control").attr("placeholder", "Apellidos*");
});

$(function () {
  $('.form-group input[type=text].form-control').change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

$(function () {
  $('input#email.form-control').change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

$(function () {
  $('input#phone.form-control').change(function () {
    var $input = $(this);
    if ($input.val() === "") {
      $input.removeClass("filledInputs");
    } else {
      $input.addClass("filledInputs");
    }
  });
});

