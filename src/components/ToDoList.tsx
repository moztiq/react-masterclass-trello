import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryListState, categoryState, toDoSelector } from '../atoms';
import { FormEvent } from 'react';
import CreateCategory from './CreateCategory';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryList = useRecoilValue(categoryListState);

  const oninput = (event: FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>To Dos</h1>
      <hr />
      <select
        value={category}
        onInput={oninput}
        style={{ width: '200px', height: '25px', marginRight: '5px' }}
      >
        {categoryList?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
