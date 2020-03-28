import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import styles from './Filter.module.scss';
import dotMap from '../../../assets/img/UI/dotMap.svg';
import glass from '../../../assets/img/UI/glass.svg';
import Vector from '../../../assets/img/UI/Vector.svg';

const Filter = (props) => {


    return (
        <div className={styles.filter}>
            <Container>
                <Row className={styles.filter__row}>
                    <Col xl='6' >
                        <div className={styles.filter__tabs}>
                            <input defaultChecked="checked" type="radio" id="i1" name="tab" />
                            <label htmlFor="i1">Тату-мастера</label>

                            <input type="radio" id="i2" name="tab" />
                            <label htmlFor="i2">Тату-студии</label>

                        </div>
                    </Col>
                    <Col xl='6'>
                        <ul className={styles.filter__control}>
                            <li><img src={glass} alt="" /><span className={styles.filter__control_active}>Найти мастера</span></li>
                            <li><img src={Vector} alt="" /><span>Фильтр</span></li>
                            <li><img src={dotMap} alt="" /><span>Показать на карте</span></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Filter;