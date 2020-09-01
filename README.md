# alipay-test-RN
Test app for testing Alipay payment through "tipsi-stripe"

1) npm install

2) react-native run-android

2) replace "**************" with a real pubishableKey (App.js file)

stripe.setOptions({
  publishableKey: "*************************",
  androidPayMode: "production"
})
