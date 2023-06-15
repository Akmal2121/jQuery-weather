const list = document.querySelectorAll(".list");
// const isclicked = false;
$("nav .list").click(function () {
  //   isclicked = true;

  for (let i = 0; i < list.length; i++) {
    list[i].style.borderBottom = "none";
  }
  $(this).css("border-bottom", "2px solid rgb(163, 163, 163)");
  //   $(this).css("transition", "1s");
});
// list.addEventListener("click", function () {
//   console.log(this);
// });
