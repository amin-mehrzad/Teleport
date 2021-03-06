import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons, Entypo } from '@expo/vector-icons';


import { MonoText } from '../components/StyledText';

import { Container, Header, Content, Card, CardItem, Body, Row } from 'native-base';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>


        <Card style={styles.card}>
          {/* <CardItem>
              <Body> */}
          {/* <View style={styles.flightWrapper}> */}
          <View style={styles.flight}>
            <View style={styles.flagContainer}>
              <Image
                source={require('../assets/images/flag-turkey-flagge-rechteckig-70x102.gif')}
                style={styles.flagImage}
              />
            </View >
            <Text>Istanbul</Text>
          </View>
          <View style={styles.flight}>
            <Entypo
              name="chevron-thin-right" size={32} color="gray"
              style={styles.flightIcon}
            />
          </View>
          <View style={styles.flight}>
            <View style={styles.flagContainer}>
              <Image
                source={require('../assets/images/flag-united-states-flagge-rechteckig-70x105.gif')}
                style={styles.flagImage}
              />
            </View>
            <Text>San Juan</Text>

          </View>
          {/* </View> */}

          {/* </Body>
            </CardItem> */}
        </Card>
        {/* <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View> */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,

};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
    //  flex: 1,
    //  justifyContent: 'center'
  },
  flightWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center"
  },
  flight: {
    flex: 1,
    flexDirection: 'column',
    width:'30%',
    justifyContent: 'center',
    
    marginHorizontal: 10
//margin:10
  },
  flagContainer: {
    width: 102,
    height: 70,
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 15

  },
  flagImage: {
    // width: 100,
    // height: 80,
    // resizeMode: 'contain',
    // marginTop: 3,
    // marginLeft: -10,
    // borderRadius: 60

  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  card: {
    //maxWidth:'95%',
    // marginHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  flightIcon: {
   // marginTop: 0,
    margin:'auto',
    alignItems:'center',
    justifyContent:"center",
    // flex:1,
    // flexDirection:'row'
    marginStart:'35%'
  }

});
