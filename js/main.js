/*
  КР №1 — минимальный скрипт.
  Единственная задача: открыть и закрыть модальное окно <dialog>.
  Вся остальная логика проекта реализована на HTML и CSS.
*/
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.querySelector('#order-modal');

  if (!modal) {
    return;
  }

  var openButtons = document.querySelectorAll('[data-modal-open="order-modal"]');
  var closeButtons = modal.querySelectorAll('[data-modal-close]');

  openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      modal.showModal();
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      modal.close();
    });
  });

  // Клик по затемнённому фону тоже закрывает окно.
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});
