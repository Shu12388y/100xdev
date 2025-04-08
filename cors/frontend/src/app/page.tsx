

export default async function Home() {
  const response  = await fetch("http://localhost:3003");
  const data = await response.json();
  console.log(data)
  return (
    <>
    {JSON.stringify(data)}
    </>    
  );
}
