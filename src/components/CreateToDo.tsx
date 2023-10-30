import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)} style={{ marginTop: '10px' }}>
      <input
        {...register('toDo', { required: 'Please write a to do' })}
        placeholder="Write a to do"
        style={{ width: '200px', height: '25px', marginRight: '5px' }}
      />
      <button style={{ width: '100px', height: '25px', marginRight: '5px' }}>
        Add
      </button>
    </form>
  );
}

export default CreateToDo;
