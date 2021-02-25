// Default
import { StyleSheet } from 'react-native';

// Theme
import Theme from '../theme';

export default InputBox = StyleSheet.create({
    active: {
        width: '70%',
        height: 30,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: Theme.FONT_SIZE_SMALL
    },
    error: {
        width: '70%',
        height: 30,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        borderColor: '#ffa69e',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: Theme.FONT_SIZE_SMALL
    }
});