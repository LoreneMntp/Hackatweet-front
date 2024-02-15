import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex">
        <div className="w-1/2 bg-base-300 flex justify-center items-center"></div>
        <div className="w-1/2 bg-[#0f172a] flex justify-center items-center">
          <div className="text-white">
            <div>
              <h1 className="text-3xl">What's happening</h1>
              <h3 className="text-lg">Join Hackatweet today.</h3>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg transition-colors hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg transition-colors hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
