export default function Student({ studentId, name }) {
  return (
    <>
      <h3 className="text-2xl font-bold">{studentId}</h3>
      <h4 className="text-xl font-bold">{name}</h4>
    </>
  );
}
