import PropTypes from 'prop-types'
import {Item, Picker, Text} from 'native-base'
import React from 'react'

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

export const ShiftPicker = ({selectedValue, onValueChange}) => {
    return (
        <Item picker>
            <Text>Shift</Text>
            <Picker
                mode="dropdown"
                selectedValue={selectedValue}
                onValueChange={v => onValueChange(v)}>
                {range.map(x => (<Picker.Item label={`${x}`} value={`${x}`}/>))}
            </Picker>
        </Item>
    )
}

ShiftPicker.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
}
