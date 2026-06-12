import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  function mostrarMensagem() {
    if (Platform.OS === "web") {
      alert("Parabéns! Seu app está funcionando!");
    } else {
      Alert.alert("Parabéns!", "Seu app está funcionando!");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/senai.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Bem Vindo ao App da Escola</Text>

      <Text style={styles.texto}>
        Este é o seu primeiro app em React Native com Expo
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={mostrarMensagem}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>Testar Aplicação</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1", // Roxo Nubank
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 220,
    height: 100,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    elevation: 4, // Android
    shadowColor: "#000", // iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textoBotao: {
    color: "#820AD1",
    fontSize: 18,
    fontWeight: "bold",
  },
});