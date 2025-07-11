"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { LuArrowLeft, LuEye, LuEyeOff, LuLock } from "react-icons/lu";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /\d/.test(password) },
    { text: "Contains special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const passwordsMatch = password === confirmPassword && password.length > 0;
  const allRequirementsMet = passwordRequirements.every((req) => req.met);
  const canSubmit = allRequirementsMet && passwordsMatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-slate-100">
        {/* Success Message */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <FiCheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <Badge variant="secondary" className="mb-4">
                ✅ Password Reset Complete
              </Badge>
              <h1 className="mb-2 text-3xl font-bold text-gray-900">Password Updated!</h1>
              <p className="mb-8 text-gray-600">
                Your password has been successfully updated. You can now sign in with your new
                password.
              </p>

              <Button asChild className="w-full bg-black hover:bg-gray-800">
                <Link href="/login">Sign In to Your Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Reset Password Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="mb-4">
                🔐 New Password
              </Badge>
              <h1 className="mb-2 text-3xl font-bold text-gray-900">Reset Your Password</h1>
              <p className="text-gray-600">Enter your new password below</p>
            </div>

            <Card className="border-0 shadow-xl">
              <Card.Content className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* New Password Field */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="relative">
                      <LuLock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-12 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Enter your new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <LuEyeOff className="h-5 w-5" />
                        ) : (
                          <LuEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  {password && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Password Requirements:</p>
                      {passwordRequirements.map((requirement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div
                            className={`flex h-4 w-4 items-center justify-center rounded-full ${
                              requirement.met ? "bg-green-100" : "bg-gray-100"
                            }`}
                          >
                            {requirement.met && (
                              <FiCheckCircle className="h-3 w-3 text-green-600" />
                            )}
                          </div>
                          <span
                            className={`text-sm ${requirement.met ? "text-green-600" : "text-gray-500"}`}
                          >
                            {requirement.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Confirm Password Field */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <LuLock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-12 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Confirm your new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <LuEyeOff className="h-5 w-5" />
                        ) : (
                          <LuEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {confirmPassword && !passwordsMatch && (
                      <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
                    )}
                    {confirmPassword && passwordsMatch && (
                      <p className="mt-2 flex items-center text-sm text-green-600">
                        <FiCheckCircle className="mr-1 h-4 w-4" />
                        Passwords match
                      </p>
                    )}
                  </div>

                  {/* Reset Password Button */}
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-black py-3 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Reset Password
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
