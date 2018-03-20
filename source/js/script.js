window.onload = begin;

function begin() {
  var elem = document.querySelector('.popup--new');
  elem.classList.add('popup--active');
  elem.querySelector('button').onclick = function() {
    elem.classList.remove('popup--active');
    newGame();
  };
}

function newGame() {
  alert("!");
}
