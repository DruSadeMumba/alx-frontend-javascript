export default function getIdsSum(arr) {
  return arr.reduce((acc, { id }) => acc + id, 0);
}
