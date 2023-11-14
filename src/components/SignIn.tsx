import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen  pt-8">
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <div className="bg-gray-100 p-8 rounded-lg mt-12">
          <h1 className="text-center font-bold text-3xl">Login</h1>
          <h1 className="text-center font-medium text-base mb-6 mt-2">
            Washtop Laundry Express
          </h1>
          <form action="#" method="" className="text-sm">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-row items-center mb-6 gap-4 justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-500"
                />
                <label htmlFor="remember" className="text-gray-600 ml-2">
                  Ingat Saya
                </label>
              </div>

              <div className="text-blue-500">
                <a href="#" className="hover:underline">
                  Lupa Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          <div className="mt-2 border border-blue-500 hover:border-blue-600 text-blue-500 text-center text-sm font-semibold rounded-md py-2 px-4 w-full">
            <Link to="/daftar" className="hover:underline">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
