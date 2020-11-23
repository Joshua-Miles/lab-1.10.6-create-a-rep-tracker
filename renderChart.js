let colors = [
  'rgb(255, 99, 132)',
  'rgb(99, 255, 125)',
  'rgb(99, 211, 255)',
  'rgb(255, 247, 99)'
]
function renderChart(data, label = "Reps:") {
  let color = colors.shift()
  colors.push(color)
  let canvas = document.createElement('canvas')
  document.body.append(canvas)
  let ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map( (point, i) => `${i+1}`),
      datasets: [{
        label: label,
        backgroundColor: color,
        borderColor: color,
        data: data.map(point => parseFloat(point))
      }]
    }
  });
}