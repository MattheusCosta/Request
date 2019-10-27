$(document).ready(function() {
  $('.form2').hide();
  $('.form3').hide();
  $("#radio_1").prop("checked", true);
});

$(document).ready(function(){
  $('.modal').modal();
});

$('input[name="group1"]').change(function () {
    if ($('input[name="group1"]:checked').val() === "1") {
        $('.form1').show();
        $('.form2').hide();
        $('.form3').hide();
    }
    else if ($('input[name="group1"]:checked').val() === "2") {
        $('.form2').show();
        $('.form1').hide();
        $('.form3').hide();
    }
    else if ($('input[name="group1"]:checked').val() === "3") {
        $('.form3').show();
        $('.form1').hide();
        $('.form2').hide();
    }
});

$(function(){
  $("#fecharNotificacao").click(function()
  {
    $(this).parent().fadeOut();
  });
});

function toggle(source) {
  checkboxes = document.getElementsByName('select');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

$(document).on('click','.toggle-password',function(){
  $(this).toggleClass("fa-eye fa-eye-slash");

  var input = $("#inputPassword");
  var input2 = $("#inputNPassword");
  var input3 = $("#inputNCPassword");

  if (input.attr("type") == "password") {
      input.attr("type", "text");
      input2.attr("type", "text");
      input3.attr("type", "text");
  } else {
      input.attr("type", "password");
      input2.attr("type", "password");
      input3.attr("type", "password");
  }
});

$(document).on('click','#btnHabilitar',function(){
  $('#inputEstiloNm').prop("disabled", false);
  $('#inputEstiloRM').prop("disabled", false);
  $('#inputEstiloTr').prop("disabled", false);
  $('#inputEstiloRG').prop("disabled", false);
  $('#inputEstiloLog').prop("disabled", false);
  $('#inputEstiloNumero').prop("disabled", false);
  $('#inputEstiloBr').prop("disabled", false);
  $('#inputEstiloCd').prop("disabled", false);
  $('#inputEstiloEstd').prop("disabled", false);
  $('#inputEstiloCp').prop("disabled", false);
  $('#inputEstiloMail').prop("disabled", false);
});
