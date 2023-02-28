import React from 'react';
import {useParams} from "react-router-dom";
import Header from './Header';
import './Project.css';
import { ProjectDetails } from '../data';

function Project() {
    let { link } = useParams();
    return <div>
        <Header></Header>
        <div className="project-page">
            <img className="project-image" src={ProjectDetails[link]['cover']} alt="Project Cover" />
        </div>
        <div className="project-text">
            <p className="title section">INTRODUCTION</p>
            <div className="description">
                <p className='title'>{ProjectDetails[link]['intro']}</p>
                <div className="for-timeline-tools">
                    <div className="thirds">
                        <p className="title">FOR</p>
                        <p className="subtitle">{ProjectDetails[link]['for']}</p>
                    </div>
                    <div className="thirds">
                        <p className="title">TIMELINE</p>
                        <p className="subtitle">{ProjectDetails[link]['timeline']}</p>
                    </div>  
                    <div className="thirds">
                        <p className="title">TOOLS</p>
                        <p className="subtitle">{ProjectDetails[link]['tools']}</p>
                    </div>
                </div>
                <div className="instructors-disciplines">
                    <div className="halves">
                        <p className="title">INSTRUCTOR</p>
                        <p className="subtitle">{ProjectDetails[link]['instructor']}</p>
                    </div>
                    <div className="halves">
                        <p className="title">DISCIPLINE(S)</p>
                        <p className="subtitle">{ProjectDetails[link]['discipline']}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-text">
            <p className="title section">PIECES</p>
            <div className="description">
                <a className="external" href={ProjectDetails[link]['link']}>Link to Project</a>
                <p className="title">{ProjectDetails[link]['description']}</p>
                <img className="embedded-image" src={ProjectDetails[link]['img1']} alt="Project Image 1" />
                <img className="embedded-image" src={ProjectDetails[link]['img2']} alt="Project Image 2" />
            </div>
        </div>
    </div>
}

export default Project;