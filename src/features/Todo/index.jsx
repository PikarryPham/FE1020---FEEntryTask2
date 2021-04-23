import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDoList from './components/ToDoList';
import { render } from '@testing-library/react';
import ToDoForm from './components/TodoForm';
import { nanoid } from 'nanoid';
//này là container (thùng chứa) component nên k cần import thêm file css


function TodoFeature(props) {
    /**
     * Để thay đổi state cho từng item ==> dùng useState do props không thay đổi được
     */
    let initourToDoList = [];
    //const [taskList, setTaskList] = useState(initourToDoList);
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('Detail') || initourToDoList));
    const addNewTask = (name) => {
        const newTask = { id: Date.now() + nanoid(), title: name, status: 'new' };
        const newTaskList = [...taskList]
        newTaskList.push(newTask)
        setTaskList(newTaskList);
    }
    localStorage.setItem('Detail',JSON.stringify(taskList));
    //const [ourToDoList, setToDo] = useState(taskList); //khởi tạo giá trị cho ourToDoList = todolist nhận được ban đầu
    const handleClick = (ele, index) =>{
        /**
         * handleClick nhận được 2 tham số 'ele' và 'index' do ta có onClickToDo = {handleClick}
         */
        //console.log(ele, index);
        //clone current array to new one: clone ourToDoList --> newToDoList
        const newToDoList = [...taskList];
        //toggle state for an item
        newToDoList[index] = {
            ...taskList[index],//old values of an item like item's id and item's title
            status: taskList[index].status === 'new' ? 'completed' : 'new'
        }
        //update state
        //setToDo(newToDoList);
        setTaskList(newToDoList);
    }
    /**
     * ToDoList component giờ sẽ nhận 2 props từ cha (bản thân nó không thay đổi được props này) là "onClickToDo" và "toDoList"
     * Việc xử lý update logic (thay đổi state của một item và tạo ra 1 todolist mới về mặt dữ liệu) là của container "TodoFeature"
     * ToDoList component sẽ truyền ngược lại hai giá trị: todoItem và index của todoItem đó lên trên để cha nhận được và xử lý, chứ bản thân nó k xử lý
     * các item của TodoList chỉ có thể check xem status hiện tại của nó đang là gì khi được nhận từ thằng cha để render UI (nói chung status nhận được từ cha là gì thì render y chang vậy)
     */
    /**
     * Filter todoList tùy theo button
     */
    const [filterStatus, setFilteredStatus] = useState('all'); //khoi tao gia tri mac dinh ban dau cho filterStatus = 'all'
    const handleAllClick = () => {
        setFilteredStatus('all');
    }
    const handleCompletedClick = () => {
        setFilteredStatus('completed');
    }
    const handleNewClick = () => {
        setFilteredStatus('new'); //set gia tri 'new' cho 'filterStatus'
    }
    //console.log(filterStatus);
    const renderedList = taskList.filter(ele => 
        filterStatus === 'all' || filterStatus === ele.status
    )
    //console.log(renderedList);
    return (
        <div>
            <h3>Welcome to our TodoList</h3>
            <ToDoForm addNewTask={addNewTask} ></ToDoForm>
            <ToDoList todoList = {renderedList} onClickToDo = {handleClick}></ToDoList>
            <div>
                <button style={{margin:'0 2rem', cursor: 'pointer', width:'100px'}}
                onClick = {handleAllClick}>Show All</button>
                <button style={{margin:'0 2rem', cursor: 'pointer', width:'250px'}}
                onClick = {handleCompletedClick}>Show Completed</button>
                <button style={{margin:'0 2rem', cursor: 'pointer', width:'100px'}}
                onClick = {handleNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;
/**
 * todoList = {ourToDoList} meaning that the props named "todoList" that we named for ToDoFeature's props (at ToDoFeature file) will have
 * the value = value of array above "ourToDoList"
 */