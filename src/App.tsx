import './App.css'

function App() {

  return (
    <>
    <div>
      <div className="apptitle">
        <h1 className="appName">File Share</h1>
        <img className='imgs' src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/techplus/20210525064051842ngfu.png" alt="error" />
      </div>
      
      <div className='shareOption'>
        <h3>securely send files and more to nearby devices</h3>
        <div className='shareButtons'>
        <button type="button" className="btn btn-primary">Send</button>
        <button type="button" className="btn btn-primary">Recieve</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
