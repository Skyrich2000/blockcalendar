import React, { useState, useEffect } from 'react';
import Styled from './DayBox.styled';
import GlobalStyled from '../Styled/global.styled';
import { Day } from '../../Entities/Date';
import { User, globalSelectedUser } from '../../Entities/User';
import moment from 'moment';

const DayBox: React.FC<{ day: Day }> = ({ day }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Day>();
  const [endDate, setEndDate] = useState<Day>();

  const handleClick = () => {
    console.log('here');

    if (!day.isThisMonth) return;
    if (globalSelectedUser.user) {
      day.updateUser(globalSelectedUser.user);
      setUsers(day.getUsers());
    }
  };

  // useEffect(() => {
  //   document.getElementById('test').addEventListener('touchmove', handleClick);
  //   return () =>
  //     document
  //       .getElementById('test')!
  //       .removeEventListener('touchmove', handleClick);
  // }, []);

  // const handleTouchEnd = () => {
  //   setEndDate(day);
  //   if (
  //     !startDate ||
  //     !endDate ||
  //     !globalSelectedUser ||
  //     !globalSelectedUser.user
  //   )
  //     return;
  //   let _day = startDate;

  //   while (_day <= endDate) {
  //     _day.updateUser(globalSelectedUser.user);
  //     _day = _day.clone().add(1, 'd');
  //   }

  //   if (globalSelectedUser.user)
  //     globalSelectedUser.user.avail = [...globalSelectedUser.user.avail];
  // };

  return (
    <Styled.CalendarBox onClick={handleClick} id="test">
      <Styled.CalendarDateLabel isThisMonth={day.isThisMonth}>
        {day.moment.format('D')}
      </Styled.CalendarDateLabel>
      <Styled.CalendarDateCircleBox isThisMonth={day.isThisMonth}>
        <Styled.GridWrap>
          {users.map((user, index) => (
            <GlobalStyled.Circle
              key={user.name + index.toString()}
              size="small"
              color={user.color}
            />
          ))}
        </Styled.GridWrap>
      </Styled.CalendarDateCircleBox>
    </Styled.CalendarBox>
  );
};

export default DayBox;
