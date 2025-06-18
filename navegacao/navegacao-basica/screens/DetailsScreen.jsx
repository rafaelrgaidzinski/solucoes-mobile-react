import { Button, Text, View } from "react-native";

export function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Listar Filmes"
        onPress={() => navigation.navigate("Movies")}
      ></Button>
    </View>
  );
}