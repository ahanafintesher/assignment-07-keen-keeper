"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, loading }}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);