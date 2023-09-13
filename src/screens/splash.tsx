import { View, Text } from 'react-native'
import Animated, { BounceInUp, SlideInDown, SlideInUp } from 'react-native-reanimated';
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  const { navigate } = useNavigation();
  return (
    <View className='flex-1 justify-center items-center'>
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen opacity-60"
      />
      <View className='absolute top-0 mt-56 flex-row'>
      <Animated.Text className='font-bold text-[100px] text-black' entering={BounceInUp.duration(3000)}>D</Animated.Text>
      <Animated.Text className='font-bold text-[100px] text-black' entering={BounceInUp.duration(3500)}>a</Animated.Text>
      <Animated.Text className='font-bold text-[100px] text-black' entering={BounceInUp.duration(4000)}>t</Animated.Text>
      <Animated.Text className='font-bold text-[100px] text-black' entering={BounceInUp.duration(4500)}>e</Animated.Text>
      </View>
      <LottieView
        source={require("../../assets/lottie.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigate("home")}
        resizeMode="contain"
        duration={5000}
     
      />
    </View>
  );
}