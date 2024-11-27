import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true); 
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      console.log("Profile fetch response:", currentUser); // 调试响应
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
      }
    } catch (err: any) {
      console.error("Error fetching profile:", err.response?.data || err.message); // 捕获详细错误
    }
    setPending(false); 
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (pending) {
    return <div>Loading...</div>;
  }

  return children;
  
}
