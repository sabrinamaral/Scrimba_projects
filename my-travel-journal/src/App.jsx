import Header from "./components/Header";
import Entry from "./components/Entry";
import journalData from "../journalData";

export default function App() {
  const dataElements = journalData.map((data) => {
    return <Entry key={data.id} {...data} />;
  });

  return (
    <>
      <Header title="my travel journal" />
      {dataElements}
    </>
  );
}
