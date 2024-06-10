import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom';

const ProjectItem = ({project}) => {
    const {name, lastEdited, _id} = project
    const logo = name.split(' ').map(word => word[0]).join('');

    const colors = ['#7E22CE', '#F8A01D', '#6366F1', '#7E22CE'];
    const getColor = (name) => {
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        return colors[sum % colors.length];
    };
   
    const date = parseISO(lastEdited)
    const timePeriod = formatDistanceToNow(date)
    const timeAgo = `Last Edited ${timePeriod} ago`;

    const backgroundColor = getColor(name);
  return (
   <Link to={`/project/upload/${_id}`}>
    <div className='border border-gray-400 rounded-xl px-3 py-2 flex items-center gap-x-4'>
         <div className='w-[80px] h-[80px] rounded-xl flex justify-center items-center' style={{backgroundColor}}>
            <p className='text-white font-bold text-5xl'>{logo}</p>
         </div>

         <div className='text-left'>
           <h1 className='text-primary text-2xl font-bold'>{name}</h1>
           <p className='text-[13px]'>4 Episodes</p>

           <p className='text-[10px] mt-4'>{timeAgo}</p>
         </div>
    </div>
  </Link> 
  )
}

export default ProjectItem
