import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function SearchInput() {
  return (
    <div className="relative max-w-lg mx-auto">
      <Input 
        type="text" 
        placeholder="Search..." 
        className="pr-16 rounded-full bg-white py-4"
      />
      <Button 
        type="submit" 
        size="icon"
        className="absolute right-0 top-0 h-full rounded-r-full"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

