import React from 'react'
import { DatePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const format = "YYYY-MM"
const MonthPicker = DatePicker.MonthPicker
const _MonthPicker = ({ value, onChange }) => {
  const _value = value ? moment(value) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(format) : undefined)
  }
  return <MonthPicker value={_value} onChange={resolveOnchange} />
}

export default _MonthPicker