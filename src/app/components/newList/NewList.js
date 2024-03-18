// NewList.js
"use client";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const NewList = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const newListRef = firebase.database().ref("newList");
    newListRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setNewList(Object.values(data));
      }
    });

    return () => newListRef.off("value");
  }, []);

  return (
    <div>
      <h2>New List</h2>
      <ul>
        {newList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
