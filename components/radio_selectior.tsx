export default function RadioSelector({
  children,
  value,
  changeHandler,
  checked,
}: any) {
  return (
    <div className="flex items-center">
      <input
        id={value}
        checked={checked && true}
        type="radio"
        value={value}
        name="default-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
        onChange={() => changeHandler(value)}
      ></input>
      <label htmlFor={value} className="ml-2 text-sm font-medium text-gray-900">
        {children}
      </label>
    </div>
  );
}
