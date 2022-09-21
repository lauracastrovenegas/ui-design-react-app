import './App.css';
import close from './close.png'

function List({list}) {
  return (
    <div className="List">
      {list.map((listItem, index) => (
        <ListItem index={index + 1} songTitle={listItem.songTitle} artistName={listItem.artistName}></ListItem>
      ))}
    </div>
  );
}

export default List;

function ListItem({index, songTitle, artistName}) {
  return (
    <div className="list-item">
      <div className='item-primary-text item-number'>{index}</div>
      <div>
        <div className='item-primary-text'>{songTitle}</div>
        <div className='item-secondary-text'>{artistName}</div>
      </div>
      <div className='item-delete item-secondary-text'><img src={close}/></div>
    </div>
  );
}