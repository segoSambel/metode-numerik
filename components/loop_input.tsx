export default function LoopInput({ formErr, validateHandler }: any) {
  return (
    <div className="relative mr-2">
      <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
        <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
          {!formErr ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              color="green"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="red"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
      <input
        id="iterasi"
        name="iterasi"
        type="text"
        placeholder="Masukkan Jumlah Iterasi"
        onChange={(val) => validateHandler(val.currentTarget.value)}
        className="text-sm relative w-full border rounded-md placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
      ></input>
    </div>
  );
}
