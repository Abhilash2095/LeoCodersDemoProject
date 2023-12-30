// import axios from 'axios'
// import stripe from 'tipsi-stripe'
import axios from 'axios';
import baseURL from './base_url';

// const baseURL = "https://webmobril.org/dev/beverages/api/user/"
// const productionPubliashableKey = "pk_live_51I1i7KFiy9TW3WjULsMXQ2n2kdmMD8qmJcMXEtT8JdMtKCd7JMoB9N3Llyb7Wzhe0XqQ5ONgRVIqm4aoUWxOD4GE00hgaj0mfC";
// const testPublishableKey = 'pk_test_51I1i7KFiy9TW3WjU49QGOq4hBnzSacVoaNtrgZjEOjFGfQ1JilXEhE53ftJ9vJXd8fEKAd6evPwv3yPTuZA5iyuS00Mpayt6ex'
// stripe.setOptions({
//     publishableKey: productionPubliashableKey
// })

// export function updateProfile(url, data, imageObj, type) {
//   const formData = new FormData();
//   console.log('baseURL + method', baseURL + url);
//   for (let key in data) {
//     formData.append(key, data[key]);
//   }
//   if (imageObj) {
//     console.log('imageObj', imageObj);
//     var fileType;
//     if (type) {
//       fileType = 'document_front';
//     } else {
//       fileType = 'profile_img';
//     }
//     formData.append(fileType, {
//       uri: Platform.OS == 'ios' ? imageObj.uri : `file://${imageObj.path}`,
//       type: imageObj.type,
//       name:
//         new Date().getTime() +
//         '.' +
//         imageObj.uri.split('.')[imageObj.uri.split('.').length - 1],
//     });
//   }
//   console.log('form datatata', formData);
//   return fetch(baseURL + url, {
//     body: formData,
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//   })
//     .then(response => {
//       return response.json().then(responseJson => {
//         return responseJson;
//       });
//     })
//     .catch(err => console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', err));
// }
// export function updateProfile2(url, data, imageObj, type) {
//   const formData = new FormData();
//   console.log('baseURL + method', baseURL + url);
//   for (let key in data) {
//     formData.append(key, data[key]);
//   }
//   if (imageObj) {
//     console.log('imageObj', imageObj);
//     var fileType;
//     if (type) {
//       fileType = 'document_front';
//     } else {
//       fileType = 'profile_img';
//     }
//     formData.append(fileType, {
//       uri: Platform.OS == 'ios' ? imageObj.uri : `file://${imageObj.path}`,
//       type: imageObj.type,
//       name:
//         new Date().getTime() +
//         '.' +
//         imageObj.uri.split('.')[imageObj.uri.split('.').length - 1],
//     });
//   }
//   console.log('form datatata', formData);
//   return fetch(baseURL + url, {
//     body: formData,
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//   })
//     .then(response => {
//       return response.json().then(responseJson => {
//         return responseJson;
//       });
//     })
//     .catch(err => console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', err));
// }

// export function getApi(method, authKey) {
//   console.log(authKey, 'gitapi---------', baseURL + method);
//   return fetch(baseURL.base_url + method, {
//     method: 'get',
//     headers: {
//       Authorization: 'Bearer ' + authKey,
//     },
//   })
//     .then(response => {
//       console.log('responseresponse--', response);
//       return response.json();
//     })
//     .catch(function (error) {
//       console.log('Request failed', error);
//     });
// }

// export async function postAPI(method, data) {
//   const formData = new FormData();
//   for (let key in data) {
//     formData.append(key, data[key]);
//   }
//   // if (imageObj) {
//   //     // console.log("imageObj", imageObj)
//   //     formData.append('profile_img', {
//   //         uri: Platform.OS == "ios" ? imageObj.uri : `file://${imageObj.path}`,
//   //         type: imageObj.type,
//   //         name: 'profilepic.' + imageObj.uri.split(".")[1]
//   //     })
//   // }
//   console.log('form datatata', formData);
//   console.log(method, 'form dcccccccccatatata', data);

//   return fetch(baseURL.base_url + method, {
//     body: formData,
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//   })
//     .then(response => {
//       console.log('Respoooooooooooooooo', response);
//       return response.json().then(responseJson => {
//         return responseJson;
//       });
//     })
//     .catch(err => console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', err));
// }

