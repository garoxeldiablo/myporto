import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profil = [
    { name: 'Psychometric', description: 'Metric my soft skill by snaphunt', href: 'https://drive.google.com/file/d/1uC28D5Uu15PCQNIkrD06lEfDPg97Uzgo/view?usp=sharing', icon: ChartPieIcon, },
    { name: 'Collaboration', description: 'Speak and work with my team', href: 'https://drive.google.com/file/d/1sdF7InWLWkNMQn9cPn8q60S0_g2rNnNl/view?usp=sharing', icon: CursorArrowRaysIcon },
    { name: 'My project', description: 'What I have built?', href: '#', icon: SquaresPlusIcon },
  ]
  
    return (
      <header className="bg-white sticky top-0 z-10 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex">
              <span className="sr-only"></span>
              <img className="h-8 w-auto rounded-full" src="https://w7.pngwing.com/pngs/629/929/png-transparent-10-v-lighting-control-dimmer-lighting-control-system-constant-current-science-and-technology-logo-blue-electronics-free-logo-design-template.png" alt="" />
              <h3 className='m-1 font-semibold text-gray-900'>JOVIS JOCUNDA</h3>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Look at this!
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {profil.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </Popover.Panel>
              </Transition>
            </Popover>

            <a href="#experience" className="text-sm font-semibold leading-6 text-gray-900">
              EXPERIENCE
            </a>
            <a href="#certification" className="text-sm font-semibold leading-6 text-gray-900">
              CERTIFICATION
            </a>
            <a href="#linkedin" className="text-sm font-semibold leading-6 text-gray-900">
              LINKEDIN
            </a>
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"></span>
                <img
                  className="h-8 w-auto rounded-full"
                  src="https://w7.pngwing.com/pngs/629/929/png-transparent-10-v-lighting-control-dimmer-lighting-control-system-constant-current-science-and-technology-logo-blue-electronics-free-logo-design-template.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Look at this!
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1">
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...profil].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                          
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Experience
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Certification
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 justify-center">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Ready for internship 2024</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            interested in working together? feel free to contact me.
          </p>
          <a
            href="https://wa.me/62895611113751?text=I%20just%20saw%20your%20website"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            whatsapp <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      </header>
    )
  }


