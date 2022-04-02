
export const fetchApi = async (configObj) => {
  try {

    var url=`${process.env.REACT_APP_BOOKMARK_API}`;
if(configObj.endpoint){
       url=`${process.env.REACT_APP_BOOKMARK_API}${configObj.endpoint}`;}
     if(configObj.authorization){
       var headers={
        'Authorization':configObj.authorization,
        'Content-Type': 'application/json',
      }
     }
     else{
       headers={
        
          'Content-Type': 'application/json',
        
       }
     }
     const requestOptions = {
      method:configObj.method,
      headers:headers,
  };
  if (configObj.data) {
      //requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions.body = JSON.stringify(configObj.data);
  }
      
   let response=  await fetch(url,requestOptions
    //  {
    //     method: configObj.method, 
    //     headers: headers,
    //     body: JSON.stringify(configObj.data),
    //   }
      )
      console.log('Success:', response);
      if(response.status!=200){
        throw response.statusText;
      }
      //.then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   return data;
      // })
  return response ;
  } catch (e) {
    console.log(e);
    throw e;
  }
};