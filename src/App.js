import './App.css';
import evolveLogo from './evolveLogo.png'


function App() {
  return (
    <div className="App"> 
      <div style={{background: "rgba(0,0,0,0.5)"}}>
        <img alt="evovle gifts" style={{objectFit: "contain", height: "20%", width: "50%", paddingLeft: "10%", paddingRight: "10%"}} src={evolveLogo} />
        <iframe title="EvolveNXT Gifts" src="https://docs.google.com/forms/d/e/1FAIpQLSeu70PBUTSyZ8B-q2hNCVXoB5OAIaRpe9X2MNMRpMplU_EA6w/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeu70PBUTSyZ8B-q2hNCVXoB5OAIaRpe9X2MNMRpMplU_EA6w/viewform?embedded=true" style={{height: "700px !important"}} width="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      </div>
    </div> 
  );
}

export default App;
