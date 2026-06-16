import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function MenuLateral({ visible, onClose, navigation }) {
  function irParaFeed() {
    onClose();

    const routeNames = navigation.getState?.()?.routeNames || [];

    if (routeNames.includes("Feed")) {
      navigation.navigate("Feed", { screen: "FeedHome" });
      return;
    }

    const parent = navigation.getParent?.();

    if (parent) {
      parent.navigate("Feed", { screen: "FeedHome" });
      return;
    }

    navigation.navigate("FeedHome");
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.menu}>
          <Pressable style={styles.itemAtivo} onPress={irParaFeed}>
            <Text style={styles.itemAtivoTexto}>Feed</Text>
          </Pressable>
        </View>

        <Pressable style={styles.areaFechar} onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  menu: {
    width: 185,
    backgroundColor: "#FFFFFF",
    paddingTop: 8,
    paddingHorizontal: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  itemAtivo: {
    backgroundColor: "#D7E8FF",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  itemAtivoTexto: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4A90E2",
  },

  areaFechar: {
    flex: 1,
  },
});