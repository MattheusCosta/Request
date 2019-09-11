$(document).ready(function() {
  $('.form2').hide();
  $('.form3').hide();
  $("#radio_1").prop("checked", true);
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
