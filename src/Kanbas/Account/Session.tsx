import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true); 
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    console.log("Session - Fetching profile...");
    try {
      const currentUser = await client.profile();
      console.log("Session - Fetched profile:", currentUser); // 确认获取的数据
      if (currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        dispatch(setCurrentUser(currentUser));
      }
    } catch (err: any) {
      console.error("Session - Error fetching profile:", err.response?.data || err.message);
      localStorage.removeItem("currentUser");
    }
    setPending(false);
  };
  
  
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      dispatch(setCurrentUser(JSON.parse(savedUser)));
      setPending(false);
    } else {
      fetchProfile();
    }
  }, []);

 
  if (pending) {
    return <div>"Loading... Please wait, it might take up to a minute to load. In the meantime, we could sing 'Happy Birthday' three times! </div>;
  }

  return children;
  
}
