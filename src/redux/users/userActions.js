const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_",
  };
};

export { fetchUsersRequest, fetchUsersSuccess };
