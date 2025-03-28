import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
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
