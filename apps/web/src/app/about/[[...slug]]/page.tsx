import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;

  return {
    title: Array.isArray(slug) ? slug.join("/") : "slugがない",
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <div>
      <h1>About Page</h1>
      {Array.isArray(slug) ? (
        <p>Slug: {slug.join("/")}</p>
      ) : (
        <p>Slugがありません</p>
      )}
      <p>
        <Link href="/">ホームへ戻る</Link>
      </p>
    </div>
  );
}
