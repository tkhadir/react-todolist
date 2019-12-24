import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'

export default class Avatar extends Component {
    render() {
        return (
            <div>
                 
                <Row>
                
                    <Col lg={10}> <div className="titre" >Todo List</div></Col>
                    <Col lg={1}>
                        <img src="https://mir-s3-cdn-cf.behance.net/user/138/90025.53ab3ba209b69.jpg" 
                        class="rounded"alt="ma foto"  />
                    </Col>
                </Row>
            </div>
        )
    }
}
