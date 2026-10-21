import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Cover Preview</Text>
      <Button title="Open image modal" onPress={() => setModalVisible(true)} />
      <StatusBar style="auto" />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Atomic Habits</Text>
          <Image
            source={{
              uri: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
            }}
            style={styles.cover}
            resizeMode="contain"
            accessibilityLabel="Atomic Habits book cover"
          />
          <Text style={styles.caption}>James Clear</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
  },
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  cover: {
    width: 240,
    height: 320,
  },
  caption: {
    marginVertical: 16,
  },
});
