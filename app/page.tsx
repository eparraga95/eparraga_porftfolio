import '../styles/globals.css'
import '../styles/reset.css'
import Header from "../components/header";
import Socials from "../components/socials";


export default function Home() {
  return (
    <main>
      <Header></Header>
      <Socials></Socials>
      <div className="container mx-auto p-4 flex-col justify-between items-center">
        <h1>Eduardo Parraga</h1>
      </div>
    </main>
  );
}
