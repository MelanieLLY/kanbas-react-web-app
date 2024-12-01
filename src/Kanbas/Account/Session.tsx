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
      console.log("Session - Fetched profile:", currentUser);
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
      }
    } catch (err: any) {
      console.error("Session - Error fetching profile:", err.response?.data || err.message);
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
