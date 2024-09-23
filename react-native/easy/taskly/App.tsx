import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    console.log("DELETING");
    Alert.alert(
      "Are you sure you want to delete?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("DELETED"),
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("NOT DELETED"),
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {/*PixelRatio.get()*/}

        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDelete}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCelurean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colorWhite,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
