export default function Debugger({ values, errors, touched }) {
  return (
    <div>
      <code>Values: {JSON.stringify(values)}</code>
      <br />
      <code>Errors: {JSON.stringify(errors)}</code>
      <br />
      <code>Touched: {JSON.stringify(touched)}</code>
      <br />
    </div>
  );
}
