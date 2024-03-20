import React from "react";
import PropTypes from "prop-types";
import styles from './Friends.module.css';

export const Friends = ({ friends }) => {
    return (
        <ul className={styles.friendlist}>
          {friends.map(({ id, avatar, name, isOnline  }) => {
            return (
              <li
                className={styles.friend}
                key={id}
              >
                <span className={`${styles.status} ${styles[isOnline]}`}>{isOnline}</span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
              </li>
            );
          })}
        </ul>
      
    );
  };

  Friends.propTypes = {
    isONline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};