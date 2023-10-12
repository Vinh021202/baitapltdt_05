
import {styles} from "./style"
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, CheckBox } from 'react-native';
import { TextInput } from "react-native-web";

export default function Layout3() {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
  

  return (
    <LinearGradient
      style={styles.container}
      colors={['#3B3B98', '#C4C4C4']}>
      <View style={styles.containerFull}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtTitle}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.inputPassWord}></Text>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Password length</Text>
            <TextInput style={styles.inputRowPw} />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include lower case letters</Text>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include upcase letters</Text>
            <CheckBox
              value={isSelected2}
              onValueChange={setSelection2}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include number</Text>
            <CheckBox
              value={isSelected3}
              onValueChange={setSelection3}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include special symbol</Text>
            <CheckBox
              value={isSelected4}
              onValueChange={setSelection4}
              style={styles.checkbox}
            />
          </View>

        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnGenerate}>
            <Text style={styles.txtBtnGenerate}>GENERATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  );
}