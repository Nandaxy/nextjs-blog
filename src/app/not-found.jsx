import Link from "next/link";

const Custom404 = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
        {!title ? "404 - Halaman Tidak Ditemukan" : title}
      </h1>
      <p className="mt-2">
        Halaman yang anda cari tidak ditemukan
      </p>
      <Link href="/" className="btn btn-outline dark:btn-neutral mt-8">
        Kembali
      </Link>
    </div>
  );
};

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan",
};

export default Custom404;
