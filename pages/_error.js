function Error({ title, statusCode }) { 
    return (
        <main className="error">
            <h1 className="code">{ statusCode ?? "Oops" }</h1>
            <h2 className="details">{ title ?? "An unexpected error occured" }</h2>
        </main>
    )
  }
  
Error.getInitialProps = ({ res, err }) => {
    return { statusCode: res.statusCode ?? err.statusCode ?? 500 }
}

export default Error