'use client'
import { Provider } from 'react-redux'
import store from '@/app/redux/store';

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="text-center p-20 bg-lime-400">
        {children}
      </div>
    </Provider>
  )
}
