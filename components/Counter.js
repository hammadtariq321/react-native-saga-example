import React, { useEffect } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import { fetchUserData } from "../redux/slices/usersSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.data);
  const userData = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  console.log("counterValue", counterValue);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="Increment" onPress={() => dispatch(increment(2))} />
      <Text>Counter: {counterValue}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement(2))} />
      {
        loading && <ActivityIndicator size={'large'} color={'#000'}/>
      }
      <View>
        {userData.map((user, index) => {
          return <Text key={index}>{user.name}</Text>;
        })}
      </View>
    </View>
  );
}
