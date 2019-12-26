import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

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

class Task extends Component {
    state={
        element:"",
        items:[],
        date: new Date()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
            this.setState({
                element:"",
                items:[...this.state.items, {element:this.state.element, date:this.state.date}]
            })
        }
    }

    deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
        
    }

    renderTask = () =>{
        return (<ul>{
            this.state.items.map((item,index) => (
                    <li key={index} className="taskItem">
                            <button className="deleteButton"
                            onClick={() => this.deleteItem(index)}>
                                X
                            </button>
                            <span>{item.element + ' task '}</span>
                            <span>{' scheduled at : ' + item.date}</span>
                    </li>
            ))}
        </ul>)
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                            <input type="text" name="element"
                            onChange={this.onChange} value={this.state.element} />
                            <DateTimePicker
                                onChange={this.onDateChange}
                                value={this.state.date}
                                />
                        <button>Add</button>
                    </form>
                </div>
            </div>
            {this.renderTask()}
            </React.Fragment>
        )
    }
}

export default Task

