import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

export function Mercadorias({ name, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
