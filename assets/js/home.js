setActivePage('nav_home');

// gray out set defauly and off button if light is off
if (document.querySelector('.jscolor').value == '000000') {
  document.getElementById('off-button').classList.add('disabled');
  document.getElementById('set-default-button').classList.add('disabled');
} else {
  document.getElementById('off-button').classList.remove('disabled');
  document.getElementById('set-default-button').classList.remove('disabled');
}

function submitSettings(setDefault=false, useDefault=false, turnOff=false) {
  if (setDefault) {
    document.getElementById('set-as-default').checked = true;    
  }

  if (useDefault) {
    document.getElementById('change-to-default').checked = true; 
  }

  if (turnOff) {
    document.getElementById('turn-off').checked = true;
  }

  document.getElementById('color-form').submit();
}

function configure() {
  document.getElementById('config-form').submit();
}
