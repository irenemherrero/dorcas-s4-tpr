import React, { Component } from 'react';

class TypeSelect extends Component {
    render() {
        const {
            options,
            onChange
        } = this.props;
        const {
            className
        } = this.props.classOfSelect;
        return (
            <select onChange={onChange} className={className}>
                {
                    options.map((option, index) => {
                        return (
                            <option>{option}</option>
                        )
                    })
                }
            </select>
        );
    }
}

export default TypeSelect;