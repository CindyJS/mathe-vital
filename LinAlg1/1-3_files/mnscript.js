function toggle(id) {
  var element = document.getElementById(id);
  var sDisplay = element.style.display;

  if (sDisplay == "none") {
    element.style.display = "" ;
  } else {
    element.style.display = "none" ;
  }
}

function toggleIfHttps (id) {
  if (window.location.protocol=="https:") {
    toggle(id);
  }
}

function openpopup(popurl,dim){
  var winpops=window.open(popurl,"",dim)
}

function focusontopic () {
  var elem = document.getElementById('topic');
  elem.focus();
}

