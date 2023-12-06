import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, TextInput } from 'react-native-paper';


const AccountRecoveryPage = () => {
    const navigation = useNavigation();
    const sendRestorePassword = () => {
        console.log('Reset password has been sent to your email address!')
        navigation.navigate('Account_Recovery_Confirmation')
    }
    const goBack = () => {
        navigation.pop();
    }
    const backToLogin =() => {
        navigation.navigate('Login_Prototype');
    }
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.navigationBar}>
            <IconButton icon={"arrow-left"} onPress={goBack}/>   
        </TouchableOpacity>
        <View>
            <Image
            source={require('../assets/navigation/homepagephoto.png')}
            style={{
                height: 250,
                width: 250,
            }}
            />
        </View>
        <View style={styles.contentWrapper}>
            <Text style={styles.restorePasswordHeadline}>
                PLEASE CONFIRM YOUR EMAIL
            </Text>
            <TextInput 
                style={styles.loginTextInput} 
                placeholder='Email Address' 
                autoCapitalize='none'
            />
            <TouchableOpacity style={styles.sendResetButton} onPress={sendRestorePassword}>
                <Text style={styles.sendResetText}>
                    SEND RESET INSTRUCTIONS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavigationBar} onPress={backToLogin}>
                <IconButton icon={"arrow-left"} onPress={goBack}/>  
                <Text style={styles.backToLoginText}>
                    BACK TO LOG IN
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '95%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    navigationBar:{
        width: '100%',
        height: '5%',
        backgroundColor: '#ffffff',
    },
    contentWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90%',
        marginTop:-175
    },
    restorePasswordHeadline:{
        marginBottom: 20,
        fontSize: 15,
        color: '#940707',
        fontWeight: 'bold',
    },
    loginTextInput:{
        backgroundColor: '#ffffff',
        width: '80%',
        fontSize: 15,
    },
    sendResetButton:{
        width: '70%',
        marginTop: 25,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#940707',
        borderRadius: 25,
        elevation: 10,
        height: 50,
    },
    sendResetText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    bottomNavigationBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        width: '80%',
        marginTop: 30,
    },
    backToLoginText:{
        fontSize: 15,
        marginBottom:5,
        color: '#940707',
        fontWeight: 'bold',
    },
})
export default AccountRecoveryPage;