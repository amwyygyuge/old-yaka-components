import React from 'react'
import { DatePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const defaultFormat = "YYYY-MM-DD HH:mm:ss"
const _DatePicker = props => {
  const { value, onChange, format } = props
  let _format = format ? format : defaultFormat
  const _value = value ? moment(value, _format) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(_format) : undefined)
  }
  return <DatePicker showTime  {...props} value={_value} onChange={resolveOnchange} format={_format} />
}

export default _DatePicker