import React from 'react'
import { DatePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const defaultFormat = "YYYY-MM"
const MonthPicker = DatePicker.MonthPicker
const _MonthPicker = props => {
  const { value, onChange, format } = props
  let _format = format ? format : defaultFormat
  const _value = value ? moment(value, _format) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(_format) : undefined)
  }
  return <MonthPicker value={_value} onChange={resolveOnchange} format={_format} />
}

export default _MonthPicker