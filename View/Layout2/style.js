import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "Roboto",
        backgroundColor: "#fff"
    },
    imageUsb: {
        width: 70,
        height: 70,
    },
    containerHeaderUsb: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: 10,
        marginBottom: 50
    },
    textImgae : {
        fontSize: 16, 
        fontWeight: "700", 
        flexShrink: 1
    },
    textStar: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 18, 
        marginBottom: "15"
    },
    star: {
        flexDirection: "row",
         justifyContent:"center",
        gap: 20,
        marginVertical: 25
    },
    ImgaeText:{
        borderWidth: 1, 
        borderRadius:8, 
        borderColor: "#1511eb", 
        paddingVertical: 18,
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row"
    },
    textCamera: {
        fontSize: 18, 
        fontWeight:"700"
    },
    conment:{
        osition: "relative",
        marginTop: 15, 
        padding: 15, 
        borderWidth: 1, 
        borderColor: "#999", 
        borderRadiups: 10
    },
    TextInput: {
        fontSize: 18, 
        fontWeight: "700",
        textAlignVertical: "top"
    },
    head :{
        fontWeight: "bold",
        width:"100%" ,
        textAlign: "right"
    },
    Pressable:{
        color: "#fff", 
        backgroundColor: "#0D5DB6", 
        fontSize: 20, 
        fontWeight: "700", 
        textAlign: "center", 
        borderRadius: 8, 
        paddingVertical: 12
    },



}) 