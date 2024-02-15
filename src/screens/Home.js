import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import {makeid} from '../utils/utils';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, markTaskComplete} from '../store/slices/taskSlice';

const Home = () => {
  const {taskList} = useSelector(store => store.task);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const addTaskHandler = () => {
    const addedIndex = taskList.findIndex(
      data => data?.value.toLowerCase() == task?.toLowerCase(),
    );
    if (addedIndex != -1) {
      return Alert.alert(`${task} Task Already added`);
    }
    if (!task.trim()) {
      return Alert.alert('Please Enter Task First');
    }

    const taskData = {
      value: task,
      id: makeid(5),
    };
    dispatch(addTask(taskData));
    setTask('');
  };

  const handleMarkComplete = item => {
    dispatch(markTaskComplete(item.id));
    Alert.alert(`${item.value} task completed Successfully.`);
  };

  const handleTaskRemove = item => {
    dispatch(markTaskComplete(item.id));
    Alert.alert(`${item.value} task removed from list.`);
  };

  const renderItem = ({item}) => (
    <View style={styles.listItem} key={item?.id}>
      <Text style={{color: '#000000', fontWeight: 'bold'}}>{item.value}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleTaskRemove(item)}>
          <Image
            source={require('../assets/icons/remove.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10}}
          activeOpacity={0.5}
          onPress={() => handleMarkComplete(item)}>
          <Image
            source={require('../assets/icons/checkMark.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

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
        renderItem={renderItem}
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
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#eee',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
