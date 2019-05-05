import React from 'react'
import { TimePicker } from 'igroot';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const format = "YYYY-MM HH:mm:ss"
const _TimePicker = ({ value, onChange }) => {
  const _value = value ? moment(value) : undefined
  const resolveOnchange = (value) => {
    onChange && onChange(value ? moment(value).format(format) : undefined)
  }
  return <TimePicker value={_value} onChange={resolveOnchange} showTime />
}

export default _TimePicker