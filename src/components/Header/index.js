import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './headerStyle';
import {AuthContext} from '../../context';

export function Header({toggleDrawer}) {
  const [modalVisible, setModalVisible] = useState(false);
  const {state, dispatch} = useContext(AuthContext);

  const getUserInitials = () => {
    const username = state?.username;
    return username[0];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialIcons
          name="menu"
          size={27}
          color="gray"
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search in mail"
        placeholderTextColor="gray"
        style={styles.searchInput}
      />
      {/* 
      <Modal
        // animationType="slide"
        transparent={true}
        visible={true}
        style={{height: 80, width: 80}}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Text>Modal </Text>
      </Modal> */}
      <TouchableOpacity onPress={() => Alert.alert('Modal has been closed.')}>
        <View style={styles.profileInitialWrapper}>
          <Text style={styles.profileInitialText}>{getUserInitials()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
