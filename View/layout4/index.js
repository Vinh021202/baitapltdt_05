import { View, Text, SafeAreaView, Pressable, TextInput, Image, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {styles} from "./style"


export default function Layout4() {
  return (
    <View style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 20}}>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
            <View style={styles.containertop}>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 2}}> 
                        <Image source={require("../../assets/book.png")}
                            resizeMode="contain"
                            style={{width: 118, height: 155}}
                        />
                    </View>
                    <View style={{flex: 3}}> 
                        <Text style={styles.Text}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.Text}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.TextMoney1}>141.800 đ</Text>
                        <Text style={styles.TextMoney2}>141.800 đ</Text>
                        <View style={styles.boxItem}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <View
                                    style={styles.boxInfoItem}
                                >
                                    <AntDesign name="minus" size={14} color="black"/>
                                </View>
                            
                                <Text style={{fontSize: 17, fontWeight: "700", marginHorizontal: 9}}>1</Text>

                                <View
                                    style={styles.boxInfoItem2}
                                >
                                    <AntDesign name="plus" size={14} color="black" />
                                </View>
                            </View>
                            <Pressable>
                                <Text style={styles.btnmua}>Mua sau</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Text style={styles.btnVoucher}>Mã giảm giá đã lưu</Text>
                    <Pressable>
                        <Text style={styles.btnVoucher2}>Xem tại đây</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection: "row", marginTop: 32, alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", borderWidth: 1, flex: 3
                    , borderColor: "#888", padding: 12}}>
                        <View style={{backgroundColor: "#f2dd1b", width: 32, height: 16}}>

                        </View>
                        <TextInput placeholder="Mã giảm giá"
                            style={styles.btnVoucher3}
                            placeholderTextColor={"#000"}
                        />
                    </View>
                    <Pressable style={{flex: 2, marginLeft: 23, paddingVertical: 13,backgroundColor: "#0A5EB7", justifyContent: "center"}}>
                        <Text
                            style={styles.txtAp}
                        >Áp dụng</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.head}>
                <Text style={styles.txtQua}>Bạn có phiều quà tặng Tiki/Got iot/ Ur box?</Text>
                <Text style={styles.txtNhap}>Nhập tại đây?</Text>
            </View>
            <View style={styles.headline}>
                <Text style={styles.txttamtinh}>Tạm tính</Text>
                <Text style={styles.txtM1}>141.800 đ</Text>
            </View>
            <View style={{marginTop: "auto", backgroundColor: "#fff", padding: 15}}>            
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <Text style={styles.txtThanhtien}>Thành tiền</Text>
                    <Text style={styles.txtM2}>141.800 đ</Text>
                </View>
                <Pressable style={{width :"100%", backgroundColor: "#E53935", justifyContent: "center"}}>
                    <Text style={styles.txtdathang}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </View>
  )
}