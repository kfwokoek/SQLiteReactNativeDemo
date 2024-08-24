import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useUserContext } from '../../context/UserProvider'
import Button from '../../components/Button'
import { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { submitChanges } from '../../util/db'

const settings = () => {
    const {user, setUser} = useUserContext()


    const [tempData, setTempData] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        age: user.age,
        date: user.date
    })

    const [datePickerOpen, setDatePickerOpen] = useState(false)

    const handleDateChange = (event, selectedDate) => {
        setTempData({...tempData, date: selectedDate})
        console.log(selectedDate)
    }


    return (
        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', height:'100%' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:'56', marginBottom: 80 }}>
                Settings
            </Text>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Username
                </Text>
                <TextInput maxLength={8} placeholder={tempData.username.length > 0 ? tempData.username : 'Username'} placeholderTextColor={'white'} style={{ width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 20, color: 'white', fontSize:'24', marginRight: 50, textAlign: 'center' }}
                    onChangeText={(value) => setTempData({...tempData, username: value})}/>

            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Email
                </Text>
                <TextInput maxLength={8} placeholder={tempData.email.length > 0 ? tempData.email : 'Email'} placeholderTextColor={'white'} style={{ width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 20, color: 'white', fontSize:'24', marginRight: 50, textAlign: 'center' }}
                    onChangeText={(value) => setTempData({...tempData, email: value})}/>

            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Name
                </Text>
                <TextInput maxLength={8} placeholder={tempData.name.length > 0 ? tempData.name : 'Name'} placeholderTextColor={'white'} style={{ width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 20, color: 'white', fontSize:'24', marginRight: 50, textAlign: 'center' }}
                    onChangeText={(value) => setTempData({...tempData, name: value})}/>

            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Age
                </Text>
                <TextInput maxLength={8} keyboardType={'numeric'} placeholder={tempData.age.length > 0 ? tempData.age : 'Age'} placeholderTextColor={'white'} style={{ width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 20, color: 'white', fontSize:'24', marginRight: 50, textAlign: 'center' }}
                    onChangeText={(value) => setTempData({...tempData, age: value})}/>

            </View>

            <View style={styles.row}>
                <Text style={[styles.textMain, { marginLeft: 50 }]}>
                    Date
                </Text>
                <View style={{ marginRight: 50, width: 150, height:55, borderWidth: 2, borderColor: 'white', borderRadius: 20, color: 'white', marginRight: 50, alignItems:'center', justifyContent: 'center' }}>
                    <RNDateTimePicker mode="date" value={tempData.date} onChange={handleDateChange} themeVariant="dark"/>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 100 }}>
                <Button text={'Save'} link={'/home'} width={150} height={60} functionCall={() => submitChanges(tempData.username, tempData.email, tempData.name, tempData.age, tempData.date, setUser)}/>
            </View>
        </SafeAreaView>
    )
}

export default settings;

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