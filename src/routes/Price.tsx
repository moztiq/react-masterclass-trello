import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import Moment from 'react-moment';
import styled from 'styled-components';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}

const PriceList = styled.ul``;

const PriceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 20px 10px;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    },
  );

  return (
    <PriceList>
      {isLoading
        ? 'Loading Price ...'
        : data?.map((price, idx) => (
            <PriceItem key={idx}>
              <div>
                <Moment format="YYYY/MM/DD">{price.time_close * 1000}</Moment>
              </div>
              <div>{`$${price.close}`}</div>
            </PriceItem>
          ))}
    </PriceList>
  );
}

export default Price;
