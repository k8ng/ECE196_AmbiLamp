setActivePage('nav_details');
document.getElementById('first-chart').click();

function showLineChart(elem, data) {
  var oldCtx = document.querySelector('canvas');
  var parent = oldCtx.parentNode;
  parent.removeChild(oldCtx);
  var ctx = document.createElement('canvas');

  parent.appendChild(ctx);

  var items = elem.parentNode.children;
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  elem.classList.add('active');

  renderChart(ctx, data);
}

function renderChart(ctx,data) {
  var data = {
      datasets: [{
        data: data
      }],
      labels: ['1','2','3','4','5']
  }

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data
  });
}
