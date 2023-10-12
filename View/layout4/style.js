import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container:{
        flex: 1,
         backgroundColor: "#fff", 
         paddingHorizontal: 20, 
         paddingTop: 20
    },
    containertop:{
        backgroundColor: "#FFf", 
        padding: 15
    },
    Text:{
        fontSize: 12, 
        fontWeight: "700", 
        marginBottom: 10
    },
    TextMoney1:{
        color: "#ee0d0d", 
        fontSize: 18, 
        fontWeight: "700"
    },
    TextMoney2:{
        color: "#808080", 
        fontSize: 12,
         marginTop: 8
    },
    boxItem: {
        flexDirection: "row", 
        justifyContent: "space-between",
         alignItems: "center", 
         marginTop: 12
    },
    boxInfoItem:{
        width: 20, 
        height: 20,
         backgroundColor: "#c4c4c4",
          alignItems: "center", 
          alignSelf:"center" ,
          justifyContent: "center"
    },
    boxInfoItem2: {
        width: 20, 
        height: 20, 
        backgroundColor: "#c4c4c4", 
        alignItems: "center",
         alignSelf:"center" ,
         justifyContent: "center"
    },
    btnmua: {
        fontSize: 12,
        color: "#134FEC",
        fontWeight: "bold"
    },
    btnVoucher : {
        fontSize: 12, 
        fontWeight :"bold", 
        marginRight: 20
    },
    btnVoucher2:{
        fontSize: 12, 
        fontWeight: "bold",
         color: "#134FEC"
    },
    btnVoucher3 : {
        fontSize: 18, 
        marginLeft: 10,
        fontWeight: "bold", 
        width: "100%"
    },
    head:{
        marginTop: 15, 
        padding: 15, 
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    txtAp:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%"
    },
    txtQua:{
        fontSize: 12, 
        fontWeight: "bold"
    },
    txtNhap:{
        fontSize: 12, 
        color: "#134FEC", 
        fontWeight: "bold", 
        marginLeft: 8
    },
    txttamtinh:{
        fontSize: 18, 
        fontWeight: "bold"
    },
    txtM1:{
        color: "#ee0d0d",
         fontSize: 18, 
         fontWeight: "700"
    },
    txtThanhtien: {
        fontSize :20, 
        color: "#999",
         fontWeight :"500"
    },
    txtM2:{
        color: "#ee0d0d", 
        fontSize: 18, 
        fontWeight: "700"
    },
    txtdathang:{
        textAlign: "center",
        color: "#fff", 
        fontSize: 20, 
        fontWeight: "500", 
        paddingVertical: 7,
        borderRadius: 4
    },
})