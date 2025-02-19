import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, StyleSheet, ToastAndroid, View } from "react-native";

export const ScreenTM = () => {
  const showToast = (text: string) => {
    ToastAndroid.show(text, 500);
  };
  const navigation = useNavigation();

  useEffect(() => {
    console.log("ModalPage is mounted");
    showToast("ModalPage is mounted");
  }, []);

  return (
    <View style={styles.modalPage}>
      <Text style={{ fontSize: 24 }}>ModalPage</Text>
      <Pressable
        onPress={() => {
          console.log("Modal Press To Back Pressed");
          showToast("Modal Press To Back Pressed");
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <Text>Press To Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalPage: {
    height: "70%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  backButton: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
