import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import ResizableContainer from "./components/ResizableContainer";
import { add, getCount, update } from "./services/TaskService";

function App() {
  const [data, setData] = useState({ description: "sample description" });
  const [newDescription, setNewDescription] = useState("");
  const [counts, setCounts] = useState({ Add: 0, Update: 0 });

  function onAdd() {
    add({ description: newDescription })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }

  function onUpdate() {
    update(data?._id ?? 1, { ...data, description: newDescription })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }

  function onGetCount() {
    getCount()
      .then((res) => res.json())
      .then((data) => {
        let Updatedcounts = { Add: 0, Update: 0 };
        data.callCounts.map((each) =>
          each.endpoint === "add"
            ? (Updatedcounts.Add = each.count)
            : (Updatedcounts.Update = each.count)
        );
        setCounts(Updatedcounts);
      });
  }

  return (
    <>
      <header className="bg-dark p-2 shadow-lg d-flex flex-row justify-content-center align-items-center sticky-top">
        <input
          type="text"
          className="p-2"
          placeholder="Add/Update Description"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        />
        <button className="btn btn-light shadow p-2 m-2" onClick={onAdd}>
          Add
        </button>
        <button className="btn btn-light shadow p-2 m-2" onClick={onUpdate}>
          Update
        </button>
        <button className="btn btn-light shadow p-2 m-2" onClick={onGetCount}>
          Get Updated Count
        </button>
        <h5 className="text-light">{`Add:${counts.Add} Update: ${
          counts.Update
        } Total: ${counts.Add + counts.Update}`}</h5>
      </header>
      <div
        style={{ overflow: "hidden", backgroundColor: "#f0ede4" }}
        className="p-5 d-flex flex-row flex-wrap"
      >
        <ResizableContainer
          id={"item1"}
          className="m-3 flex-grow-1 shadow-lg bg-secondary"
          defaultSize={{
            width: Math.floor(parseInt(window.innerWidth) / 2) - 200,
            height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSbmLkVlC-LbDJuspssq8bc3nigBD_FSlEwMiWAn-LEO6L0tSgo0QV6zVcF4GYjMaDjg&usqp=CAU"
            />
            <p className="text-light my-2 ">{data?.description}</p>
          </div>
        </ResizableContainer>

        <ResizableContainer
          id={"item2"}
          className="m-3 flex-grow-1 shadow bg-secondary"
          defaultSize={{
            width: Math.floor(window.innerWidth / 2) - 200,
            height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg"
            />
            <p className="text-light my-2 ">{data?.description}</p>
          </div>
        </ResizableContainer>

        <ResizableContainer
          id={"item3"}
          className="m-3 flex-grow-1 bg-light shadow"
          defaultSize={{
            width: window.innerWidth - 200,
            height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://cdn.sanity.io/images/tlr8oxjg/production/afce27d5dcb021422c709cb5bf60cb3a33f7376d-1456x816.png"
            />
            <p className="text-light my-2 ">{data?.description}</p>
          </div>
        </ResizableContainer>
      </div>
    </>
  );
}

export default App;
