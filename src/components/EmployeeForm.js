import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

    onNameChange = (text) => {
        this.props.employeeUpdate('name', text);
    }

    onPhoneChange = (text) => {
        this.props.employeeUpdate('phone', text);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Name"
                        value={this.props.name}
                        onChangeText={this.onNameChange}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="Phone Number"
                        value={this.props.phone}
                        onChangeText={this.onPhoneChange}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate('shift', day)}
                        style={{ width: '100%' }}
                    >
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);