import React from 'react';
import { Container, Row } from 'reactstrap';
import styles from './Pagination.module.scss';

const Pagination = (props) => {

    let li = [];
    for (let i = 0; i < parseInt(props.buttons); i++) {
        li.push(<li key={i} className={(props.active - 1) == i?styles.active:null}>{i + 1}</li>);
    }

    const ul = li.map((data,i) => {
        return data;
    })

    return (
        <section className={styles.Pagination}>
            <Container>
                <Row>             
                        <ul className={styles.Pagination__button}>
                            {ul}
                        </ul>            
                </Row>
            </Container>
        </section>
    );
};

export default Pagination;