import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: IToDo['category']) => {};
  return (
    <li>
      <span>{text}</span>
      {category !== 'TO_DO' && (
        <button onClick={() => onClick('TO_DO')}>To Do</button>
      )}
      {category !== 'DOING' && (
        <button onClick={() => onClick('DOING')}>Doing</button>
      )}
      {category !== 'DONE' && (
        <button onClick={() => onClick('DONE')}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
