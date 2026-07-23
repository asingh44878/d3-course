document.querySelector(".style").addEventListener("click", function () {
  document.getElementById("text").style.border = "2px solid teal";
  document.getElementById("text").style.backgroundColor = "#e0f7fa";
  document.getElementById("text").style.padding = "12px";
});

document.querySelector(".reset").addEventListener("click", function () {
  document.getElementById("text").style.border = "0px";
  document.getElementById("text").style.backgroundColor = "#ffffff";
  document.getElementById("text").style.padding = "0px";
});
