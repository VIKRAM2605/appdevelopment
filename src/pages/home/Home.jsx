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
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
const image = {
  uri: 'https://static.vecteezy.com/system/resources/previews/030/678/881/large_2x/red-background-high-quality-free-photo.jpg',
};
const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [load, isload] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false); // Modal state for logout
  
  const isloading = () => {
    isload(!load);
    setTimeout(() => {
      isload(!load);
    }, 1000);
  };

  // Handle logout click
  const handleLogout = () => {
    setLogoutModalVisible(true);
    setTimeout(() => {
      // Close logout modal after showing the message
      setLogoutModalVisible(false);
    }, 2000); // Hide after 2 seconds
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageBackground style={styles.image} source={image} resizeMode="cover">
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            }}
          />
          <Text style={[styles.text, {color: isEnabled ? 'white' : 'black'}]}>{name}</Text>
        </ImageBackground>
      </View>
      <View style={styles.Box}>
        <View style={styles.Innerbox}>
          <Text style={styles.titleText}>Profile Information</Text>
          <Text style={styles.paraText}>Name:</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
          <Text style={styles.paraText}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <View style={styles.Dark}>
            <Text style={[styles.paraText, {color: isEnabled ? 'white' : 'black'}]}>Dark Mode</Text>
            <Switch
              style={{top: 7, position: 'relative'}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Modal
              style={{flex: 1}}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.modalView}>
                <View style={styles.modalBox}>
                  <View style={{alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: 'https://static.vecteezy.com/system/resources/previews/007/749/074/non_2x/bright-green-tick-checkmark-icon-free-vector.jpg'}} />
                  </View>
                  <Text style={styles.modalText}>Changes Saved successfully!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <View><Button title="Close" onPress={() => setModalVisible(!modalVisible)} /></View>
                  </Pressable>
                </View>
              </View>
            </Modal>
            {load ? (
              <ActivityIndicator size="large" />
            ) : (
              <Button onPress={() => {
                isloading();
              }} title="SAVE CHANGES" />
            )}
          </View>
        </View>
      </View>

      {/* Logout Modal */}
      <Modal
        style={{flex: 1}}
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}>
        <View style={styles.modalView}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Logout successfully!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setLogoutModalVisible(false)}>
              <View><Button title="Close" onPress={() => setLogoutModalVisible(false)} /></View>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Logout Button */}
      <View style={styles.buttonbox}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
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

  arrow: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 0,
  },
  buttonbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
    height: 60,
    backgroundColor: '#b83228',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  modalText: {
    color: '#a6a6a9',
  },
  arrowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    paddingBottom: 20,
    marginTop: 13,
    borderBottomWidth: 1,
  },
  arrowBoxTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#1e1e1e',
    padding: 8,
  },
  arrowBottombox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    paddingBottom: 13,
    marginTop: 13,
    position: 'relative',
    top: -7,
  },
  Dark: {
    borderStyle: 'solid',
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
    color: 'white',
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
    backgroundColor: '#343436',
  
},
})