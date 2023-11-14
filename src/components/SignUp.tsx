import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen pt-8">
      <div className="lg:p-36 md:p-52 p-8 w-full lg:w-1/2">
        <div className="bg-gray-100 p-8 rounded-lg mt-12">
          <h1 className="text-center font-bold text-3xl">Daftar</h1>
          <h1 className="text-center font-medium text-base mb-6 mt-2">
            Washtop Laundry Express
          </h1>
          <form action="#" method="" className="text-sm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
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

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Daftar
            </button>
          </form>
          <div className="mt-2 border border-blue-500 hover:border-blue-600 text-blue-500 text-center text-sm font-semibold rounded-md py-2 px-4 w-full">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
