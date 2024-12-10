"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            className={`
                ${theme === "dark" 
                    ? "hover:bg-inherit border-zinc-900 bg-[#0c0c0d]" 
                    : "hover:bg-inherit border-zinc-100 bg-inherit"
                }
            `}
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}