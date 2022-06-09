const loginApi = {
  getLogin: (myfunction = async () => {
    await fetch('http://192.168.1.3:8000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mssv: mssv, password: password}),
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.token !== undefined && resData.token !== null) {
          // setLogin(true);
        }
        // alert(resData.token);
      });
  }),
};
export default loginApi;
