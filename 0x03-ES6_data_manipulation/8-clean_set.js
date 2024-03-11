export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((elem) => {
    if (elem.startsWith(startString)) {
      if (startString === '') {
        return;
      }
      result += elem.substring(startString.length) + '-';
    }
  });
  return result.slice(0, -1);
}
