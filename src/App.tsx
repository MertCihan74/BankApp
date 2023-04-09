import React, {useState} from 'react';
import {Button, TextInput, Stack, Switch} from '@react-native-material/core';
import {Alert, SafeAreaView, StyleSheet, View, Text} from 'react-native';

function App(): any {
  const [checked, setChecked] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.card_container}>
          <Text style={styles.header}>Login</Text>
          <TextInput
            //label="A"
            placeholder="TCKN"
            helperText="Please enter your TCKN"
            style={styles.textstyle}
            variant="standard"
          />
          <TextInput
            placeholder="Password"
            helperText="Please enter your password"
            style={styles.textstyle}
            inputMode="numeric"
            secureTextEntry={true}
            variant="standard"
          />
          <Button
            title="Enter"
            style={styles.button}
            onPress={() => Alert.alert('Selam')}
          />
          <Text style={styles.text}>Don't you have an account?</Text>
          <Button
            title="Sign Up"
            style={styles.button}
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
    backgroundColor: '#43C7D8',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 55,
  },
  card_container: {
    alignContent: 'center',
    backgroundColor: '#F3EBCD',
    // margin: 180,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  card_body: {
    padding: 16,
  },
  textstyle: {
    marginTop: 10,
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#00bfff',
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    marginTop: 10,
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 28,
  },
});

export default App;
