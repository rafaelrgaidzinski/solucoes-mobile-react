import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, ProgressBar } from 'react-native-paper';

const Driver = ({ driver }) => {

  return (
    <Card style={styles.card}>
      <Card.Title title={driver.name} subtitle={`${driver.team} • ${driver.country}`} />
      <Image source={{ uri: driver.image }} style={styles.image} />
      <Card.Content>
        <Stat label="🏆 Títulos" value={driver.titles} max={7} />
        <Stat label="🥈 Pódios" value={driver.podiums} max={100} />
        <Stat label="🚗 Velocidade" value={driver.speed} max={10} />
      </Card.Content>
    </Card>
  );
};

const Stat = ({ label, value, max }) => {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statLabel}>{label}: {value}</Text>
      <ProgressBar progress={value / max} style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 12,
  },
  statContainer: {
    marginTop: 8,
  },
  statLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
});

export default Driver;
