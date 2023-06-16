const {DndProvider } = require('react-dnd');
const { HTML5Backend } = require('react-dnd-html5-backend');
const {dragDrop} = require('./dragdrop')

function playlist() {
    render() 
      return (
        <DndProvider backend={HTML5Backend}>
        <div className='playlist-item'>  
             <h3><a href="/songs/{{this.dataValues.id}}">{{this.dataValues.song}}</a></h3>
              <p>Artist: {{this.dataValues.artist}}</p>
        </div>
        </DndProvider>
      )};

export default playlist