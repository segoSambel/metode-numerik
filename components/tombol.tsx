export default function Tombol({ clickHandler, text }: any) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
