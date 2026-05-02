"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { HardDrive } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    
    if (res?.error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Successfully logged in");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md p-8 sm:p-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <div className="p-3 bg-primary/10 rounded-2xl mb-4">
            <HardDrive size={28} className="text-primary" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Sign in to your VaultDrop account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-12 px-4 rounded-xl bg-gray-50/50 dark:bg-gray-950/50 border-gray-200 dark:border-gray-800 focus:ring-primary/20 transition-all" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-xs font-medium text-gray-500 uppercase tracking-wider">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12 px-4 rounded-xl bg-gray-50/50 dark:bg-gray-950/50 border-gray-200 dark:border-gray-800 focus:ring-primary/20 transition-all" />
          </div>
          <Button type="submit" className="w-full h-12 mt-6 rounded-xl font-medium text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account? <Link href="/register" className="text-primary font-medium hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}
