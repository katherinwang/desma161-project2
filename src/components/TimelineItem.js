import React from 'react';
import './TimelineItem.css';
import {Link} from 'react-router-dom';

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className = "time">
            <p className="title">{data.year} {data.quarter}</p>
        </div>

        <Link className="link" to={data.title}>
            <div className="timeline-item-content">
                <img className="cover" src={data.image} alt={data.alttxt}></img>
                <div className="timeline-item-content-text">
                    <p className="title">{data.title}</p>
                    <p className="subtitle">{data.subtitle}</p>
                </div>
            </div>
        </Link>

        <span className="circle"></span>
        <span className="circle2"></span>
    </div>
);

export default TimelineItem;