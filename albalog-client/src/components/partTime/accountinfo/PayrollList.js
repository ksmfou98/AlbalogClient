import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import 'components/partTime/accountinfo/PayrollList.scss';
import { useSelector } from 'react-redux';

function PayrollList() {
  const payrolls = useSelector((state) => state.parttime.payrolls);

  return (
    <div id="PayrollList">
      <div className="lines">
        {payrolls &&
          payrolls.map((item, i) => {
            return <Monthlypay data={item} key={i} />;
          })}
      </div>
    </div>
  );
}

function Monthlypay({ data }) {
  const { monthWage, timeClock, yearAndMonth } = data;
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="pay-container">
      <div className="tr-month">
        <div className="date">
          {yearAndMonth.toString().slice(0, 4)}-
          {yearAndMonth.toString().slice(4)}
        </div>
        <div className="time"></div>
        <div className="pay">
          {monthWage.toLocaleString()}
          <button onClick={() => handleClick()}>
            <IoIosArrowDown
              className={isActive ? 'active' : ''}
              style={{
                width: '30',
              }}
            />
          </button>
        </div>
      </div>
      <div className={isActive ? 'detail active' : 'detail'}>
        {timeClock.map((item, i) => (
          <div className="tr" key={i}>
            <div className="date">{item.start_time.slice(5)}</div>
            <div className="time">
              {item.workTime.slice(0, 2)}:{item.workTime.slice(2, -2)}:
              {item.workTime.slice(-2)}
            </div>
            <div className="pay">{item.total.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PayrollList;
