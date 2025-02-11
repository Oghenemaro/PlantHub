import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormComponent from '../../components/FormComponent'
import ButtonComponent from '../../components/ButtonComponent'


const AddPlant = ({ visible, handleRequestClose, onModalPress, onLongModalPress }) => {
  const [form, setForm] = useState({
    plantName: '',
    plantDescription: ''
  })


  return (
    <Modal animationType='slide' transparent={false} visible={visible} onRequestClose={handleRequestClose} style={style.modalStyle}>
      {/* <Pressable onPress={onModalPress} onLongPress={onLongModalPress}> */}
        <View style={style.modalComponentStyle}>
          <FormComponent
            title='Add Plant'
            placeholder='Add a plant name'
            value={form.plantName}
            handleChangeText={(e) => setForm({ ...form, plantName: e })}
          />
          <FormComponent
            title='Add Description'
            placeholder='Describe the plant'
            value={form.plantDescription}
            handleChangeText={(e) => setForm({ ...form, plantDescription: e })}
          />
        </View>
      {/* </Pressable> */}
      <ButtonComponent title={'back'} handlePress={handleRequestClose} />
    </Modal>
  )
}
const style = StyleSheet.create({
  modalStyle: {
    height: 100,
    width: 100
  },
  modalComponentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AddPlant

const styles = StyleSheet.create({
  modalStyle: {
    height: 100,
    width: 100
  }
})