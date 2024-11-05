import { Text, View, StyleSheet,  } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:20}}>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:10,
        paddingHorizontal:20
    },
})