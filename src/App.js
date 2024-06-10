import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoute } from "./routes";
import { DefaultLayout } from "./component/layout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, idx) => {
            let Layout = DefaultLayout;
            const Page = route.component;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