export function postApi2(url, data, authKey) {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
   
  }

  
  return fetch(baseURL.base_url + url, {
    body: formData,
    method: 'POST',
    headers: {
       Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + authKey,
    },
  })
    .then(response => {
      console.log('Respoooooooooooooooo', response);
      return response.json().then(responseJson => {
        return responseJson;
      });
    })
    .catch(networkError => {
      console.error('Network Errorrrr:', networkError);
      // Alert.alert('Flyer', 'Network Request Failed', [

      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       console.log('OK Pressed');
      //     },
      //   },
      // ]);
    })
    .catch(httpError => console.warn('HTTP Errorrrr:', httpError));
}
export function postApi3(url, data, authKey) {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
    console.log(key, data[key])
   
  }

  
  return fetch(baseURL.base_url + url, {
    body: formData,
    method: 'POST',
    headers: {
      
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + authKey,
    },
  })
    .then(response => {
      console.log('Respoooooooooooooooo', response);
      return response.json().then(responseJson => {
        return responseJson;
      });
    })
    .catch(networkError => {
      console.error('Network Errorrrr:', networkError);
      // Alert.alert('Flyer', 'Network Request Failed', [

      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       console.log('OK Pressed');
      //     },
      //   },
      // ]);
    })
    .catch(httpError => console.warn('HTTP Errorrrr:', httpError));
}

export async function getApi(method, authKey) {
  console.log(authKey, 'gitapi---------', baseURL.base_url + method,"   authkey===",authKey);
  let response = {};

  await axios
    .get(baseURL.base_url + method, {
      headers: {
        Authorization: `Bearer ${authKey}`,
       'Content-Type': 'application/json',
      },
    })
    .then(resp => {
      response = resp.data;
      console.log('getApi response : ', response);
    })
    .catch(error => {
      if (error.request) {
        console.log('Network Error: ', error.request);
        // Alert.alert('Flyer', 'Network Request Failed', [
          
        //   {
        //     text: 'OK',
        //     onPress: () => {
        //       console.log('OK Pressed');
        //     },
        //   },
        // ]);
      } else if (error.response) {
        console.log(error.response);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  return response;
  // return fetch(baseURL.base_url + method, {
  //   method: 'get',
  //   headers: {
  //     "Authorization": "Bearer " + authKey
  //   }
  // })
  //   .then((response) => {
  //     console.log("responseresponse--",response);
  //     return response.json()
  //   })
  //   .catch(function (error) {
  //     console.log('Request failed', error);
  //   });
}

export async function postAPI(method, data) {
  const formData = new FormData();
  let response = {};
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log('baseURL + method', baseURL.base_url + method);
  console.log('Request params', formData);
  await axios
    .post(baseURL.base_url + method, data)
    .then(res => {
      response = res.data;
    })
    // .catch(error => {
    //   // alert(error)
    //   console.log('erro111r : ', error.code);
    // });
    .catch(error => {
      if (error.request) {
        console.log('Network Error: ', error.request);

        // Alert.alert('Flyer', 'Network Request Failed', [
          
        //   {
        //     text: 'OK',
        //     onPress: () => {
        //       console.log('OK Pressed');
        //     },
        //   },
        // ]);
      } else if (error.response) {
        console.log(error.response);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  return response;
  // const formData = new FormData()
  // for (let key in data) {
  //     formData.append(key, data[key])
  // }
  // // if (imageObj) {
  // //     // console.log("imageObj", imageObj)
  // //     formData.append('profile_img', {
  // //         uri: Platform.OS == "ios" ? imageObj.uri : `file://${imageObj.path}`,
  // //         type: imageObj.type,
  // //         name: 'profilepic.' + imageObj.uri.split(".")[1]
  // //     })
  // // }
  // console.log("form datatata", formData)
  // console.log(method,"form dcccccccccatatata", data)

  // return fetch(baseURL.base_url + method,
  //     {
  //         body: formData,
  //         method: "POST",
  //         headers: {
  //             "Accept": "application/json",
  //             "Content-Type": 'multipart/form-data',
  //         },
  //     })
  //     .then(response => {
  //         console.log("Respoooooooooooooooo", response)
  //         return response.json()
  //             .then(responseJson => {
  //                 return responseJson
  //             })
  //     })
  //     .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}

export async function postApi(method, data, authKey) {
  const formData = new FormData();

  let response = {};
  for (let key in data) {
    formData.append(key, data[key]);
  }
  // console.log('baseURL + method', baseURL.base_url + method);
  // console.log('Request params', formData);
  await axios
    .post(baseURL.base_url + method, data, {
      headers: {
        Authorization: 'Bearer ' + authKey,
        // "Accept": "application/json",
        //  "Content-Type": 'application/json',
      },
    })
    .then(res => {
      console.log('******************', res);
      response = res.data;
    })
    .catch(err => console.log('catch of post api', err));

  return response;
  // const formData = new FormData()
  // for (let key in data) {
  //     formData.append(key, data[key])
  // }

  // console.log("form datatata", formData)
  // return fetch(baseURL.base_url+url,
  //     {
  //         body: formData,
  //         method: "POST",
  //         headers: {
  //             "Accept": "application/json",
  //             "Content-Type": 'multipart/form-data',
  //             "Authorization": "Bearer " + authKey
  //         },
  //     })
  //     .then(response => {
  //         console.log("Respoooooooooooooooo", response)
  //         return response.json()
  //             .then(responseJson => {
  //                 return responseJson
  //             })
  //     })
  //     .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}
