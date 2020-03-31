import React from 'react';
import styles from './FilterBody.module.scss';

import TagSelect from '../../../../components/UI/TagSelect/TagSelect';
import { Row, Col } from 'reactstrap';
import ChekBoxs from '../../../../components/UI/ChekBoxs/ChekBoxs';
import Button from '../../../../components/UI/Button/Button';

const FilterBody = (props) => {
    let content = null;
    if (props.isOpen) content = (

        <Row className={styles.FilterBody}>

            <Col xl='8' lg='8'>
                <Row>
                    <Col xl='6' lg='6' md='6' sm='6'>
                        <ChekBoxs
                            title='Укажите уровень мастера'
                            labels={[
                                'Любой уровень',
                                'Начинающий (до 1 года)',
                                'Мастер (1 - 3 года)',
                                'Профессионал (более 3 лет)'
                            ]}
                            name='label1'
                            underline
                        />
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6'>
                        <ChekBoxs
                            title='Где работает мастер'
                            labels={[
                                'Не важно',
                                'На дому',
                                'Домашняя студия',
                                'Студия'
                            ]}
                            name='label1'
                            underline
                        />
                    </Col>
                    <Col xl='12'>
                        <TagSelect
                            onclick={props.checked}
                            nameBlok='Стили татуировки'
                            tags={[
                                { label: 'акварель', value: '1asd' },
                                { label: 'геометрия', value: 'asd' },
                                { label: 'графика', value: '3asd' },
                                { label: 'dotwork', value: '43324' },
                                { label: 'dotwork', value: '5werwer' },
                                { label: 'blackwork', value: '6wer' },
                                { label: 'биомеханика', value: '7wer' },
                                { label: 'биомеханика', value: '8wer' },
                                { label: 'blackwork', value: '9rwer' },
                                { label: 'blackwork', value: '10wer' },
                                { label: 'blackwork', value: '1wer1' },
                                { label: 'black&gray', value: '1wer2' },
                                { label: 'ботаника', value: '13' },
                                { label: 'биомеханика', value: '14' },
                                { label: 'blackwork', value: '15' },
                                { label: 'биомеханика', value: '16' },
                                { label: 'blackwork', value: '17' },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
            <Col xl='4' lg='4'>
                <div className={styles.wrapbutton}>
                    <ChekBoxs
                        title='Стоимость'
                        labels={[
                            'до 500 ք',
                            ' 500 - 1000 ք',
                            '1000 - 3000 ք ',
                            '3000 - 5000 ք ',
                            '5000 - 10000 ք ',
                            'более 10000 ք'
                        ]}
                        name='label1'
                    />
                    <Button text='Применить фильтр' classes='greenButton' />
                </div>
            </Col>

        </Row>
    );
    return (
        content
    );
};

export default FilterBody;
