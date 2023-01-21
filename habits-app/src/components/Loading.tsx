import {
    View,
    StyleSheet,
    ActivityIndicator
} from "react-native";

export function Loading() {
    return (
        <View style={styleLoading.loadingView}>
            <ActivityIndicator color="#7C3AED" />
        </View>
    );
}

const styleLoading = StyleSheet.create({
    loadingView: {
      flex: 1,
      backgroundColor: '#09090A',
      alignItems: 'center',
      justifyContent: 'center',
    }
});