import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Pdftable() {
    const Filtered_items = useSelector(state => state.AuthReducer.filter_data)
    const user_data = useSelector(state => state.AuthReducer.data)
    const htmlStyles = `
table.tg  {border-collapse:collapse;border-color:#9ABAD9;border-spacing:0;}
.tg td{background-color:#EBF5FF;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#444;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#409cff;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#fff;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-ycr8{background-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-o79m{background-color:#3166ff;text-align:left;vertical-align:top}
.header_text{font-size:14px;}
`
    // table code
    var str = ` 
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice</title>
      <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
      <style>
        ${htmlStyles}
      </style>
    </head>
    <body>    
</head>
<body>
<h2>Attendezz.com</h2>
<h4 class="header_text">Employee Name : ${user_data.user_first_name}</h4>
<h4 class="header_text">Employee Phone : ${user_data.user_phone}</h4>
<h4 class="header_text">Employee Email : ${user_data.user_email}</h4>
<h4 class="header_text">Employee ID# : ${user_data.user_id}</h4>

<table class="tg">
<thead>
  <tr>
    <th class="tg-0khl">Date</th>
    <th class="tg-0khl">Check in</th>
    <th class="tg-0khl">Check out</th>
    <th class="tg-0khl">Break Start</th>
    <th class="tg-0khl">Break End</th>
    <th class="tg-0khl">Total Hours</th>
    <th class="tg-0khl">Total Break</th>
  </tr>
</thead>
<tbody>
  `





    {
        Filtered_items.map((item, index) => {
            if (typeof item.shifts[0] == 'string') {
                str += `<tr>
          <td class="tg-0khl" >${item.date}</td>
          <td class="tg-0khl" > leave</td>
          <td class="tg-0khl" >leave</td>
          <td class="tg-0khl" >leave</td>
          <td class="tg-0khl" >leave</td>
          <td class="tg-0khl" >leave</td>
          <td class="tg-0khl" >leave</td>
          
          </tr>`
            } else {
                str += `<tr>
          <td class="tg-0khl" >${item.date}</td>
          <td class="tg-0khl" >${item.shifts.start_shift}</td>
          <td class="tg-0khl" >${item.shifts.end_shift}</td>
          <td class="tg-0khl" >${item.shifts.start_break}</td>
          <td class="tg-0khl" >${item.shifts.end_break}</td>
          <td class="tg-0khl" >${item.shifts.totalHours}</td>
          <td class="tg-0khl" >${item.shifts.totalBreak}</td>
          
          </tr>`
            }





        })

    }
    str += `</tbody>
    </table>
    </body>
</html>`


    return { str }
}