import { useState } from 'react';
import {AddCards} from '../../components'
import styles from "./styles.module.css";

export const Profile = () => {
  

    return (
        <div className={styles.mainDiv}>
            <AddCards/>
        </div>
    )
}