'use strict';

let myUI = {};

myUI.toggleCheckbox = () => {
  $('#checkbox').on('click', '.check', function() {
    $(this).prev().click()
  })
}

myUI.selectRadio = () => {
  $('#radio').on('click', '.radio', function() {
    $(this).prev().click()
  })
}

myUI.preventRefresh = () => {
  $('.ui').submit((e) => {
    return false;
  })
}

myUI.initIndexPage = () => {
  myUI.toggleCheckbox();
  myUI.selectRadio();
  myUI.preventRefresh();
}
