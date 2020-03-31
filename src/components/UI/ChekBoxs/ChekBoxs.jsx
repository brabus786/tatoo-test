import React from 'react';
import style from './chekBoxs.module.scss';

const ChekBoxs = (props) => {


    const labels = props.labels.map((data, i) => {
        return (<div key={i} className={style.wrap}>
            <input id={data}  type="checkbox" />
            <label htmlFor={data}>{data}</label>
        </div>
        )
    })

    let underline = null;
    if(props.underline) underline = (<div className={style.underline}></div>)

    return (
        <div className={style.ChekBox}>
            <p className={style.ChekBox__title}>{props.title}</p>
            <div className={style.ChekBox__input}> {labels} </div>
            {underline}
        </div>
    );
};

export default ChekBoxs;