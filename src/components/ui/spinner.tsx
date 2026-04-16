import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"
import logoImg from "/logo.png"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}
function LogoSpinner({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img src={logoImg} alt="Loading" className={cn("size-4 animate-spin", className)}
      role="status"
      aria-label="Loading"
      {...props} />
  )
}
export { Spinner, LogoSpinner } 
