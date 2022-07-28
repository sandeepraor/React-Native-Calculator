import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CalButton from './components/CalButton';
function App() {
  const nums = ['+', '-', '*', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ['/', '.', '^'];
  const [num, changeNum] = useState('');
  const handleEqualClick = () => {
    if (num === '') return;
    if (
      num.endsWith('+') ||
      num.endsWith('-') ||
      num.endsWith('*') ||
      num.endsWith('/') ||
      num.endsWith('^') ||
      num.endsWith('.')
    )
      return;
    let arr = num.split('^');
    if (arr.length === 2) {
      changeNum(String(Math.pow(Number(arr[0]), Number(arr[1]))));
      return;
    }
    changeNum(String(eval(num)));
  };
  const getData = val => {
    if (val === 'C') {
      changeNum('');
      return;
    }
    if (
      (val === '+' ||
        val === '-' ||
        val === '/' ||
        val === '*' ||
        val === '.' ||
        val === '^') &&
      num === ''
    )
      return;

    if (
      (num.endsWith('+') ||
        num.endsWith('-') ||
        num.endsWith('*') ||
        num.endsWith('/') ||
        num.endsWith('^') ||
        num.endsWith('.')) &&
      (val === '+' ||
        val === '-' ||
        val === '/' ||
        val === '*' ||
        val === '^' ||
        val === '.')
    )
      return;

    changeNum(num + val);
  };
  const style = StyleSheet.create({
    main_container: {
      width: '100%',
      backgroundColor: '#12154a',
      height: '100%',
    },
    display: {
      width: '100%',
      height: '30%',
      textAlign: 'right',
      justifyContent: 'center',
      alignContent: 'center',
    },
    display_text: {
      fontSize: 30,
      color: '#f7ff0a',
      textAlign: 'right',
    },
    container: {
      width: '100%',
      height: '70%',
      flexDirection: 'row',
      margin: 17,
      marginTop: 40,
    },
    equ_btn: {
      borderRadius: 40,
      height: 80,
      width: 80,
      justifyContent: 'center',
      margin: 4,
      alignItems: 'center',
      backgroundColor: '#ccf20f',
      borderColor: 'blue',
    },
    number: {
      width: '70%',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    operators: {
      width: '30%',
    },
  });
  return (
    <>
      <View
        onPress={() => {
          console.log('click');
        }}
        style={style.main_container}
      >
        <View style={style.display}>
          <Text style={style.display_text}>{num}</Text>
        </View>
        <View style={style.container}>
          <View style={style.number}>
            {nums.map(n => {
              return <CalButton key={n} number={n} sendData={getData} />;
            })}
          </View>
          <View style={style.operators}>
            <CalButton key={'clear'} number={'C'} sendData={getData} />
            {operators.map(op => {
              return <CalButton key={op} number={op} sendData={getData} />;
            })}
            <TouchableOpacity style={style.equ_btn} onPress={handleEqualClick}>
              <Text style={{ fontSize: 30, color: 'black', fontWeight: '500' }}>
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default App;
