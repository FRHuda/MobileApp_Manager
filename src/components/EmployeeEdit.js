import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { text } from 'react-native-communications';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    }

    onButtonPress = () => {
        const { name, phone, shift, uid } = this.props;

        this.props.employeeSave(name, phone, shift, uid);
    }

    onButtonFirePress = () => {
        Alert.alert(
            'Are you sure want to fire him/her?',
            '',
            [
                { text: 'No', onPress: () => { }, style: 'cancel' },
                { text: 'Yes', onPress: this.onAccept }
            ],
            { cancelable: false }
        );
    };

    onAccept = () => {
        this.props.employeeDelete(this.props.uid);
    }

    onButtonTextPress = () => {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{ text: 'Edit Employee', style: { color: '#fff' } }}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Card>
                    <EmployeeForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress}>Save</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonTextPress}>Text Schedule</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonFirePress}>Fire</Button>
                    </CardSection>
                </Card>
            </View>
        );
    };
};

mapStateToProps = (state) => {
    const { name, phone, shift, uid } = state.employeeForm;

    return { name, phone, shift, uid };
}

export default connect(mapStateToProps, { employeeSave, employeeDelete })(EmployeeEdit);
