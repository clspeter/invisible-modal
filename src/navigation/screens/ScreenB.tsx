import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import {} from "@react-navigation/native";

export function ScreenB() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Screen B</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
});
