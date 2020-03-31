import React from 'react';
import styles from './filterMobail.module.scss';
import imgClose from '../../../../assets/img/UI/close.svg';
import filter from '../../../../assets/img/UI/filterGrey.svg';
import check from '../../../../assets/img/UI/check.svg';
import ChekBoxs from '../../../../components/UI/ChekBoxs/ChekBoxs';
import TagSelect from '../../../../components/UI/TagSelect/TagSelect';

const FilterMobil = (props) => {
    let content = null;
    if (props.isOpen) content = (
        <div className={styles.filterMobil}>
            <div className={styles.filterMobil__filter}>
                <div className={styles.filterMobil__control}>
                    <img onClick={() => props.onClose()} src={imgClose} alt="imgClose" />
                    <span>
                        <img src={filter} alt="filter" />
                    Фильтр
                </span>
                    <img onClick={() => props.onClose()} src={check} alt="check" />
                </div>


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

                <TagSelect
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

            </div>
        </div>
    );
    
    return (
        content
    );
};

export default FilterMobil;