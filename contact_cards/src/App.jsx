import AddressCard from "./components/AddressCard";
import UsersData from "./dummy-data/users.json";
const App = () => {
  return (
    <div className="flex flex-wrap gap-3 m-4">
      {
        UsersData.map((jodumodukodu) => (
          <AddressCard key={jodumodukodu.id} contact={jodumodukodu} />
        ))
      }
    </div>
  );
};

export default App;
