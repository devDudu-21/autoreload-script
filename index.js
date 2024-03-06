// ==UserScript==
// @name         Auto Reload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically reload the page every 5 minutes
// @author       You
// @match        https://www.example.com/ //Alterar link
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function autoReload() {
    console.log("Script de recarregamento automático ativado.");
    setTimeout(function () {
      console.log("Recarregando página...");
      location.reload();
    }, 4 * 60 * 1000);
  }

  window.onload = function () {
    console.log("Página carregada. Iniciando recarregamento automático...");
    autoReload();
  };
})();
