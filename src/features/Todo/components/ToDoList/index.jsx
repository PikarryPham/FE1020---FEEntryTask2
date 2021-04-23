import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';

//checking prop types
ToDoList.propTypes = {
    todoList: PropTypes.array,
    onClickToDo: PropTypes.func,
};

ToDoList.defaultProps = {
    todoList: [],
    onClickToDo: null,
};

/**
 * Import thêm package classnames để autobuild classname string cho item bằng command: npm install --save classnames
 * VD: muốn thẻ <li></li> luôn có className = 'todo-item' thì ghi như sau: <li className={classnames({'todo-item': true})}
 * Lưu ý: các key trong classnames ({}) là các tên class mà mình muốn đặt
 */

function ToDoList(props) {
    const {todoList, onClickToDo} = props
    const handleClickTask = (ele, index) => {
        if(!onClickToDo) return;
        onClickToDo(ele, index);
    }
    return (
        <ul className="todo-list"
        style={{color: "black"}}>
            {todoList.map((ele, index) => (
                <li key={ele.id} className= {
                    classnames({
                        'todo-item': true,
                        completed: ele.status === 'completed'
                    })
                }
                onClick = {
                    () => {
                        handleClickTask(ele, index);
                        /**
                         * Mỗi khi click vào item bất kỳ thì sẽ gọi hàm handleClickTask và truyền vào cái item cũng như index của item đó
                         * 
                         */
                    }
                }
                >{ele.title}</li>
            ))}
        </ul>
    );
}

export default ToDoList;