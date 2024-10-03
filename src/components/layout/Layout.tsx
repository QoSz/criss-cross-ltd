'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Search, X, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { supabase } from '@/lib/supabase'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center px-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4">
                                <Link href="/contact" className="text-lg font-medium">
                                    Contact Us
                                </Link>
                                {!user ? (
                                    <>
                                        <Link href="/auth/login" className="text-lg font-medium">
                                            Login
                                        </Link>
                                        <Link href="/auth/signup" className="text-lg font-medium">
                                            Sign Up
                                        </Link>
                                    </>
                                ) : (
                                    <Button onClick={handleLogout} variant="ghost" className="justify-start">
                                        Logout
                                    </Button>
                                )}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="ml-4 md:ml-0 flex items-center space-x-2">
                        <span className="font-bold text-xl sm:text-2xl">Criss Cross</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
                        <Link href="/contact">Contact Us</Link>
                    </nav>
                    <div className="ml-auto flex items-center space-x-4">
                        <div className="relative">
                            {isSearchOpen ? (
                                <div className="flex items-center">
                                    <Input
                                        type="search"
                                        placeholder="Search products..."
                                        className="w-full bg-background pl-8 pr-10 sm:w-[300px]"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-0"
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        <X className="h-4 w-4" />
                                        <span className="sr-only">Close search</span>
                                    </Button>
                                </div>
                            ) : (
                                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                                    <Search className="h-4 w-4" />
                                    <span className="sr-only">Search</span>
                                </Button>
                            )}
                        </div>
                        <Link href="/cart">
                            <Button variant="ghost" size="icon">
                                <ShoppingCart className="h-4 w-4" />
                                <span className="sr-only">Cart</span>
                            </Button>
                        </Link>
                        <div className="hidden md:flex items-center space-x-2">
                            {!user ? (
                                <>
                                    <Button variant="ghost" asChild>
                                        <Link href="/auth/login">Login</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/auth/signup">Sign Up</Link>
                                    </Button>
                                </>
                            ) : (
                                <Button onClick={handleLogout} variant="ghost">
                                    Logout
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-4 lg:p-8">{children}</main>
            <footer className="border-t">
                <div className="container flex h-16 items-center px-4">
                    <p className="text-sm">© 2024 Criss Cross. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}