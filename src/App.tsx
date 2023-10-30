import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <ul>
          <Droppable droppableId="one">
            {(provided, snapshot) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId="first" index={0}>
                  {(provided, snapshot, rubric) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      One
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {(provided, snapshot, rubric) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      Two
                    </li>
                  )}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </ul>
      </div>
    </DragDropContext>
  );
}

export default App;
