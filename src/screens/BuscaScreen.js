import { StyleSheet, Text, View } from "react-native";

import AppHeader from "../components/AppHeader";

export default function BuscaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} variant="dark" />

      <View style={styles.content}>
        <View style={styles.loadingCircle} />

        <Text style={styles.title}>Busca</Text>

        <Text style={styles.subtitle}>
          Em breve: buscar usuarios e publicacoes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },

  loadingCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 5,
    borderColor: "#D0D0D0",
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#222222",
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 12,
    color: "#999999",
  },
});