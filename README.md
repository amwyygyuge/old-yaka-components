# yaka引擎专用组件



## 安装
npm
```js
npm install yaka-components
```
yarn 
```js
yarn add yaka-components
```
## 使用
```js
import yakaComponents from 'yaka-components'
const { components, layoutComponents } = yakaComponents
```

## 组件列表
### 布局组件
1. Form
2. ROW
3. Logic
### 功能型组件
1. Card
2. EditTable
3. Switch
4. Editor
5. TimePicker
6. Radio
7. DatePicker
### 旧版引用的igroot组件
1. Button
2. InputNumber
3. Card
4. CheckboxGroup
5. Input
6. TextArea

## 兼容旧版
```js
import {  Button, InputNumber, Card, Checkbox, Input } from 'igroot'
const CheckboxGroup = Checkbox.Group
import yakaComponents from 'yaka-components'
const { components, layoutComponents } = yakaComponents

const oldComponents = {
    ...components,
    Checkbox: CheckboxGroup,
    Button,
    Input,
    InputNumber,
    Card,
    TextArea: Input.TextArea,
}
```