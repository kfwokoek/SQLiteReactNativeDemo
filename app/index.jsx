import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Button from '../components/Button'

const index = () => {
    return (
        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', height:'100%' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'56', marginBottom: 80 }}>
                Home
            </Text>
            <View style= {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 50 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'36', marginLeft: 50 }}>
                    Name
                </Text>
                <Text style={{ color: 'white', fontSize:'36', marginRight: 50 }}>
                    index
                </Text>
            </View>
            <View style= {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 50 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'36', marginLeft: 50 }}>
                    Username
                </Text>
                <Text style={{ color: 'white', fontSize:'36', marginRight: 50 }}>
                    index
                </Text>
            </View>
            <View style= {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 50 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'36', marginLeft: 50 }}>
                    Age
                </Text>
                <Text style={{ color: 'white', fontSize:'36', marginRight: 50 }}>
                    index
                </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 0, marginBottom: 100}}>
                <Button text='Settings' link='/Settings' width={150} height={60} />
            </View>
        </SafeAreaView>
    )
}

export default index;

const styles = StyleSheet.create({})