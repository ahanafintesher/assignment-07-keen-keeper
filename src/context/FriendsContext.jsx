"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timelineHistory, setTimelineHistory] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);
 const valueProvider = {friends, setFriends, loading, setLoading, timelineHistory, setTimelineHistory};
  return (
    <FriendsContext.Provider value = {valueProvider}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);