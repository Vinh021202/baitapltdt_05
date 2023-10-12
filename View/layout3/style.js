import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      containerFull: {
        flex: 0.95,
        // height:"95%",
        width: "90%",
        backgroundColor: "#23235B",
        borderRadius: 15,
      },
    
      //title
      containerTitle: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
      },
      txtTitle: {
        width: "70%",
        fontSize: 25,
        fontWeight: 700,
        color: "white",
        textAlign: "center"
      },
    
    
      //input
      containerInput: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      inputPassWord: {
        width: "90%",
        height: "60%",
        backgroundColor: "#151537",
      },
    
      //content
      containerContent: {
        flex: 8,
        justifyContent: "space-between",
        alignItems: "center"
      },
    
      contentRow: {
        flex: 1,
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      txtRow: {
        flex: 9,
        fontSize: 20,
        fontWeight: 700,
        color: "white"
      },
      inputRowPw: {
        // flex:2,
        width: "40%",
        height: 35,
        backgroundColor: "white",
        fontSize: 20,
        fontWeight: 600,
        // textAlign:"center"
      },
      checkbox: {
        width: 30,
        height: 30,
      },
      //btn
      containerBtn: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
      },
      btnGenerate:{
        width:"90%",
        height:50,
        backgroundColor:"#3B3B98",
        justifyContent:"center",
        alignItems:"center"
      },
      txtBtnGenerate:{
        fontSize:18,
        fontWeight:700,
        color:"white"
      }
})