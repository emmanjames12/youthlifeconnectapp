import { ToastAndroid } from "react-native";
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";




const LoginPage = () => {
    
    
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Landing');
    };
    const forgotPass = () => {
        console.log('forgot password is pressed');
        navigation.navigate('AccountRecovery');
    };
    const gotoSignUp = () => {
        navigation.navigate('Signup');
    };
    const gotoHome =() => {
        navigation.navigate('welcomeHome');
    };

    const [showPass, setShowPass] = React.useState(false);
  return (
        <SafeAreaView>
           
            <View style={styles.navigationBar}>
                <IconButton icon={"arrow-left"} onPress={handleLogin}/>   
            </View>
        
            <View style={styles.container}>
            <View>
            <Image
            source={require('../assets/navigation/homepagephoto.png')}
            style={{
                height: 150,
                width: 150
            }}
            />
        </View>
                <Text style={styles.loginText}>
                    PLEASE LOG IN YOUR ACCOUNT
                </Text>
                <TextInput
                    style={styles.loginTextInput}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    style={styles.loginTextInput}
                    placeholder='Password'
                    autoCapitalize='none'
                    left={<TextInput.Icon icon="lock" />}
              secureTextEntry={!showPass}
              right={
                <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off"}
                  onPress={() => setShowPass(!showPass)}
                />
              }
                />
                <TouchableOpacity onPress={forgotPass}>
                    <Text style={styles.forgotpassButton}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={gotoHome}>
                    <Text style={styles.loginTextButton}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <View style={styles.signupWrapper}>
                    <Text style={styles.signupInfo}>
                        Don't have an account? 
                    </Text>
                    <TouchableOpacity style={styles.signupButton} onPress={gotoSignUp}>
                        <Text style={styles.signupText}>
                             Sign up now!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navigationBar:{
        width: '100%',
        height: '5%',
        backgroundColor: '#ffffff',
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '95%',
        width: 'auto',
        backgroundColor: '#ffffff',
    },
    loginText:{
        fontSize: 15,
        width: '60%',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#940707'
    },
    loginTextInput:{
        fontSize: 15,
        width: '80%',
        margin: 0,
        backgroundColor: 'white',
        color: '#940707'
    },
    forgotpassButton:{
        fontWeight: 'bold',
        textAlign: 'right',
        width: 340,
        marginTop: 10,
        marginRight: 50,
        textDecorationLine: 'underline',
        fontSize: 13,
        color: '#940707'
    },
    loginButton:{
        width: 210,
        marginTop: 40,
        padding: 15,
        backgroundColor: '#940707',
        borderRadius: 25,
        elevation: 10,
    },
    loginTextButton:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    signupWrapper:{
        marginTop: 25,
        flexDirection: 'row',
    },
    signupInfo:{
        marginRight: 3,
        fontSize: 13,
    },
    signupButton:{

    },
    signupText:{
        color: '#940707',
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 13
    },
})

export default LoginPage;