const { CanvasRenderService } = require('chartjs-node-canvas');
const width = 1000;   // define width and height of canvas 
const height = 1000;   
const chartCallback = (ChartJS) => {
 console.log('chart built')
};
const canvasRenderService = new CanvasRenderService(width, height, chartCallback);

var xLabels = ['1','2','3','4','5','6','7','8','9','10','11']

const createImage = async () => {
    const configuration = {
        type: 'line',   // for line chart
          data: {
              labels: [150,300,450,600,750,900,1050,1200,1350,1500],
              datasets: [{
                  label: "sample 1",
                  data: [100,43],
                  fill: false,
                  borderColor: ['rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                  xAxisID: 'xAxis1' //define top or bottm axis ,modifies on scale
              },
              {
                  label: "sample 2",
                  data: [72,83],
                  fill: false,
                  borderColor: ['rgba(265, 99, 132, 1)'],
                  borderWidth: 1,
                  xAxisID: 'xAxis1'
              },
              {
                  label: "sample3",
                  data: [30,56],
                  fill: false,
                  borderColor: ['rgba(235, 99, 122, 1)'],
                  borderWidth: 1,
                  xAxisID: 'xAxis1'
              }
              ],
              
          },
          options: {
                  scales: {
                  xAxes:[
                      {
                      id:'xAxis1',
                      position: 'bottom',
                      type:"category",

                      },
                      {
                      id:'xAxis2',
                      position: 'top',
                      type:"category",
                      ticks:{
                          callback: function(value, index, values) {
                              return xLabels[index];  // gives points of top x axis 
                          }
                  },
              }],
                  yAxes: [{
                  display: true,
                  ticks: {
                      max: 200,
                      stepSize: 10, //defines y axis step scale
                  }
              }]
          ,   
              }
          }
          }

    const dataUrl = await canvasRenderService.renderToDataURL(configuration); // converts chart to image
    return dataUrl;
};

module.exports = {
createImage   //for exporting to another file
}