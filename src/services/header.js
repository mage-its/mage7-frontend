export default function header(isForm) {
  let user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.tokens.access.token) {
    if(isForm) {
      return { 
        headers: {
          'Content-Type': undefined,                  
          'Authorization': 'Bearer ' + user.tokens.access.token  
        } 
      };
    } else {
      return { 
        headers: {
          'Content-Type': undefined,                      
          'Authorization': 'Bearer ' + user.tokens.access.token
        } 
      };
    }
  } else {
    return {};
  }
}
