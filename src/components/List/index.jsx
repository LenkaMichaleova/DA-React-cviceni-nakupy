import { useState } from 'react';
import { ListItem } from '../ListItem';
import { Detail } from '../Detail';

const days = [
    {name: "pondělí", short: "mon"}, 
    {name: "úterý", short: "tue"}, 
    {name: "středa", short: "wed"}, 
    {name: "čtvrtek", short: "thu"}, 
    {name: "pátek", short: "fri"}, 
    {name: "sobota", short: "sat"}, 
    {name: "neděle", short: "sun"}
] 

export const List = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="inline-list">
        {days.map((day) => (
          <ListItem 
            key={day.short} 
            item={day} 
            selected={selectedId === day.short} 
            onSelect={setSelectedId}/>
        ))}
      </div>
      <Detail key={selectedId} day={selectedId}/>
    </>
  );
};