import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: ['a', 'b', 'c'],
    doing: ['d', 'e', 'f'],
    done: ['g', 'h', 'i'],
  },
});
