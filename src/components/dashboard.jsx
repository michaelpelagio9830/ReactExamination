import React, { Component, lazy, Suspense } from "react";
import NavBar from "./common/navBar";
import SideDrawer from "./common/sidedrawer";
import BackDrop from "./backdrop/backdrop";
import Loading from "./common/loadingScreen";
import { Link } from "react-router-dom";

const Details = lazy(() => import("./details"));

class DashBoard extends Component {
  render() {
    const {
      data,
      sideDrawerOpen,
      onDeleteItems,
      onDrawerClick,
      onBackDropClick,
    } = this.props;

    let sideDrawer;
    let backDrop;

    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop onclickBackDrop={() => onBackDropClick()} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar onClickDrawer={onDrawerClick} />
        {sideDrawer}
        {backDrop}
        <Suspense fallback={<Loading />}>
          <main className="main mt-2 mr-4 ml-4">
            <Link to="/dashboard/additems">
              <button
                className="btn btn-primary mb-4"
                //   onClick={this.handleAddItems}
              >
                Add Form
              </button>
            </Link>

            <Details data={data} onDelete={onDeleteItems} />
          </main>
        </Suspense>
      </div>
    );
  }
}

export default DashBoard;
