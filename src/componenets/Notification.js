import messaging from '@react-native-firebase/messaging';
// import { showMessage, hideMessage } from "react-native-flash-message";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import moment from 'moment';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export const notificationListner=async()=>{
messaging().onNotificationOpenedApp(remoteMessage =>{
    console.log("notofication caused app to open from background", remoteMessage)
})
messaging().onMessage(async remoteMessage =>{
    console.log("receive in Foreground",remoteMessage)
    // const hours=new Date(remoteMessage.sentTime).getHours()
    // const time=new Date(remoteMessage.sentTime).getMinutes()
    // showMessage({
    //   hideStatusBar:true,
    //   type: "default",
    //    backgroundColor: "purple", // background color
    //    color: "#FFFFFF", // text color
    //   icon:'success',
    //   message: `${remoteMessage.notification.title}`,
    //   description: `${remoteMessage.notification.body} ${hours}:${time}`,
      
    // });
})

messaging().getInitialNotification().then(remoteMessage =>{
    if(remoteMessage){
        console.log("notification caused app open from quit state",remoteMessage.notification)
    }
})
}
export const RemoveReminder=()=>{
    PushNotificationIOS.removeAllPendingNotificationRequests();
}

export const reminder=(time,name,img)=>{
  console.log('notification',time,name,img)
 
  const Ntime=time.split(':')
  console.log(Ntime)
  const day = moment().format("DD")
  const month =( moment().format("MM")) -1
  
  const year = moment().format("YYYY")
  console.log(day,month,year)
  const DateObject=new Date(year,month,day,Ntime[0],Ntime[1],0,0).toISOString()
  console.log(DateObject)
  console.log(new Date(DateObject))
  console.log(Date.now() + 10 * 1000)
  console.log(new Date(Date.now() + 10 * 1000))
  
  PushNotificationIOS.scheduleLocalNotification({
     
      //... You can use all the options from localNotifications
      alertTitle: name,
      image:img,
      alertBody: "You have not checkout yet plz checkout first", // (required)
      fireDate: DateObject,// in 60 secs
    //   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    //   vibrate: true, // (optional) default: true
    //   vibration: 500,
    //   playSound: true,
    //   soundName: "default", 
    //   /* Android Only Properties */
    //   repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    })
}


