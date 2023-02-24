import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/slices/usersSlice'

const UsersList = () => {
    const dispatch = useDispatch()
    const {data, isLoading} = useSelector((state) => state.users)
    console.log('userList', data)
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    
  return (
    <View>
      <Text>UsersList</Text>
    </View>
  )
}

export default UsersList

const styles = StyleSheet.create({})