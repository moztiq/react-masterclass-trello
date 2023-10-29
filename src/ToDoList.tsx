import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log('todo', data.toDo);
    setValue('toDo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', { required: 'Please write a to do' })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
