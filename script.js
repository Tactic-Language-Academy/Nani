document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome Ms. Nani ✨");

  // باز و بسته شدن نرم با انیمیشن (اگه بخوای بعداً اضافه کنیم)
  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach(detail => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        console.log(`بخش باز شد: ${detail.querySelector("summary").innerText}`);
      }
    });
  });
});
