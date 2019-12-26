import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


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
        element:"",
        items:[],
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
        console.log('click')
        this.setState({
            descriptionClassName: this.state.descriptionClassName === 'updateFormHidden' ? 'updateFormVisible' : 'updateFormHidden'
        })
    }

    handleUpdateSubmit = (e, index) => {
        e.preventDefault()
        if (e.target.value.length !== EMPTY_FIELD) {
            //this.setState(state => {
                /*const tasks = state.list.items((item, j) => {
                  if (j === index) {
                    item.element = e.target.value
                    return item;
                  } else {
                    return item;
                  }
                });
                return {
                  tasks,
                };*/
            //});
            console.log('update')
        }
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
                                Delete
                            </button>
                            <div>
                                <span onClick={this.handleDescriptionClick} className="taskDesciption">{item.element}</span>
                                <form className={this.state.descriptionClassName} onSubmit={() => this.handleUpdateSubmit(index)}>
                                    <input type="text" name="description"></input>
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

