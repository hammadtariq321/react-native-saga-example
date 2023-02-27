import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import { fetchUserData } from "../redux/slices/usersSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  const userData = useSelector((state) => state.users.users);
  console.log("counterValue", counterValue);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="Increment" onPress={() => dispatch(increment(2))} />
      <Text>Counter: {counterValue.data}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement(2))} />

      <View>
        {userData.map((user, index) => {
          return <Text key={index}>{user.name}</Text>;
        })}
      </View>
    </View>
  );
}
