import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 20px 10px;
  background-color: ${(props) => props.theme.boardColor};
  min-height: 200px;
`;

const Card = styled.div`
  border-right: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

const toDos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided, snapshot) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, idx) => (
                  <Draggable draggableId={toDo} index={idx}>
                    {(provided, snapshot, rubric) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
