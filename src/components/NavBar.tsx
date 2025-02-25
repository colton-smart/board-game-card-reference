"use client"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const games = [
  { name: 'Terraforming Mars', href: '/games/terraforming-mars' },
  { name: 'Ark Nova', href: '/games/ark-nova' },
  { name: 'Wingspan', href: '/games/wingspan' },
  { name: 'Faraway', href: '/games/faraway' },
]

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/* Logo and title section */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-white hover:text-gray-300">
                  <div className="text-xl font-bold">Board Game Card Reference</div>
                  <div className="text-xs text-gray-400">by Colton Smart</div>
                </Link>
              </div>

              {/* Center navigation items */}
              <div className="flex-1 flex justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Regular nav items */}
                    {navigation.map((item) => {
                      const isActive = item.href === '/' 
                        ? pathname === '/' 
                        : pathname.startsWith(item.href)
                      
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive 
                              ? 'bg-gray-900 text-white' 
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      )
                    })}

                    {/* Games dropdown */}
                    <Menu as="div" className="relative">
                      <Menu.Button
                        className={classNames(
                          pathname.startsWith('/games')
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        Games
                        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {games.map((game) => (
                            <Menu.Item key={game.name}>
                              {({ active }) => (
                                <Link
                                  href={game.href}
                                  className={classNames(
                                    pathname === game.href ? 'bg-gray-100 text-gray-900' : '',
                                    'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                  )}
                                >
                                  {game.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              {/* Right side - keeping empty for symmetry */}
              <div className="w-48 hidden sm:block"></div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href)
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isActive 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
              {/* Games in mobile menu */}
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="px-2 text-gray-400 text-sm">Games</div>
                {games.map((game) => (
                  <Link
                    key={game.name}
                    href={game.href}
                    className={classNames(
                      pathname === game.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {game.name}
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 