export const fetchApi = async (payload) => {
    try {

        const url =`${process.env.REACT_APP_BOOKMARK_API}/login`;
        const data={
            email:payload.loginEmailid,
            password:payload.loginPassword,
        }

        fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          return data;
        })
    
    } catch (e) {
      console.log(e);
    }
  };
  export const fetchApi1 = async (payload) => {
    try {

        const url =`${process.env.REACT_APP_BOOKMARK_API}/register`;
        const data={
            name:payload.name,
            email:payload.loginEmailid,
            password:payload.loginPassword,
        }

     fetch(url, {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: {"Content-type": "application/json"
        }
        })
        .then(response => response.json())
        .then(res => {
          console.log('Success:', res);
          return res;
        })
    } catch (e) {
      console.log(e);
    }
  };
  