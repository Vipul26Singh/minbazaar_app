cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.keepe.cardio.CardIO",
        "file": "plugins/com.keepe.cardio/www/cdv-plugin-card-io.js",
        "pluginId": "com.keepe.cardio",
        "clobbers": [
            "CardIO"
        ]
    },
    {
        "id": "com.telerik.stripe.stripe",
        "file": "plugins/com.telerik.stripe/www/stripe.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe"
        ]
    },
    {
        "id": "com.telerik.stripe.charges",
        "file": "plugins/com.telerik.stripe/www/charges.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.charges"
        ]
    },
    {
        "id": "com.telerik.stripe.customers",
        "file": "plugins/com.telerik.stripe/www/customers.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.customers"
        ]
    },
    {
        "id": "com.telerik.stripe.recipients",
        "file": "plugins/com.telerik.stripe/www/recipients.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.recipients"
        ]
    },
    {
        "id": "com.telerik.stripe.subscriptions",
        "file": "plugins/com.telerik.stripe/www/subscriptions.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.subscriptions"
        ]
    },
    {
        "id": "com.telerik.stripe.transfers",
        "file": "plugins/com.telerik.stripe/www/transfers.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.transfers"
        ]
    },
    {
        "id": "com.telerik.stripe.coupons",
        "file": "plugins/com.telerik.stripe/www/coupons.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.coupons"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-velda-devicefeedback.DeviceFeedback",
        "file": "plugins/cordova-plugin-velda-devicefeedback/DeviceFeedback.js",
        "pluginId": "cordova-plugin-velda-devicefeedback",
        "clobbers": [
            "window.plugins.deviceFeedback"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.keepe.cardio": "1.0.9",
    "com.telerik.stripe": "1.0.8",
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-fcm": "2.1.1",
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-velda-devicefeedback": "0.0.2",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});