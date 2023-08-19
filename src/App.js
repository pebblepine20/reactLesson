import "./app.css";
import Hello from "./component/Hello";

function App(){
  const name="Tom";
  const naver={
    name:"naver",
    url:"https://naver.com",
  };

return (
  <div className="App">
    <h1
      style={{
        color:"#f0f",
        backgroudColor:"green",
      }}
      >
        Hello,{name}.<p>{2+3}</p>
      </h1>

      <a href={naver.url}>{naver.name}</a>
    <Hello/>
    <Hello/>

  </div>

);


}
export default App;