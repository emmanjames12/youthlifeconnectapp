import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LandingPage() {
    const navigation = useNavigation();
    const handleLoginPress = () => {
        
    // Navigate to the Login page
        navigation.navigate('Login_Prototype')
    };
    const handleSignupPress = () => {
        
        navigation.navigate('Signup')
    };
    
  return (
    
    
    
    <SafeAreaView style={styles.container}>
         <View>
            <Image
            source={require('../assets/navigation/homepagephoto.png')}
            style={{
                height: 250,
                width: 250
            }}
            />
        </View>
         <Text style={styles.welcomeMain}>
            YOUTH LIFE CONNECT
        </Text>
        <Text style={styles.welcomeSub}>
            
        </Text>
        <View style={styles.loginsignup}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginText}>
                    LOG IN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                <Text style={styles.SignupText}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    loginsignup:{
        marginTop: 15,
    },
    welcomeMain:{
        fontSize: 30,
        width: 300,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    welcomeSub:{
        fontSize: 30,
        width: 300,
        textAlign: 'center',
    },
    loginButton:{
        marginTop: 20,
        width: 250,
        // height: 55,
        padding: 15,
        textAlign: 'center',
        backgroundColor:'#940707',
        color:'#FFFFFF',
        fontSize: 20,
        borderRadius: 25,
        elevation: 10,
    },
    signupButton:{
        marginTop: 20,
        width: 250,
        padding: 15,
        display: 'flex',
        textAlign: 'center',
        borderRadius: 25,
        elevation: 10,
        backgroundColor:'#E8EAED',
    },
    loginText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    SignupText:{
        textAlign: 'center',
        color:'black',
        fontSize: 18,
        fontWeight: 'bold',

    }
}
)
export default LandingPage;