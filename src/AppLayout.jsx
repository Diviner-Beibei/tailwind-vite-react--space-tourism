import NavBar from "./NavBar";
import Content from "./content";

function AppLayout() {
  //bg-[url('./assets/home/background-home-tablet')]
  // const clasName = `container ${theme.extend.backgroundImage.tabletBackimg}`;

  return (
    <main className="container bg-tablet-backimg">
      <NavBar />
      <div className="grid justify-center items-center mt-24">
        <Content />
      </div>
    </main>
  );
}

export default AppLayout;
