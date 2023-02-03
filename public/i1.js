
const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');


var xValues = ['Bilrubin total','Bilrubin Direct', 'Bilrubin Indirect','Protein Total','ALBUMIN','GLOBULIN SERUM'];
Chart.defaults.font.size = 18;

const mychart=new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      label: 'Day 1',
      data: [0.5,0.2,0.3,7.9,4.0,1.03],
      borderColor: "red",
      backgroundColor: '#9BD0F5',
      fill: false
    }, { 
      label: 'Day 2',
      data: [6.5,3.5,5.9,5.6,1.6,0.75],
      borderColor: "green",
      backgroundColor: '#9BD0F5',
      fill: false
    }, { 
      label: 'Day 3',
      data: [5.9,0.53,1.2,1.6,2.3,0.8],
      borderColor: "blue",
      backgroundColor: '#9BD0F5',
      fill: false
    }]
  },
  options: {
    layout: {
        padding: 20
    },
    scales: {
        x: {
            title: {
              display: true,
              text: 'Hormones'
            }
        },
        y: {
            title: {
              display: true,
              text: 'Values(mg/dL)'
            }
          }
    }

}
  
});
