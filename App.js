
import React,{useEffect,useState} from 'react';
import { Routing } from './src/routing/Routing';
import { Provider } from 'react-redux';
import store from './src/config/Store';
import Geolocation from '@react-native-community/geolocation';
import { notificationListner, requestUserPermission } from './src/componenets/Notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';





const App = () => {


  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = (notification) => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };


  
  useEffect(() => {
    requestUserPermission()
  //  messaging().getToken().then(token=>{
  //   console.log(token)
  // } )
  notificationListner()
  }, [])


  return (
    <Provider store={store}>
      <Routing />
    </Provider>
   
  );
};

export default App;
