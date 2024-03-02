// Average execution time 400 ms
function add(description) {
  console.log(process.env.REACT_APP_BASE_URL)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(description),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/add`, requestOptions);
}

//Average execution time 210 ms
function update(id, obj) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/update/${id}`, requestOptions);
}

// Average execution time 65 ms
function getCount() {
  return fetch(`${process.env.REACT_APP_BASE_URL}/getcount`);
}

export { add, update, getCount };
