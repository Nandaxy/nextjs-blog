import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
        404 - Page Not Found
      </h1>
      <Link href="/" className="btn btn-outline dark:btn-neutral mt-8">
        Kembali
      </Link>
    </div>
  );
};

export default Custom404;
