import React, { useEffect, useState } from "react";
import api from "../services/api";
import tindev from '../assets/tindev.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main ({ match }) {
  const [users, setUsers] = useState([]);
  const userId = match.params.id;

  useEffect(() => {
    (async function getPossibleUsersToLike() {
      const response = await api.get('/devs',{
        headers: {
          user: userId
        }
      });
      setUsers(response.data);
      console.log(response.data);
    })();
  }, [userId]);

  async function handleLike(id) {
    await api.post(`/devs/${userId}/like`, null, {
      headers: {
        user: id
      }
    });
    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    const response = await api.post(`/devs/${userId}/dislike`, null, {
      headers: {
        user: id
      }
    });
    console.log('response: ' + JSON.stringify(response));
    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <img src={tindev} alt='tindev'/>
      <ul>
        {
          users.map((user) => (
            <li key={user._id}>
              <img src={user.avatar} alt='User Avatar'/>
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className='buttons'>
                <button type='button' onClick={() => handleLike(user._id)}> <img src={like} alt='like'/> </button>
                <button type='button' onClick={() => handleDislike(user._id)}> <img src={dislike} alt='dislike'/> </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}