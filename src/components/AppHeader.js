import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import MenuLateral from "./MenuLateral";

export default function AppHeader({ navigation, variant = "dark" }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={[
          styles.safeArea,
          {
            backgroundColor: isDark ? "#111111" : "#FFFFFF",
          },
        ]}
      >
        <View
          style={[
            styles.header,
            {
              backgroundColor: isDark ? "#111111" : "#FFFFFF",
            },
          ]}
        >
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuAberto(true)}
          >
            <Feather
              name="menu"
              size={20}
              color={isDark ? "#FFFFFF" : "#333333"}
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.logo,
              {
                color: isDark ? "#FFFFFF" : "#333333",
                fontStyle: isDark ? "italic" : "normal",
              },
            ]}
          >
            Instaclone
          </Text>
        </View>
      </SafeAreaView>

      <MenuLateral
        visible={menuAberto}
        onClose={() => setMenuAberto(false)}
        navigation={navigation}
      />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
  },

  header: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  menuButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  logo: {
    fontSize: 16,
    fontWeight: "800",
  },
});