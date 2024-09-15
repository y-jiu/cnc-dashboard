import ReactApexChart, { Props as ChartProps } from 'react-apexcharts'

const LineChart = ({
  series,
  categories,
  height = 200,
  // min,
  // max
}: {
  series: ChartProps['series']
  categories: any[]
  height?: number
  // min?: number
  // max?: number
}) => {
  return (
    <div className="w-full">
      <ReactApexChart
        series={series}
        type="line"
        height={height}
        width={'100%'}
        options={{
          chart: {
            height,
            type: 'line',
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          // legend: {
          //   show: true,
          //   position: 'bottom',
          //   horizontalAlign: 'right',
          //   offsetY: -5,
          //   floating: true,
          //   markers: {}
          // },
          stroke: {
            curve: 'straight',
            width: 1
          },
          xaxis: {
            // labels: {
            //   style: {
            //     // colors: 'gray',
            //     fontSize: '12px'
            //   }
            // },
            tickAmount: 15,
            // stepSize: 5,
            categories: categories,
            // min,
            // max
          },
          yaxis: {
            labels: {
              formatter: function(val: number): string {
                return (val.toFixed(2)).toString();
              }
            }

          }
        }}
      />
    </div>
  )
}

export default LineChart
