import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello, Next.js!",
};

interface Cat {
  age: number;
  name: string;
  bread: string;
}

export default async function Page() {
  const res = await fetch("http://localhost:8080/cats", {
    // TODO: APIがデプロイされたら削除予定
    cache: "no-store",
  });
  const cats: Cat[] = await res.json();

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <h2>Cats List</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.name}>
            <p>name: {cat.name}</p>
            <p>age: {cat.age}</p>
            <p>bread: {cat.bread}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
