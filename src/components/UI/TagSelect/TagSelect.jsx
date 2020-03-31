import React, { useState } from 'react';
import styles from './TagSelect.module.scss';

const TagSelect = (props) => {

    const [Active, setActive] = useState([]);
    const [more, setMore] = useState(true);

    let tagSelect = styles.tagSelect__styles;

    if (more) {
        tagSelect = styles.tagSelect__styles;
    } else {
        tagSelect = [styles.tagSelect__styles, styles.tagSelect__Smore].join(' ');
    }

    const checked = (value) => {
        if (Active.find((elem) => { return elem === value })) {
            const arr = Active.filter((item) => { return item !== value });
            setActive(arr);

        } else {
            const arr = [...Active];
            arr.push(value);
            setActive(arr);
        }

    }

    const active = (value) => {
        for (let y = 0; y < Active.length; y++) {
            if (Active[y] == value) {
                return styles.active;
            }
        }

    };


    const tagSelectStyles = props.tags.map((data, i) => {
        return <span onClick={() => { checked(data.value) }} key={i} className={active(data.value)}>{data.label}</span>
    });

    return (
        <div className={styles.tagSelect}>
            <p className={styles.tagSelect__nameBlok}>{props.nameBlok}</p>
            <div className={tagSelect}>{tagSelectStyles}</div>
            <p onClick={() => setMore(!more)} className={styles.tagSelect__more}>показать {more ? 'ещё' : 'меньше'}</p>
            <div className={styles.tagSelect__underline}></div>
        </div>
    );
};

export default TagSelect;