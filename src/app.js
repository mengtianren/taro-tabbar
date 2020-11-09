import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index/index";

import "./app.css";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["pages/login/index", "pages/index/index", "pages/user/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./static/image/tabBar/home.png",
          selectedIconPath: "./static/image/tabBar/home_1.png",
        },
        {
          pagePath: "pages/user/index",
          text: "用户",
          iconPath: "./static/image/tabBar/achievement.png",
          selectedIconPath: "./static/image/tabBar/achievement_1.png",
        },
      ],
      color: "#333",
      selectedColor: "#06BF89",
      backgroundColor: "#fdfdfd",
      borderStyle: "black",
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
