import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export function ScreenC() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Screen C</Text>
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
