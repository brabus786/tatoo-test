import React from 'react';
import styles from './MainTemplate.module.scss';

import { Container } from 'reactstrap';
import Filter from './Filter/Filter';
import Section from '../../components/Section/Section';
import Banner1 from '../../assets/img/baner1.png';
import HorizontalBanner from '../../components/HorizontalBanner/HorizontalBanner';
import SectionPagination from '../../components/SectionPagination/SectionPagination';

const MainTemplate = (props) => {
    return (
        <>
            <Filter
                switchFilterState={props.switchFilterState}
                isFilterOpen={props.isFilterOpen}
            />

            <Container className={styles.mobailBaner}>
                <HorizontalBanner img={props.bannerFooter} />
            </Container>

            <Section 
                background="#FCFCFC"
                title='Обратите внимание'
                banner={Banner1}
                items={props.payAttentionTo}
            />
           
            <Section 
                background="#FFFFFF"
                title='Лучший рейтинг'
                banner={Banner1}
                items={props.topRating}
            />

            <SectionPagination
                items={props.allMasters}
                title='Мастера из Санкт-Петербурга'
            />
        </>
    );
};

export default MainTemplate;