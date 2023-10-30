import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { categoryListState } from '../atoms';

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategoryList = useSetRecoilState(categoryListState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategoryList((prev) => [...prev, category]);
    setValue('category', '');
  };

  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      style={{ marginTop: '10px', display: 'inline' }}
    >
      <input
        {...register('category', { required: 'Please write category name' })}
        placeholder="Write a category name"
        style={{ width: '200px', height: '25px', marginRight: '5px' }}
      />
      <button style={{ width: '100px', height: '25px', marginRight: '5px' }}>
        Add
      </button>
    </form>
  );
}

export default CreateCategory;
