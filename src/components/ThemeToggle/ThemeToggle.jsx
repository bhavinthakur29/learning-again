import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative transition-colors"
        >
            <Sun
                className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
            />
            <Moon
                className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}