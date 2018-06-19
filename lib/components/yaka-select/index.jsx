import React, { Component } from 'react'
import { Select } from 'igroot'

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
        const { options, value, mode } = this.props
        const _value = this.tranform_value(value)
        let _options = []
        if (options && Array.isArray(options)) {
            _options = options.map(option => {
                return <Option key={`${option.value}`} value={`${option.value}`}>{option.label}</Option>
            })
        }
        return <Select
            showSearch
            allowClear
            filterOption={this.handleFilterOption}
            {...this.props}
            value={_value}
            labelInValue
            style={{ width: '100%' }}
        >
            {_options}
        </Select>
    }
}
