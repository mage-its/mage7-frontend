export default function header(isForm) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.tokens.access.token) {
    if (isForm) {
      return {
        headers: {
          'Content-Type': undefined,
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      };
    }
      return {
        headers: {
          'Content-Type': undefined,
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      };
  }
    return {};
}
