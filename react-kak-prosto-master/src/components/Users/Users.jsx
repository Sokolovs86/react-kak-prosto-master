import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
    {
      id: 1,
      photoUrl: "https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png",
      followed: false,
      fullName: "Dmitri D.",
      status: "I'm boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: "https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png",
      followed: true,
      fullName: "Elena M.",
      status: "I'm the best",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl: "https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png",
      followed: false,
      fullName: "Isabella F.",
      status: "I'm cool",
      location: { city: "Toronto", country: "Canada" },
    },
    {
      id: 4,
      photoUrl: "https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png",
      followed: true,
      fullName: "Peter G.",
      status: "I'm hungry",
      location: { city: "Oslo", country: "Sweden" },
    },
],
    );
};


    return <div>
        {
       props.users.map(u => <div key={u.id}>
       <div>
           <div>
               <img src={u.photoUrl} className={styles.userPhoto} />
           </div>
           <div>
            {u.followed
             ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
             : <button onClick={() => {props.follow(u.id)}}>Follow</button>}   
           </div>
       </div>
       <div>
           <div>
               <div>{u.fullName}</div>
               <div>{u.status}</div>
           </div>
           <div>
               <div>{u.location.city}</div>
               <div>{u.location.country}</div>
           </div>
       </div>
       </div>)
        }
    </div>
    
};

export default Users;