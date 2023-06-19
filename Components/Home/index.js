import React from 'react';
import {Image, ScrollView, View} from "react-native";
import Form from "../Form/form";
import {styles} from "./style";
import ForgetPassWord from "../ForgetPassWord/forgetPassWord";

const Index = () => {
    return (
        <View style={styles.containerMain}>
            <Image
                style={styles.logo}
                source={require('../../assets/top-logo.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/png2.png')}
            />
            <Form/>
            <ForgetPassWord/>
        </View>
    );
}

export default Index;