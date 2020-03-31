import React, { useState, useEffect } from 'react';
import styles from './Filter.module.scss';

import { Container, Row, Col } from 'reactstrap';
import FilterBody from './FilterBody/FilterBody';
import FilterMobil from './FilterMobail/FilterMobail';

import MapImg from '../../../assets/img/UI/dotMap.svg';
import SearchImg from '../../../assets/img/UI/glass.svg';
import FilterDefaultImg from '../../../assets/img/UI/Vector.svg';
import FilterActiveImg from '../../../assets/img/UI/filter.svg';


const Filter = (props) => {
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const checkScreenSize = () => {
        if (window.innerWidth < 575.98) {
            setMobile(true);
        }

        if (window.innerWidth >= 575.98){
            setMobile(false);
        }
    }

    let FilterIcon = FilterDefaultImg;
    let FilterControls = null;
    let active = null;
    let filterRow = styles.filter__row;

    
    if (isMobile)
        FilterControls = FilterMobil;
    else
        FilterControls = FilterBody;

    if (props.isFilterOpen) {
        active = styles.active;
        FilterIcon = FilterActiveImg;
        filterRow = [styles.filter__row, styles.filter__rowActive].join(' ');
    }

    return (
        <div className={styles.filter}>
            <Container>

                <Row className={filterRow}>
                    <Col xl='6' lg='5' md='5' sm='7'>
                        <div className={styles.filter__tabs}>
                            <input defaultChecked="checked" type="radio" id="i1" name="tab" />
                            <label htmlFor="i1">Тату-мастера</label>

                            <input type="radio" id="i2" name="tab" />
                            <label htmlFor="i2">Тату-студии</label>

                        </div>
                    </Col>
                    <Col xl='6' lg='7' md='7' sm='5' className={styles.filter__wrapControl}>
                        <ul className={styles.filter__control}>
                            <li><img src={SearchImg} alt="" /><input className={styles.filter__control_active} placeholder='Найти мастера' /></li>
                            <li className={active} onClick={props.switchFilterState}><img src={FilterIcon} alt="filt" /><span>Фильтр</span></li>
                            <li><img src={MapImg} alt="" /><span>Показать на карте</span></li>
                        </ul>
                    </Col>
                </Row>

                <FilterControls isOpen={props.isFilterOpen} onClose={props.switchFilterState} />



            </Container>
        </div>
    );
};

export default Filter;