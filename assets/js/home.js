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

var data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['#123412', '#99ff99', '#111111']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};

var ctx = document.getElementById('temperature-chart');
var myTemperatureChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        display: false,
      }
    }
});

var hCtx = document.getElementById('humidity-chart');
var myHumidityChart = new Chart(hCtx, {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        display: false,
      }
    }
});var onCtx = document.getElementById('on-chart');
var myOnChart = new Chart(onCtx, {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        display: false,
      }
    }
});
