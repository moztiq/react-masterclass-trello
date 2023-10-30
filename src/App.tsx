import { useRecoilState } from 'recoil';
import { hourSelector, minuteState } from './atoms';
import { FormEvent } from 'react';

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (event: FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={hours}
        onChange={onHoursChange}
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
