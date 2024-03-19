import style from './Statistics.module.css';
import propTypes from 'prop-types';
import React from "react";

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={style.stats}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};