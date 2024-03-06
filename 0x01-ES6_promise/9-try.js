export default function guardrail(mathFunction) {
  const res = [];
  try {
    res.push(mathFunction());
  } catch (err) {
    res.push(err.message);
  } finally {
    res.push('Guardrail was processed');
  }
  return res;
}
