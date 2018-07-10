import React from 'react';
import {Row, Col} from 'reactstrap';


export default (props) => (
    <button className='btn-user'>
        <Row className='user-data align-items-center'>
            <Col md='3'>
                <img className='img-user' alt='img-user' src={props.user.imageURL} />
                <span className='test'></span>
            </Col>
            <Col md='6' className='pl-0'>
                <div>{props.user.name}</div>
                <div>Some text text text text...</div>
            </Col>
            <Col md='3' className='text-right'>
                <div><i className="fas fa-ellipsis-h"></i></div>
                <div>59 min</div>
            </Col>
        </Row>
    </button>
);

