import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";


export const CitySearch = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities...
      </Button>
    </>
  )
}