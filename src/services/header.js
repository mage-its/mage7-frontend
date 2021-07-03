export default function header(isForm) {
  let user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.tokens.access.token) {
    if(isForm) {
      console.log(user.tokens.access.token);
      return { 
        headers: {    
          'Content-Type': 'multipart/form-data',                      
          'Authorization': 'Bearer ' + user.tokens.access.token
          // 'x-access-token': user.tokens.access.token
        } 
      };
    } else {
      return { 
        headers: {
          'Content-Type': 'multipart/form-data',                      
          'Authorization': 'Bearer ' + user.tokens.access.token
          // 'x-access-token': user.tokens.access.token
        } 
      };
    }
  } else {
    return {};
  }
}
