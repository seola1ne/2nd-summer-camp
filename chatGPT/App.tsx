import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Bubble from "./components/Bubble";
import { stringify } from 'querystring';

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{user: string; text: string}[]>([
    {user: 'me', text: '안녕하세요'},
    {user: 'chat', text: '반갑습니다'},
  ]);

  const onSend = () => {};


  return (
    <SafeAreaView>
      <ScrollView>
        {messages.map(({user, text}, index) => {
          return <Bubble key={index} text={text} isMine={user === 'me'} />;
        })}
      </ScrollView>
      <View style={styles.rowbox}>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={text => setInput(text)}
          placeholder="메시지 입력..."
        />
        <Button title="전송" onPress={onSend} />
      </View>
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default App;
