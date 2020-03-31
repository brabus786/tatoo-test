import React from 'react';
import style from './Section.module.scss';

import Card from '../Card/Card';
import { Container, Row, Col } from 'reactstrap';

const Section = (props) => {
    const card = props.items.map((data, i) => {
        return (
            <Col key={i} xl="4" lg="4" md='4'>
                <Card data={data} />
            </Col>
        )
    });

    return (
        <div className={style.section} style={{background:props.background}}>
            <Container>
                <p className={style.title}>{props.title}</p>
                <Row>
                    <Col xl="9" lg='9' md='12'>
                        <Row>
                            {card}
                        </Row>
                    </Col>
                    <Col xl="3" lg='3' md='3' className={style.colBanner}>
                        <div className={style.banner}>
                            <img src={props.banner} alt="" />
                            <p className={style.banner__text}>рекламный баннер</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section;