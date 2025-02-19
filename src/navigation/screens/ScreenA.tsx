import { Button, Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

export function ScreenA() {
  return (
    <View style={styles.container}>
      <Text>Screen A</Text>
      <Button screen="ScreenB">Go to ScreenB</Button>
      <Button screen="ScreenC">Go to ScreenC</Button>
      <Button screen="StackA" params={{ screen: "ScreenTM" }}>
        Go to ScreenTM
      </Button>
      <Text>
        {"\n\n"}Reproduce steps:
        {"\n"}1. Go to ScreenB and back to ScreenA
        {"\n"}2. Go to ScreenC and back to ScreenA
        {"\n"}3. Go to ScreenTM
        {"\n\n"}You can see the modal screen mounted toast but won't seen the
        modal screen, also you can still interact with the modal.
      </Text>
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
