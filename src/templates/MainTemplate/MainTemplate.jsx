import React from 'react';
import Filter from './Filter/Filter';
import Section from '../../components/Section/Section';

const MainTemplate = (props) => {
    return(
        <>
        <Filter />
            <Section PayAttentionTo={props.PayAttentionTo} />
        </>
    );
};

export default MainTemplate;