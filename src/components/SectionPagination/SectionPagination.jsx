import React from 'react';
import styles from './SectionPagination.module.scss';

import { Container, Row, Col } from 'reactstrap';
import Card from '../Card/Card';
import Pagination from '../UI/Pagination/Pagination';

const SectionPagination = (props) => {
    const card = props.items.map((data, i) => {
        return (
            <Col key={i} xl="3" lg="3" md='4' sm='6'>
                <Card data={data} />
            </Col>
        )
    });

    return (
        <>
            <section className={styles.SectionPagination}>
                <Container>
                    <p className={styles.title}>{props.title}</p>
                    <Row>
                        {card}
                    </Row>
                </Container>
            </section>
            <Pagination active='1' buttons='5' />
        </>
    );
};

export default SectionPagination;