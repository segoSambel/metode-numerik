export default function THead({ children }: any) {
  return (
    <>
      <thead className="bg-gray-100">
        <tr>{children}</tr>
      </thead>
    </>
  );
}
