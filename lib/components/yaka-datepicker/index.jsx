import React from 'react'
import { DatePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const format = "YYYY-MM"
const _DatePicker = ({ value, onChange }) => {
  const _value = value ? moment(value) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(format) : undefined)
  }
  return <DatePicker value={_value} onChange={resolveOnchange} />
}

export default _DatePicker