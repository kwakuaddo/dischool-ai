'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function LoginPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden w-3/5 lg:block overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`School image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src =
                    '/placeholder.svg?height=800&width=1200&text=Error+Loading+Image';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:w-2/5 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=100&h=100&fit=crop"
              alt="Jack and Jill School Logo"
              width={100}
              height={100}
              className="mx-auto rounded-full"
              onError={(e) => {
                e.currentTarget.src =
                  '/placeholder.svg?height=100&width=100&text=Logo+Error';
              }}
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Jack and Jill School
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              School Management System
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-1 block w-full"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pr-10 block w-full"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <Label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
