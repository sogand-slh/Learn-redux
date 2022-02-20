import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./../redux/users/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(userData, "userData");
  return (
    <div>
      {userData.loading ? (
        <h2>Loading ... </h2>
      ) : userData.error ? (
        <p>{userData.error}</p>
      ) : (
        userData.users.map((user) => <p key={user.id}>{user?.name}</p>)
      )}
    </div>
  );
};

export default Users;
