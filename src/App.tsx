import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';
import { FormEvent } from 'react';

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinutesChange = (event: FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="Minutes"
      />
      <input type="number" value={hours} placeholder="Hours" />
    </div>
  );
}

export default App;
