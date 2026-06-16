import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppHeader from "../components/AppHeader";
import { fotos } from "../data/dados";

const screenWidth = Dimensions.get("window").width;

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} variant="light" />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {fotos.map((foto) => (
          <TouchableOpacity
            key={foto.id}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Foto", { id: foto.id })}
          >
            <Image
              source={{ uri: foto.urlThumb }}
              style={styles.feedImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 8,
  },

  feedImage: {
    width: screenWidth,
    height: 520,
    backgroundColor: "#DDDDDD",
  },
});