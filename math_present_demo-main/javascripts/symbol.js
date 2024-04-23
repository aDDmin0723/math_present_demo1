function alpha() {
  var textarea = document.getElementById("input");
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var text = textarea.value;
  var blockText = "\u03B1";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  textarea.value = newText;
  textarea.focus();
  textarea.setSelectionRange(start + 1, start + 1);
}

function beta() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B2";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}


function gamma() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B3";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function delta() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B4";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function epsilon() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B5";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function zeta() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B6";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function eta() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B7";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function theta() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B8";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}


function iota() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03B9";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function kappa() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BA";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function lambda() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BB";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function mu() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BC";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function nu() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BD";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function xi() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BE";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function o() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03BF";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function pi() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C0";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function rho() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C1";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function sigma() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C3";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function tau() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C4";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function upsilon() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C5";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function phi() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C6";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function chi() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C7";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function psi() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C8";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}

function omega() {
  var editor = ace.edit("editor");
  var session = editor.getSession();
  var start = session.getSelection().getSelectionAnchor().column;
  var end = session.getSelection().getSelectionLead().column;
  var text = session.getValue();
  var blockText = "\u03C9";
  var newText = text.substring(0, start) + blockText + text.substring(end);
  session.setValue(newText);
  editor.focus();
  session.selection.moveTo(start + 1, start + 1);
}




