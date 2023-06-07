self.addEventListener('push', (e) => {
  self.registration.showNotification(JSON.stringify(e));
  console.log(e)
});
