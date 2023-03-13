// this is a protected route

export default function Signin(){
  <div className="about-footer-form">
  <form onSubmit={handleSubmit} id="form" method="post" action="">
    <div>
      <input
        onChange={() => setError(false)}
        type="text"
        name="FirstName"
        placeholder="First Name"
      />
    </div>
    <div>
      <input
        onChange={() => setError(false)}
        type="email"
        name="Email"
        placeholder="Enter Your email"
      />
    </div>
    <div>
      <button onClick={clickSubmit} type="submit">
        Join the Waitlist
      </button>
    </div>
  </form>
  {loading && <CircularProgress disableShrink color="inherit" />}
  {error && (
    <p style={{ color: 'red' }}>
      Error Submitting Form! Please try again.
    </p>
  )}
</div> 
}