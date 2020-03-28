import React from 'react';
import Card from '../Card/Card';
import {Container,Row,Col} from 'reactstrap';
import style from './Section.module.scss';

const Section = (props) => {


    console.log(props.PayAttentionTo);

    const card = props.PayAttentionTo.map((data,i) => {
        //console.log(data);
           return(
           <Col key={i} xl="4">
               <Card data={data} />
           </Col>
           )
    });

    return(
        <div className={style.PayAttentionTo}>
            <Container>
                <Row>
                    <Col xl="9">
                        <Row>
                            {card}
                        </Row>
                    </Col>
                    <Col xl="3">g</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section;