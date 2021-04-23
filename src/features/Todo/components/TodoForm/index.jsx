import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

ToDoForm.propTypes = {
  //todoList: PropTypes.array,
  addNewTask: PropTypes.func,
};

function ToDoForm(props) {
    const {addNewTask} = props;
    const [name, setName] = useState(localStorage.getItem('myValueInLocalStorage') || '');
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if(name !== '')
      {
        addNewTask(name);
        setName("");
      }
    }
    const handleChange = (e) => {
      //console.log(e.target.value);
      localStorage.setItem('myValueInLocalStorage', e.target.value);
      setName(e.target.value);
    }
    return(
        <form onSubmit={handleFormSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          value = {name}
          onChange = {handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg" style={{margin: '0 1.5rem', width: '150px'}}>
          Add
        </button>
      </form> 
    );
}

export default ToDoForm;
