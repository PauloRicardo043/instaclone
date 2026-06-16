import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import AppHeader from "../components/AppHeader";
import { fotos } from "../data/dados";

const screenWidth = Dimensions.get("window").width;

export default function FotoScreen({ navigation, route }) {
  const foto = fotos.find((item) => item.id === route.params?.id) || fotos[0];

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} variant="dark" />

      <View style={styles.subHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#222222" />
        </TouchableOpacity>

        <Text style={styles.subHeaderTitle}>Publicacao</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{foto.iniciais}</Text>
          </View>

          <Text style={styles.username}>{foto.usuario}</Text>
        </View>

        <Image
          source={{ uri: foto.urlFull }}
          style={styles.fullImage}
          resizeMode="cover"
        />

        <View style={styles.infoBox}>
          <Ionicons name="heart-outline" size={24} color="#FF4757" />

          <Text style={styles.likes}>{foto.curtidas} curtidas</Text>

          <Text style={styles.caption}>
            <Text style={styles.captionUser}>{foto.usuario} </Text>
            {foto.legenda}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  subHeader: {
    height: 44,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  backButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  subHeaderTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222222",
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  userRow: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF4757",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },

  username: {
    fontSize: 12,
    fontWeight: "700",
    color: "#222222",
  },

  fullImage: {
    width: screenWidth,
    height: 360,
    backgroundColor: "#DDDDDD",
  },

  infoBox: {
    paddingHorizontal: 8,
    paddingTop: 10,
  },

  likes: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "800",
    color: "#222222",
  },

  caption: {
    marginTop: 4,
    fontSize: 12,
    color: "#222222",
  },

  captionUser: {
    fontWeight: "800",
  },
});