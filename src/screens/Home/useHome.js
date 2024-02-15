import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {makeid} from '../../utils/utils';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, markTaskComplete} from '../../store/slices/taskSlice';

export default function useHome() {
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
  return {
    taskList,
    handleMarkComplete,
    handleTaskRemove,
    addTaskHandler,
    task,
    setTask,
  };
}
