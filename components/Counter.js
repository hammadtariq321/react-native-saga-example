import React, { useEffect } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import { fetchUserData } from "../redux/slices/usersSlice";
import { fetchPostData } from "../redux/slices/postsSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.data);
  const userData = useSelector((state) => state.users.users);
  const postsData = useSelector((state) => state.posts.posts);
  console.log("🚀 ~ file: Counter.js:14 ~ Counter ~ postsData:", postsData);
  const loading = useSelector((state) => state.users.loading);
  const loadingPosts = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(
      fetchUserData({ type: fetchUserData.type, payload: { api: "/users" } })
    );
    fetchPosts();
  }, [dispatch]);

  const fetchPosts = () => {
    setTimeout(() => {
      dispatch(
        fetchPostData({ type: fetchPostData.type, payload: { api: "/posts" } })
      );
    }, 100);
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: increment.type, payload: 4 })}
      />
      <Text>Counter: {counterValue}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement(2))} />
      {loading && <ActivityIndicator size={"large"} color={"#000"} />}
      <View>
        {userData.map((user, index) => {
          return <Text key={index}>{user.name}</Text>;
        })}
      </View>
      {loadingPosts && <ActivityIndicator size={"large"} color={"#000"} />}
      <View>
        {postsData?.map((post, index) => {
          console.log(
            "🚀 ~ file: Counter.js:43 ~ {postsData.map ~ post:",
            post
          );
          return <Text key={index}>{post?.id}</Text>;
        })}
      </View>
    </View>
  );
}
