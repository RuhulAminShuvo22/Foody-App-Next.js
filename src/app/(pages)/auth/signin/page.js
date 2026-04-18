"use client";

import { useState } from "react";
import { signInWithGithub } from "@/app/actions";
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react";
import { Github, Mail, Lock } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // simulate login (replace with your auth logic)
    setTimeout(() => {
      setIsLoading(false);
      alert("Logged in with Email/Password");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20">
        <CardHeader className="flex flex-col items-center text-center gap-2">
          <div className="bg-white/20 p-3 rounded-full mb-2">
            <Github className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-300">
            Sign in to continue your journey 🚀
          </p>
        </CardHeader>

        <CardBody className="mt-6 space-y-5">
          {/* Email Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-6 text-lg font-medium rounded-xl"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* GitHub Login */}
          <Button
            onClick={signInWithGithub}
            className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium rounded-xl"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </Button>

          <div className="text-center text-sm text-gray-400">
            Secure login powered by GitHub
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignIn;