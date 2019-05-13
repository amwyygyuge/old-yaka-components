import React from 'react'
import { TimePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const defaultFormat = "HH:mm:ss"
const _TimePicker = props => {
  const { value, onChange, format } = props
  let _format = format ? format : defaultFormat
  const _value = value ? moment(value, _format) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(_format) : undefined)
  }
  return <TimePicker {...props} value={_value} onChange={resolveOnchange} format={_format} />
}

export default _TimePicker