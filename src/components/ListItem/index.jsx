export const ListItem = ({ item, selected, onSelect }) => {
  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={() => onSelect(item.short)}
    >
      {item.name}
    </div>
  );
};
