function toggle(source) {
  checkboxes = document.getElementsByName('select');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

$(document).ready(function(){
  $('.modal').modal();
});

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
  $('#inputEstiloEm').prop("disabled", false);
  $('#inputPassword').prop("disabled", false);
  $('#inputNPassword').prop("disabled", false);
  $('#inputNCPassword').prop("disabled", false);
});