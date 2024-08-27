import { TouchableOpacity, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';


const Button = ({ method, text, link, width, height, functionCall }) => {
    

    const router = useRouter();

    redirectLink = () => {
        if (functionCall !== undefined){
            functionCall()
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        if (method === 'back') {
            router.back();
        }
        else {
            router.push(link);
        }
    }

    

    return (
        <View>
            <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
                borderRadius: 40,
                borderWidth: 3,
                borderColor: 'white',
                margin: 13,
            }}
            onPress={redirectLink}
            >
                <Text
                    style={{ color: 'white', fontSize: 24, fontWeight: 'semibold' }}          
                    adjustsFontSizeToFit={true}
                    numberOfLines={1} 
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Button