import './App.css';
import close from './close.png'

function List() {
  return (
    <div className="List">
      <ListItem index={1} songTitle="Fireworks" artistName="Katy Perry"></ListItem>
      <ListItem index={2} songTitle="Party In The USA" artistName="Miley Cyrus"></ListItem>
      <ListItem index={3} songTitle="Dynamite" artistName="Taio Cruz"></ListItem>
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