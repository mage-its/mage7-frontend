export default function header(isForm) {
  let user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.accessToken) {
    if(isForm) {
      return { 
        headers: {    
          'Content-Type': 'multipart/form-data',                      
          'x-access-token': user.accessToken
        } 
      };
    } else {
      return { 
        headers: {
          'x-access-token': user.accessToken
        } 
      };
    }
  } else {
    return {};
  }
}
