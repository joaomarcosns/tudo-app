import React, { useEffect } from "react";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

interface AlertNotificationComponentProps {
  isVisible: boolean;
  type: ALERT_TYPE;
  title: string;
  textBody: string;
  autoClose: boolean;
}

export const AlertNotificationComponent: React.FC<AlertNotificationComponentProps> = ({
  isVisible,
  type,
  title,
  textBody,
  autoClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      Toast.show({
        type,
        title,
        textBody,
        autoClose,
      });
    }
  }, [isVisible]);

  return (
    <AlertNotificationRoot>
      {/* Não é necessário nenhum conteúdo na renderização. */}
    </AlertNotificationRoot>
  );
};
