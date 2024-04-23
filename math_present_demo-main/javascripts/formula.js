function radicals() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\sqrt{}$";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  function limit() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\lim_{x \\to 0}$";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  
  function integral() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\int_{}^{} $";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  function sum() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\sum_{}^{} $";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  
  function integral_formula() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\frac{\\mathrm{d}}{\\mathrm{d}x}x^n=nx^{n-1} $";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  function pmatrix() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$\\begin{pmatrix} 1 & 0 \\ 0 & 1 \\end{pmatrix} $";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }

  function Cnr() {
    var textarea = document.getElementById("input");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;
    var blockText = "$C_{r}^{n}$";
    var newText = text.substring(0, start) + blockText + text.substring(end);
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start + 1, start + 1);
  }
