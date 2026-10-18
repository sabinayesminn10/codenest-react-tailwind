import { useState } from "react";
import { useEffect } from "react";
import AddressCard from "./components/AddressCard";
import UsersData from "./dummy-data/users.json";
const App = () => {
  // const filteredContactsByOwnerName = "jhon kark";

  // useState hook
  const [filteredContacts, setfilteredContacts] = useState([]);

  const [filteredContactsByOwner, setfilteredContactByOwnerName] = useState("");

  const [contactOwnerName, setcontactOwnerName] = useState("");

  //useEffect hook
  useEffect(() => {
    // console.log(contactOwnerName);
    const filtered = UsersData.filter(
      (contact) => contact.ownerName === contactOwnerName,
    );
    setfilteredContacts(filtered);
  }, [contactOwnerName]);

  return (
    <div className="flex items-center justify-center flex-col gap-3 min-h-screen">
      <div className="flex">
        <label htmlFor="filter" className="font-semibold mr-2">
          Filter by Owner :
        </label>
        <input
          type="text"
          id="filter"
          value={filteredContactsByOwner}
          onChange={(e) => setfilteredContactByOwnerName(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
        <button
          onClick={() => setcontactOwnerName(filteredContactsByOwner)}
          className="rounded-xl bg-blue-600 px-6 py-3 ml-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Filter
        </button>
      </div>

      <h1 className="font-bold text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {contactOwnerName} Contact list
      </h1>

      <div className="flex flex-wrap gap-3">
        
        {/* 3rd example  */}
        {filteredContacts.map((contact) => (
          <AddressCard key={contact.id} contact={contact} />
        ))}

        {/* 1st example  */}
        {/* {UsersData.map((jodumodukodu) => (
          <AddressCard key={jodumodukodu.id} contact={jodumodukodu} />
        ))}  */}

        {/* 2nd example */}
        {/* {UsersData.map((contact) => {
          if (contact.ownerName === filteredContactsByOwner) {
            setcontactOwnerName(contact.ownerName);
            return (
              <AddressCard key={contact.id} contact={contact} /> // key = অর্থাৎ list-এর প্রতিটি item-এর unique identity।
            );
          }
          return null;
        })} */}
      </div>
    </div>
  );
};

export default App;
