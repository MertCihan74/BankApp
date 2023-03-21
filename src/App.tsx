import React, {useState} from 'react';
import {Button, TextInput, Stack, Switch} from '@react-native-material/core';
import {Alert, SafeAreaView, StyleSheet, View, Text} from 'react-native';

function App(): any {
  const [checked, setChecked] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.card_container}>
          <Text style={{alignSelf: 'center', fontSize: 28}}>Login</Text>
          <TextInput
            //label="A"
            helperText="Please enter your name"
            style={{width: 215, alignSelf: 'center'}}
            variant="standard"
          />
          <TextInput
            helperText="Please enter your password"
            style={{width: 215, alignSelf: 'center'}}
            variant="standard"
          />
          <Button
            title="Enter"
            style={{
              alignSelf: 'center',
              marginTop: 20,
              backgroundColor: '#00bfff',
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onPress={() => Alert.alert('Selam')}
          />
          <Text style={{marginTop: 10, alignSelf: 'center'}}>
            Don't you have an account?
          </Text>
          <Button
            title="Sign Up"
            style={{
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#00bfff',
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onPress={() => Alert.alert('Selam')}
          />
        </View>
      </View>
      <Stack
        fill
        center
        spacing={4}
        style={{alignSelf: 'flex-end', justifyContent: 'flex-end'}}>
        <Switch value={checked} onValueChange={() => setChecked(!checked)} />
      </Stack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 55,
  },
  card_container: {
    alignContent: 'center',
    backgroundColor: 'white',
    // margin: 180,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  card_body: {
    padding: 16,
  },
});

export default App;
