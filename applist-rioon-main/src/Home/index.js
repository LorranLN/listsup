import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { Mercadorias } from "../components/Mercadorias";

export function Home() {
    const [mercadorias, setMercadorias] = useState([]);
    const [nomeMercadoria, setNomeMercadoria] = useState('');

    function handleMercadoriaAdd() {
        if (mercadorias.includes(nomeMercadoria)) {
            return Alert.alert("Mercadoria já anotada", "Já existe a mercadoria na lista com esse nome.");
        }

        setMercadorias(prevState => [...prevState, nomeMercadoria]);
        setNomeMercadoria('');
    }

    function handleMercadoriaRemove(name) {
        Alert.alert("Remover", `Remover mercadoria(s) ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setMercadorias(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ListSup
            </Text>
            <Text style={styles.text}>
                Lista de mercado
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione o item"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setNomeMercadoria}
                    value={nomeMercadoria}
                />

                <TouchableOpacity style={styles.button} onPress={handleMercadoriaAdd} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={mercadorias}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Mercadorias
                        key={item}
                        name={item}
                        onRemove={() => handleMercadoriaRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhuma mercadoria listada
                    </Text>
                )}
            />
        </View>
    );
}
