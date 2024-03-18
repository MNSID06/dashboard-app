// HotList.js
"use client";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const List = () => {
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    const hotListRef = firebase.database().ref("hotList");
    hotListRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setHotList(Object.values(data));
      }
    });

    return () => hotListRef.off("value");
  }, []);

  return (
    <div>
      <h2>Hot List</h2>
      <ul>
        {hotList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
