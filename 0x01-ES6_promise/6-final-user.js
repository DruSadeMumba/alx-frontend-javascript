import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const res = [];

  return Promise.allSettled(user).then((results) => {
    results.map(({ status, value, reason }) => (
      res.push({
        status,
        value: status === 'fulfilled' ? value : reason,
      })
    ));
    return res;
  });
}
