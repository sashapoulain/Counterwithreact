import React, { useRef, useEffect, useState } from 'react'
import moment from 'moment';


const counterAltStyle = {
   border: '1px solid white',
   background: 'rgba(255,255,255,0.6)',
   padding: '10px'
}

const parStyle = {
   fontSize: '3rem', color: 'black'
}


const Counter = () => {
   const [date, setDate] = useState(() => {
      return moment().add(10, 'hours')
   });
   const [hours, setHours] = useState('00');
   const [minutes, setMin] = useState('00')
   const [seconds, setSec] = useState('00');

   let interval = useRef();
   useEffect(() => {
      counterStart();
      return () => clearInterval(interval.current);
   }, [date])


   const counterStart = () => {
      interval = setInterval(() => {
         
         const now = moment();
         const distance = date - now;
         const hours = moment.duration(distance).hours();
         const minutes = moment.duration(distance).minutes();
         const seconds = moment.duration(distance).seconds();

         if (distance < 0) {
            clearInterval(interval.current);
         } else {
            setHours(hours)
            setMin(minutes)
            setSec(seconds)
         }
      }, 1000)
   }
   return (
      <div className='counter'>
         <div style={counterAltStyle}>
            <p style={parStyle}>
               {`${hours} :  
               ${minutes} :
               ${seconds}`}
            </p>
         </div>
      </div>
   );
}

export default Counter;

