import React from "react";
import { Alert, FlatList, Text, View } from 'react-native'
import { ListItem, Avatar, Button, Icon } from '@rneui/themed'
import users from "../data/users";


export default props => {

    function confimUserDelation(user) {
        Alert.alert("Excluir usuário", 'Deseja excluir o usuário?', [
            {
                text: "Sim",
                onPress() {
                    console.warn('Delete ' + user.id)
                }
            },
            {
                text: "Não"
            }
        ])
    }

    /* function GetActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    iconRight
                    type="clear"
                    icon={<Icon name="edit" size={25} color="blue" />}
                />
                <Button
                    onPress={() => confimUserDelation(user)}
                    iconRight
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    } */

    function getUserItem({ item: user }) {

        return (

            <ListItem bottomDivider key={user.id} onPress={() => props.navigation.navigate("UserForm", user)}  >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content >
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content >
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    iconRight
                    type="clear"
                    icon={<Icon name="edit" size={25} color="blue" />}
                />
                <Button
                    onPress={() => confimUserDelation(user)}
                    iconRight
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />

            </ListItem>
        )
    }

    return (
        <FlatList
            keyExtractor={user => user.id}
            data={users}
            renderItem={getUserItem}
        />
    )
}




/* import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar} from '@rneui/themed'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider key={user.id} onPress={() => props.navigation.navigate("UserForm")} >
            <Avatar source={{uri: user.avatarUrl}}  />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
       </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
} */