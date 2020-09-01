# alipay-test-RN
Test app for testing Alipay payment through "tipsi-stripe"

1) npm install

2) react-native run-android

3) replace "**************" with a real pubishableKey (App.js file)

4) build an apk

5) install the apk and run a real transaction with a real Alipay account

stripe.setOptions({
  publishableKey: "*************************",
  androidPayMode: "production"
})
