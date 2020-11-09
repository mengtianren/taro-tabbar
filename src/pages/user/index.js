import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

const User = () => {
  /**
   * 模拟登录后退出
   * TODO  reLaunch 关闭所有页面，打开到应用内的某个页面 （页面并未关闭，且所有路由跳转的回调参数无法生效）
   * TODO
   */
  const goLogin = () => {
    // Taro.reLaunch({
    //   url: "/pages/login/index",
    //   complete() {
    //     console.log("路由后执行的回调");
    //   },
    //   fail() {
    //     console.log("事件失败后执行的回调");
    //   },
    //   success() {
    //     console.log("事件成功后执行的回调");
    //   },
    // });

    Taro.redirectTo({
      url: "/pages/login/index",
      complete() {
        console.log("路由后执行的回调");
      },
      fail() {
        console.log("事件失败后执行的回调");
      },
      success() {
        console.log("事件成功后执行的回调");
      },
    });


  };

  return (
    <View>
      <Text>这是用户页</Text>
      <Button onClick={goLogin}>退出</Button>
    </View>
  );
};
User.config = {
  navigationBarTitleText: "用户",
};

export default User;
