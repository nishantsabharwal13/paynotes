export function login(username, password, callback) {
  return function (dispatch) {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username,password})
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'Login', payload: res.data });
        typeof callback != 'undefined' ? callback(res) : null;
      })
      .catch(err => {
        typeof callback != 'undefined' ? callback(res) : null;
        dispatch({ type: 'LOGIN_REJECTED', payload: 'There was error loggin in' });
      });
  };
};