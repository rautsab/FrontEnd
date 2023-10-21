import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const LoginPage = () =>{
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return(
        <View>
            <Text>
                <Text>Enter correct information to Login</Text>
                <TextInput
                    style={style.textInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <Button title="Login"></Button>
            </Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
    textInput:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
    }
})

export default LoginPage;