import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "./screens/ScreenA";
import { ScreenB } from "./screens/ScreenB";
import { ScreenC } from "./screens/ScreenC";
import { ScreenTM } from "./screens/ScreenTM";
import { NotFound } from "./screens/NotFound";

// Create a nested stack navigator
const StackA = createNativeStackNavigator({
  screens: {
    ScreenA: {
      screen: ScreenA,
      options: {
        title: "ScreenA",
      },
    },
    ScreenTM: {
      screen: ScreenTM,
      options: {
        headerShown: false,
        presentation: "transparentModal",
        animation: "slide_from_bottom",
        contentStyle: {
          justifyContent: "flex-end",
          backgroundColor: "transparent",
        },
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    StackA: {
      screen: StackA,
      options: {
        title: "StackA",
      },
    },
    ScreenB: {
      screen: ScreenB,
      options: {
        title: "ScreenB",
      },
    },
    ScreenC: {
      screen: ScreenC,
      options: {
        title: "ScreenB",
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
