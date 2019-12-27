import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import UserProfile from './utils/UserProfile'


const EMPTY_FIELD = 0;
var isAlreadyExist = function(items, field) {
    let exists = false;
    items.forEach(item => {
        if (item.element === field) {
            exists = true;
        }
    })
    return exists;
}

var formateDate = function (date) {
    return moment(date).format('DD/MM/YYYY HH:mm')
  }

class Task extends Component {
    state={
        element:'',
        items: UserProfile.getTasks() == null ? [] : JSON.parse(UserProfile.getTasks()).items,
        date: new Date(),
        description: '',
        descriptionClassName: 'updateFormHidden'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDescriptionClick = () => {
        this.setState({
            descriptionClassName: this.state.descriptionClassName === 'updateFormHidden' ? 'updateFormVisible' : 'updateFormHidden'
        })
    }

    handleUpdateSubmit = (e, index) => {
        e.preventDefault()
        if (this.state.description.length !== EMPTY_FIELD) {
            this.setState((state) => {
                const tasks = state.items.map((item, j) => {
                  if (j === index) {
                    item.element = state.description
                    return item;
                  } else {
                    return item;
                  }
                });
                UserProfile.save(JSON.stringify({items: tasks}))
                return {
                  tasks,
                };
            });
        }
        this.setState({
            descriptionClassName: 'updateFormHidden'
        })
        
    }

    onDateChange = (updatedDate) => {
        this.setState({
            date: updatedDate
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.element.length === EMPTY_FIELD) {
            alert('your text is empty');
        } else if (isAlreadyExist(this.state.items, this.state.element)) {
            alert('item already exist');
        } else {
            const arr = [...this.state.items, {element:this.state.element, date:this.state.date}]
            this.setState({
                element:"",
                items: arr
            })
            UserProfile.save(JSON.stringify({items: arr}))
        }
    }

    deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
        UserProfile.save(JSON.stringify({items: arr}))
    }

    renderTask = () =>{
        return (<ul>{
            this.state.items.map((item,index) => (
                    <li key={index} className="taskItem">
                            <button className="deleteButton"
                            onClick={() => this.deleteItem(index)}>
                                Delete
                            </button>
                            <div>
                                <span onClick={this.handleDescriptionClick} className="taskDesciption">{item.element}</span>
                                <form className={this.state.descriptionClassName} onSubmit={(e) => this.handleUpdateSubmit(e, index)}>
                                    <input type="text" name="description" onChange={this.onChange}></input>
                                    <button>update</button>
                                </form>
                                <p>{'scheduled for : ' + formateDate(item.date)}</p>
                            </div>
                    </li>
            ))}
        </ul>)
    }


    
    render() {
        return (
            <React.Fragment>
            <div>
                <div>
                    <form onSubmit={this.onSubmit} className="w3-container w3-card-4 w3-light-grey">
                            <label className="w3-text-teal"><b>Task Name</b></label>
                            <input type="text" name="element"
                            onChange={this.onChange} value={this.state.element} 
                            className="w3-input w3-border w3-round-large"/>
                            <DateTimePicker
                                onChange={this.onDateChange}
                                value={this.state.date}
                                className="w3-input w3-border w3-round-large"/>
                        <button className="w3-btn w3-blue">Add</button>
                    </form>
                </div>
            </div>
            {this.renderTask()}
            </React.Fragment>
        )
    }
}

export default Task

