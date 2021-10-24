import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import axios from 'axios'
import { API_HOST, Member_LIST } from '../config'

import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'
import TcSearchBar from '../components/tc/TcSearchBar'
import MyPagination from '../components/MyPagination'
import TcBgDecorationNormal from '../components/tc/TcBgDecorationNormal'

function CompanyBackend() {
  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(Member_LIST)
      console.log(r)
      if (r.status === 200) {
        setTotalRows(r.data.totalRows)
        setData(r.data)
      }
    })()
  }, [])
  return (
    <>
      <div class="container mainContent">
        <div class="row">
          <MultiLevelBreadCrumb />
          {/* content */}
          <form class="col-12">
            <div class="TCform-head ml-1 p-0">
              <Link href="">
                <i class="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div class="TCform-title mr-auto">
                教師會員管理
              </div>
              {/* desktop search bar */}
              <div class="col-6 d-flex">
                <TcSearchBar />
              </div>
            </div>

            <div class="table-responsive company-table">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">姓氏</th>
                    <th scope="col">名字</th>
                    <th scope="col">生日</th>
                    <th scope="col">性別</th>
                    <th scope="col">國籍</th>
                    <th scope="col">擅長語言</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">履歷</th>
                    <th scope="col">審核資格</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows ? (
                    data.rows.map((el) => {
                      return (
                        <tr key={el.sid}>
                          <td>{el.lastname}</td>
                          <td>{el.firstname}</td>
                          <td>
                            {dayjs(el.birthday).format(
                              'YYYY-MM-DD'
                            )}
                          </td>
                          <td>{el.gender}</td>
                          <td>{el.nationality}</td>
                          <td>{el.language}</td>
                          <td>{el.email}</td>
                          <td>
                            <Link href="">
                              <i class="far fa-file-alt"></i>
                            </Link>
                          </td>
                          <td>
                            <select
                              name=""
                              id=""
                              class="custom-select"
                            >
                              <option value="0">
                                未審核
                              </option>
                              <option value="1">
                                通過
                              </option>
                              <option value="2">
                                未通過
                              </option>
                            </select>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
    </>
  )
}

export default CompanyBackend
