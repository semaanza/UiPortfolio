import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    // Force toggle between exactly light and dark
    const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    
    // Reset classes
    document.documentElement.classList.remove("dark", "light");
    
    // Add the new theme class
    document.documentElement.classList.add(newTheme);
    
    // Update the state
    setTheme(newTheme);
    
    console.log("Toggled to:", newTheme, "Current classes:", document.documentElement.classList.toString());
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-poppins text-xl font-bold text-primary flex items-center space-x-2">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">ZS</span>
              <span className="dark:text-white">Zachary Semaan</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">About</a>
            <a href="#skills" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
            <Link href="/resume" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors">Resume</Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              onClick={closeMenu}
            >
              Contact
            </a>
            <Link
              href="/resume"
              className="block px-3 py-2 rounded-md font-medium bg-primary text-white hover:bg-indigo-600"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
