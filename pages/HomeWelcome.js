import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [showImage, setShowImage] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));
  const [slideAnimation] = useState(new Animated.Value(100)); // animated value for vertical translation

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowImage(true);
      // Start the slide-in animation
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [slideAnimation]);

  useEffect(() => { //code for breathing effect of arrow 
    const breathingAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    breathingAnimation(); //Initializes the breathing animation of arrow

    return () => scaleValue.stopAnimation();
  }, [scaleValue]);

    const goHomePage = () => { //To navigate to the home page
      navigation.navigate('HomePage');
    };

  return (
    <ImageBackground source={require('../assets/SpiralBuilding.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.Container}>
        {showImage && (
          <Animated.View style={[styles.Bottom, { transform: [{ translateY: slideAnimation }] }]}>
            <View>
            <Image
            source={require('../assets/navigation/homepagephoto.png')}
            style={{
                height: 250,
                width: 250
            }}
            />
        </View>
            <Text style={styles.welcomeText}>
              YOUTH LIFE CONNECT
            </Text>
            <Text style={styles.welcomesubText}>
            Hi again, <Text style={styles.greetings}>Emmanuelle James P. Duallo!</Text> Your return brightens up our virtual space. We hope your day is going splendidly. Explore your account to discover all the latest features and updates we have in store for you!
            </Text>
            <TouchableOpacity onPress={goHomePage}>
              <Animated.Image
                source={require('../assets/Next_Button.png')}
                style={[styles.imgNext, { transform: [{ scale: scaleValue }] }]}
              />
            </TouchableOpacity>
            <Text style={styles.Continue}>
              CONTINUE
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },
  Container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: -20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#940707'
  },
  greetings: {
    marginTop: -20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#940707'
  },
  Bottom: {
    position: 'absolute',
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
    top: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  welcomesubText: {
    marginTop: 50,
    width: '90%',
    height: 'auto',
    textAlign: 'center',
    fontSize: 18,
  },
  imgNext: {
    marginTop: 50,
    marginBottom: -45,
    height: 45,
    width: 45,
  },
  Continue: {
    marginTop: 50,
    width: '90%',
    height: 'auto',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#940707'
  },
});

export default Home;
