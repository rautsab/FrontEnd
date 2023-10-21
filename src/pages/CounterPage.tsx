import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const CounterPage = (props: any) =>{
    const [counter, setCounter] = useState(0); //React Hook
    const increaseHandler = () =>{
        setCounter(counter + 1);
        console.log("Current Value : "+ counter);
    }

    const decreaseHandler = () => {
        setCounter(counter - 1);
        console.log("Current Value : " + counter);

    }

    const navHandler = () =>{
        props.navigation.navigate("Login");
    }

    const setReset = () => {
        setCounter(0);
        console.log("Current Value : " + counter);

    }
    return(
        <View style={style.mainContainer}>
            <Text style={style.counterContainer}>
                {counter}
            </Text>
            <View style={style.buttonContainer}>
                <Button title="Increase" onPress={increaseHandler}></Button>
                <Button title="Decrease" onPress={decreaseHandler}></Button>
                <Button title="Reset" onPress={setReset}></Button>
            </View>
            <View>
                <Button title="Login" onPress={navHandler}/>
            </View>
        </View>
    )
}

const style =StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        counterContainer:{
            fontSize: 80,
            fontWeight: "700",
            color: "red"
        },
        buttonContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            margin: 10
        },
        buttonLeft:{
            height: 30,
            width: 60,
            marginRight: 10
        }
    }
)
export default CounterPage;