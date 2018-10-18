setActivePage('nav_details');

function showLineChart(elem) {
  var items = elem.parentNode.children;
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  elem.classList.add('active');
}

var data = {
    datasets: [{
      data: [10,30,40,20,10]
    }],
    labels: ['1','2','3','4','5']
}

var ctx = document.querySelector('canvas');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});
