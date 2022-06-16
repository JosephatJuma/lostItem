import logo from "./logo.png";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { Items } from "./components/Items";
import apiRequest from "./components/apiRequest";
//import allitems from "./json/Items.json";

const api_url = "  http://localhost:8000/items";

function App() {
  const [items, setItems] = useState(null);
  const [showItem, setShowItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const changer = () => {
    setAddItem(!addItem);
  };
  const deleteItem = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item with id " + id
    );
    if (confirm == true) {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);

      const deleteOptions = { method: "DELETE" };
      const reqUrl = `${api_url}/${id}`;
      const result = await apiRequest(reqUrl, deleteOptions);
      if (result) setFetchError(result);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(api_url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setItems(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <div className="main-content">
        <div>
          {addItem ? (
            <button onClick={changer} className="add">
              cancel
            </button>
          ) : (
            <button onClick={changer} className="add">
              Add new Item
            </button>
          )}
        </div>
        <div className="main-area">
          {!addItem ? (
            <div className="container">
              <div className="search-area">
                {/* <input
                  type="search"
                  placeholder="Search for item.........."
                  // onKeyPress={()=>searchItem(searchTerm)}}
                /> */}
                <Search search={searchTerm} setSearch={setSearchTerm} />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="main">
            {addItem ? (
              <div className="container">
                <Main
                  onAdd={setItems}
                  url={api_url}
                  items={items}
                  remain={() => setAddItem(false)}
                />
              </div>
            ) : (
              <div className="container">
                {loading && <h2>Loading.....</h2>}
                {isSearch ? (
                  items.map((item) => (
                    <Items
                      Items={items.filter((item) =>
                        item.item
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )}
                      showItem={showItem}
                      logo={logo}
                      onDelete={deleteItem}
                    />
                  ))
                ) : items ? (
                  items.map((item) => (
                    <Items
                      Item={item}
                      showItem={showItem}
                      // key={item.id}
                      logo={logo}
                      onDelete={deleteItem}
                    />
                  ))
                ) : (
                  <p>No Items Found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
