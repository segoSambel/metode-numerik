import { FC } from "react";

interface TableProps {
  width: number;
}

const Table: FC<TableProps> = ({ width, children }) => {
  return (
    <>
      <div className={`max-w-${width}xl mx-auto`}>
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  {children}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
