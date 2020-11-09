import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

const Login = () => {
  // 模拟登陆去首页
  const goIndex = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };
  return (
    <View>
      <Text>这是登录页</Text>
      <Button onClick={goIndex}>去首页</Button>
    </View>
  );
};
Login.config = {
  navigationBarTitleText: "登陆",
};

export default Login;
