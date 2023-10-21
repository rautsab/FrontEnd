import React, { useState } from "react";
import { View, Text,StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";

const NationalizePage = () =>{
    const [nationality, setNationality] = useState('');
    const [userName, setUserName] = useState('');

    const handleUsername = () =>{
        axios.get(`https://api.nationalize.io/?name=${userName}`).then((res)=>{
            if(res.data.country.length){
                setNationality(res.data.country[0]["country_id"])
            } else {
                setNationality("out of the world");
            }
        })
    }
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.textContainer}>
                {nationality}
            </Text>
            <View>
                <TextInput style={styles.text} value={userName} onChangeText={setUserName}></TextInput>
            </View>
            <Button title="Take" onPress={handleUsername}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        fontWeight: "700",
        fontSize: 16,
        color: "red"
    },
    newContainer: {
        fontWeight: "900",
        fonts: 26,
        color: "black"
    },
    text:{
    height: 40,
    margin: 12,
    width:100,
    borderWidth: 1,
    padding: 10,
    }
});

export default NationalizePage;