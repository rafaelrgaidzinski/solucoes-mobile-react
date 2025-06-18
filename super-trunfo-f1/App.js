import { StyleSheet, View } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import Driver from "./components/Driver.jsx";
import { drivers } from "./data/drivers.js";
import { useState } from "react";

export default function App() {

  const [driver, setDriver] = useState(drivers[0]);

  const sortearPiloto = () => {
    const random = Math.floor(Math.random() * drivers.length);
    setDriver(drivers[random]);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Driver driver={driver}></Driver>
        <Button mode="contained" onPress={sortearPiloto}>
          Sortear Piloto
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  }
});
