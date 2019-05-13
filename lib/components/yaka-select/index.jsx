import React, { Component } from 'react'
import { Select, message } from 'igroot'

const Option = Select.Option

export class YakaSelect extends Component {

    handleFilterOption = (input, option) => {
        const { searchKeys, options } = this.props
        const inputText = input.toLowerCase()
        const optionValue = option.props.value.toLowerCase()
        const optionChildren = option.props.children.toLowerCase()
        let isMatch = optionValue.indexOf(inputText) >= 0 || optionChildren.indexOf(inputText) >= 0

        if (searchKeys && searchKeys.length) {
            const optionItem = options.filter(item => {
                return item.value.toLowerCase() === optionValue
            })[0]

            searchKeys.map(key => {
                isMatch = isMatch || (optionItem[key] && optionItem[key].toLowerCase().indexOf(inputText) >= 0)
            })
        }

        return isMatch
    }

    findOption = key => {
        const { options } = this.props
        if (!!options && Array.isArray(options)) {
            const option = options.find(item => `${item.value}` === `${key}`)
            if (!!option) {
                return { key, label: option.label }
            } else {
                return { key, label: key }
            }
        } else {
            return { key, label: key }
        }
    }
    copy = () => {
        const { value } = this.props
        try {
            const dom = document.createElement("input")
            const _value = this.tranform_value(value)
            if (!_value) {
                message.info("空值不可复制！")
                return
            }
            let strs = []
            if (Array.isArray(_value)) {
                if (_value.length === 0) {
                    message.info("空值不可复制！")
                    return
                }
                _value.forEach(({ label }) => strs.push(label))
            } else {
                strs.push(_value.label)
            }
            dom.value = strs.join(",")
            dom.style.display = "node"
            document.body.appendChild(dom)
            dom.select()
            if (document.execCommand("Copy", "false", null)) {
                message.success("复制成功！")
            } else {
                message.error("复制失败，原因：浏览器不支持！")
            }

            document.body.removeChild(dom)
        } catch (error) {
            message.error("复制失败，原因：浏览器不支持！")

        }

    }

    tranform_value = value => {
        if (!!value) {
            if (Array.isArray(value)) {
                return value.map(item => {
                    if (typeof item !== "object") {
                        return this.findOption(item)
                    } else {
                        return item
                    }
                })
            } else {
                if (typeof value !== "object") {
                    return this.findOption(value)
                } else {
                    return value
                }
            }
        } else {
            return undefined
        }
    }

    render() {
        const { options, value, mode, showCopy = true } = this.props
        const _value = this.tranform_value(value)
        let _options = []
        if (options && Array.isArray(options)) {
            _options = options.map(option => {
                return <Option key={`${option.value}`} value={`${option.value}`}>{option.label}</Option>
            })
        }
        const SelectStyle = showCopy ? { width: "calc(100% - 40px)", marginRight: 10 } : { width: "100%" }
        return [
            <Select
                showSearch
                allowClear
                filterOption={this.handleFilterOption}
                {...this.props}
                value={_value}
                labelInValue
                style={SelectStyle}
            >
                {_options}
            </Select>,
            showCopy ? <a style={{ width: 30 }} onClick={this.copy}>复制</a> : null
        ]
    }
}
