
export const Footer = () => {
  return (
    <footer>
        <div className="bg-[#191919] text-white py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">©{new Date().getFullYear()} Joa Chriss. All rights reserved.</p>
            <p className="text-xs">Built with React and Tailwind CSS</p>
            </div>
        </div>
    </footer>
  )
}
