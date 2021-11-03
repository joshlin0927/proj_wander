import React from 'react'
import { Line } from 'react-chartjs-2'

function TcChart(props) {
  const { all } = props

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '觀看次數',
        data: all,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  }
  // console.log(all)
  const options = {
    scales: {
      y: {
        max: 500,
        beginAtZero: true,
      },
    },
  }
  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}

export default TcChart
