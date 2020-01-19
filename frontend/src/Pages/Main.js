import React from "react";
import tindev from '../assets/tindev.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main ({ match }) {
  return (
    <div className="main-container">
      <img src={tindev}/>
      <ul>
        <li>
          <img src='https://avatars1.githubusercontent.com/u/31048003?v=4' alt='avatar'/>
          <footer>
            <strong>User Name</strong>
            <p>Descrição</p>
          </footer>
          <div className='buttons'>
            <button type='button'> <img src={like} alt='like'/> </button>
            <button type='button'> <img src={dislike} alt='dislike'/> </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31048003?v=4' alt='avatar'/>
          <footer>
            <strong>User Name</strong>
            <p>Descrição</p>
          </footer>
          <div className='buttons'>
            <button type='button'> <img src={like} alt='like'/> </button>
            <button type='button'> <img src={dislike} alt='dislike'/> </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31048003?v=4' alt='avatar'/>
          <footer>
            <strong>User Name</strong>
            <p>Descrição</p>
          </footer>
          <div className='buttons'>
            <button type='button'> <img src={like} alt='like'/> </button>
            <button type='button'> <img src={dislike} alt='dislike'/> </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31048003?v=4' alt='avatar'/>
          <footer>
            <strong>User Name</strong>
            <p>Descrição</p>
          </footer>
          <div className='buttons'>
            <button type='button'> <img src={like} alt='like'/> </button>
            <button type='button'> <img src={dislike} alt='dislike'/> </button>
          </div>
        </li>

        <li>
          <img src='https://avatars1.githubusercontent.com/u/31048003?v=4' alt='avatar'/>
          <footer>
            <strong>User Name</strong>
            <p>Descrição</p>
          </footer>
          <div className='buttons'>
            <button type='button'> <img src={like} alt='like'/> </button>
            <button type='button'> <img src={dislike} alt='dislike'/> </button>
          </div>
        </li>
      </ul>
    </div>
  );
}