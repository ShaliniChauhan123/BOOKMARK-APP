const configObjSaga = (configObj) => {
  return configObj.data && configObj.authorization
    ? (configObj = {
        method: configObj.method,
        endpoint: configObj.endpoint,
        authorization: configObj.authorization,
        data: configObj.data,
      })
    : configObj.data
    ? (configObj = {
        method: configObj.method,
        endpoint: configObj.endpoint,
        data: configObj.data,
      })
    : (configObj = {
        method: configObj.method,
        endpoint: configObj.endpoint,
        authorization: configObj.authorization,
      });
};
export default configObjSaga;
