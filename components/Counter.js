import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/slices/counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  console.log("counterValue",counterValue)

  return (
    <View style={{marginTop: 200}}>
        <Text>Counter: {counterValue.value}</Text>
        <Button title='Increment' onPress={() => dispatch(increment())} />
    </View>
  );
}
