'use client'
// import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";


const Home = () => {
//   const [isSignedUp, setIsSignedUp] = useState(false);
const router = useRouter();

  const handleSignUp = () => {
    // setIsSignedUp(true);
    // Handle sign-up logic here
    console.log("signup clicked")
    router.push("/signup"); // Navigate to the Sign Up page


  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("login clicked")
    router.push("/login"); // Navigate to the Login page

  };

  return (
    <div className="flex bg-white flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="flex items-center justify-center text-white w-full md:w-1/2 p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My Social App
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex  flex-col justify-center items-center w-full md:w-1/2 p-6">
        <main className="w-full  max-w-2xl text-center">
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Join us to connect with friends and share your moments!
          </p>
          <div className="space-x-4">
            <Button
              type="primary"
              size="large"
              onClick={handleSignUp}
              className="rounded-md"
            >
              Sign Up
            </Button>
            <Button
              type="default"
              size="large"
              onClick={handleLogin}
              className="rounded-md"
            >
              Login
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
