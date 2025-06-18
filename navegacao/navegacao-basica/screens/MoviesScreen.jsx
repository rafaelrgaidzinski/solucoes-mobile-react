import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";

export function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data.map((item) => (
            <Text key={item.id}>{item.title} - {item.releaseYear}</Text>
          ))}
        </View>
      )}
    </View>
  );
}