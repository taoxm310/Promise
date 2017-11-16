"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var button = document.querySelector("button");
var div = document.querySelector("div");

var setText = function setText(text) {
  div.textContent = text;
};

var checkAuth = function checkAuth() {
  return new Promise(function (resolve, reject) {
    setText('Checking Auth...');
    setTimeout(function () {
      resolve(true);
    }, 2000);
  });
};

var fetchUser = function fetchUser() {
  return new Promise(function (resolve, reject) {
    setText('Fetching User...');
    setTimeout(function () {
      resolve({ name: "Max" });
    }, 2000);
  });
};

button.addEventListener("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var isAuth, user;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return checkAuth();

        case 2:
          isAuth = _context.sent;
          user = null;

          if (!isAuth) {
            _context.next = 8;
            break;
          }

          _context.next = 7;
          return fetchUser();

        case 7:
          user = _context.sent;

        case 8:
          setText(user.name);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));