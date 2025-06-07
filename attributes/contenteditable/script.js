const el = document.getElementById("editable");
el.addEventListener("input", () => {
  console.log("변경된 내용:", el.innerText);
});
