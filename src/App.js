import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="text-center mt-[100px] ml-auto mr-auto p-2 max-w-[650px] bg-slate-100 rounded-xl shadow-md ">
      <h1 className="text-blue-700 text-[30px] font-bold">To do list</h1>
      <TodoContainer className="bg-blue-400" />
    </div>
  );
}

export default App;
