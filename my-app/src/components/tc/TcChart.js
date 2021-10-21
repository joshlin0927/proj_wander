import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '觀看次數',
      data: [120, 109, 30, 50, 200, 310],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    y: {
      max: 500,
      beginAtZero: true,
    },
  },
}

function TcChart() {
  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </>
  )
}

export default TcChart
