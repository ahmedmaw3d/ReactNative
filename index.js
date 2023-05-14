import { Navigation } from "react-native-navigation";
import SignUp from "./SignUp";
import Login from "./Login";
import Notification from "./Notification";
import Insights from "./Insights";
import YourBank from "./YourBank";
//import Documents from "./Documents";
Navigation.registerComponent("SignUp", () => SignUp);
Navigation.registerComponent("Login", () => Login);
//Navigation.registerComponent("Notification", () => Notification);
//Navigation.registerComponent("Insights", () => Insights);
//Navigation.registerComponent("YourBank", () => YourBank);
//Navigation.registerComponent("Documents", () => Documents);
 
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          }
        },
        children: [
          {
            component: {
              name:"SignUp"
            },
          },
          {
            component: {
              name:"Login"
            },
          },
        ],
      },
    },
  });
});