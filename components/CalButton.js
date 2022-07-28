import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CalButton = ({ number, sendData }) => {
  const style = StyleSheet.create({
    operator_btn: {
      borderRadius: 40,
      height: 80,
      width: 80,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
    btn_text: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
  });
  return (
    <TouchableOpacity
      style={style.operator_btn}
      onPress={() => {
        sendData(number);
      }}
    >
      <Text style={style.btn_text}>{number}</Text>
    </TouchableOpacity>
  );
};

export default CalButton;
