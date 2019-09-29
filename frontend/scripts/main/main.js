"use strict";

$(document).ready(function() {
  function Popup(settings) {
    this.modal = document.querySelector(settings.modal);
    this.overlay = document.querySelector(settings.overlay);
    var popup = this;

    this.open = function(content) {
      popup.modal.innerHTML = content;
      popup.modal.classList.add("open");
      popup.overlay.classList.add("open");
    };
    this.close = function() {
      popup.modal.classList.remove("open");
      popup.overlay.classList.remove("open");
    };

    popup.overlay.onclick = popup.close;
  }

  var pop1 = new Popup({
    modal: ".modal-window",
    overlay: ".overlay"
  });

  $("[data-popup]").on("click", function() {
    let popupContent = $(this).attr("popup-name");
    let form1 = $(`.${popupContent}`)[0];
    pop1.open(form1.innerHTML);
  });
});
