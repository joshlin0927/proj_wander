import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { TcAnalytics } from '../../config'
import axios from 'axios'

function TcChart(props) {
  const { click } = props
  const [CourseData, setCourseData] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${TcAnalytics}/?courseSid=${click}`
      )

      if (r.data.length) {
        let SingleCourseData = {
          Jan: r.data[0].Jan,
          Feb: r.data[0].Feb,
          Mar: r.data[0].Mar,
          Apr: r.data[0].Apr,
          May: r.data[0].May,
          Jun: r.data[0].Jun,
        }
        setCourseData(SingleCourseData)
        setName(r.data[0].course_name)
      } else {
        return
      }
    })()
  }, [click])

  const data = {
    // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: name + '的觀看次數',
        data: CourseData,
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
