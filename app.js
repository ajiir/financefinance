// Дэлгэцтэй ажиллах
var uiController = (function () {})();

// Санхүүтэй ажиллах
var financeController = (function () {})();

// Программын холбогч
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1.Оруулах өгөдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөдлөө авах хэсэг");
    // 2. Олж авсан өгөдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөдлүүдээ вэб дээрээ тохирох хэсэг дээр гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
