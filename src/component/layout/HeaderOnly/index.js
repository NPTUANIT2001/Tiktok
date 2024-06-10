import Header from "../DefaultLayout/header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
}

export default HeaderOnly;
