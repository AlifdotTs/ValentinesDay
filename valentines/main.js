let yes = document.getElementById("yes");
let no = document.getElementById("no");
let gif = document.getElementById("gif");

yes.addEventListener("click", () => {
  gif.src = "./milk-and-mocha-kiss.gif";
  yes.parentNode.removeChild(yes);
  no.parentNode.removeChild(no);
});

no.addEventListener("click", () => {
  no.parentNode.removeChild(no);
  alert("Did you think you had a choice?");
});
