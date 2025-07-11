import { LuMail, LuArrowLeft, LuSend } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Forgot Password Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="mb-4">
                🔑 Reset Password
              </Badge>
              <h1 className="mb-2 text-3xl font-bold text-gray-900">Forgot Password?</h1>
              <p className="text-gray-600">No worries, we'll send you reset instructions</p>
            </div>

            <Card className="border-0 shadow-xl">
              <Card.Content className="p-8">
                <form className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <LuMail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                      <input
                        type="email"
                        required
                        className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      We'll send a password reset link to this email address
                    </p>
                  </div>

                  {/* Send Reset Link Button */}
                  <Button type="submit" className="w-full bg-black py-3 hover:bg-gray-800">
                    <LuSend className="mr-2 h-4 w-4" />
                    Send Reset Link
                  </Button>
                </form>
              </Card.Content>
            </Card>

            {/* Back to Sign In */}
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="flex items-center justify-center font-medium text-gray-900 hover:text-gray-700"
              >
                <LuArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
