const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription =
  { "endpoint": "https://fcm.googleapis.com/fcm/send/dycarx0A_js:APA91bEFlZrGpeCx1dBWEzkgvB3eS_DcttWkPqZ-X9vofysh0hfpwJye807t9csmazrv0CMbKsI-HdpS4l19LjAa_atyX0Du1HEgZhSnOZLuG9PcATbJ_KHIrsAnQzjJRHW7lRq9BdQb", "expirationTime": null, "keys": { "p256dh": "BIFSClf9aADkUUr6Q0pJ_GVmI9qhsoGqbx-YxNSG3XuledsDiFY2Jz13-XhLyPM4L717Vyrhxt-9Ooa3n-Iebe4", "auth": "SueqHgzWdkkJhb9F4stbWQ" } };

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
