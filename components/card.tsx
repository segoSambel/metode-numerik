import Link from "next/link";

const Card = ({ item }: any) => {
  return (
    <>
      <Link href={item.href} passHref>
        <button className="block box-border text-center border-2 mb-2 rounded-md w-1/4 p-5 m-7 hover:bg-gray-50">
          <h1 className="font-bold text-xl mb-3">{item.childName}</h1>
          <p>{item.childDefinition}</p>
        </button>
      </Link>
    </>
  );
};

export default Card;
