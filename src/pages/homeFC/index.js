import { Button, Display, Keyboard, LeftSide, DisplayHistory } from '@components/calculator/leftSide';
import { History, Title, RightSide } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';

const h = ['100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2']

export const HomeFC = () => {

  return (
    <Wrapper>
      <LeftSide>
        <DisplayHistory>{'0'}</DisplayHistory>
        <Display>{'0'}</Display>
        <Keyboard>
          {operations.map(({id, value}) => <Button key={id}>{value}</Button>)}
        </Keyboard>
      </LeftSide>
      <RightSide>
        <Title>History</Title>
        <History>{h.map((e, i) => <div key={i}>{e}</div>)}</History>
      </RightSide>
    </Wrapper>
  )
}
