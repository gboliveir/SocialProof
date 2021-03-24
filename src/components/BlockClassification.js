import React from 'react'
import styles from '../styles/components/BlockClassification.module.css'
import icon from '../assets/icon.svg'

export default function BlockClassification({ txt }) {
    return(
        
        <div className={styles.container}>
            <div className={styles.groupStar}>
                <img src={icon} alt="icon-star" />
                <img src={icon} alt="icon-star" />
                <img src={icon} alt="icon-star" />
                <img src={icon} alt="icon-star" />
                <img src={icon} alt="icon-star" />
            </div>
            <div className="text">
                <span>{txt}</span>
            </div>
        </div>
                    
    );
}