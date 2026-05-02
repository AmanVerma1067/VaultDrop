import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HardDrive } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-2xl w-full text-center space-y-10 z-10">
        <div className="flex justify-center flex-col items-center gap-6">
          <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-3xl">
             <HardDrive size={48} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">VaultDrop</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Your modern, secure, and lightning-fast cloud storage platform.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/login" className="w-full sm:w-auto">
            <Button className="w-full sm:w-40 text-base h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all font-medium">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-48 text-base h-14 rounded-2xl border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
