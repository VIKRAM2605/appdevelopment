import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Switch,
  Modal,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const image = {
  uri: 'https://static.vecteezy.com/system/resources/previews/030/678/881/large_2x/red-background-high-quality-free-photo.jpg',
};

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false); // Dark mode is enabled by default
  const [modalVisible, setModalVisible] = useState(false);
  const [load, isload] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const isloading = () => {
    isload(true);
    setTimeout(() => {
      isload(false);
      setModalVisible(true); // Open the modal after loading
    }, 1000);
  };

  const handleLogout = () => {
    Alert.alert("Alert","Logged Out")
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isEnabled ? '#121212' : '#fff' }]}>
      <View style={styles.imagecontainer}>
        <ImageBackground style={styles.image} source={image} resizeMode="cover">
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            }}
          />
          <Text style={[styles.text, { color: isEnabled ? 'white' : 'white' }]}>{name}</Text>
        </ImageBackground>
      </View>
      <View style={[styles.Box, { backgroundColor: isEnabled ? '#2c2c2c' : '#f4f4f4' }]}>
        <View style={styles.Innerbox}>
          <Text style={[styles.titleText, { color: isEnabled ? 'white' : 'black' }]}>Profile Information</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black' }]}>Name:</Text>
          <TextInput style={[styles.input, { backgroundColor: isEnabled ? '#555' : '#fff',color: isEnabled ? 'white' : 'black' }]} onChangeText={setName} value={name} />
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Email:</Text>
          <TextInput style={[styles.input, { backgroundColor: isEnabled ? '#555' : '#fff',color: isEnabled ? 'white' : 'black' }]} onChangeText={setEmail} value={email} />
          <View style={styles.Dark}>
            <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Dark Mode</Text>
            <Switch
              style={{ top: 7, position: 'relative' }}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Modal
              style={{ flex: 1 }}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalView}>
                <View style={styles.modalBox}>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/007/749/074/non_2x/bright-green-tick-checkmark-icon-free-vector.jpg',
                      }}
                    />
                  </View>
                  <Text style={[styles.modalText,{ color: isEnabled ? 'white' : 'black',padding:10,paddingBottom:0,fontSize:20,fontWeight:'bold' }]}>Success!</Text>
                  <Text style={[styles.modalText, { color: isEnabled ? 'grey' : 'grey',paddingBottom:15,paddingTop:15 }]}>Changes Saved successfully!</Text>
                  <View style={{width:200}}>
                  <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
                  </View>
                </View>
              </View>
            </Modal>
            {load ? (
              <ActivityIndicator size="large" />
            ) : (
              <Button onPress={isloading} title="SAVE CHANGES" />
            )}
          </View>
        </View>
      </View>
      <View style={[styles.Box, { backgroundColor: isEnabled ? '#2c2c2c' : '#f4f4f4' }]}>
        <View style={styles.Innerbox}>
          <Text style={[styles.titleText, { color: isEnabled ? 'white' : 'black' }]}>Preferences</Text>
          <View style={styles.Dark}>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black' }]}>Notifications</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
          <View style={styles.Dark}>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Language</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
          <View style={styles.Dark}>
            <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Privacy</Text>
            <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
        </View>
      </View>
      <View style={[styles.Box, { backgroundColor: isEnabled ? '#2c2c2c' : '#f4f4f4' }]}>
        <View style={styles.Innerbox}>
          <Text style={[styles.titleText, { color: isEnabled ? 'white' : 'black' }]}>General</Text>
          <View style={[styles.Dark,{marginBottom:0}]}>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black' }]}>Account Info</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
          <View style={[styles.Dark,{borderBottomWidth:0,paddingBottom:0,}]}>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Security</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
          <Text style={[styles.titleText, { color: isEnabled ? 'white' : 'black' }]}>Preferences</Text>
          <View style={[styles.Dark,{borderBottomWidth:0,paddingBottom:0}]}>
            <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Dark Mode</Text>
            <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
          <View style={[styles.Dark,{borderBottomWidth:0,paddingBottom:0}]}>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>Notifications</Text>
          <Text style={[styles.paraText, { color: isEnabled ? 'white' : 'black'}]}>›</Text>
          </View>
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.buttonbox}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={[styles.logoutText, { color: isEnabled ? 'white' : 'white' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 15,
    marginLeft: 0,
  },
  buttonbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
    height: 50,
    backgroundColor: '#b83228',
  },
  logoutText: {
    fontSize: 16,
    padding:0,
    fontWeight: 'bold',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    
  },
  modalText: {
    color: '#a6a6a9',
    paddingBottom:20,
  },
  Dark: {
    borderStyle: 'solid',
    borderColor:'grey',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Box: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
  },
  Innerbox: {
    margin: 18,
    marginTop: 15,
  },
  imagecontainer: {
    height: 200,
    width: 400,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 0,
  },
  paraText: {
    fontWeight: '400',
    marginTop: 13,
    marginBottom: 0,
    fontSize: 17,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    height: 45,
    margin: 12,
    marginLeft: 0,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
});
