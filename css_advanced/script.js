document.querySelectorAll(".fries").forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.remove("spin");
    void element.offsetWidth;
    element.classList.add("spin");
  });
});
