import { View, Text, Pressable, Image, TextInput, SafeAreaView, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {styles} from "./style"

export default function Layout2() {
    return(
        <SafeAreaView style ={styles.container}>
            <View style={{flex: 1 , padding : 20}}>
                <View style={styles.containerHeaderUsb}>
                    <Image source={require("../../assets/usb.png")}
                        resizeMode='contain'
                        style={styles.imageUsb}
                    />
                    <Text style={styles.textImgae}>
                        USB Bluetooth Music Receiver HJX-001
                        - Biến loa thường thành loa bluetooth
                    </Text>
                </View>
                <View style={{marginBottom: "30", paddingHorizontal: "10"}}>
                    <Text style={styles.textStar}>Cực kỳ hài lòng</Text>
                    <View style= {styles.star}>
                         <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    </View>
                </View>
                <View style = {styles.ImgaeText}>
                    <Image source={require("../../assets/camera.png")}
                     resizeMode='contain' style ={{width: 39, height: 39, marginHorizontal: 10}}
                    />
                    <Text style ={styles.textCamera}>Thêm hình ảnh </Text>
                </View>
                <View style={styles.conment}>
                <TextInput multiline={true} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                    style={styles.TextInput}
                    placeholderTextColor={"#C4C4C4"}
                    numberOfLines={10}
                />
                <Text style={styles.head} >https://mail.google.com/mail/u/0/#inbox</Text>
            </View>
            <Pressable style={{marginTop: 30}}>
                <Text style={styles.Pressable}>Gửi</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    );
}