import React, {useState} from 'react';
import {View,Text} from "react-native";
import {styles} from "./style";
import {CheckBox} from "react-native-elements";

const ForgetPassWord = () => {

    const [isChecked , setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

    };
    return (

        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>کلمه عبورم را فراموش کردم</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                        iconRight={true}
                        containerStyle={styles.checkbox}
                        title="مرا بخاطر بسپار"
                        checked={isChecked}
                        onPress={handleCheckboxChange}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}

                    />
            </View>
        </View>
    );
}

export default ForgetPassWord;