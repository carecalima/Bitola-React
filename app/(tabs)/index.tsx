import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#001F3F", 
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#001F3F",
    marginTop: 20,
    textAlign: "center",
    lineHeight: 28,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#001F3F",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 20,
    fontSize: 16,
    color: "#001F3F",
  },
  button: {
    backgroundColor: "#001F3F",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#E6F2FF",
    borderRadius: 10,
    width: "90%",
  },
  resultTitle: {
    fontSize: 20,
    color: "#001F3F",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  }
});

export default function Index() {
  const [corrente, setCorrente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [resultado, setResultado] = useState("");

  const calcBitola = () => {
    Keyboard.dismiss();
    
    const correnteNum = Number(corrente);
    const distanciaNum = Number(distancia);

    if (isNaN(correnteNum) || isNaN(distanciaNum)) {
      setResultado("Por favor, insira valores válidos.");
      return;
    }

    const bitola110 = (2 * correnteNum * distanciaNum) / 294.64;
    const bitola220 = (2 * correnteNum * distanciaNum) / 510.4;

    setResultado(
      `⚡ Bitola para 110V: ${bitola110.toFixed(2)} mm²\n` +
      `🔌 Bitola para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };

  const limparCampos = () => {
    setCorrente("");
    setDistancia("");
    setResultado("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bitola</Text>
      
      <TextInput
        placeholder="Distância em metros"
        placeholderTextColor="#7F8C8D"
        style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
        keyboardType="numeric"
      />
      
      <TextInput
        placeholder="Corrente em amperes"
        placeholderTextColor="#7F8C8D"
        style={styles.input}
        value={corrente}
        onChangeText={setCorrente}
        keyboardType="numeric"
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={calcBitola}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, {backgroundColor: "#7F8C8D"}]} 
        onPress={limparCampos}
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
      
      {resultado ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultado</Text>
          <Text style={styles.text}>{resultado}</Text>
        </View>
      ) : null}
    </View>
  );
}