import Link from 'next/link'

export default function About() {
    return (<div className="container">
    <h1>About</h1>
    <Link href="/"><a>Go back!</a></Link>
    
    <style jsx>{`
    .container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
  </style>
  </div>
    );
  }