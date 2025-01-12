import { Phone, Mail, ShoppingBasket, ShoppingCart, Heart } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:contact@example.com">contact@example.com</a>
          </span>
        </div>
        <div className='hover:cursor-pointer flex px-2'>
          <Heart  className='mx-2'/>
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default TopBar

