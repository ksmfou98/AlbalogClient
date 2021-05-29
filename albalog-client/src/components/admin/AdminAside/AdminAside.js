import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import {
  AiOutlineSchedule,
  AiOutlineNotification,
  AiOutlineSwap,
  AiOutlineSolution,
} from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';
import './AdminAside.scss';
import { NavLink } from 'react-router-dom';

const AdminAside = () => {
  return (
    <aside className="aside-container">
      <ul className="menu">
        <NavLink to={'/notice'} exact>
          <li className="menu-item">
            <AiOutlineNotification />
            <span>공지사항</span>
          </li>
        </NavLink>
        <NavLink to={'/workmanual/'} >
          <li className="menu-item">
            <AiOutlineSolution />
            <span>업무 메뉴얼</span>
          </li>
        </NavLink>
        <NavLink to={'/transition'} exact>
          <li className="menu-item">
            <AiOutlineSwap />
            <span>인수 인계 사항</span>
          </li>
        </NavLink>
      </ul>
      <h3>관리자 메뉴</h3>
      <ul className="menu">
        <NavLink to={'/admin/employeelist'} exact>
          <li className="menu-item">
            <HiOutlineUsers />
            <span>직원 관리</span>
          </li>
        </NavLink>
        <NavLink to={'/admin/schedule'} exact>
          <li className="menu-item">
            <AiOutlineSchedule />
            <span>스케줄 관리</span>
          </li>
        </NavLink>
        <NavLink to={'/admin/payroll'} exact>
          <li className="menu-item">
            <BiDollar />
            <span>급여관리</span>
          </li>
        </NavLink>
        <NavLink to={'/admin/info'} exact>
          <li className="menu-item">
            <IoSettingsOutline />
            <span>계정 정보</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default AdminAside;