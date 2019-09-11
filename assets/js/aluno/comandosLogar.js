$(document).ready(function() {
  $('.conteudoLogin').show();
  $('.conteudoCadastro').hide();
});

$("#btnCadastrar").click(function() {
  $('.conteudoLogin').hide();
  $('.conteudoCadastro').show();
});

$("#btnEntrar").click(function() {
  $('.conteudoLogin').show();
  $('.conteudoCadastro').hide();
});

$("#btnCadastrarMobile").click(function() {
  $('.conteudoLogin').hide();
  $('.conteudoCadastro').show();
});

$("#btnLogarMobile").click(function() {
  $('.conteudoLogin').show();
  $('.conteudoCadastro').hide();
});
