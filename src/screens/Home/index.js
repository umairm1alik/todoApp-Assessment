import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import ListItem from '../../components/ListItem';
import useHome from './useHome';

const Home = () => {
  const {
    taskList,
    handleMarkComplete,
    handleTaskRemove,
    addTaskHandler,
    task,
    setTask,
  } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTaskHandler} />
      <FlatList
        data={taskList}
        renderItem={({item}) => (
          <ListItem
            item={item}
            handleMarkComplete={handleMarkComplete}
            handleTaskRemove={handleTaskRemove}
          />
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
});

export default Home;
