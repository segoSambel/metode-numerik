export default function THeadItem({ children }: any) {
  return (
    <>
      <th
        scope="col"
        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"
      >
        {children}
      </th>
    </>
  );
}
