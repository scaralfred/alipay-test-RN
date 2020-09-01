/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import stripe from 'tipsi-stripe'


class App extends Component {

  componentDidMount() {
    // Test
    stripe.setOptions({
      publishableKey: "*************************",
      androidPayMode: "test"
    })

    // Production
    // stripe.setOptions({
    //   publishableKey: "*************************",
    //   androidPayMode: "production"
    // })
  }

  startPaymentWithSource = async () => {

    const params = {
      type: 'alipay',
      amount: 600,
      usage: 'single',
      currency: "cny",
      returnURL: 'example://stripe-redirect'
    }

    try {
      const source = await stripe.createSourceWithParams(params)
      if (source) {
         alert(JSON.stringify(source))
      } else {
       alert(' did not work')
      }
      this.setState({ loading: false })
    } catch (e) {
      alert(JSON.stringify(e))
    }
}

  render() {
    return (
      <>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Button onPress={()=> this.startPaymentWithSource()} title="Alipay test" />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
