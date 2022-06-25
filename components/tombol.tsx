export default function Tombol({ clickHandler }: any) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={clickHandler}
    >
      Hitung Sekarang
    </button>
  );
}
