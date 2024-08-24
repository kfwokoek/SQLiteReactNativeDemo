import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Button from '../../components/Button'
import { useUserContext } from '../../context/UserProvider'
const home = () => {
    const {user} = useUserContext()
    const isDateInvalid = (date) => isNaN(date.getTime());

    return (
        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', height:'100%' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'56', marginBottom: 80 }}>
                Home
            </Text>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Username
                </Text>
                <Text style={[styles.textInfo, { marginRight: 50 }]}>
                    {user.username.length > 0 ? user.username : 'Username'}
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Email
                </Text>
                <Text style={[styles.textInfo, { marginRight: 50 }]}>
                    {user.email.length > 0 ? user.email : 'Email'}
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Name
                </Text>
                <Text style={[styles.textInfo, { marginRight: 50 }]}>
                    {user.name.length > 0 ? user.name : 'Name'}
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Age
                </Text>
                <Text style={[styles.textInfo, { marginRight: 50 }]}>
                    {user.age > 0 ? user.age : 'Age'}
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Date
                </Text>
                <Text style={[styles.textInfo, { marginRight: 50 }]}>
                    {user.date.toDateString()}

                </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 100 }}>
                <Button text={'Settings'} link={'/settings'} width={150} height={60}/>
            </View>
        </SafeAreaView>
    )
}

export default home;

const styles = StyleSheet.create({
    textInfo: {
        color: 'white',
        fontWeight: 'semibold',
        fontSize:'22',
    },
    textMain: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:'32',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 50,
        alignItems: 'center'
    }
})