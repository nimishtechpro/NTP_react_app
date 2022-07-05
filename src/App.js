import Header from './components/Header'
function App() {
  const developerName = 'Nimish'
  const data = 'This is the description area'
  return (
<div>
  <Header data={developerName}/>
  <h1>Hello World!</h1>
<p>{data}</p>
</div>);
}
export default App;
