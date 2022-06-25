import { FC } from "react";

const TBodyItem: FC = ({ children }: any) => {
  return (
    <>
      <tr className="hover:bg-gray-100">{children}</tr>
    </>
  );
};
export default TBodyItem;
