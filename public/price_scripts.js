function BuildChart(labels, values, chartTitle) {
  const data = {
    labels: labels,
    datasets: [{
      label: chartTitle,
      data: values,
      backgroundColor: ['rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Listed Price'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'price Id'
          }
        }]
      }
    }
  });

  return myChart;
}
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const json = JSON.parse(this.response)[0];
    console.log(json)

    const labels = json.map((e) => e.price_id);
    console.log(labels)

    const values = json.map((e) => (e.listed_price) 
    );

    BuildChart(labels, values, 'Real Time Price');
  }
};
xhttp.open('GET', 'http://localhost:3000/api/price', false);
const d=xhttp.open('GET', 'http://localhost:3000/api/price', false);
console.log(d);
xhttp.send();