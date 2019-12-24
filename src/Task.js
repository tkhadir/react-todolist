import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Task extends Component {
    state={
        element:"",
        items:[]
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element:"",
            items:[...this.state.items, {element:this.state.element}]
        })
    }

    deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
        
    }

    renderTask = () =>{
        return this.state.items.map((item,index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4 className="itemm">{item.element} {/* = c'est ce qui s'affiche quand on ajoute une chose à faire*/}
                        <i className="fas fa-times"
                        style={{cursor:'pointer', float:'right', color:'white'}}
                        onClick={() => this.deleteItem(index)}>
                        </i>
                        </h4>
                    </div>
                </div>
            )

        })
    }

    render() {
        return (
            <React.Fragment>
            <div>
                 
                <Row>
                    <Col lg={1}>
                        <div>
                           
                            <p style={{textAlign:'center', fontWeight: 'bold', paddingTop: '10px'}}>{this.props.time}
                            <br/>
                            <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <h4>{this.props.activity_title}</h4>
                        <p >{this.props.activity_description}</p>
                    </Col>
                    
                </Row>

                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="element">Things to do</label>
                            <input type="text" className="form-control form-control-lg" name="element"
                            onChange={this.onChange} value={this.state.element} />
                        </div>
                        <button className="btn btn-info btn-block">Add things to do</button>
                    </form>
                </div>
            </div>
            {this.renderTask()}
            </React.Fragment>
        )
    }
}

export default Task

