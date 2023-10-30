import { categoryListState, IToDo, toDoState } from '../atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categoryList = useRecoilValue(categoryListState);

  const onClick = (newCategory: string) => {
    setToDos((prev) =>
      [...prev].map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, category: newCategory };
        }
        return toDo;
      }),
    );
  };

  return (
    <li style={{ padding: '10px' }}>
      <span style={{ marginRight: '10px' }}>{text}</span>
      {categoryList?.map((cate) => (
        <>
          {category !== cate && (
            <button key={cate} onClick={() => onClick(cate)}>
              {cate}
            </button>
          )}
        </>
      ))}
    </li>
  );
}

export default ToDo;
