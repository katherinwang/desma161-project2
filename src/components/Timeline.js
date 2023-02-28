import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineData from '../data';
import Header from './Header';
import './Timeline.css'

// const Timeline = () => 
//     TimelineData && (
//         <div>
//             <Header></Header>
//             <div className='grid'>
//                 <div className='timeline-container left'>
//                     {TimelineData.map((data,idx) => (
//                         idx % 2 === 0 ? <TimelineItem data={{side: 'left', ...data}} key={idx}/> : null
//                     ))}
//                 </div>

//                 <div className='timeline-container right'>
//                     {TimelineData.map((data,idx) => (
//                         idx % 2 === 1 ? <TimelineItem data={{side: 'right', ...data}} key={idx}/> : null
//                     ))}
//                 </div>
//             </div>
//         </div>
// );

const Timeline = () => TimelineData.length > 0 && (
    <div>
        <Header></Header>
        <div className="timeline-container">
            {TimelineData.map((data,idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
   

    </div>
)
export default Timeline;