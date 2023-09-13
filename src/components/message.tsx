import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

interface MessageProps {
  title: string | null | undefined;
  body: string | null | undefined;
  data?: Record<string, any>;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useMessage = () => {
  async function schedulePushNotification(props: MessageProps) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: props.title,
        body: props.body,
        data: props.data,
        priority: "essa e prioridade",
        subtitle: "Adicionado",
        autoDismiss: true,
        launchImageName:
          "https://images.vexels.com/media/users/3/262087/isolated/lists/c23205b808f3dd46afdaefbca537490b-pessoas-de-menino-com-raiva-de-anime.png",
        vibrate: [0, 250, 250, 250],
      },
      trigger: { seconds: 2 },
    });

    // await Notifications.setNotificationChannelAsync("default", {
    //   name: "default",
    //   importance: Notifications.AndroidImportance.MAX,
    //   vibrationPattern: [0, 250, 250, 250],
    //   lightColor: "red",
    // });
  }

  return { schedulePushNotification };
};
