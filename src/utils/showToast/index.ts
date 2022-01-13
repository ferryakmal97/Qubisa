import {ToastAndroid} from 'react-native';

const showToast = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    50,
  );
};

export default showToast;
