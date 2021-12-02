import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { LeaveStyle } from './LeaveStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector, useDispatch } from 'react-redux';
import { doRequestLeave, viewLeave } from '../../store/actions/AuthAction';

const THEME_COLOR = '#494446';
export default function ViewLeave() {
    const getbussiness = useSelector(state => state.AuthReducer.user_bussines)
    const leavedata = useSelector(state => state.AuthReducer.leavedata)




    const userbussines_data = []
    getbussiness.map((item, index) => {
        const obj = { label: `${item.business_name}`, value: `${item.business_id}` }
        userbussines_data.push(obj)
    })
    // console.log(userbussines_data)

    const [items, setItems] = useState(userbussines_data);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [refresh, setrefresh] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(viewLeave(value, setrefresh))



    }, [value])


    const getviewleave = () => {

        dispatch(viewLeave(value, setrefresh))



    }


    const renderdata = (item) => {
        var text_color = "black"
        var st_bg = 'white'
        if (item.status == "pending") {
            text_color = '#000000'
            st_bg = '#FFFDAF'


        } else {
            if (item.status == "success") {
                text_color = '#FFFFFF'
                st_bg = "#87EA55"
            } else {
                if (item.status == "rejected") {
                    text_color = '#ffffff'
                    st_bg = '#F76F72'
                }
            }
        }
        return (
            <View

                style={LeaveStyle.shadow_container}>
                <View style={LeaveStyle.shadow_inner}>
                    <View style={LeaveStyle.status_container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 150, backgroundColor: `${st_bg}`, paddingTop: 5, paddingBottom: 5, borderRadius: 150, }}>
                            {/* <Text style={LeaveStyle.status}>Status : </Text> */}
                            <Text style={[LeaveStyle.status_text, { color: `${text_color}` }]}>{item.status}</Text>
                        </View>
                    </View>
                    <View style={LeaveStyle.date_container1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={LeaveStyle.date_heading}>From :</Text>
                            <Text>{item.from_date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={LeaveStyle.date_heading}>To :</Text>
                            <Text>{item.to_date}</Text>
                        </View>

                    </View>
                    <View style={LeaveStyle.reason_container}>
                        <Text style={LeaveStyle.reason_text}>Reason</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
            </View>
        )

    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={LeaveStyle.root}>
                {/* <StatusBar backgroundColor='#494446' barStyle="light-content" /> */}
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={LeaveStyle.dropdown}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            placeholder="Select Business"
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            zIndex={1000}
                        />
                    </View>
                    <FlatList
                        data={leavedata}
                        renderItem={({ item }) => renderdata(item)}
                        keyExtractor={(i, k) => k.toString()}
                        refreshing={refresh}
                        onRefresh={getviewleave}
                    />

                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}