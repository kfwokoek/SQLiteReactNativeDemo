import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'

const Settings = () => {
    return (
        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', height:'100%' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'56', marginBottom: 80 }}>
                Settings
            </Text>
            <View style= {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 50, alignItems:'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'36', marginLeft: 50 }}>
                    Name
                </Text>
                <TextInput placeholder={'Name'} placeholderTextColor={'white'} style={{ width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 15, color: 'white', fontSize:'24', marginRight: 50, textAlign: 'center' }}/>
            </View>
        </SafeAreaView>
    )
}

export default Settings;

const styles = StyleSheet.create({});